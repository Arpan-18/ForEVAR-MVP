"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function TheOutcomes() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Parallax for the "Future" background
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={targetRef} className="flex flex-col bg-[#020202] text-white overflow-hidden border-t border-white/5">
      
      {/* =========================================
          PART 1: EVERYONE WINS (PANELS) 
      ========================================= */}
      <section className="py-32 md:py-48 container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tighter leading-tight max-w-3xl">
            When Value Is Recovered, <br />
            <span className="text-text-secondary">Everyone Wins.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-24">
          {[
            {
              title: "Waste Generators",
              points: ["Lower disposal costs", "Higher recovery value", "Better compliance"],
              align: "left"
            },
            {
              title: "Recyclers",
              points: ["Verified feedstock", "Less contamination", "Higher profitability"],
              align: "right"
            },
            {
              title: "Manufacturers",
              points: ["Reliable recycled materials", "Stable supply chain"],
              align: "left"
            },
            {
              title: "Communities",
              points: ["Cleaner cities", "More employment", "Less landfill"],
              align: "right"
            },
            {
              title: "Environment",
              points: ["Higher recovery", "Lower emissions", "Circular resource use"],
              align: "left"
            }
          ].map((panel, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-10%" }}
              className={`flex w-full ${panel.align === 'right' ? 'justify-end' : 'justify-start'}`}
            >
              <div className="w-full md:w-[70%] lg:w-[50%] p-10 md:p-16 border-l-2 border-accent-primary bg-gradient-to-r from-[#0A0A0A] to-transparent">
                <h3 className="text-3xl md:text-4xl font-heading font-bold mb-8">{panel.title}</h3>
                <ul className="space-y-4">
                  {panel.points.map((pt, i) => (
                    <li key={i} className="flex items-center text-lg md:text-xl text-text-secondary font-body font-light">
                      <ChevronRight className="w-5 h-5 text-accent-primary mr-3 opacity-50" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================
          PART 2: WHY NOW? (3 COLUMNS) 
      ========================================= */}
      <section className="py-32 md:py-48 bg-[#050505] border-y border-white/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_rgba(124,255,79,0.03)_0%,_transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold mb-24 tracking-tighter"
          >
            Why Now?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-24">
            {[
              { num: "01", title: "Regulation", desc: "Extended Producer Responsibility is making traceability essential." },
              { num: "02", title: "Technology", desc: "AI and computer vision have become practical for real-world deployment." },
              { num: "03", title: "Economics", desc: "Verified materials are becoming increasingly valuable across global supply chains." }
            ].map((col, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Massive faint number in background */}
                <div className="absolute -top-12 -left-6 text-[8rem] font-heading font-bold text-white/5 select-none pointer-events-none leading-none">
                  {col.num}
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-heading font-bold mb-6 text-white">{col.title}</h3>
                  <p className="text-xl text-text-secondary font-body font-light leading-relaxed">
                    {col.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          PART 3: THE FUTURE WE ARE BUILDING 
      ========================================= */}
      <section className="relative py-48 md:py-64 overflow-hidden flex flex-col items-center justify-center min-h-screen">
        {/* Cinematic Ambient Background */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-[150%] -top-[25%] bg-[radial-gradient(circle_at_center,_rgba(124,255,79,0.08)_0%,_#020202_60%)] pointer-events-none z-0" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tighter mb-24"
          >
            The Future We Are Building
          </motion.h2>

          {/* Abstract Flow Visual */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 opacity-80">
            {[
              "Campuses",
              "Recovery Infrastructure",
              "Manufacturing",
              "Biogas",
              "Cities",
              "Circular Economy"
            ].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-lg md:text-xl font-heading font-medium tracking-wide text-white/90"
                >
                  {step}
                </motion.div>
                {idx < arr.length - 1 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.15 + 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="rotate-90 md:rotate-0 my-2 md:my-0 text-accent-primary/50"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          PART 4: FINAL CTA 
      ========================================= */}
      <section className="py-32 md:py-48 bg-black relative border-t border-white/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-bold tracking-tighter mb-12 leading-[1.1]"
          >
            Join the <br />
            <span className="text-accent-primary">Recovery Network.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-text-secondary font-body font-light leading-relaxed max-w-2xl mx-auto mb-16"
          >
            Whether you&apos;re generating waste, recovering materials, building sustainable products, or investing in circular infrastructure, there&apos;s a place for you in this ecosystem.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-accent-primary text-black font-semibold text-lg px-8 py-4 rounded-md shadow-[0_0_30px_-5px_rgba(124,255,79,0.4)] hover:bg-accent-primary/90 transition-all flex items-center justify-center"
              >
                Become a Partner <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>

            <Link href="#explore" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-transparent border border-white/20 text-white font-medium text-lg px-8 py-4 rounded-md hover:border-white transition-all flex items-center justify-center"
              >
                Explore Technology
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
