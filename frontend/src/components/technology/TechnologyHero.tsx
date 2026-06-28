"use client";

import React, { useRef } from 'react';
import { motion, useTime, useTransform, MotionValue } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ITEMS = [
  {
    id: 1,
    name: 'PET Bottle',
    quality: 'Quality 96%',
    dest: 'Destination: Plastic Recycler',
    isHazardous: false,
    color: '#3B82F6',
    shape: (
      <path d="M 30 10 L 70 10 L 75 30 L 75 140 L 25 140 L 25 30 Z" fill="#111" stroke="#3B82F6" strokeWidth="3" />
    )
  },
  {
    id: 2,
    name: 'Aluminium Can',
    quality: 'Quality 98%',
    dest: 'Destination: Metal Recovery',
    isHazardous: false,
    color: '#9CA3AF',
    shape: (
      <rect x="25" y="40" width="50" height="100" rx="10" fill="#111" stroke="#9CA3AF" strokeWidth="3" />
    )
  },
  {
    id: 3,
    name: 'Organic Waste',
    quality: 'Quality 85%',
    dest: 'Destination: Biogas',
    isHazardous: false,
    color: '#22C55E',
    shape: (
      <path d="M 20 80 Q 40 40 70 60 T 80 120 Q 60 150 30 130 Z" fill="#111" stroke="#22C55E" strokeWidth="3" />
    )
  },
  {
    id: 4,
    name: 'Battery',
    quality: 'Hazardous',
    dest: 'Safe Disposal Required',
    isHazardous: true,
    color: '#EF4444',
    shape: (
      <g>
        <rect x="35" y="60" width="30" height="15" fill="#111" stroke="#EF4444" strokeWidth="3" />
        <rect x="25" y="75" width="50" height="65" rx="5" fill="#111" stroke="#EF4444" strokeWidth="3" />
      </g>
    )
  }
];

function ConveyorItem({ item, time, offset }: { item: typeof ITEMS[0], time: MotionValue<number>, offset: number }) {
  // 1400 units over ~12 seconds = ~0.116 ms
  const speed = 0.12; 
  const domainRange = 1400;
  
  const x = useTransform(time, t => 1200 - (((t * speed) + offset) % domainRange));
  
  // UI triggers when passing the center scanner (x = 500)
  const uiOpacity = useTransform(x, [650, 500, 400, 250], [0, 1, 1, 0]);
  const boxScale = useTransform(x, [650, 500], [1.5, 1]);
  const lineScale = useTransform(x, [550, 480], [0, 1]);
  
  return (
    <motion.g style={{ x }}>
      {/* The Physical Item */}
      <g transform="translate(0, 300)">
        {item.shape}
      </g>

      {/* Intelligence Overlay (Bounding Box) */}
      <motion.g 
        style={{ opacity: uiOpacity, scale: boxScale, transformOrigin: "50px 375px" }}
        className="pointer-events-none"
      >
        <rect x="15" y="300" width="70" height="150" fill="rgba(124, 255, 79, 0.05)" stroke="#7CFF4F" strokeWidth="2" strokeDasharray="4 4" />
        
        {/* Corners */}
        <path d="M 15 315 L 15 300 L 30 300" fill="none" stroke="#7CFF4F" strokeWidth="3" />
        <path d="M 85 315 L 85 300 L 70 300" fill="none" stroke="#7CFF4F" strokeWidth="3" />
        <path d="M 15 435 L 15 450 L 30 450" fill="none" stroke="#7CFF4F" strokeWidth="3" />
        <path d="M 85 435 L 85 450 L 70 450" fill="none" stroke="#7CFF4F" strokeWidth="3" />
      </motion.g>

      {/* Intelligence UI Labels (Fades in slightly after box) */}
      <motion.g 
        style={{ opacity: uiOpacity }}
        className="pointer-events-none"
      >
        {/* Connection Line */}
        <motion.line 
          x1="50" y1="300" x2="50" y2="150" 
          stroke="#7CFF4F" strokeWidth="1" strokeDasharray="2 2"
          style={{ scaleY: lineScale, transformOrigin: "50px 300px" }}
        />
        
        {/* Label Panel */}
        <motion.g transform="translate(-50, 50)">
          <rect x="0" y="0" width="200" height="90" fill="#0A0A0A" stroke="#333" strokeWidth="1" rx="4" />
          
          <text x="15" y="25" fill="#fff" className="font-heading font-bold text-[18px]">
            {item.name}
          </text>
          
          <text x="15" y="50" fill={item.isHazardous ? "#EF4444" : "#7CFF4F"} className="font-mono text-[14px]">
            {item.quality}
          </text>
          
          <text x="15" y="75" fill="#9CA3AF" className="font-body text-[13px]">
            {item.dest}
          </text>
        </motion.g>
      </motion.g>

    </motion.g>
  );
}

export default function TechnologyHero() {
  const time = useTime();

  return (
    <div className="relative w-full h-screen min-h-[800px] flex flex-col bg-[#020202] overflow-hidden border-b border-white/5">
      
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(124,255,79,0.05)_0%,_transparent_60%)] pointer-events-none z-0" />

      {/* Main Split Layout */}
      <div className="flex-grow flex flex-col lg:flex-row w-full z-10">
        
        {/* LEFT 40%: EDITORIAL TYPOGRAPHY */}
        <div className="w-full lg:w-[40%] h-[40%] lg:h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 lg:pt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] tracking-tighter mb-8"
          >
            Recovery begins <br /> with trust. <br />
            <span className="text-text-secondary">Trust begins <br /> with intelligence.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-text-secondary font-body font-light leading-relaxed max-w-md border-l-2 border-accent-primary pl-6"
          >
            Every material already has value. The challenge is identifying it, verifying it and directing it to the right recovery destination. ForEVAR builds the intelligence layer that transforms unknown waste into verified resources.
          </motion.p>
        </div>

        {/* RIGHT 60%: ANIMATED VISUALIZATION */}
        <div className="w-full lg:w-[60%] h-[60%] lg:h-full relative flex items-center justify-center">
          <svg viewBox="0 0 1000 700" className="w-full h-full object-cover lg:object-contain pointer-events-none">
            
            {/* The Conveyor Belt Background */}
            <g transform="translate(0, 450)">
              {/* Belt surface */}
              <rect x="0" y="0" width="1000" height="20" fill="#111" stroke="#333" strokeWidth="2" />
              {/* Support legs */}
              <rect x="200" y="20" width="10" height="250" fill="#222" />
              <rect x="800" y="20" width="10" height="250" fill="#222" />
              {/* Moving belt lines (texture) */}
              <motion.line 
                x1="0" y1="10" x2="1000" y2="10" 
                stroke="#222" strokeWidth="4" strokeDasharray="10 30" 
                animate={{ strokeDashoffset: [40, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </g>

            {/* The Scanning Beam Module (Stationary) */}
            <g transform="translate(500, 0)">
              {/* Top Sensor Rig */}
              <rect x="-60" y="50" width="120" height="30" rx="4" fill="#111" stroke="#333" strokeWidth="2" />
              <circle cx="0" cy="65" r="10" fill="#7CFF4F" className="animate-pulse" />
              
              {/* The Laser Beam Area */}
              <polygon points="-40,80 40,80 150,450 -150,450" fill="url(#beamGradient)" opacity="0.6" />
              
              {/* Center target line */}
              <line x1="0" y1="80" x2="0" y2="450" stroke="#7CFF4F" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
            </g>

            {/* Gradient for the beam */}
            <defs>
              <linearGradient id="beamGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(124, 255, 79, 0.4)" />
                <stop offset="100%" stopColor="rgba(124, 255, 79, 0.0)" />
              </linearGradient>
            </defs>

            {/* Conveyor Items */}
            {ITEMS.map((item, idx) => (
              <ConveyorItem key={item.id} item={item} time={time} offset={idx * 350} />
            ))}

          </svg>
        </div>

      </div>

      {/* BOTTOM (ABSOLUTE/STICKY): HORIZONTAL PROCESS PREVIEW */}
      <div className="absolute bottom-0 left-0 w-full bg-[#0A0A0A]/80 backdrop-blur-md border-t border-white/5 py-4 z-20">
        <div className="container mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-start md:justify-center gap-4 md:gap-8 min-w-max">
            {[
              "Mixed Waste",
              "Detection",
              "Identification",
              "Verification",
              "Digital Identity",
              "Recovery Destination"
            ].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div className={`text-xs md:text-sm font-heading font-bold uppercase tracking-widest ${idx === arr.length - 1 ? 'text-accent-primary' : 'text-text-secondary'}`}>
                  {step}
                </div>
                {idx < arr.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-white/20" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
