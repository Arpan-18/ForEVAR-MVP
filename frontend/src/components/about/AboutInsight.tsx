"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutInsight() {
  return (
    <section className="relative w-full py-32 bg-[#020202] overflow-hidden">
      
      {/* Soft Glow Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-end">
        <svg viewBox="0 0 400 400" className="w-[800px] h-[800px] blur-[100px] translate-x-1/4">
          <circle cx="200" cy="200" r="150" fill="#7CFF4F" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 flex justify-end">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-right"
        >
          <span className="text-accent-primary font-mono text-sm tracking-widest uppercase mb-6 block">
            The Insight
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light tracking-tighter text-white mb-8">
            Trust is the foundation of <span className="font-bold text-accent-primary">true circularity.</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary font-body font-light leading-relaxed">
            We realized that solving the global waste crisis doesn't require more bins—it requires a digital identity for every material. Intelligence unlocks value.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
