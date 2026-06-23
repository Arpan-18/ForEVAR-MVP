import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import NetworkBackground from '@/components/three/NetworkBackground';
import { ArrowRight, BarChart3, ShieldCheck, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        <NetworkBackground />
        
        <div className="relative z-10 container mx-auto px-6 max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter mb-6">
            India&apos;s Waste Problem Isn&apos;t Waste. <br />
            <span className="text-gradient">It&apos;s Quality.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-10 font-body">
            Building the intelligence layer that transforms waste into verified economic value.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="accent" size="lg" className="w-full sm:w-auto text-lg group">
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/technology">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg text-white border-white/20">
                Explore The Vision
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The Broken Chain Section */}
      <section className="py-32 bg-secondary-bg border-y border-border-subtle">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">The Broken Chain</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Less than 20% of recyclable value is recovered because waste arrives contaminated, unsorted, and unverified.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center opacity-80">
            {['Generator', 'Collection', 'Transfer', 'Recycler', 'Processing'].map((stage, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-border-subtle flex items-center justify-center mb-4 bg-primary-bg">
                  <span className="text-xl font-bold">{idx + 1}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg">{stage}</h3>
                {idx < 4 && (
                  <div className="hidden md:block w-full h-px bg-gradient-to-r from-border-subtle to-transparent absolute right-0 top-8 -z-10" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-3xl font-heading font-bold text-accent-primary">The problem is not waste. The problem is quality.</h3>
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-32 bg-primary-bg relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard 
              value="₹35,000+ Cr" 
              label="India Solid Waste Market" 
              icon={<BarChart3 className="w-6 h-6 text-accent-primary" />} 
            />
            <StatCard 
              value="8.4%" 
              label="Plastic Recycling CAGR" 
              icon={<Zap className="w-6 h-6 text-accent-primary" />} 
            />
            <StatCard 
              value="₹4,500+ Cr" 
              label="EPR Compliance Market" 
              icon={<ShieldCheck className="w-6 h-6 text-accent-primary" />} 
            />
            <StatCard 
              value="₹20,000+ Cr" 
              label="Materials Trading (Unorganised)" 
              icon={<BarChart3 className="w-6 h-6 text-accent-primary" />} 
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ value, label, icon }: { value: string, label: string, icon: React.ReactNode }) {
  return (
    <div className="glass-panel p-8 glow-hover group cursor-default">
      <div className="mb-4 bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <div className="text-4xl font-heading font-bold text-white mb-2 group-hover:text-accent-primary transition-colors">
        {value}
      </div>
      <div className="text-text-secondary font-medium">
        {label}
      </div>
    </div>
  );
}
