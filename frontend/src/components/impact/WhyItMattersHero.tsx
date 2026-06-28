"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function WhyItMattersHero() {
  const ripples = [
    { label: "Cleaner Cities", delay: 0 },
    { label: "Economic Value", delay: 1 },
    { label: "Employment", delay: 2 },
    { label: "Circular Manufacturing", delay: 3 },
    { label: "Lower Landfill", delay: 4 },
    { label: "Lower Emissions", delay: 5 }
  ];

  return (
    <section className="relative w-full min-h-[100vh] bg-[#020202] pt-32 pb-20 overflow-hidden flex flex-col justify-between">
      
      {/* Editorial Header */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20 mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light mb-6 tracking-tighter leading-[1.1] text-white">
            Recovery creates more than <br className="hidden md:block" />
            <span className="font-bold text-accent-primary">recycled materials.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary font-body font-light leading-relaxed max-w-2xl">
            Every verified material recovered creates environmental, economic and social value.
          </p>
        </motion.div>
      </div>

      {/* Ripple Animation Visual */}
      <div className="absolute inset-0 z-10 flex items-center justify-center translate-y-32 md:translate-y-16">
        <div className="relative w-full h-full max-w-[800px] max-h-[800px] flex items-center justify-center">
          
          {/* Central Material Core */}
          <div className="relative z-30 w-4 h-4 bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,1)]" />

          {/* Expanding Ripples */}
          {ripples.map((ripple, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.4, 0], scale: [0, 1.5, 3] }}
              transition={{
                duration: 12,
                repeat: Infinity,
                delay: ripple.delay * 2, // stagger the ripples
                ease: "linear"
              }}
              className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-white/20 flex items-start justify-center"
            />
          ))}
          
        </div>
      </div>

    </section>
  );
}
