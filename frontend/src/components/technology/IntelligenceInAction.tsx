"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Scan, Database, CheckCircle2, ArrowRight } from 'lucide-react';

export default function IntelligenceInAction() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Opacity controls for the 5 stages
  const s1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [0, 1, 1, 0]);
  const s2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const s3 = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.65], [0, 1, 1, 0]);
  const s4 = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.85], [0, 1, 1, 0]);
  const s5 = useTransform(scrollYProgress, [0.8, 0.9, 1, 1], [0, 1, 1, 1]);

  // Bottle transformations
  const bottleScale = useTransform(scrollYProgress, [0, 0.2, 1], [0.8, 1, 1]);
  const bottleGlow = useTransform(scrollYProgress, [0.4, 0.6, 1], [0, 1, 1]);
  const bottleColor = useTransform(scrollYProgress, [0.5, 0.7], ["#333", "#3B82F6"]);

  return (
    <section ref={containerRef} className="relative w-full h-[500vh] bg-[#020202]">
      
      <div className="sticky top-0 w-full h-screen overflow-hidden flex bg-[#020202] border-t border-white/5">
        
        {/* Background Ambience */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(124,255,79,0.03)_0%,_transparent_50%)] pointer-events-none" />

        {/* LEFT COLUMN: Stage Titles */}
        <div className="w-[40%] h-full flex flex-col justify-center px-12 lg:px-24 relative z-20 pointer-events-none">
          <StageTitle opacity={s1} num="01" title="Detection" subtitle="Mixed waste enters the scanning zone." />
          <StageTitle opacity={s2} num="02" title="Identification" subtitle="Sub-second material classification." />
          <StageTitle opacity={s3} num="03" title="Verification" subtitle="Analyzing purity and contamination." />
          <StageTitle opacity={s4} num="04" title="Digital Identity" subtitle="Verifiable data is attached to the physical material." />
          <StageTitle opacity={s5} num="05" title="Routing" subtitle="Directed to the optimal recovery destination." />
        </div>

        {/* RIGHT COLUMN: The Visual Engine */}
        <div className="w-[60%] h-full relative flex items-center justify-center z-10">
          
          <div className="relative w-[400px] h-[600px] flex items-center justify-center">
            
            {/* STAGE 1: Detection (Scanner Beam) */}
            <motion.div style={{ opacity: s1 }} className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="w-[200%] h-[4px] bg-[#7CFF4F] shadow-[0_0_20px_#7CFF4F] opacity-50"
                animate={{ y: [-200, 200] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* STAGE 2: Identification (Bounding Box & Label) */}
            <motion.div style={{ opacity: s2 }} className="absolute inset-0 flex items-center justify-center">
              <div className="w-[120px] h-[300px] border-2 border-dashed border-[#7CFF4F] bg-[rgba(124,255,79,0.05)] relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#7CFF4F] text-black text-xs font-mono font-bold px-3 py-1 rounded-sm uppercase tracking-widest whitespace-nowrap">
                  PET Plastic
                </div>
                <Scan className="absolute -right-12 top-1/2 -translate-y-1/2 w-6 h-6 text-[#7CFF4F] opacity-50" />
              </div>
            </motion.div>

            {/* STAGE 3: Quality Verification (Scores) */}
            <motion.div style={{ opacity: s3 }} className="absolute inset-0 flex items-center justify-center">
              <div className="absolute -left-12 top-1/4 bg-[#0A0A0A] border border-white/10 px-4 py-3 rounded-lg shadow-xl">
                <div className="text-white/50 text-[10px] uppercase tracking-widest mb-1">Purity</div>
                <div className="text-[#7CFF4F] font-mono text-xl">96.5%</div>
              </div>
              <div className="absolute -right-12 bottom-1/4 bg-[#0A0A0A] border border-white/10 px-4 py-3 rounded-lg shadow-xl">
                <div className="text-white/50 text-[10px] uppercase tracking-widest mb-1">Contamination</div>
                <div className="text-white font-mono text-xl">Low</div>
              </div>
            </motion.div>

            {/* STAGE 4: Digital Identity (The Card forms) */}
            <motion.div style={{ opacity: s4 }} className="absolute inset-0 flex items-center justify-center">
              <div className="absolute left-[120px] top-1/2 -translate-y-1/2 w-[240px] bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 p-5 rounded-xl shadow-[0_10px_40px_-10px_rgba(124,255,79,0.15)]">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                  <Database className="w-4 h-4 text-[#7CFF4F]" />
                  <span className="text-white font-heading font-bold text-xs uppercase tracking-widest">Digital ID: Generated</span>
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-white/50"><span>Material:</span><span className="text-white">PET</span></div>
                  <div className="flex justify-between text-white/50"><span>Grade:</span><span className="text-[#7CFF4F]">A-Premium</span></div>
                  <div className="flex justify-between text-white/50"><span>Est. Weight:</span><span className="text-white">24.5g</span></div>
                  <div className="flex justify-between text-white/50"><span>Timestamp:</span><span className="text-white">Live</span></div>
                </div>
              </div>
            </motion.div>

            {/* STAGE 5: Recovery Destination (Routing Line) */}
            <motion.div style={{ opacity: s5 }} className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="absolute left-[80px] top-1/2 w-[200px] h-[2px] bg-gradient-to-r from-[#7CFF4F] to-transparent"
                style={{ originX: 0 }}
                animate={{ scaleX: [0, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              />
              <div className="absolute left-[260px] top-1/2 -translate-y-1/2 bg-[#0A0A0A] border border-[#3B82F6]/30 px-5 py-4 rounded-lg flex items-center gap-4">
                <ArrowRight className="w-5 h-5 text-[#3B82F6]" />
                <div>
                  <div className="text-white/50 text-[10px] uppercase tracking-widest mb-1">Destination</div>
                  <div className="text-[#3B82F6] font-heading font-bold text-sm tracking-wide">Certified Plastic Recycler</div>
                </div>
              </div>
            </motion.div>

            {/* THE CENTRAL PROTAGONIST: PET BOTTLE */}
            <motion.div 
              style={{ scale: bottleScale }} 
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-50"
            >
              {/* Glowing aura that appears late in the sequence */}
              <motion.div 
                style={{ opacity: bottleGlow }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15)_0%,_transparent_40%)]"
              />
              <svg viewBox="0 0 100 300" className="w-[100px] h-[300px] overflow-visible">
                <motion.path 
                  d="M 30 20 L 70 20 L 80 60 L 80 280 L 20 280 L 20 60 Z" 
                  fill="rgba(10,10,10,0.8)" 
                  stroke={bottleColor}
                  strokeWidth="3" 
                  style={{ stroke: bottleColor }}
                />
                <motion.rect x="35" y="0" width="30" height="20" rx="3" fill="transparent" stroke={bottleColor} strokeWidth="3" />
                {/* Internal Verification mark that appears later */}
                <motion.g style={{ opacity: bottleGlow }}>
                  <circle cx="50" cy="150" r="15" fill="#3B82F6" opacity="0.1" />
                  <path d="M 43 150 L 48 155 L 58 143" fill="none" stroke="#3B82F6" strokeWidth="2" />
                </motion.g>
              </svg>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}

function StageTitle({ opacity, num, title, subtitle }: { opacity: any, num: string, title: string, subtitle: string }) {
  return (
    <motion.div style={{ opacity }} className="absolute left-12 lg:left-24 top-1/2 -translate-y-1/2">
      <div className="text-accent-primary font-mono text-sm tracking-widest mb-4">STAGE {num}</div>
      <h2 className="text-5xl lg:text-7xl font-heading font-bold text-white mb-6 tracking-tighter">{title}</h2>
      <p className="text-xl text-text-secondary font-body font-light max-w-sm border-l-2 border-white/10 pl-6">
        {subtitle}
      </p>
    </motion.div>
  );
}
