"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building2, Factory, Recycle, ShieldCheck, Database, Coins } from 'lucide-react';

export default function MarketplaceHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // We make the section tall to allow scrolling zoom
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // As the user scrolls, the camera zooms into the "Verified Material" flow,
  // transitioning perfectly into the next section.
  const svgScale = useTransform(scrollYProgress, [0, 0.8, 1], [1, 3, 5]);
  const svgX = useTransform(scrollYProgress, [0, 0.8, 1], [0, -100, -300]);
  const svgOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Highlight logic
  const isDimmed = (node: string) => {
    if (!hoveredNode) return false;
    if (hoveredNode === 'all') return false;
    
    // Define connections
    const paths = {
      'generator': ['generator', 'token', 'exchange'],
      'recycler': ['exchange', 'recycler'],
      'manufacturer': ['exchange', 'manufacturer'],
      'exchange': ['generator', 'token', 'exchange', 'recycler', 'manufacturer']
    };

    // @ts-ignore
    const activePaths = paths[hoveredNode] || [];
    return !activePaths.includes(node);
  };

  return (
    <section ref={containerRef} className="relative w-full h-[200vh] bg-[#020202]">
      
      {/* Sticky view */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col lg:flex-row bg-[#020202]">
        
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_rgba(59,130,246,0.05)_0%,_transparent_60%)]" />
        </div>

        {/* LEFT 40%: EDITORIAL TYPOGRAPHY */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="w-full lg:w-[40%] h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 lg:pt-0 z-20 relative pointer-events-none"
        >
          <div className="pointer-events-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 tracking-tighter leading-[1.1] text-white">
              The Recovery <br />
              <span className="text-text-secondary">Exchange.</span>
            </h1>
            
            <p className="text-xl text-accent-primary font-heading font-medium mb-6">
              Connecting waste generators with recovery partners through verified material intelligence.
            </p>

            <p className="text-lg text-text-secondary font-body font-light leading-relaxed max-w-lg mb-12">
              Every verified material follows a trusted journey—from generation to recovery—through one connected platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-accent-primary text-black font-heading font-bold text-sm uppercase tracking-widest rounded hover:bg-white transition-colors">
                Become a Partner
              </button>
              <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-heading font-bold text-sm uppercase tracking-widest rounded hover:border-white transition-colors">
                Explore the Workflow
              </button>
            </div>
          </div>
        </motion.div>

        {/* RIGHT 60%: THE EXCHANGE ENGINE */}
        <div className="w-full lg:w-[60%] h-full relative z-10 flex items-center justify-center">
          
          {/* Microcopy Floating Principles */}
          <motion.div style={{ opacity: textOpacity }} className="absolute right-12 top-24 text-right hidden lg:block">
            <div className="text-accent-primary font-mono text-xs tracking-widest uppercase mb-1 flex justify-end items-center gap-2"><ShieldCheck className="w-4 h-4"/> Verified Quality</div>
            <div className="text-text-secondary text-sm font-light">Every material is quality-assured before trading.</div>
          </motion.div>
          <motion.div style={{ opacity: textOpacity }} className="absolute right-12 bottom-24 text-right hidden lg:block">
            <div className="text-[#FBBF24] font-mono text-xs tracking-widest uppercase mb-1 flex justify-end items-center gap-2"><Coins className="w-4 h-4"/> Trusted Transactions</div>
            <div className="text-text-secondary text-sm font-light">Every participant knows exactly what they receive.</div>
          </motion.div>
          <motion.div style={{ opacity: textOpacity }} className="absolute left-12 bottom-24 text-left hidden lg:block">
            <div className="text-[#3B82F6] font-mono text-xs tracking-widest uppercase mb-1 flex items-center gap-2"><Database className="w-4 h-4"/> Transparent Recovery</div>
            <div className="text-text-secondary text-sm font-light">Traceable from generation to recovery.</div>
          </motion.div>

          <motion.div 
            style={{ scale: svgScale, x: svgX, opacity: svgOpacity }} 
            className="w-full h-full max-w-[800px] max-h-[800px] absolute inset-0 m-auto flex items-center justify-center"
          >
            <svg viewBox="0 0 1000 600" className="w-full h-full overflow-visible">
              
              <defs>
                <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(59,130,246,0)" />
                  <stop offset="50%" stopColor="rgba(59,130,246,0.8)" />
                  <stop offset="100%" stopColor="rgba(59,130,246,0)" />
                </linearGradient>
              </defs>

              {/* PATHS */}
              <g className="paths">
                {/* Gen to Token */}
                <line x1="150" y1="300" x2="350" y2="300" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                {/* Token to Exchange */}
                <line x1="350" y1="300" x2="550" y2="300" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                {/* Exchange to Recycler */}
                <path d="M 550 300 C 650 300, 700 150, 850 150" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                {/* Exchange to Manufacturer */}
                <path d="M 550 300 C 650 300, 700 450, 850 450" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />

                {/* --- 1. DATA FLOW (Blue Continuous Pulses) --- */}
                <motion.g style={{ opacity: isDimmed('generator') ? 0.1 : 1 }} className="transition-opacity duration-300">
                  <rect x="150" y="299" width="400" height="2" fill="url(#blueGlow)">
                    <animate attributeName="x" values="150;550" dur="2s" repeatCount="indefinite" />
                  </rect>
                </motion.g>

                {/* --- 2. PAYMENT FLOW (Golden dashed line backwards) --- */}
                <motion.g style={{ opacity: isDimmed('recycler') ? 0.1 : 1 }} className="transition-opacity duration-300">
                  <path d="M 850 150 C 700 150, 650 300, 550 300" fill="none" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="4 8" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" values="0;24" dur="1s" repeatCount="indefinite" />
                  </path>
                  <line x1="550" y1="300" x2="150" y2="300" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="4 8" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" values="0;24" dur="1s" repeatCount="indefinite" />
                  </line>
                </motion.g>

                {/* --- 3. MATERIAL FLOW (Green Glowing Particles forward) --- */}
                <motion.g style={{ opacity: isDimmed('generator') ? 0.1 : 1 }} className="transition-opacity duration-300">
                  <circle r="4" fill="#7CFF4F" filter="drop-shadow(0 0 6px #7CFF4F)">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M 150 300 L 550 300" />
                  </circle>
                </motion.g>
                <motion.g style={{ opacity: isDimmed('recycler') ? 0.1 : 1 }} className="transition-opacity duration-300">
                  <circle r="4" fill="#7CFF4F" filter="drop-shadow(0 0 6px #7CFF4F)">
                    <animateMotion dur="4s" repeatCount="indefinite" begin="2s" path="M 550 300 C 650 300, 700 150, 850 150" />
                  </circle>
                </motion.g>
                <motion.g style={{ opacity: isDimmed('manufacturer') ? 0.1 : 1 }} className="transition-opacity duration-300">
                  <circle r="4" fill="#7CFF4F" filter="drop-shadow(0 0 6px #7CFF4F)">
                    <animateMotion dur="4s" repeatCount="indefinite" begin="2.5s" path="M 550 300 C 650 300, 700 450, 850 450" />
                  </circle>
                </motion.g>
              </g>

              {/* NODES */}
              <g className="nodes cursor-pointer">
                
                {/* 1. Generator */}
                <motion.g 
                  transform="translate(150, 300)"
                  onMouseEnter={() => setHoveredNode('generator')}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{ opacity: isDimmed('generator') ? 0.3 : 1 }}
                  className="transition-opacity duration-300"
                >
                  <circle cx="0" cy="0" r="40" fill="#0A0A0A" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <foreignObject x="-20" y="-20" width="40" height="40">
                    <Building2 className="w-full h-full text-white/50" />
                  </foreignObject>
                  <text x="0" y="60" fill="white" fontSize="12" textAnchor="middle" className="font-mono tracking-widest uppercase">Generator</text>
                </motion.g>

                {/* 2. Verified Token */}
                <motion.g 
                  transform="translate(350, 300)"
                  onMouseEnter={() => setHoveredNode('token')}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{ opacity: isDimmed('token') ? 0.3 : 1 }}
                  className="transition-opacity duration-300"
                >
                  <circle cx="0" cy="0" r="30" fill="rgba(124,255,79,0.1)" stroke="#7CFF4F" strokeWidth="1" strokeDasharray="4 4" className="animate-spin-slow" />
                  <circle cx="0" cy="0" r="15" fill="#7CFF4F" />
                  <text x="0" y="55" fill="#7CFF4F" fontSize="10" textAnchor="middle" className="font-mono tracking-widest uppercase">Verified Material</text>
                </motion.g>

                {/* 3. Exchange */}
                <motion.g 
                  transform="translate(550, 300)"
                  onMouseEnter={() => setHoveredNode('exchange')}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{ opacity: isDimmed('exchange') ? 0.3 : 1 }}
                  className="transition-opacity duration-300"
                >
                  <rect x="-50" y="-50" width="100" height="100" rx="20" fill="#050505" stroke="rgba(59,130,246,0.3)" strokeWidth="2" />
                  <circle cx="0" cy="0" r="25" fill="rgba(59,130,246,0.1)" />
                  <foreignObject x="-15" y="-15" width="30" height="30">
                    <Database className="w-full h-full text-[#3B82F6]" />
                  </foreignObject>
                  <text x="0" y="70" fill="white" fontSize="14" textAnchor="middle" className="font-heading font-bold tracking-widest uppercase">Recovery Exchange</text>
                </motion.g>

                {/* 4. Recycler */}
                <motion.g 
                  transform="translate(850, 150)"
                  onMouseEnter={() => setHoveredNode('recycler')}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{ opacity: isDimmed('recycler') ? 0.3 : 1 }}
                  className="transition-opacity duration-300"
                >
                  <circle cx="0" cy="0" r="40" fill="#0A0A0A" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <foreignObject x="-20" y="-20" width="40" height="40">
                    <Recycle className="w-full h-full text-white/50" />
                  </foreignObject>
                  <text x="0" y="60" fill="white" fontSize="12" textAnchor="middle" className="font-mono tracking-widest uppercase">Recycler</text>
                </motion.g>

                {/* 5. Manufacturer */}
                <motion.g 
                  transform="translate(850, 450)"
                  onMouseEnter={() => setHoveredNode('manufacturer')}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{ opacity: isDimmed('manufacturer') ? 0.3 : 1 }}
                  className="transition-opacity duration-300"
                >
                  <circle cx="0" cy="0" r="40" fill="#0A0A0A" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <foreignObject x="-20" y="-20" width="40" height="40">
                    <Factory className="w-full h-full text-white/50" />
                  </foreignObject>
                  <text x="0" y="60" fill="white" fontSize="12" textAnchor="middle" className="font-mono tracking-widest uppercase">Manufacturer</text>
                </motion.g>

              </g>
            </svg>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
