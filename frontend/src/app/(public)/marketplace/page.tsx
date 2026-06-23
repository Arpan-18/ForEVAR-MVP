import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Lock, FileBadge, CheckCircle, Package } from 'lucide-react';

export default function MarketplacePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 px-6 container mx-auto max-w-5xl text-center">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
          The <span className="text-gradient">Verified</span> Marketplace
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary font-body max-w-3xl mx-auto mb-10">
          The first digital exchange where waste is traded based on algorithmically verified quality scores, not just volume.
        </p>
        <Link href="/login">
          <Button variant="accent" size="lg" className="text-lg">
            <Lock className="mr-2 w-5 h-5" />
            Login to Transact
          </Button>
        </Link>
      </section>

      <section className="py-20 bg-secondary-bg border-y border-border-subtle">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-16 text-center">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureStep 
              step="1"
              title="Verified Generation"
              description="Waste lots are quality-scored at the source by ForEVAR's edge AI infrastructure, generating an immutable lot ID."
              icon={<Package className="w-8 h-8 text-accent-primary" />}
            />
            <FeatureStep 
              step="2"
              title="Market Discovery"
              description="Recyclers browse lots filtered by material composition and verified contamination percentage, ensuring zero surprises."
              icon={<FileBadge className="w-8 h-8 text-accent-primary" />}
            />
            <FeatureStep 
              step="3"
              title="EPR Compliance"
              description="Every transaction generates an automatic, cryptographic audit trail suitable for instant CPCB compliance reporting."
              icon={<CheckCircle className="w-8 h-8 text-accent-primary" />}
            />
          </div>
        </div>
      </section>

      <section className="py-32 bg-primary-bg">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">Marketplace Preview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MockListingCard category="PET Plastic" quality="Grade A" region="Gujarat" quantity="5 - 10 Tonnes" />
            <MockListingCard category="HDPE Plastic" quality="Grade B" region="Maharashtra" quantity="2 - 5 Tonnes" />
            <MockListingCard category="Mixed Paper" quality="Grade A" region="Karnataka" quantity="10+ Tonnes" />
          </div>
          <div className="mt-12">
            <p className="text-text-secondary mb-6">Full pricing, verified supplier identities, and bidding are available to registered partners.</p>
            <Link href="/contact">
              <Button variant="outline">Request Partnership Access</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureStep({ step, title, description, icon }: { step: string, title: string, description: string, icon: React.ReactNode }) {
  return (
    <div className="glass-panel p-8 relative flex flex-col h-full glow-hover">
      <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary-bg border border-border-subtle rounded-full flex items-center justify-center font-heading font-bold text-xl text-accent-primary shadow-lg">
        {step}
      </div>
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-heading font-bold mb-4">{title}</h3>
      <p className="text-text-secondary flex-grow">{description}</p>
    </div>
  );
}

function MockListingCard({ category, quality, region, quantity }: { category: string, quality: string, region: string, quantity: string }) {
  return (
    <div className="glass-panel p-6 text-left opacity-70 hover:opacity-100 transition-opacity">
      <div className="flex justify-between items-start mb-4">
        <div className="bg-white/5 px-3 py-1 rounded text-sm font-medium">{category}</div>
        <div className="text-accent-primary font-bold">{quality}</div>
      </div>
      <div className="space-y-2 text-sm text-text-secondary">
        <div className="flex justify-between">
          <span>Region:</span>
          <span className="text-white">{region}</span>
        </div>
        <div className="flex justify-between">
          <span>Est. Quantity:</span>
          <span className="text-white">{quantity}</span>
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-border-subtle flex justify-center">
        <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Login to View Price</span>
      </div>
    </div>
  );
}
