"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function MarketplaceCTA() {
  return (
    <section className="relative w-full py-48 bg-[#020202] border-t border-white/5 flex items-center justify-center overflow-hidden">
      
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter text-white mb-8"
        >
          Build the Future of <br />
          <span className="text-accent-primary">Recovery Together.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-text-secondary font-body font-light max-w-3xl mb-16"
        >
          Whether you generate waste, recover materials or manufacture sustainable products, the Recovery Exchange is designed to connect every participant through trust and transparency.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <button className="px-10 py-5 bg-accent-primary text-black font-heading font-bold text-lg uppercase tracking-widest rounded flex items-center justify-center gap-3 hover:bg-white transition-colors">
            Become a Partner <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-10 py-5 bg-transparent border border-white/20 text-white font-heading font-bold text-lg uppercase tracking-widest rounded flex items-center justify-center gap-3 hover:border-white transition-colors">
            Contact Our Team
          </button>
        </motion.div>

      </div>
    </section>
  );
}
