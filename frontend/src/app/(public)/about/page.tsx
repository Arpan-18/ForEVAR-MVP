import React from 'react';
import Image from 'next/image';

const founders = [
  { name: 'Anoushka Polukonda', role: 'CEO', image: '/team/Anoushka_about.png' },
  { name: 'Arpan Mondal', role: 'Chief of Technology', image: '/team/Arpan_about.png' },
  { name: 'Sounak Saha', role: 'Chief of Operations', image: '/team/Sounak_about.png' },
  { name: 'Soumadip Sarkar', role: 'Chief of Marketing', image: '/team/Soumadip_about.jpg' },
  { name: 'Rajkumar Daniel', role: 'Public Relations', image: '/team/Daniel_about.jpg' },
  { name: 'Neha Siddiqui', role: 'Environmental Strategy', image: '/team/Neha_about.jpg' },
  { name: 'Samriddhi Khanna', role: 'Chief of Design', image: '/team/Samridhi_about.png' },
];

const advisors = [
  { name: 'Saket Kumar', role: 'Founder Of BarterWater', image: '/team/Saket_about.png' },
  { name: 'Ramesh Kumar Nibhoria', role: 'Managing Director of NISHANT BIOENERGY PRIVATE LIMITED', image: '/team/RameshKrNibhoria.jpg' },
  { name: 'Nitant Mate', role: 'Managing Director at SeaGreen', image: '/team/NitantMate.jpg' },
  { name: 'Prof. Aurobinda Routray', role: 'Prof at IIT Kharagpur', image: '/team/AurobindaRoutray_.jpg' },
  { name: 'Prof. Brajesh kr Dubey', role: 'Prof at IIT Kharagpur', image: '/team/BrajeshKrDubey.jpg' },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 px-6 container mx-auto max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-16 text-center">
          Building the <span className="text-gradient">Operating System</span><br />
          for India&apos;s Circular Economy
        </h1>

        <div className="space-y-16 text-lg md:text-xl text-text-secondary font-body leading-relaxed">
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mb-6">The Problem</h2>
            <p>
              India generates over 60 million tonnes of solid waste annually. Despite growing collection infrastructure, less than 20% of recyclable value is actually recovered. Why? Because waste arrives at recycling facilities contaminated, unsorted, and unverified.
            </p>
            <p className="mt-4">
              This destroys recycler margins, corrupts downstream material quality, and makes EPR (Extended Producer Responsibility) compliance nearly impossible to verify without rampant fraud.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-white mb-6">The Insight</h2>
            <p>
              We realized that India doesn&apos;t have a waste problem. It has a <strong className="text-white">value recovery problem</strong>.
            </p>
            <p className="mt-4">
              A tonne of clean PET plastic is worth 5× a tonne of mixed plastic. The value is in the quality, not the volume. Yet, the entire industry is currently focused on volume. Without verified quality data at the source, the marketplace cannot function efficiently.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-white mb-6">The Vision</h2>
            <p>
              ForEVAR is building the infrastructure layer—combining AI-powered segregation bins, robotic sorting systems, and a digital intelligence platform. We create quality-assured, traceable, and market-ready recyclable feedstock that unlocks real economic value for every stakeholder in the waste chain.
            </p>
            <p className="mt-4">
              We connect waste generators (campuses, restaurants), recyclers, EPR compliance clients, and waste-to-value processing plants through a digital marketplace backed by verified quality data.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary-bg border-y border-border-subtle">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-24">
            {founders.map((founder, i) => (
              <TeamCard key={i} name={founder.name} role={founder.role} image={founder.image} />
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">Our Advisors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {advisors.map((advisor, i) => (
              <TeamCard key={i} name={advisor.name} role={advisor.role} image={advisor.image} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function TeamCard({ name, role, image }: { name: string, role: string, image: string }) {
  return (
    <div className="glass-panel p-6 glow-hover text-center flex flex-col h-full items-center">
      <div className="w-24 h-24 rounded-full border border-border-subtle mb-4 overflow-hidden relative bg-primary-bg">
        <Image 
          src={image} 
          alt={name} 
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-lg font-heading font-bold text-white mb-1">{name}</h3>
      <div className="text-accent-primary text-sm font-medium">{role}</div>
    </div>
  );
}
