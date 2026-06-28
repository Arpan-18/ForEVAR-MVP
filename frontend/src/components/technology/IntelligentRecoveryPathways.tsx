"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const PATHWAYS = [
  {
    id: 'plastic',
    name: 'Plastic',
    color: '#3B82F6',
    y: 100,
    steps: ['AI Classification', 'Optical Sorting', 'Grade Verification', 'Plastic Recycler'],
    output: 'Food-grade rPET'
  },
  {
    id: 'metal',
    name: 'Metal',
    color: '#9CA3AF',
    y: 200,
    steps: ['AI Classification', 'Magnetic Separation', 'Grade Verification', 'Metal Recovery'],
    output: 'Industrial Alloys'
  },
  {
    id: 'paper',
    name: 'Paper',
    color: '#FCD34D',
    y: 300,
    steps: ['AI Classification', 'Density Sorting', 'Quality Verification', 'Paper Mill'],
    output: 'Recycled Fiber'
  },
  {
    id: 'organic',
    name: 'Organic',
    color: '#22C55E',
    y: 400,
    steps: ['Verification', 'Pre-processing', 'Biogas Facility'],
    output: 'Bio-CNG & Fertilizer'
  },
  {
    id: 'glass',
    name: 'Glass',
    color: '#2DD4BF',
    y: 500,
    steps: ['AI Classification', 'Color Sorting', 'Glass Processor'],
    output: 'New Glass Packaging'
  },
  {
    id: 'battery',
    name: 'Hazardous',
    color: '#EF4444',
    y: 600,
    steps: ['Detection', 'Isolation', 'Safe Disposal'],
    output: 'Neutralized Output'
  },
  {
    id: 'ewaste',
    name: 'E-Waste',
    color: '#A855F7',
    y: 700,
    steps: ['Detection', 'Component Dismantling', 'Certified Recycler'],
    output: 'Rare Earth Recovery'
  }
];

export default function IntelligentRecoveryPathways() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animate the paths drawing in as you scroll down
  const pathDraw = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);
  
  // The final text fades in at the very end of the scroll
  const finalTextOpacity = useTransform(scrollYProgress, [0.8, 0.95], [0, 1]);
  const finalScale = useTransform(scrollYProgress, [0.8, 1], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative w-full h-[250vh] bg-[#020202]">
      {/* Sticky container holds the visualization in place while scrolling */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
        
        {/* TOP: EDITORIAL TEXT */}
        <div className="absolute top-12 left-0 w-full px-6 md:px-12 lg:px-24 text-center z-30 pointer-events-none">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tighter"
          >
            Every Material Has <br /> Its Own Recovery Journey.
          </motion.h2>
          <p className="text-text-secondary font-body font-light max-w-2xl mx-auto">
            Once a material is identified and verified, it follows the most appropriate recovery pathway instead of becoming mixed waste.
          </p>
        </div>

        {/* MAIN VISUAL: SVG DIAGRAM */}
        <motion.div style={{ scale: finalScale }} className="relative w-full h-full max-w-[1400px] flex items-center justify-center mt-20 z-10">
          <svg viewBox="0 0 1400 800" className="w-full h-full object-contain">
            
            {/* INFLOW: Mixed Waste Trunk */}
            <g transform="translate(0, 400)">
              <text x="100" y="-15" fill="#fff" className="font-heading font-bold text-lg tracking-widest uppercase">Mixed Waste</text>
              <line x1="50" y1="0" x2="200" y2="0" stroke="rgba(255,255,255,0.2)" strokeWidth="4" />
              {/* Pulsing incoming flow */}
              <motion.line 
                x1="50" y1="0" x2="200" y2="0" 
                stroke="#fff" strokeWidth="4" strokeDasharray="10 50"
                animate={{ strokeDashoffset: [60, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </g>

            {/* BRANCHES */}
            {PATHWAYS.map(path => {
              const isHovered = hoveredPath === path.id;
              const isDimmed = hoveredPath !== null && !isHovered;
              
              // Smooth bezier curve from center (200, 400) to branch start (400, Y), then straight line to 1300
              const d = `M 200 400 C 300 400, 350 ${path.y}, 450 ${path.y} L 1300 ${path.y}`;

              return (
                <g 
                  key={path.id} 
                  className="cursor-pointer transition-opacity duration-500"
                  style={{ opacity: isDimmed ? 0.1 : 1 }}
                  onMouseEnter={() => setHoveredPath(path.id)}
                  onMouseLeave={() => setHoveredPath(null)}
                >
                  {/* Invisible Hitbox for hovering */}
                  <path d={d} stroke="transparent" strokeWidth="60" fill="none" />

                  {/* Base Track (drawn on scroll) */}
                  <motion.path 
                    d={d} 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="2" 
                    fill="none" 
                    style={{ pathLength: pathDraw }}
                  />

                  {/* Highlight Track (solid when hovered) */}
                  <motion.path 
                    d={d} 
                    stroke={path.color} 
                    strokeWidth={isHovered ? "4" : "0"} 
                    fill="none" 
                    className="transition-all duration-300"
                  />

                  {/* Continuous Flow Pulse */}
                  <motion.path 
                    d={d} 
                    stroke={path.color} 
                    strokeWidth="3" 
                    strokeDasharray="4 200" 
                    strokeLinecap="round"
                    fill="none" 
                    animate={{ strokeDashoffset: [200, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{ opacity: isDimmed ? 0.3 : 1 }}
                  />

                  {/* Branch Title (Left side) */}
                  <motion.text 
                    x="460" y={path.y - 15} 
                    fill={isHovered ? path.color : "#fff"} 
                    className="font-heading font-bold text-[14px] tracking-widest uppercase transition-colors"
                  >
                    {path.name}
                  </motion.text>

                  {/* STEPS REVEAL (Only when hovered) */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.g 
                        initial={{ opacity: 0, x: -10 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {path.steps.map((step, idx) => {
                          // Distribute steps evenly along the line between x=600 and x=1100
                          const stepX = 600 + (idx * (500 / Math.max(1, path.steps.length - 1)));
                          
                          return (
                            <g key={idx} transform={`translate(${stepX}, ${path.y})`}>
                              <circle cx="0" cy="0" r="4" fill="#020202" stroke={path.color} strokeWidth="2" />
                              <text x="0" y="-15" fill="#9CA3AF" textAnchor="middle" className="font-body text-[11px] whitespace-nowrap">
                                {step}
                              </text>
                            </g>
                          );
                        })}

                        {/* Final Output Node */}
                        <g transform={`translate(1250, ${path.y})`}>
                          <rect x="-10" y="-10" width="20" height="20" rx="4" fill={path.color} opacity="0.2" />
                          <circle cx="0" cy="0" r="4" fill={path.color} className="animate-pulse" />
                          <text x="20" y="4" fill={path.color} className="font-heading font-bold text-[13px] uppercase tracking-wide">
                            {path.output}
                          </text>
                        </g>
                      </motion.g>
                    )}
                  </AnimatePresence>
                </g>
              );
            })}

          </svg>
        </motion.div>

        {/* BOTTOM TRANSITION: Final Statement */}
        <motion.div 
          style={{ opacity: finalTextOpacity }}
          className="absolute bottom-12 left-0 w-full text-center z-30 pointer-events-none px-6"
        >
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-accent-primary to-transparent">
            <div className="px-8 py-4 bg-black rounded-full">
              <h3 className="text-xl md:text-3xl font-heading font-bold text-white tracking-wide shadow-accent-primary">
                Recovered Materials Become <span className="text-accent-primary">Trusted Resources.</span>
              </h3>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
