"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MATERIALS = [
  { id: 'plastic', label: 'HDPE Plastic', value: 'High', color: '#3B82F6', startX: -150, startY: -150 }, // Blue
  { id: 'paper', label: 'OCC Paper', value: 'Medium', color: '#EAB308', startX: 150, startY: -120 }, // Yellow
  { id: 'metal', label: 'Aluminum', value: 'High', color: '#9CA3AF', startX: -180, startY: 80 }, // Gray
  { id: 'organic', label: 'Organic', value: 'Medium', color: '#22C55E', startX: 120, startY: 140 }, // Green
  { id: 'ewaste', label: 'E-Waste', value: 'Very High', color: '#A855F7', startX: 0, startY: 180 }, // Purple
];

export default function TheHiddenValue() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Text Animations
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.2]);
  const subheadOpacity = useTransform(scrollYProgress, [0.4, 0.8], [0.2, 1]);

  // Global merger state
  const mergedOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const finalMessageOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const footerMessageOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-[#050505]">
      {/* Sticky Container */}
      <div className="sticky top-0 w-full h-screen flex flex-col md:flex-row overflow-hidden border-t border-white/5">
        
        {/* LEFT COLUMN - VISUAL (70%) */}
        <div className="relative w-full md:w-[65%] h-[60%] md:h-full flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5 bg-[radial-gradient(circle_at_center,_#111_0%,_transparent_70%)]">
          
          {/* The Stage */}
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">
            
            {MATERIALS.map((mat) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const x = useTransform(scrollYProgress, [0, 0.6], [mat.startX, 0]);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const y = useTransform(scrollYProgress, [0, 0.6], [mat.startY, 0]);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const color = useTransform(scrollYProgress, [0.4, 0.7], [mat.color, '#1A1A1A']);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const labelOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const scale = useTransform(scrollYProgress, [0, 0.6, 0.8], [1, 0.8, 1.2]);

              return (
                <motion.div
                  key={mat.id}
                  style={{ x, y, backgroundColor: color, scale }}
                  className="absolute w-20 h-20 md:w-32 md:h-32 rounded-2xl flex items-center justify-center shadow-2xl mix-blend-screen md:mix-blend-normal"
                >
                  {/* Individual Label */}
                  <motion.div 
                    style={{ opacity: labelOpacity }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-center pointer-events-none"
                  >
                    <div className="font-heading font-bold text-white text-sm md:text-base">{mat.label}</div>
                    <div className="text-[10px] text-accent-primary uppercase tracking-widest mt-1">Value: {mat.value}</div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* The Merged "Unknown Material" Label */}
            <motion.div 
              style={{ opacity: mergedOpacity }}
              className="absolute z-20 flex flex-col items-center justify-center pointer-events-none"
            >
              <div className="font-heading font-bold text-white text-xl md:text-2xl tracking-tight">Unknown Material</div>
              <div className="text-xs text-red-500 uppercase tracking-widest mt-2 font-medium">Recovery Value: Lost</div>
            </motion.div>

          </div>

          {/* Final Message Overlay */}
          <motion.div 
            style={{ opacity: finalMessageOpacity }}
            className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          >
            <div className="font-heading font-bold text-4xl md:text-6xl tracking-tighter text-white">
              Identity Lost <br /> 
              <span className="text-red-500">→ Value Lost</span>
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN - EDITORIAL TEXT (35%) */}
        <div className="w-full md:w-[35%] h-[40%] md:h-full flex flex-col justify-center px-8 md:px-16 py-8">
          
          <div className="flex flex-col gap-4">
            <motion.h2 
              style={{ opacity: headlineOpacity }}
              className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tighter text-white leading-[1.1]"
            >
              Waste isn&apos;t born worthless.
            </motion.h2>

            <motion.h3 
              style={{ opacity: subheadOpacity }}
              className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tighter text-white leading-[1.1]"
            >
              It becomes worthless when it loses its identity.
            </motion.h3>
          </div>

          <motion.div 
            style={{ opacity: footerMessageOpacity }}
            className="absolute bottom-12 md:bottom-24 left-8 md:left-16 right-8 md:right-16 text-text-secondary text-sm md:text-lg font-body font-light border-l-2 border-accent-primary pl-6"
          >
            This happens before recycling even begins.
          </motion.div>

        </div>
      </div>
    </section>
  );
}
