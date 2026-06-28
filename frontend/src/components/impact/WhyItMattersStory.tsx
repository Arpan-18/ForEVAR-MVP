"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function WhyItMattersStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const storyNodes = [
    { title: "One PET Bottle" },
    { title: "Recovered" },
    { title: "Recycler benefits" },
    { title: "Manufacturer benefits" },
    { title: "Brand achieves sustainability goals" },
    { title: "City becomes cleaner" },
    { title: "Less virgin material extracted" },
    { title: "Jobs created" }
  ];

  return (
    <section className="relative w-full py-48 bg-[#020202] border-t border-white/5">
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center mb-32">
        <h2 className="text-4xl md:text-5xl font-heading font-light tracking-tighter text-white">
          One Material. <br className="md:hidden" />
          <span className="font-bold">Multiple Outcomes.</span>
        </h2>
      </div>

      <div ref={containerRef} className="relative w-full max-w-2xl mx-auto px-6 py-12 flex flex-col items-center">
        
        {/* The connecting vertical line */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/5" />
        <motion.div 
          style={{ height: lineHeight }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-white via-white to-transparent shadow-[0_0_10px_rgba(255,255,255,1)]" 
        />

        <div className="relative w-full flex flex-col gap-24">
          {storyNodes.map((node, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-1/2 flex items-center ${index % 2 === 0 ? 'justify-end pr-8 md:pr-16' : 'justify-start pl-8 md:pl-16'}`}>
                
                {/* Visual Node Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#020202] border-2 border-white rounded-full z-10" />

                <h3 className="text-xl md:text-2xl font-heading font-light text-white text-right">
                  {node.title}
                </h3>
                
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}
