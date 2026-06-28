"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function WhyItMattersVision() {
  return (
    <section className="relative w-full py-48 bg-[#020202] overflow-hidden flex flex-col items-center justify-center">
      
      {/* Abstract City / Loop Illustration */}
      <div className="absolute inset-0 z-0 flex items-end justify-center opacity-30 pointer-events-none">
        <svg viewBox="0 0 1000 400" className="w-full h-[400px]">
          
          <defs>
            <linearGradient id="cityGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            <linearGradient id="flowGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#7CFF4F" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>

          {/* Minimalist City Skyline */}
          <path d="M 0 400 L 0 300 L 100 300 L 100 200 L 200 200 L 200 250 L 300 250 L 300 150 L 400 150 L 400 300 L 500 300 L 500 100 L 600 100 L 600 250 L 700 250 L 700 180 L 800 180 L 800 280 L 900 280 L 900 350 L 1000 350 L 1000 400 Z" fill="url(#cityGlow)" />
          
          {/* Circular Loop flowing above the city */}
          <ellipse cx="500" cy="200" rx="300" ry="80" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
          
          {/* Glowing particle looping */}
          <motion.circle r="4" fill="#7CFF4F" filter="drop-shadow(0 0 8px #7CFF4F)">
            <animateMotion dur="8s" repeatCount="indefinite" path="M 200 200 A 300 80 0 1 1 800 200 A 300 80 0 1 1 200 200" />
          </motion.circle>
          <motion.circle r="4" fill="#3B82F6" filter="drop-shadow(0 0 8px #3B82F6)">
            <animateMotion dur="8s" repeatCount="indefinite" begin="4s" path="M 200 200 A 300 80 0 1 1 800 200 A 300 80 0 1 1 200 200" />
          </motion.circle>

        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-7xl font-heading font-light tracking-tighter text-white mb-16 max-w-4xl"
        >
          Every recovered material moves us closer to a <span className="font-bold">circular future.</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <button className="px-10 py-5 bg-white text-black font-heading font-bold text-lg uppercase tracking-widest rounded flex items-center justify-center gap-3 hover:bg-accent-primary transition-colors">
            Become a Partner <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-10 py-5 bg-transparent border border-white/20 text-white font-heading font-bold text-lg uppercase tracking-widest rounded flex items-center justify-center gap-3 hover:border-white transition-colors">
            Join Our Mission
          </button>
        </motion.div>

      </div>
    </section>
  );
}
