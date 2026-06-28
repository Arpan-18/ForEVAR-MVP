"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Recycle, Factory, MapPin } from 'lucide-react';

export default function MarketplaceBenefits() {
  const cards = [
    {
      title: "Waste Generators",
      description: "Recover more value from recyclable waste.",
      icon: <Building2 className="w-10 h-10 text-accent-primary" />
    },
    {
      title: "Recyclers",
      description: "Receive verified high-quality feedstock.",
      icon: <Recycle className="w-10 h-10 text-accent-primary" />
    },
    {
      title: "Manufacturers",
      description: "Access trusted recycled materials.",
      icon: <Factory className="w-10 h-10 text-accent-primary" />
    },
    {
      title: "Cities & Institutions",
      description: "Increase recovery while reducing landfill waste.",
      icon: <MapPin className="w-10 h-10 text-accent-primary" />
    }
  ];

  return (
    <section className="relative w-full py-32 bg-[#020202] border-t border-white/5 overflow-hidden">
      
      {/* Abstract Background Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(124,255,79,0.03)_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.03)_0%,_transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        <div className="mb-24">
          <span className="text-text-secondary font-mono text-sm tracking-widest uppercase mb-4 block">Ecosystem Value</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter text-white">
            Who Benefits?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-10 hover:border-white/20 hover:bg-[#111] transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                {card.icon}
              </div>
              <div className="mb-12">
                {card.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                {card.title}
              </h3>
              <p className="text-text-secondary font-body font-light text-lg">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
