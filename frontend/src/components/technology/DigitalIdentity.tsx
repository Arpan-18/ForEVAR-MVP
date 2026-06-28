"use client";

import React, { useState } from 'react';
import { motion, useTime, useTransform, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Database, FileDigit, Factory, Recycle, Leaf, ExternalLink } from 'lucide-react';

const FIELDS = [
  { label: 'Material', value: 'PET Bottle', delay: 0.1, tooltip: null },
  { label: 'Quality Grade', value: 'A', delay: 0.2, tooltip: 'Determined using AI vision and quality scoring.' },
  { label: 'Purity', value: '96%', delay: 0.3, tooltip: null },
  { label: 'Contamination', value: 'Low', delay: 0.4, tooltip: null },
  { label: 'Estimated Weight', value: '520g', delay: 0.5, tooltip: null },
  { label: 'Location', value: 'Hyderabad', delay: 0.5, tooltip: null },
  { label: 'Timestamp', value: 'Live', delay: 0.6, tooltip: null },
  { label: 'Destination', value: 'Certified Plastic Recycler', delay: 0.7, tooltip: 'Recommended based on material type and recovery economics.' },
  { label: 'Verification', value: 'Verified', delay: 0.8, tooltip: 'Confirms the material has passed quality validation.' },
  { label: 'Material ID', value: 'Generated automatically', delay: 0.9, tooltip: null }
];

export default function DigitalIdentity() {
  const time = useTime();
  const [hoveredField, setHoveredField] = useState<string | null>(null);

  // Animation Loop (15 seconds)
  // 0.0 - 0.6: Moving & populating
  // 0.6 - 0.7: Paused in center
  // 0.7 - 0.8: Bottle dissolves
  // 0.8 - 1.0: Network expands
  const duration = 15000;
  const progress = useTransform(time, t => (t % duration) / duration);

  // Bottle X Position (Right to Center)
  const bottleX = useTransform(progress, [0, 0.6], [800, 300]);
  
  // Bottle Opacity
  const bottleOpacity = useTransform(progress, [0, 0.1, 0.7, 0.8], [0, 1, 1, 0]);

  // Card X Position (Follows bottle then centers)
  const cardX = useTransform(progress, [0, 0.6, 0.7, 0.8], [850, 350, 350, 500]);
  
  // Network lines opacity
  const networkOpacity = useTransform(progress, [0.8, 0.85, 0.95, 1.0], [0, 1, 1, 0]);

  return (
    <section className="relative w-full h-[100vh] min-h-[900px] flex flex-col lg:flex-row bg-[#050505] overflow-hidden border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(124,255,79,0.05)_0%,_transparent_60%)] pointer-events-none" />

      {/* LEFT 40%: EDITORIAL TYPOGRAPHY */}
      <div className="w-full lg:w-[40%] h-[30%] lg:h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 lg:pt-0 z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 tracking-tighter leading-tight"
        >
          Every Material <br />
          Gets A Digital Identity.
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-accent-primary font-heading font-medium mb-8"
        >
          Recovery is only valuable when every material can be trusted, traced and verified.
        </motion.h3>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg text-text-secondary font-body font-light leading-relaxed border-l-2 border-white/10 pl-6"
        >
          Without trusted information, materials lose value. By attaching a verified digital identity to every recoverable material, we enable traceability, compliance and confident recovery decisions.
        </motion.p>
      </div>

      {/* RIGHT 60%: VISUAL ENGINE */}
      <div className="w-full lg:w-[60%] h-[70%] lg:h-full relative flex items-center justify-center z-10">
        
        {/* SVG LAYER for Bottle and Network */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <svg viewBox="0 0 1000 900" className="w-full h-full object-cover lg:object-contain">
            
            {/* The Bottle */}
            <motion.g style={{ x: bottleX, opacity: bottleOpacity }} transform="translate(0, 450)">
              {/* Glow */}
              <circle cx="0" cy="0" r="40" fill="rgba(124, 255, 79, 0.1)" filter="blur(10px)" />
              {/* Bottle Shape */}
              <path d="M -15 -40 L 15 -40 L 20 -20 L 20 50 L -20 50 L -20 -20 Z" fill="none" stroke="#3B82F6" strokeWidth="3" />
              {/* Connecting Line to Card */}
              <line x1="25" y1="0" x2="60" y2="0" stroke="#7CFF4F" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="25" cy="0" r="3" fill="#7CFF4F" />
            </motion.g>

            {/* Network Ecosystem (Reveals at the end) */}
            <motion.g style={{ opacity: networkOpacity }}>
              {/* Central connecting lines emerging from the card (Card rests at x=500, y=450 roughly) */}
              
              <g transform="translate(500, 450)">
                <circle cx="0" cy="0" r="80" fill="transparent" stroke="rgba(124,255,79,0.1)" strokeWidth="1" strokeDasharray="4 4" className="animate-spin-slow" />
                
                {/* Lines out to nodes */}
                <line x1="0" y1="0" x2="-200" y2="-200" stroke="#7CFF4F" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                <line x1="0" y1="0" x2="200" y2="-200" stroke="#7CFF4F" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                <line x1="0" y1="0" x2="300" y2="0" stroke="#7CFF4F" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                <line x1="0" y1="0" x2="200" y2="200" stroke="#7CFF4F" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                <line x1="0" y1="0" x2="-200" y2="200" stroke="#7CFF4F" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />

                {/* Animated Pulses */}
                <motion.circle cx="0" cy="0" r="4" fill="#7CFF4F" animate={{ cx: -200, cy: -200, opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
                <motion.circle cx="0" cy="0" r="4" fill="#7CFF4F" animate={{ cx: 200, cy: -200, opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} />
                <motion.circle cx="0" cy="0" r="4" fill="#7CFF4F" animate={{ cx: 300, cy: 0, opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} />
                <motion.circle cx="0" cy="0" r="4" fill="#7CFF4F" animate={{ cx: 200, cy: 200, opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
                <motion.circle cx="0" cy="0" r="4" fill="#7CFF4F" animate={{ cx: -200, cy: 200, opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.8 }} />
              </g>

            </motion.g>
          </svg>
        </div>

        {/* HTML LAYER for Network Labels */}
        <motion.div style={{ opacity: networkOpacity }} className="absolute inset-0 z-10 pointer-events-none">
          <div className="w-full h-full max-w-[1000px] mx-auto relative flex items-center justify-center">
            {/* The nodes are positioned relative to center (500, 450) matching the SVG */}
            <div className="absolute top-[20%] left-[25%] flex flex-col items-center"><Factory className="w-6 h-6 text-accent-primary mb-2 opacity-50" /><span className="text-white font-heading font-bold text-sm tracking-widest uppercase">Manufacturer</span></div>
            <div className="absolute top-[20%] right-[25%] flex flex-col items-center"><Recycle className="w-6 h-6 text-accent-primary mb-2 opacity-50" /><span className="text-white font-heading font-bold text-sm tracking-widest uppercase">Recycler</span></div>
            <div className="absolute top-[50%] right-[15%] -translate-y-1/2 flex flex-col items-center"><ExternalLink className="w-6 h-6 text-accent-primary mb-2 opacity-50" /><span className="text-white font-heading font-bold text-sm tracking-widest uppercase">Marketplace</span></div>
            <div className="absolute bottom-[20%] right-[25%] flex flex-col items-center"><ShieldCheck className="w-6 h-6 text-accent-primary mb-2 opacity-50" /><span className="text-white font-heading font-bold text-sm tracking-widest uppercase">Compliance</span></div>
            <div className="absolute bottom-[20%] left-[25%] flex flex-col items-center"><Leaf className="w-6 h-6 text-accent-primary mb-2 opacity-50" /><span className="text-white font-heading font-bold text-sm tracking-widest uppercase">Carbon Reporting</span></div>
          </div>
        </motion.div>

        {/* HTML LAYER for Identity Card */}
        <div className="absolute inset-0 z-30 pointer-events-none overflow-visible">
          <div className="w-full h-full max-w-[1000px] mx-auto relative flex items-center">
            
            <motion.div 
              style={{ x: cardX, y: "-50%" }}
              className="absolute top-[50%] w-[340px] -ml-[170px] pointer-events-auto"
            >
              {/* The Card */}
              <div className="bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_-10px_rgba(124,255,79,0.15)] overflow-visible">
                
                {/* Header */}
                <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-accent-primary" />
                    <span className="font-heading font-bold text-white tracking-widest uppercase text-sm">Digital Identity</span>
                  </div>
                  <motion.div 
                    style={{ opacity: useTransform(progress, [0.8, 0.85], [0, 1]) }}
                  >
                    <FileDigit className="w-5 h-5 text-accent-primary animate-pulse" />
                  </motion.div>
                </div>

                {/* Fields */}
                <div className="p-6 space-y-4">
                  {FIELDS.map((field, idx) => {
                    // Calculate opacity based on progress and delay
                    // Fields fade in between delay and delay + 0.1
                    const fieldOpacity = useTransform(progress, [field.delay, field.delay + 0.05], [0, 1]);
                    
                    return (
                      <motion.div 
                        key={idx}
                        style={{ opacity: fieldOpacity }}
                        className="relative flex justify-between items-center group cursor-help"
                        onMouseEnter={() => setHoveredField(field.label)}
                        onMouseLeave={() => setHoveredField(null)}
                      >
                        <span className="text-text-secondary text-sm font-light border-b border-dashed border-transparent group-hover:border-white/20 transition-colors">
                          {field.label}
                        </span>
                        
                        <span className={`text-sm font-medium ${field.label === 'Verification' ? 'text-accent-primary flex items-center gap-1' : 'text-white'} ${field.label === 'Material ID' ? 'font-mono text-xs text-white/50' : ''}`}>
                          {field.label === 'Verification' && <CheckCircle2 className="w-3 h-3" />}
                          {field.value}
                        </span>

                        {/* Tooltip */}
                        <AnimatePresence>
                          {hoveredField === field.label && field.tooltip && (
                            <motion.div 
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: -20 }}
                              exit={{ opacity: 0, x: -10 }}
                              className="absolute right-full top-1/2 -translate-y-1/2 w-48 bg-white text-black p-3 rounded-lg text-xs font-medium shadow-xl pointer-events-none z-50"
                            >
                              {field.tooltip}
                              {/* Arrow */}
                              <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Glowing edge on verification complete */}
                <motion.div 
                  style={{ opacity: useTransform(progress, [0.8, 0.85], [0, 1]) }}
                  className="absolute inset-0 rounded-2xl border border-accent-primary/50 pointer-events-none" 
                />

              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
