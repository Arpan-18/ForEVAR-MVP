"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[80vh] bg-[#020202] pt-40 pb-20 overflow-hidden flex flex-col justify-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="text-accent-primary font-mono text-sm tracking-widest uppercase mb-6 block">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-light tracking-tighter leading-[1.1] text-white mb-8">
            Building the <br className="hidden md:block" />
            infrastructure for a <br className="hidden md:block" />
            <span className="font-bold text-accent-primary">circular economy.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary font-body font-light leading-relaxed max-w-2xl">
            We exist to eliminate uncertainty in material recovery by connecting every participant through verified intelligence and absolute trust.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
