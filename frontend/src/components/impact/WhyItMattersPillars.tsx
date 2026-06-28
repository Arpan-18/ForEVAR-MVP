"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function WhyItMattersPillars() {
  const pillars = [
    { title: "Material Recovery", desc: "Volume of verifiable material diverted from waste streams." },
    { title: "Circular Resource Use", desc: "Percentage of material successfully re-entering manufacturing." },
    { title: "Cleaner Cities", desc: "Reduction in local landfill dependence and informal dumping." },
    { title: "Recovery Economy", desc: "Economic value generated for waste originators and processors." },
    { title: "Traceability", desc: "Immutable tracking from point of generation to final recovery." },
    { title: "Environmental Benefits", desc: "Measured reduction in virgin resource extraction and emissions." }
  ];

  return (
    <section className="relative w-full py-32 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-heading font-light tracking-tighter text-white mb-6">
            Measuring <span className="font-bold">Progress.</span>
          </h2>
          <p className="text-lg text-text-secondary font-body font-light max-w-2xl">
            As the ForEVAR network scales, these impact pillars will reflect the real-time, verified outcomes of intelligent material recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="w-full h-[1px] bg-white/10 mb-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-0 bg-white group-hover:w-full transition-all duration-1000 ease-out" />
              </div>
              
              {/* Placeholder for future live metric */}
              <div className="text-5xl font-heading font-light text-white/20 mb-4 group-hover:text-white/40 transition-colors duration-700">
                —
              </div>

              <h3 className="text-2xl font-heading font-bold text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-text-secondary font-body font-light leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
