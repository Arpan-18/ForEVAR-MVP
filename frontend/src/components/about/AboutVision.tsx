"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutVision() {
  return (
    <section className="relative w-full py-40 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <span className="text-white/40 font-mono text-sm tracking-widest uppercase mb-8 block">
            Our Vision
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-light tracking-tighter text-white leading-[1.2]">
            To build the operating system <br className="hidden md:block" />
            for the world's <span className="font-bold italic">circular economy.</span>
          </h2>
        </motion.div>
        
      </div>
    </section>
  );
}
