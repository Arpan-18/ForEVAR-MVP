"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Cpu, Factory, Globe2, Scan, Database, ShoppingCart, Activity, RefreshCw } from 'lucide-react';

export default function InfrastructureRoadmap() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // There are 4 "screens" of content (400vw total width).
  // We translate x from 0% to -75% to view them all.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  // Opacity of the background grid based on scroll
  const gridOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.05, 0.05, 0]);

  // Opacity of the connecting horizon line
  const linePathLength = useTransform(scrollYProgress, [0, 0.75], [0, 1]);

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-[#020202]">
      
      {/* Sticky container that holds the horizontal scrolling view */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center bg-[#020202]">
        
        {/* Background Grid */}
        <motion.div 
          style={{ opacity: gridOpacity }}
          className="absolute inset-0 z-0 pointer-events-none transition-opacity"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', 
            backgroundSize: '100px 100px',
            opacity: gridOpacity
          }} 
        />

        {/* Central connecting Horizon Line */}
        <motion.div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 z-0 pointer-events-none overflow-hidden opacity-20">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <motion.line 
              x1="0" y1="1" x2="100%" y2="1" 
              stroke="#7CFF4F" strokeWidth="2" strokeDasharray="10 10"
              style={{ pathLength: linePathLength }}
            />
          </svg>
        </motion.div>

        {/* The extremely wide content container */}
        <motion.div style={{ x }} className="flex h-full w-[400vw] relative z-10">
          
          {/* PANEL 1: Intro & Stage 1 (Today) */}
          <div className="w-[100vw] h-full flex flex-col justify-center px-12 lg:px-24 relative">
            
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6 tracking-tighter leading-tight text-white">
                Building Tomorrow&apos;s <br />
                <span className="text-text-secondary">Recovery Infrastructure.</span>
              </h2>
              <p className="text-xl text-accent-primary font-heading font-medium mb-4">
                Today&apos;s intelligence platform is the foundation for tomorrow&apos;s recovery ecosystem.
              </p>
              <p className="text-lg text-text-secondary font-body font-light leading-relaxed border-l-2 border-white/10 pl-6">
                Recovery begins with intelligence. As verified material networks grow, the same platform expands into physical recovery infrastructure, creating a connected circular economy.
              </p>
            </div>
          </div>

          {/* PANEL 2: Stage 2 (Near Future) */}
          <div className="w-[100vw] h-full flex items-center px-24 relative">
            <div className="flex flex-col mt-[25vh]">
              <span className="text-white/50 font-mono text-sm tracking-widest uppercase mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white/50 animate-pulse"></span>
                Stage 2: Under Development
              </span>
              <div className="flex items-center gap-16">
                <Node icon={<Cpu />} title="Intelligent Segregation Systems" state="developing" />
                <Node icon={<Factory />} title="Smart Recovery Facilities" state="developing" />
                <Node icon={<Globe2 />} title="Material Intelligence Network" state="developing" />
              </div>
            </div>
          </div>

          {/* PANEL 3: Stage 3 (Long-Term Vision) */}
          <div className="w-[100vw] h-full flex items-center px-24 relative">
            <div className="flex flex-col mt-[25vh]">
              <span className="text-white/30 font-mono text-sm tracking-widest uppercase mb-8">Stage 3: Long-Term Vision</span>
              <div className="flex items-center gap-16">
                <Node icon={<Factory />} title="Large Recovery Plants" state="vision" />
                <Node icon={<RefreshCw />} title="Biogas Facilities" state="vision" />
                <Node icon={<Database />} title="Verified Material Supply Chains" state="vision" />
                <Node icon={<RefreshCw />} title="Circular Manufacturing" state="vision" />
                <Node icon={<Globe2 />} title="Circular Economy" state="vision" />
              </div>
            </div>
          </div>

          {/* PANEL 4: Finale & CTA */}
          <div className="w-[100vw] h-full flex flex-col items-center justify-center relative px-6">
            <div className="max-w-4xl text-center">
              <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-heading font-bold leading-[1.1] tracking-tighter text-white mb-16">
                Technology is not our <span className="text-text-secondary">destination.</span>
                <br />
                <span className="text-accent-primary">Recovery Infrastructure is.</span>
              </h2>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="px-8 py-4 bg-accent-primary text-black font-heading font-bold text-lg uppercase tracking-wider rounded flex items-center gap-3 hover:bg-white transition-colors">
                  Explore Marketplace <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-heading font-bold text-lg uppercase tracking-wider rounded flex items-center gap-3 hover:border-white transition-colors">
                  Partner With ForEVAR
                </button>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

function Node({ icon, title, active = false, state = 'active' }: { icon: React.ReactNode, title: string, active?: boolean, state?: 'active' | 'developing' | 'vision' }) {
  
  let containerClass = "w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-all duration-500 ";
  let textClass = "font-heading font-bold text-sm tracking-wider uppercase text-center max-w-[160px] ";
  let iconClass = "w-8 h-8 ";

  if (state === 'active' || active) {
    containerClass += "bg-[#0A0A0A] border border-accent-primary/50 shadow-[0_0_30px_-5px_rgba(124,255,79,0.3)] text-accent-primary";
    textClass += "text-white";
  } else if (state === 'developing') {
    containerClass += "bg-[#050505] border border-white/20 text-white/70 shadow-lg";
    textClass += "text-white/70";
  } else if (state === 'vision') {
    containerClass += "bg-transparent border border-dashed border-white/20 text-white/30 backdrop-blur-sm";
    textClass += "text-white/30";
  }

  return (
    <div className="flex flex-col items-center group relative">
      {/* The Connecting Line to the next node (except for the last one ideally, but CSS flex gap handles spacing. We will just let the horizon line do the main connection) */}
      
      <div className={containerClass}>
        {icon}
        {(state === 'active' || active) && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent-primary rounded-full animate-ping opacity-75"></span>
        )}
      </div>
      <span className={textClass}>{title}</span>
    </div>
  );
}
