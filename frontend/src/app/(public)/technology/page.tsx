import React from 'react';
import { Cpu, Eye, Network, Share2, Layers } from 'lucide-react';

export default function TechnologyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-20 px-6 container mx-auto max-w-5xl text-center">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
          The <span className="text-gradient">Intelligence</span> Layer
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary font-body max-w-3xl mx-auto">
          Combining edge AI, computer vision, and distributed ledger technologies to create verifiable waste quality data.
        </p>
      </section>

      {/* Tech Stack Pillars */}
      <section className="py-20 bg-secondary-bg border-y border-border-subtle">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TechPillar 
              title="Computer Vision"
              description="Real-time material classification at the point of generation, trained specifically on India's diverse waste streams."
              icon={<Eye className="w-8 h-8 text-accent-primary" />}
              capabilities={[
                "Sub-second classification latency",
                "Contamination percentage scoring",
                "Material composition estimates",
                "Continuous federated learning"
              ]}
            />
            <TechPillar 
              title="Quality Engine"
              description="The algorithmic core that assigns dynamic quality scores and pricing bands to each verifiable waste lot."
              icon={<Cpu className="w-8 h-8 text-accent-primary" />}
              capabilities={[
                "0-100 deterministic scoring",
                "Automated anomaly detection",
                "Dynamic market pricing feeds",
                "Historical degradation modeling"
              ]}
            />
            <TechPillar 
              title="Traceability Layer"
              description="Immutable data ledger ensuring EPR compliance and carbon credit verification from generator to processor."
              icon={<Network className="w-8 h-8 text-accent-primary" />}
              capabilities={[
                "Cryptographic lot signatures",
                "GPS and timestamp validation",
                "Append-only audit trails",
                "CPCB-compliant reporting formats"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Future Hardware Layer */}
      <section className="py-32 bg-primary-bg relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-primary/20 via-primary-bg to-primary-bg"></div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Hardware Infrastructure Roadmap</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-16">
            Software is only the beginning. Our future hardware infrastructure will automate physical separation and material recovery at national scale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="glass-panel p-8 glow-hover">
              <Share2 className="w-10 h-10 text-accent-primary mb-6" />
              <h3 className="text-2xl font-heading font-bold mb-4">Autonomous Segregation Bins</h3>
              <p className="text-text-secondary mb-4">
                Smart collection infrastructure for institutions and campuses that physically sorts materials at the source using pneumatic and mechanical routing.
              </p>
              <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-accent-secondary">
                Target: 2027
              </div>
            </div>
            
            <div className="glass-panel p-8 glow-hover">
              <Layers className="w-10 h-10 text-accent-primary mb-6" />
              <h3 className="text-2xl font-heading font-bold mb-4">Robotic Recovery Systems</h3>
              <p className="text-text-secondary mb-4">
                High-throughput optical sorting arms designed for Material Recovery Facilities (MRFs) to handle unstructured municipal solid waste.
              </p>
              <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-accent-secondary">
                Target: 2029
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TechPillar({ title, description, icon, capabilities }: { title: string, description: string, icon: React.ReactNode, capabilities: string[] }) {
  return (
    <div className="glass-panel p-8 flex flex-col h-full glow-hover">
      <div className="bg-primary-bg w-16 h-16 rounded-xl flex items-center justify-center border border-border-subtle mb-6 shadow-inner shadow-accent-primary/10">
        {icon}
      </div>
      <h3 className="text-2xl font-heading font-bold mb-3">{title}</h3>
      <p className="text-text-secondary mb-8 flex-grow">{description}</p>
      
      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">Core Capabilities</h4>
        <ul className="space-y-3">
          {capabilities.map((cap, idx) => (
            <li key={idx} className="flex items-start text-sm text-text-secondary">
              <span className="text-accent-primary mr-2 mt-0.5">•</span>
              {cap}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
