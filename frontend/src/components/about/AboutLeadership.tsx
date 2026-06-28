"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function AboutLeadership() {
  const row1 = [
    { name: "Anoushka Polukonda", role: "Chief Executive Officer", responsibility: "Leading the global transition to verified circularity.", hasLinkedin: true, image: "/team/Anoushka_about.png" },
    { name: "Arpan Mondal", role: "Chief Technology Officer", responsibility: "Architecting the intelligence and verification platform.", hasLinkedin: true, image: "/team/Arpan_about.png" },
    { name: "Sounak Saha", role: "Chief Operating Officer", responsibility: "Scaling recovery networks across global markets.", hasLinkedin: true, image: "/team/Sounak_about.png" },
    { name: "Soumadip Sarkar", role: "Chief Marketing Officer", responsibility: "Shaping the narrative of the new recovery economy.", hasLinkedin: true, image: "/team/Soumadip_about.jpg" }
  ];

  const row2 = [
    { name: "Rajkumar Daniel", role: "Public Relations", responsibility: "Building institutional trust and public transparency.", hasLinkedin: true, image: "/team/Daniel_about.jpg" },
    { name: "Neha Siddiqui", role: "Environmental Strategy", responsibility: "Ensuring measurable, real-world impact.", hasLinkedin: false, image: "/team/Neha_about.jpg" },
    { name: "Samriddhi Khanna", role: "Chief of Design", responsibility: "Crafting intuitive and premium user experiences.", hasLinkedin: true, image: "/team/Samridhi_about.png" }
  ];

  return (
    <section className="relative w-full py-32 bg-[#020202] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-light tracking-tighter text-white mb-6">
            The Leadership <span className="font-bold">Team.</span>
          </h2>
          <p className="text-lg text-text-secondary font-body font-light max-w-2xl mx-auto">
            A collective of technologists, environmental scientists, and operators committed to building the future of material recovery.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:gap-12 items-center">
          
          {/* Row 1: 4 Cards */}
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {row1.map((leader, index) => (
              <LeaderCard key={index} leader={leader} index={index} />
            ))}
          </div>

          {/* Row 2: 3 Cards (Centered) */}
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {row2.map((leader, index) => (
              <LeaderCard key={index} leader={leader} index={index + 4} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function LeaderCard({ leader, index }: { leader: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group relative w-full sm:w-[calc(50%-12px)] lg:w-[300px] h-[450px] bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-accent-primary/50"
    >
      {/* Soft Green Glow on Hover */}
      <div className="absolute inset-0 bg-accent-primary/0 group-hover:bg-accent-primary/10 transition-colors duration-500 z-0" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent z-10" />

      {/* Photo Placeholder (Zoom on hover) */}
      <div className="absolute inset-0 bg-[#111] overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center opacity-30 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700 grayscale group-hover:grayscale-0"
          style={{ backgroundImage: `url(${leader.image})` }}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-xl font-heading font-bold text-white">
            {leader.name}
          </h3>
          {leader.hasLinkedin && (
            <a href="#" className="text-white/40 hover:text-accent-primary transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
        <div className="text-accent-primary text-xs font-mono uppercase tracking-widest mb-4">
          {leader.role}
        </div>
        <p className="text-sm text-text-secondary font-body font-light leading-snug">
          {leader.responsibility}
        </p>
      </div>
    </motion.div>
  );
}
