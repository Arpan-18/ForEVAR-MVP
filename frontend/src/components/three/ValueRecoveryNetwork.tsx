"use client";

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Line, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Building2, ShieldCheck, ShoppingCart, Infinity, Flame, Factory, Recycle, Settings, Leaf } from 'lucide-react';

// Central Hub position
const HUB_POSITION = new THREE.Vector3(0, 0, 0);

// Node configurations with specific radial positions to match reference image
const NODES = [
  { id: 'generators', label: 'Waste Generators', desc: 'INSTITUTIONS & BUSINESSES', icon: Building2, position: new THREE.Vector3(-3.5, 3.5, 0) },
  { id: 'verification', label: 'Quality Verification', desc: 'AI • SENSORS • LABS', icon: ShieldCheck, position: new THREE.Vector3(-4, 0, 0) },
  { id: 'marketplace', label: 'Marketplace', desc: 'MATERIAL EXCHANGE', icon: ShoppingCart, position: new THREE.Vector3(-3.5, -3.5, 0) },
  { id: 'circular', label: 'Circular Economy', desc: 'SUSTAINABLE FUTURE', icon: Infinity, position: new THREE.Vector3(3.2, -4.2, 0) },
  { id: 'biogas', label: 'Biogas & Resource Recovery', desc: 'ENERGY & NUTRIENTS', icon: Flame, position: new THREE.Vector3(4, -1.5, 0) },
  { id: 'manufacturing', label: 'Manufacturers', desc: 'INDUSTRIES', icon: Factory, position: new THREE.Vector3(4.5, 1.2, 0) },
  { id: 'recyclers', label: 'Recyclers', desc: 'CERTIFIED PARTNERS', icon: Recycle, position: new THREE.Vector3(3.5, 3.5, 0) }
];

function CentralHub() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group position={HUB_POSITION}>
      {/* Outer Glow */}
      <Sphere args={[2, 32, 32]}>
        <meshBasicMaterial color="#7CFF4F" transparent opacity={0.1} blending={THREE.AdditiveBlending} depthWrite={false} />
      </Sphere>
      
      {/* Inner Core with wireframe resembling a globe */}
      <Sphere ref={meshRef} args={[1.5, 32, 32]}>
        <meshStandardMaterial 
          color="#051505" 
          emissive="#7CFF4F"
          emissiveIntensity={0.2}
          wireframe={true} 
          transparent 
          opacity={0.3} 
        />
      </Sphere>
      
      <Sphere args={[1.45, 32, 32]}>
        <meshBasicMaterial color="#051005" />
      </Sphere>
      
      {/* Central Icon */}
      <Html center style={{ pointerEvents: 'none' }}>
        <div className="relative flex items-center justify-center w-32 h-32">
          <Settings className="absolute text-accent-primary w-24 h-24 opacity-40 animate-spin-slow" strokeWidth={1} style={{ animationDuration: '20s' }} />
          <Leaf className="absolute text-accent-primary w-12 h-12" strokeWidth={1.5} />
        </div>
      </Html>
    </group>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function NodeIcon({ icon: Icon }: { icon: any }) {
  return (
    <div className="w-12 h-12 rounded-full border border-accent-primary/40 bg-[#020502]/90 backdrop-blur-md flex items-center justify-center text-accent-primary shadow-[0_0_15px_rgba(124,255,79,0.15)] relative z-10">
      <Icon size={20} strokeWidth={1.5} />
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function NetworkNode({ position, label, desc, icon }: { position: THREE.Vector3, label: string, desc: string, icon: any }) {
  const [hovered, setHovered] = useState(false);
  const isLeft = position.x < 0;

  return (
    <Float speed={1.5} rotationIntensity={0} floatIntensity={0.1}>
      <group 
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <Sphere args={[0.06, 16, 16]}>
          <meshBasicMaterial color={hovered ? "#ffffff" : "#7CFF4F"} />
        </Sphere>
        <Html position={[0, 0, 0]} style={{ pointerEvents: 'auto' }}>
          <div 
            className={`absolute top-1/2 -translate-y-1/2 flex items-center gap-4 transition-all duration-300 cursor-pointer ${isLeft ? 'flex-row-reverse right-0 mr-4' : 'flex-row left-0 ml-4'} ${hovered ? 'scale-105' : 'scale-100'}`}
            style={{ width: '300px' }}
          >
            <NodeIcon icon={icon} />
            <div className={`flex flex-col ${isLeft ? 'text-right' : 'text-left'}`}>
              <span className={`font-heading font-bold text-lg whitespace-nowrap transition-colors ${hovered ? 'text-accent-primary' : 'text-white'}`}>
                {label}
              </span>
              <span className="text-[9px] text-text-secondary tracking-[0.15em] font-medium uppercase whitespace-nowrap opacity-80 mt-1">
                {desc}
              </span>
            </div>
          </div>
        </Html>
      </group>
    </Float>
  );
}

function AnimatedPulse({ curve, speedOffset = 0 }: { curve: THREE.QuadraticBezierCurve3, speedOffset?: number }) {
  const pulseRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (pulseRef.current) {
      const t = ((state.clock.elapsedTime * 0.15) + speedOffset) % 1;
      const point = curve.getPointAt(t);
      pulseRef.current.position.copy(point);
      
      const material = pulseRef.current.material as THREE.MeshBasicMaterial;
      if (t < 0.1) material.opacity = t * 10;
      else if (t > 0.9) material.opacity = (1 - t) * 10;
      else material.opacity = 1;
    }
  });

  return (
    <Sphere ref={pulseRef} args={[0.05, 16, 16]}>
      <meshBasicMaterial color="#ffffff" transparent opacity={0.8} blending={THREE.AdditiveBlending} depthWrite={false} />
    </Sphere>
  );
}

function NetworkLines() {
  const lineData = useMemo(() => {
    return NODES.map((node, idx) => {
      // Create a bezier curve from HUB to NODE
      const midPoint = new THREE.Vector3().addVectors(HUB_POSITION, node.position).multiplyScalar(0.5);
      
      // Add outward arc to the curve based on quadrant to give it that sweeping organic feel
      const isTop = node.position.y > 0;
      const isLeft = node.position.x < 0;
      midPoint.y += isTop ? 1 : -1;
      midPoint.x += isLeft ? -0.5 : 0.5;
      
      const curve = new THREE.QuadraticBezierCurve3(HUB_POSITION, midPoint, node.position);
      const points = curve.getPoints(50);
      return { id: `line-${node.id}`, points, curve, speedOffset: idx * 0.15 };
    });
  }, []);

  return (
    <group>
      {lineData.map((line) => (
        <group key={line.id}>
          <Line 
            points={line.points} 
            color="#7CFF4F" 
            opacity={0.2} 
            transparent 
            lineWidth={2} 
          />
          <AnimatedPulse curve={line.curve} speedOffset={line.speedOffset} />
        </group>
      ))}
    </group>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      const driftX = Math.sin(time * 0.05) * 0.05;
      const driftY = Math.sin(time * 0.03) * 0.02;
      
      const targetRotationY = driftX + (mousePosition.x * 0.02);
      const targetRotationX = driftY - (mousePosition.y * 0.02);

      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.05);

      // Handle scroll zooming logic on camera
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;
      const progress = Math.min(scrollY / maxScroll, 1); // 0 to 1

      const targetZ = 10 - (progress * 5);
      state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.1);
      state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, progress * -1, 0.1);
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, progress * -1, 0.1);
      state.camera.lookAt(0, 0, 0);
    }
  });

  return (
    <group ref={groupRef} position={[4.5, 1.5, 0]} scale={[0.6, 0.6, 0.6]}>
      <CentralHub />
      {NODES.map((node) => (
        <NetworkNode key={node.id} position={node.position} label={node.label} desc={node.desc} icon={node.icon} />
      ))}
      <NetworkLines />
    </group>
  );
}

export default function ValueRecoveryNetwork() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} style={{ pointerEvents: 'auto' }}>
        <fog attach="fog" args={['#020202', 5, 20]} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#7CFF4F" />
        <Scene />
      </Canvas>
    </div>
  );
}
