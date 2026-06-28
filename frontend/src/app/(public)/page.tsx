"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import ValueRecoveryNetwork from '@/components/three/ValueRecoveryNetwork';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Box, BarChart3, Database, Workflow, ChevronRight } from 'lucide-react';
import TheHiddenValue from '@/components/home/TheHiddenValue';
import TheBrokenChain from '@/components/home/TheBrokenChain';
import TheEcosystemReveal from '@/components/home/TheEcosystemReveal';
import TheOutcomes from '@/components/home/TheOutcomes';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  // Hero scroll experience
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

  return (
    <div className="flex flex-col min-h-screen bg-[#020202] text-white selection:bg-accent-primary selection:text-black">
      
      {/* SECTION 1: WHAT WE DO (HERO) */}
      <section className="relative w-full h-screen flex flex-col justify-center overflow-hidden bg-[#020202]">
        {/* Background Layer: Engineering Grid & Planet Edge */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        
        {/* Planet Horizon Edge at the bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150vw] h-[30vh] md:w-[120vw] md:h-[40vh] bg-[radial-gradient(ellipse_at_top,_rgba(124,255,79,0.08)_0%,_transparent_70%)] rounded-[100%] blur-[2px] opacity-40 z-0 pointer-events-none" />
        <div className="absolute -bottom-[20vh] left-1/2 -translate-x-1/2 w-[150vw] h-[30vh] md:w-[120vw] md:h-[40vh] border-t border-accent-primary/20 rounded-[100%] z-0 pointer-events-none" />

        {/* Middle Layer: Volumetric Light behind Network */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-[radial-gradient(circle_at_center,_rgba(124,255,79,0.06)_0%,_transparent_60%)] z-0 pointer-events-none translate-x-[20%]" />

        <ValueRecoveryNetwork />
        
        {/* Foreground: Typography & CTAs */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-[90rem] h-full flex items-center mt-4 md:-mt-20 pointer-events-none">
          <motion.div 
            style={{ opacity: heroOpacity, y: heroY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-[50%] lg:w-[45%] flex flex-col items-start text-left pointer-events-auto lg:-ml-4"
          >
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-heading font-bold tracking-tighter mb-6 leading-[1.1] text-white">
              Building the <br />
              <span className="text-accent-primary">Infrastructure</span> <br />
              of Value Recovery
            </h1>
            
            <p className="text-lg md:text-xl text-text-secondary mb-10 font-body font-light leading-relaxed max-w-[450px]">
              ForEVAR&apos;s intelligence layer verifies, traces, and connects materials—enabling trust, transparency, and value across the circular economy.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-start gap-6 w-full">
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.3 }}>
                  <Button variant="accent" size="lg" className="w-full sm:w-auto text-lg h-14 px-6 rounded-md bg-accent-primary text-black hover:bg-accent-primary/90 transition-all font-semibold border-0 flex items-center justify-center shadow-[0_4px_20px_0_rgba(124,255,79,0.2)]">
                    Partner With Us <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="#problem" className="w-full sm:w-auto">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.3 }}>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-6 rounded-md bg-transparent border border-white/20 text-text-secondary hover:text-white hover:border-white transition-all font-medium flex items-center justify-center">
                    Explore Our Ecosystem <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE HIDDEN VALUE (SCROLL STORYTELLING) */}
      <TheHiddenValue />

      {/* SECTION 3: THE BROKEN CHAIN (SCROLL STORYTELLING) */}
      <TheBrokenChain />

      {/* SECTION 4: THE ECOSYSTEM REVEAL (SCROLL STORYTELLING) */}
      <TheEcosystemReveal />

      {/* FINAL NARRATIVE & CTA */}
      <TheOutcomes />

    </div>
  );
}
