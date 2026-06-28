"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, ShieldCheck, Database, Network, Truck, Recycle, Factory, RotateCw } from 'lucide-react';

export default function MarketplaceStoryWorkflow() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Translate horizontal container based on vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  
  // Progress line that fills up based on scroll
  const lineScaleX = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  const steps = [
    { icon: <Building2 strokeWidth={1} />, title: "Generation", desc: "Institution generates recoverable material." },
    { icon: <ShieldCheck strokeWidth={1} />, title: "Verification", desc: "Quality and purity are verified." },
    { icon: <Database strokeWidth={1} />, title: "Listing", desc: "Material is listed on the Recovery Exchange." },
    { icon: <Network strokeWidth={1} />, title: "Matching", desc: "Matched with a suitable verified recycler." },
    { icon: <Truck strokeWidth={1} />, title: "Logistics", desc: "Collection and pickup are coordinated." },
    { icon: <Recycle strokeWidth={1} />, title: "Processing", desc: "Material undergoes recovery." },
    { icon: <Factory strokeWidth={1} />, title: "Manufacturing", desc: "Material returns to manufacturing as feedstock." },
    { icon: <RotateCw strokeWidth={1} />, title: "Circularity", desc: "The circular economy loop is closed." }
  ];

  return (
    <section ref={containerRef} className="relative w-full h-[500vh] bg-[#020202]">
      
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center bg-[#020202] border-t border-white/5">
        
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_0%,_transparent_70%)] pointer-events-none" />

        <div className="absolute top-24 left-6 md:left-12 lg:left-24 z-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light tracking-tighter text-white">
            How One <span className="font-bold text-accent-primary">Recovery Happens.</span>
          </h2>
        </div>

        {/* The extremely wide content container */}
        <motion.div style={{ x }} className="flex h-full w-[400vw] relative items-center pl-[10vw] pr-[20vw]">
          
          {/* Background Connecting Line */}
          <div className="absolute top-1/2 left-[10vw] right-[20vw] h-[1px] bg-white/10 -translate-y-1/2 z-0" />
          
          {/* Active Connecting Line */}
          <motion.div 
            style={{ scaleX: lineScaleX, originX: 0 }}
            className="absolute top-1/2 left-[10vw] right-[20vw] h-[1px] bg-white -translate-y-1/2 z-0 shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
          />

          <div className="flex w-full justify-between relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center group w-[220px]">
                
                {/* Elegant abstract illustration container instead of a card */}
                <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center mb-8 relative transition-all duration-700 group-hover:border-white/40 group-hover:bg-white/5 overflow-hidden">
                  
                  {/* Subtle inner rotation effect */}
                  <div className="absolute inset-0 border border-white/5 rounded-full scale-[0.8] transition-transform duration-1000 group-hover:scale-[0.9] group-hover:rotate-180" />
                  
                  <div className="text-white/40 group-hover:text-white transition-colors duration-700 w-12 h-12 relative z-10">
                    {React.cloneElement(step.icon as React.ReactElement, { className: "w-full h-full" })}
                  </div>
                </div>
                
                <p className="text-sm text-text-secondary font-body font-light text-center leading-relaxed max-w-[180px] group-hover:text-white transition-colors duration-500">
                  {step.desc}
                </p>
                
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
