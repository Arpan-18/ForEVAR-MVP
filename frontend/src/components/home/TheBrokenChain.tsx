"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const NODES = [
  { id: 'generator', label: 'Generator', stars: 5 },
  { id: 'collection', label: 'Collection', stars: 4 },
  { id: 'transfer', label: 'Transfer', stars: 3 },
  { id: 'recycler', label: 'Recycler', stars: 2 },
  { id: 'manufacturer', label: 'Manufacturer', stars: 1 },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mt-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg 
          key={star} 
          className={`w-3 h-3 md:w-4 md:h-4 ${star <= count ? 'text-white' : 'text-white/20'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TheBrokenChain() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Master opacity for the chain before the final statement appears
  const chainOpacity = useTransform(scrollYProgress, [0.75, 0.85], [1, 0.1]);

  // Final statement opacity
  const statementOpacity = useTransform(scrollYProgress, [0.85, 0.9], [0, 1]);
  
  // Green pulse scale and opacity
  const pulseScale = useTransform(scrollYProgress, [0.95, 1], [0.5, 30]);
  const pulseOpacity = useTransform(scrollYProgress, [0.95, 1], [0, 0.15]);

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-[#020202]">
      {/* Sticky Container */}
      <div className="sticky top-0 w-full h-screen flex flex-col justify-between overflow-hidden px-6 py-12 md:p-24 border-t border-white/5">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 w-full max-w-[90rem] mx-auto z-10">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tighter text-white leading-[1.1] max-w-3xl">
            The Recycling Chain <br />
            Doesn&apos;t Break At The End. <br />
            <span className="text-text-secondary">It Breaks At The Beginning.</span>
          </h2>
          
          <p className="text-sm md:text-lg text-text-secondary font-body font-light leading-relaxed max-w-sm border-l border-white/10 pl-6 mt-4 md:mt-0">
            Every participant optimizes their own operations. No one protects material quality throughout the entire recovery journey. By the time materials reach recyclers, much of their economic value has already disappeared.
          </p>
        </div>

        {/* The Chain Animation Area */}
        <motion.div 
          style={{ opacity: chainOpacity }}
          className="relative flex-grow flex items-center justify-center w-full max-w-[90rem] mx-auto mt-20 md:mt-0"
        >
          {/* Mobile Vertical Line Container / Desktop Horizontal Line Container */}
          <div className="relative flex flex-col md:flex-row items-center justify-between w-full h-full md:h-auto">
            
            {/* Background Line (Dim) */}
            <div className="absolute top-0 bottom-0 left-[27px] md:left-0 md:top-1/2 md:bottom-auto w-[2px] h-full md:h-[2px] md:w-full bg-white/10 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 z-0"></div>

            {/* Foreground Animated Line */}
            <div className="absolute top-0 bottom-0 left-[27px] md:left-0 md:top-1/2 md:bottom-auto w-[2px] h-full md:h-[2px] md:w-full -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 z-0 overflow-hidden">
              <motion.div 
                className="w-full h-full md:h-full origin-top md:origin-left"
                style={{ 
                  scaleY: useTransform(scrollYProgress, [0, 0.7], [0, 1]), // For mobile
                  scaleX: useTransform(scrollYProgress, [0, 0.7], [0, 1]), // For desktop
                  background: useTransform(
                    scrollYProgress, 
                    [0, 0.2, 0.4, 0.6], 
                    [
                      '#22C55E', // Green
                      '#EAB308', // Yellow
                      '#F97316', // Orange
                      '#EF4444'  // Red
                    ]
                  )
                }}
              />
            </div>

            {/* Nodes */}
            {NODES.map((node, index) => {
              // Calculate node activation threshold (0 to 0.7 timeline)
              const threshold = (index / (NODES.length - 1)) * 0.7;
              
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const isPassed = useTransform(scrollYProgress, (v) => v > threshold);
              
              return (
                <div key={node.id} className="relative z-10 flex flex-row md:flex-col items-center gap-6 md:gap-4 w-full md:w-auto h-full md:h-auto justify-start md:justify-center">
                  {/* Node Dot */}
                  <motion.div 
                    className="w-14 h-14 rounded-full flex items-center justify-center bg-[#050505] border-2 transition-colors duration-500 shrink-0"
                    style={{
                      borderColor: useTransform(
                        scrollYProgress,
                        [Math.max(0, threshold - 0.1), threshold, Math.min(0.7, threshold + 0.1)],
                        ['rgba(255,255,255,0.2)', 'rgba(255,255,255,1)', 'rgba(255,255,255,0.2)']
                      )
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white/50" />
                  </motion.div>
                  
                  {/* Node Info */}
                  <motion.div 
                    className="flex flex-col items-start md:items-center"
                    style={{
                      opacity: useTransform(
                        scrollYProgress,
                        [Math.max(0, threshold - 0.1), threshold, Math.min(0.7, threshold + 0.2)],
                        [0.3, 1, 0.3]
                      )
                    }}
                  >
                    <div className="font-heading font-bold text-lg md:text-xl tracking-tight uppercase">{node.label}</div>
                    <StarRating count={node.stars} />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Final Statement & Transition Overlay */}
        <motion.div 
          style={{ opacity: statementOpacity }}
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        >
          <div className="relative flex items-center justify-center w-full h-full">
            {/* The Green Pulse */}
            <motion.div 
              style={{ scale: pulseScale, opacity: pulseOpacity }}
              className="absolute w-32 h-32 rounded-full bg-accent-primary blur-[2px]"
            />
            
            <h3 className="font-heading font-bold text-4xl md:text-6xl tracking-tighter text-white z-10 px-6 text-center shadow-black drop-shadow-2xl">
              Nobody Owns Quality <br className="md:hidden" /> Across The Journey.
            </h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
