"use client";

import React, { useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

const ITEMS = [
  { id: 1, name: 'PET Bottle', material: 'PET', purity: '96%', contam: 'Low', recovery: 'Plastic Recycler', value: 'High', color: '#3B82F6', shape: <path d="M 30 10 L 70 10 L 75 30 L 75 140 L 25 140 L 25 30 Z" fill="#111" stroke="#3B82F6" strokeWidth="3" /> },
  { id: 2, name: 'Aluminium Can', material: 'Aluminium', purity: '98%', contam: 'Low', recovery: 'Metal Foundry', value: 'High', color: '#9CA3AF', shape: <rect x="25" y="40" width="50" height="100" rx="10" fill="#111" stroke="#9CA3AF" strokeWidth="3" /> },
  { id: 3, name: 'Newspaper', material: 'Paper', purity: '90%', contam: 'Medium', recovery: 'Paper Mill', value: 'Medium', color: '#FCD34D', shape: <rect x="15" y="60" width="70" height="80" rx="2" fill="#111" stroke="#FCD34D" strokeWidth="3" transform="skewX(-10)" /> },
  { id: 4, name: 'Cardboard', material: 'Corrugated', purity: '95%', contam: 'Low', recovery: 'Packaging Mfg', value: 'High', color: '#D97706', shape: <rect x="10" y="40" width="80" height="100" fill="#111" stroke="#D97706" strokeWidth="3" /> },
  { id: 5, name: 'Food Container', material: 'Mixed Plastic', purity: '60%', contam: 'High', recovery: 'Chemical Recycling', value: 'Low', color: '#F97316', shape: <path d="M 10 70 L 90 70 L 80 140 L 20 140 Z" fill="#111" stroke="#F97316" strokeWidth="3" /> },
  { id: 6, name: 'Glass Bottle', material: 'Glass', purity: '99%', contam: 'Low', recovery: 'Glass Smelter', value: 'Medium', color: '#2DD4BF', shape: <path d="M 40 10 L 60 10 L 60 50 L 80 80 L 80 140 L 20 140 L 20 80 L 40 50 Z" fill="#111" stroke="#2DD4BF" strokeWidth="3" /> },
  { id: 7, name: 'Battery', material: 'Lithium-Ion', purity: 'N/A', contam: 'Hazardous', recovery: 'Specialized E-Waste', value: 'Negative (Cost)', color: '#EF4444', shape: <g><rect x="35" y="60" width="30" height="15" fill="#111" stroke="#EF4444" strokeWidth="3" /><rect x="25" y="75" width="50" height="65" rx="5" fill="#111" stroke="#EF4444" strokeWidth="3" /></g> },
  { id: 8, name: 'E-Waste', material: 'PCB/Metals', purity: '85%', contam: 'Medium', recovery: 'E-Waste Processor', value: 'Very High', color: '#A855F7', shape: <rect x="20" y="80" width="60" height="60" fill="#111" stroke="#A855F7" strokeWidth="3" strokeDasharray="5 5" /> },
];

export default function ComputerVisionDeepDive() {
  const xOffset = useMotionValue(0);
  const isHoveredGlobal = useRef(false);
  const [activeItem, setActiveItem] = useState<number | null>(null);

  // Smooth continuous animation that slows down when hovered
  useAnimationFrame((t, delta) => {
    const speed = isHoveredGlobal.current ? 0.02 : 0.15;
    xOffset.set(xOffset.get() - (delta * speed));
  });

  return (
    <section className="relative w-full h-[100vh] min-h-[800px] flex flex-col lg:flex-row bg-[#020202] overflow-hidden border-y border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_right,_#7CFF4F_0%,_transparent_50%)] pointer-events-none mix-blend-screen" />

      {/* LEFT 30%: EDITORIAL TYPOGRAPHY */}
      <div className="w-full lg:w-[30%] h-[30%] lg:h-full flex flex-col justify-center px-6 md:px-12 pt-24 lg:pt-0 z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 tracking-tighter leading-tight"
        >
          Seeing What <br /> Humans Can&apos;t.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-text-secondary font-body font-light leading-relaxed border-l-2 border-accent-primary pl-6"
        >
          <p className="mb-4 text-white font-medium">Every material tells a story.</p>
          <p>
            Computer vision alone is not enough. Every detected object is analysed for quality, contamination and recovery potential before receiving a digital identity.
            <br /><br />
            That intelligence enables every downstream decision.
          </p>
        </motion.div>
      </div>

      {/* RIGHT 70%: VISUAL ENGINE */}
      <div className="w-full lg:w-[70%] h-[70%] lg:h-full relative flex items-center justify-center z-10">
        
        {/* HTML OVERLAY FOR TOOLTIPS */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <AnimatePresence>
            {activeItem !== null && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[320px] bg-[#0A0A0A]/90 backdrop-blur-xl border border-accent-primary/30 p-6 rounded-xl shadow-[0_10px_40px_-10px_rgba(124,255,79,0.2)]"
              >
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <h3 className="text-xl font-heading font-bold text-white">{ITEMS[activeItem - 1].name}</h3>
                  <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: ITEMS[activeItem - 1].color }} />
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-text-secondary text-sm">Material</span>
                    <span className="text-white text-sm font-medium">{ITEMS[activeItem - 1].material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary text-sm">Purity</span>
                    <span className="text-accent-primary text-sm font-mono">{ITEMS[activeItem - 1].purity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary text-sm">Contamination</span>
                    <span className="text-white text-sm font-medium">{ITEMS[activeItem - 1].contam}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary text-sm">Recovery</span>
                    <span className="text-white text-sm font-medium">{ITEMS[activeItem - 1].recovery}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-white/5">
                    <span className="text-text-secondary text-sm">Est. Value</span>
                    <span className="text-white text-sm font-medium">{ITEMS[activeItem - 1].value}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SVG CONVEYOR */}
        <svg viewBox="0 0 1200 800" className="w-full h-full object-cover">
          
          {/* Belt */}
          <g transform="translate(0, 500)">
            <rect x="0" y="0" width="1200" height="15" fill="#111" stroke="#333" strokeWidth="1" />
            <motion.line 
              x1="0" y1="7" x2="1200" y2="7" 
              stroke="#333" strokeWidth="2" strokeDasharray="15 30" 
              animate={{ strokeDashoffset: [45, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </g>

          {/* Scanner Zone Indicator */}
          <g transform="translate(600, 100)">
            <rect x="-150" y="0" width="300" height="400" fill="url(#scannerGradient)" opacity="0.4" pointerEvents="none" />
            <line x1="-150" y1="0" x2="-150" y2="400" stroke="#7CFF4F" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
            <line x1="150" y1="0" x2="150" y2="400" stroke="#7CFF4F" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
          </g>

          <defs>
            <linearGradient id="scannerGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(124, 255, 79, 0.15)" />
              <stop offset="100%" stopColor="rgba(124, 255, 79, 0.0)" />
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Map Items */}
          {ITEMS.map((item, idx) => {
            // Space items far apart (domain is 3200 width)
            const itemSpacing = 400;
            const domainRange = ITEMS.length * itemSpacing; // 3200
            
            // Derive X position safely handling negative offsets
            const x = useTransform(xOffset, offset => {
              const pos = (offset + (idx * itemSpacing) + 1000000) % domainRange;
              return pos - 400; // start at 2800, end at -400
            });

            // Opacity of physical object (fades out at left edge)
            const objOpacity = useTransform(x, [100, -100], [1, 0]);
            
            // Opacity of Digital Token (fades in at left edge)
            const tokenOpacity = useTransform(x, [100, -100, -300, -400], [0, 1, 1, 0]);
            const tokenY = useTransform(x, [100, -100, -400], [0, 0, 150]); // drifts down

            // Bounding Box appears inside scanner (x between 750 and 450)
            const isScannedOpacity = useTransform(x, [800, 700, 500, 400], [0, 1, 1, 0]);

            return (
              <motion.g key={item.id} style={{ x }} className="cursor-pointer">
                
                {/* Invisible Hitbox for hovering */}
                <rect 
                  x="-20" y="300" width="140" height="200" fill="transparent"
                  onMouseEnter={() => {
                    isHoveredGlobal.current = true;
                    setActiveItem(item.id);
                  }}
                  onMouseLeave={() => {
                    isHoveredGlobal.current = false;
                    setActiveItem(null);
                  }}
                />

                {/* The Physical Object */}
                <motion.g transform="translate(0, 350)" style={{ opacity: objOpacity }} pointerEvents="none">
                  {item.shape}
                </motion.g>

                {/* Scanner Bounding Box */}
                <motion.g style={{ opacity: isScannedOpacity }} pointerEvents="none">
                  <rect x="0" y="340" width="100" height="160" fill="rgba(255,255,255,0.03)" stroke={item.color} strokeWidth="1" strokeDasharray="2 4" />
                  {/* Small label above box */}
                  <rect x="0" y="315" width="80" height="20" fill={item.color} opacity="0.2" />
                  <text x="5" y="329" fill={item.color} className="font-mono text-[10px] tracking-wider uppercase">{item.name.substring(0,8)}</text>
                </motion.g>

                {/* The Digital Identity Token (Reveals at the end) */}
                <motion.g style={{ opacity: tokenOpacity, y: tokenY }} transform="translate(25, 400)" pointerEvents="none">
                  {/* Glowing Node */}
                  <circle cx="25" cy="25" r="20" fill="transparent" stroke="#7CFF4F" strokeWidth="2" strokeDasharray="4 4" className="animate-spin-slow" />
                  <circle cx="25" cy="25" r="10" fill="#7CFF4F" filter="url(#glow)" />
                  <text x="25" y="-10" fill="#7CFF4F" textAnchor="middle" className="font-heading font-bold text-[12px] tracking-widest uppercase">Digital Identity</text>
                  <line x1="25" y1="0" x2="25" y2="10" stroke="#7CFF4F" strokeWidth="1" />
                </motion.g>

              </motion.g>
            );
          })}
        </svg>

      </div>
    </section>
  );
}
