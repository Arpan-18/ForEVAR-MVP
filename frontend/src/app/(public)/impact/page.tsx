"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { Target, TrendingUp, RefreshCw, Factory } from 'lucide-react';

export default function ImpactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 px-6 container mx-auto max-w-5xl text-center">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
          Measuring <span className="text-gradient">Real</span> Impact
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary font-body max-w-3xl mx-auto mb-16">
          We don&apos;t just track waste. We measure the economic and environmental value recovered by our infrastructure network.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <ImpactCounter target={500} label="Tonnes Diverted" suffix=" t" />
          <ImpactCounter target={150} label="Quality Plastic Recovered" suffix=" t" />
          <ImpactCounter target={750} label="CO₂ Avoided" suffix=" tCO₂e" />
          <ImpactCounter target={40} label="Recycler Revenue (₹)" prefix="₹" suffix="L" />
        </div>
      </section>

      <section className="py-20 bg-secondary-bg border-y border-border-subtle">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">The Industry Opportunity</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 glow-hover">
              <TrendingUp className="w-10 h-10 text-accent-primary mb-6" />
              <h3 className="text-2xl font-heading font-bold mb-4">Economic Unlock</h3>
              <p className="text-text-secondary">
                By standardising waste quality, we reduce contamination write-offs for recyclers by an estimated 30%, unlocking thousands of crores in previously lost margin.
              </p>
            </div>
            <div className="glass-panel p-8 glow-hover">
              <RefreshCw className="w-10 h-10 text-accent-primary mb-6" />
              <h3 className="text-2xl font-heading font-bold mb-4">Circular Transition</h3>
              <p className="text-text-secondary">
                Verified high-quality feedstock allows fast-moving consumer goods (FMCG) companies to actually use recycled plastics in their packaging, closing the loop.
              </p>
            </div>
            <div className="glass-panel p-8 glow-hover">
              <Target className="w-10 h-10 text-accent-primary mb-6" />
              <h3 className="text-2xl font-heading font-bold mb-4">EPR Authenticity</h3>
              <p className="text-text-secondary">
                Our cryptographic lot signatures eliminate double-counting and fraud in the Extended Producer Responsibility (EPR) credit market.
              </p>
            </div>
            <div className="glass-panel p-8 glow-hover">
              <Factory className="w-10 h-10 text-accent-primary mb-6" />
              <h3 className="text-2xl font-heading font-bold mb-4">Processing Efficiency</h3>
              <p className="text-text-secondary">
                Waste-to-energy and Bio-CNG plants can operate at higher capacities with predictable, verified feedstock compositions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ImpactCounter({ target, label, prefix = "", suffix = "" }: { target: number, label: string, prefix?: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="glass-panel p-8 border-accent-primary/20 bg-accent-primary/5">
      <div className="text-5xl font-heading font-bold text-white mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-accent-primary font-medium">{label}</div>
    </div>
  );
}
