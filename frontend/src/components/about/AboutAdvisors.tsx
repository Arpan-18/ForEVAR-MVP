"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutAdvisors() {
  const advisors = [
    { 
      name: "Saket Kumar", 
      position: "Founder Of BarterWater", 
      organization: "BarterWater",
      contribution: "Advising on sustainable market dynamics.",
      image: "/team/Saket_about.png"
    },
    { 
      name: "Ramesh Kumar Nibhoria", 
      position: "Managing Director", 
      organization: "NISHANT BIOENERGY PRIVATE LIMITED",
      contribution: "Guiding integration with bio-energy initiatives.",
      image: "/team/RameshKrNibhoria.jpg"
    },
    { 
      name: "Nitant Mate", 
      position: "Managing Director", 
      organization: "SeaGreen",
      contribution: "Providing strategic direction for environmental scaling.",
      image: "/team/NitantMate.jpg"
    },
    { 
      name: "Prof. Aurobinda Routray", 
      position: "Professor", 
      organization: "IIT Kharagpur",
      contribution: "Validating core technology and verification mechanisms.",
      image: "/team/AurobindaRoutray_.jpg"
    },
    { 
      name: "Prof. Brajesh kr Dubey", 
      position: "Professor", 
      organization: "IIT Kharagpur",
      contribution: "Expertise in solid waste management systems.",
      image: "/team/BrajeshKrDubey.jpg"
    }
  ];

  return (
    <section className="relative w-full py-32 bg-[#050505] border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-6xl">
        
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-heading font-light tracking-tighter text-white mb-4">
            Advisory <span className="font-bold">Board.</span>
          </h2>
          <p className="text-sm text-text-secondary font-body font-light max-w-xl">
            Supported by industry veterans and scientific leaders ensuring our infrastructure meets the highest standards of integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advisors.map((advisor, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex items-center gap-6 p-6 bg-[#0A0A0A] border border-white/5 rounded-xl hover:bg-[#0F0F0F] transition-colors group"
            >
              
              {/* Photo Placeholder */}
              <div className="w-20 h-20 shrink-0 rounded-full bg-[#111] overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors">
                <div 
                  className="w-full h-full bg-cover bg-center grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                  style={{ backgroundImage: `url(${advisor.image})` }}
                />
              </div>

              <div>
                <h3 className="text-lg font-heading font-bold text-white mb-1">
                  {advisor.name}
                </h3>
                <div className="text-xs text-white/50 font-mono mb-2 uppercase tracking-wide">
                  {advisor.position} <br />
                  <span className="text-accent-primary">{advisor.organization}</span>
                </div>
                <p className="text-sm text-text-secondary font-body font-light leading-snug">
                  {advisor.contribution}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
