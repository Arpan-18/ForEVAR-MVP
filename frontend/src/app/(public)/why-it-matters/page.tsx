import React from 'react';
import WhyItMattersHero from '@/components/impact/WhyItMattersHero';
import WhyItMattersStory from '@/components/impact/WhyItMattersStory';
import WhyItMattersPillars from '@/components/impact/WhyItMattersPillars';
import WhyItMattersVision from '@/components/impact/WhyItMattersVision';

export default function WhyItMattersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Screen 1: Hero (Ripples) */}
      <WhyItMattersHero />

      {/* Screen 2: One Material. Multiple Outcomes. */}
      <WhyItMattersStory />

      {/* Screen 3: Measuring Progress (Pillars) */}
      <WhyItMattersPillars />

      {/* Screen 4: Future Vision */}
      <WhyItMattersVision />
    </div>
  );
}
