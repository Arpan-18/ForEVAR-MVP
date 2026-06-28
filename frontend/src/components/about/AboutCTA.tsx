"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="relative w-full py-40 bg-[#020202] border-t border-white/5 overflow-hidden">
      
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,255,255,0.03)_0%,_transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-7xl font-heading font-light tracking-tighter text-white mb-16 max-w-4xl leading-[1.1]"
        >
          Building Recovery Infrastructure Takes <span className="font-bold italic text-white">All Of Us.</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <button className="px-10 py-5 bg-accent-primary text-black font-heading font-bold text-lg uppercase tracking-widest rounded flex items-center justify-center gap-3 hover:bg-white transition-colors">
            Partner With Us <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-10 py-5 bg-transparent border border-white/20 text-white font-heading font-bold text-lg uppercase tracking-widest rounded flex items-center justify-center gap-3 hover:border-white transition-colors">
            Connect With Our Team
          </button>
        </motion.div>

      </div>
    </section>
  );
}
