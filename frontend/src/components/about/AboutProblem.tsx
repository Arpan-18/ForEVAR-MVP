"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutProblem() {
  return (
    <section className="relative w-full py-32 bg-[#050505] overflow-hidden">
      
      {/* Minimal Geometry Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-[800px] h-[800px] blur-[100px]">
          <circle cx="200" cy="200" r="100" fill="#3B82F6" />
        </svg>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-white/40 font-mono text-sm tracking-widest uppercase mb-6 block">
            The Problem
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light tracking-tighter text-white mb-8">
            Recovery today is <span className="font-bold text-[#F87171]">broken by uncertainty.</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary font-body font-light leading-relaxed">
            Without verified intelligence, valuable resources are treated as anonymous waste. Generators lose value, and recyclers struggle with contaminated feedstock.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
