"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

type Node = {
  id: string;
  label: string;
  desc: string;
  cx: number;
  cy: number;
};

type Link = {
  id: string;
  source: string;
  target: string;
  path: string;
};

const NODES: Node[] = [
  // Main Artery
  { id: 'society', label: 'Society', desc: 'A sustainable, circular future.', cx: 500, cy: 100 },
  { id: 'manufacturing', label: 'Manufacturing', desc: 'Uses verified recovered materials.', cx: 500, cy: 220 },
  { id: 'recyclers', label: 'Recycler', desc: 'Receives trusted, quality-assured feedstock.', cx: 500, cy: 340 },
  { id: 'marketplace', label: 'Marketplace', desc: 'Verified materials connect directly with recovery partners.', cx: 500, cy: 460 },
  { id: 'quality', label: 'Quality Verification', desc: 'Computer vision identifies, grades and verifies material quality.', cx: 500, cy: 580 },
  { id: 'generators', label: 'Waste Generator', desc: 'Creates recoverable materials.', cx: 500, cy: 700 },

  // Left Artery (Organic)
  { id: 'organic', label: 'Organic Waste', desc: 'Food and biodegradable materials.', cx: 200, cy: 580 },
  { id: 'biogas', label: 'Biogas', desc: 'Organic waste becomes renewable energy.', cx: 200, cy: 460 },
  { id: 'energy', label: 'Clean Energy', desc: 'Powers society and industry.', cx: 200, cy: 340 },

  // Right Artery (Dry Materials)
  { id: 'materials', label: 'Plastic • Metal • Paper', desc: 'Dry recyclables ready for processing.', cx: 800, cy: 460 },
];

const LINKS: Link[] = [
  // Main Artery
  { id: 'g-q', source: 'generators', target: 'quality', path: 'M 500 700 L 500 580' },
  { id: 'q-m', source: 'quality', target: 'marketplace', path: 'M 500 580 L 500 460' },
  { id: 'm-r', source: 'marketplace', target: 'recyclers', path: 'M 500 460 L 500 340' },
  { id: 'r-man', source: 'recyclers', target: 'manufacturing', path: 'M 500 340 L 500 220' },
  { id: 'man-s', source: 'manufacturing', target: 'society', path: 'M 500 220 L 500 100' },

  // Left Artery
  { id: 'o-b', source: 'organic', target: 'biogas', path: 'M 200 580 L 200 460' },
  { id: 'b-e', source: 'biogas', target: 'energy', path: 'M 200 460 L 200 340' },
  { id: 'e-s', source: 'energy', target: 'society', path: 'M 200 340 Q 200 100 500 100' },

  // Right Artery
  { id: 'mat-r', source: 'materials', target: 'recyclers', path: 'M 800 460 Q 800 340 500 340' },
  { id: 'q-mat', source: 'quality', target: 'materials', path: 'M 500 580 Q 800 580 800 460' },
];

export default function TheEcosystemReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Zoom out effect at the very end of the scroll (0.8 to 1.0)
  const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0.3]);

  // Find active links based on hover
  const activeLinks = hoveredNode 
    ? LINKS.filter(l => l.source === hoveredNode || l.target === hoveredNode)
    : [];
  
  const isNodeActive = (id: string) => {
    if (!hoveredNode) return true; // all active if none hovered
    if (hoveredNode === id) return true;
    return activeLinks.some(l => l.source === id || l.target === id);
  };

  const isLinkActive = (id: string) => {
    if (!hoveredNode) return true;
    return activeLinks.some(l => l.id === id);
  };

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-[#020202]">
      {/* Sticky Container */}
      <div className="sticky top-0 w-full h-screen flex flex-col lg:flex-row overflow-hidden border-t border-white/5">
        
        {/* LEFT/TOP: EDITORIAL TEXT (30%) */}
        <div className="w-full lg:w-[30%] h-auto lg:h-full flex flex-col justify-center px-8 py-12 lg:px-16 lg:py-0 z-20 pointer-events-none">
          <motion.div style={{ opacity: useTransform(scrollYProgress, [0.8, 0.95], [1, 0]) }}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tighter text-white mb-8 leading-[1.1]">
              One Network. <br />
              <span className="text-accent-primary">One Intelligence Layer.</span> <br />
              Infinite Recovery Opportunities.
            </h2>
            <p className="text-text-secondary text-sm md:text-lg font-body font-light leading-relaxed border-l-2 border-accent-primary pl-6">
              ForEVAR creates the intelligence layer that connects waste generators, quality verification, marketplaces, recyclers and recovery facilities into one trusted ecosystem.
              <br /><br />
              By making material quality visible, traceable and verifiable, we enable waste to move as verified value instead of unknown material.
            </p>
          </motion.div>
        </div>

        {/* RIGHT/BOTTOM: ECOSYSTEM VISUAL (70%) */}
        <motion.div 
          style={{ scale, opacity }}
          className="relative w-full lg:w-[70%] h-full flex flex-col items-center justify-center z-10"
        >
          <div className="w-full h-full max-w-[1000px] max-h-[800px] relative flex items-center justify-center">
            
            <svg 
              viewBox="0 0 1000 800" 
              className="w-full h-full object-contain"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Render Links */}
              {LINKS.map(link => {
                const active = isLinkActive(link.id);
                return (
                  <g key={link.id}>
                    {/* Base faint line */}
                    <path 
                      d={link.path} 
                      stroke="rgba(255, 255, 255, 0.1)" 
                      strokeWidth="2" 
                      fill="none" 
                    />
                    
                    {/* Highlight line when active */}
                    <path 
                      d={link.path} 
                      stroke="#7CFF4F" 
                      strokeWidth="2" 
                      fill="none" 
                      className="transition-opacity duration-500"
                      style={{ opacity: active ? (hoveredNode ? 0.8 : 0.3) : 0 }}
                    />

                    {/* Animated Pulse along the path */}
                    {active && (
                      <motion.path
                        d={link.path}
                        stroke="#7CFF4F"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="4 200" // Small dot, huge gap
                        strokeLinecap="round"
                        animate={{ strokeDashoffset: [200, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="pointer-events-none"
                      />
                    )}
                  </g>
                );
              })}

              {/* Render Nodes */}
              {NODES.map(node => {
                const active = isNodeActive(node.id);
                const isHovered = hoveredNode === node.id;
                
                return (
                  <g 
                    key={node.id} 
                    transform={`translate(${node.cx}, ${node.cy})`}
                    className="cursor-pointer transition-opacity duration-500"
                    style={{ opacity: active ? 1 : 0.2 }}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    {/* Ambient Glow */}
                    <motion.circle 
                      r="30" 
                      fill="rgba(124, 255, 79, 0.05)" 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    {/* Node Circle */}
                    <circle 
                      r="6" 
                      fill={isHovered ? "#7CFF4F" : "#ffffff"} 
                      className="transition-colors duration-300"
                    />

                    {/* Node Label */}
                    <text 
                      y="-16" 
                      textAnchor="middle" 
                      fill={isHovered ? "#7CFF4F" : "#ffffff"}
                      className="font-heading font-bold text-sm tracking-widest uppercase transition-colors duration-300"
                    >
                      {node.label}
                    </text>

                    {/* Tooltip Background (if hovered) */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.g
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                        >
                          <rect 
                            x="-100" 
                            y="15" 
                            width="200" 
                            height="60" 
                            rx="8" 
                            fill="#111111" 
                            stroke="rgba(255,255,255,0.1)" 
                          />
                          <foreignObject x="-90" y="25" width="180" height="40">
                            <div className="text-[11px] text-text-secondary font-body font-light text-center leading-tight">
                              {node.desc}
                            </div>
                          </foreignObject>
                        </motion.g>
                      )}
                    </AnimatePresence>
                    
                    {/* Invisible Hitbox for easier hovering */}
                    <circle r="40" fill="transparent" />
                  </g>
                );
              })}
            </svg>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
