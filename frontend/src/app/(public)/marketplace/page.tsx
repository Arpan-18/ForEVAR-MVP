import React from 'react';
import MarketplaceHero from '@/components/marketplace/MarketplaceHero';
import MarketplaceStoryWorkflow from '@/components/marketplace/MarketplaceStoryWorkflow';
import MarketplaceStoryParticipants from '@/components/marketplace/MarketplaceStoryParticipants';
import MarketplaceCTA from '@/components/marketplace/MarketplaceCTA';

export default function MarketplacePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Screen 1: The Recovery Exchange */}
      <MarketplaceHero />

      {/* Screen 2: How One Recovery Happens */}
      <MarketplaceStoryWorkflow />

      {/* Screen 3: Who Can Join */}
      <MarketplaceStoryParticipants />

      {/* Screen 4: Final CTA */}
      <MarketplaceCTA />
    </div>
  );
}
