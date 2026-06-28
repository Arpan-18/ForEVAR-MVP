"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function MarketplaceStoryParticipants() {
  const participants = [
    {
      title: "Institutions",
      description: "Recover more value from recyclable materials.",
      // Simple abstract visual: A floating ring
      visual: (
        <div className="w-24 h-24 rounded-full border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:border-white/50 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-700" />
      )
    },
    {
      title: "Recyclers",
      description: "Access trusted, verified feedstock.",
      // Simple abstract visual: A soft glowing square
      visual: (
        <div className="w-20 h-20 bg-white/5 border border-white/10 rotate-45 group-hover:rotate-90 group-hover:border-white/40 group-hover:bg-white/10 transition-all duration-700 shadow-[0_0_30px_rgba(255,255,255,0.02)]" />
      )
    },
    {
      title: "Manufacturers",
      description: "Source reliable recycled materials.",
      // Simple abstract visual: Interlocking circles
      visual: (
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute w-16 h-16 rounded-full border border-white/20 -translate-x-4 group-hover:-translate-x-6 transition-all duration-700" />
          <div className="absolute w-16 h-16 rounded-full border border-white/20 translate-x-4 group-hover:translate-x-6 transition-all duration-700" />
        </div>
      )
    },
    {
      title: "Municipalities & Corporates",
      description: "Build transparent and efficient recovery systems.",
      // Simple abstract visual: A tall elegant pillar/rectangle
      visual: (
        <div className="w-12 h-28 border border-white/20 rounded-full group-hover:h-32 group-hover:border-white/50 transition-all duration-700 shadow-[0_0_30px_rgba(255,255,255,0.02)]" />
      )
    }
  ];

  return (
    <section className="relative w-full py-32 bg-[#020202] border-t border-white/5 overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-light tracking-tighter text-white">
            Who Can <span className="font-bold">Join?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {participants.map((participant, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-[#050505] border border-white/5 rounded-2xl p-10 h-[400px] flex flex-col items-center text-center group hover:bg-[#0A0A0A] transition-colors duration-700"
            >
              
              <div className="flex-1 flex items-center justify-center w-full mb-8">
                {participant.visual}
              </div>

              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-4">
                  {participant.title}
                </h3>
                <p className="text-sm text-text-secondary font-body font-light leading-relaxed">
                  {participant.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
