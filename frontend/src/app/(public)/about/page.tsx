import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutProblem from '@/components/about/AboutProblem';
import AboutInsight from '@/components/about/AboutInsight';
import AboutVision from '@/components/about/AboutVision';
import AboutLeadership from '@/components/about/AboutLeadership';
import AboutAdvisors from '@/components/about/AboutAdvisors';
import AboutCTA from '@/components/about/AboutCTA';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <AboutHero />

      {/* 2. The Problem */}
      <AboutProblem />

      {/* 3. The Insight */}
      <AboutInsight />

      {/* 4. Our Vision */}
      <AboutVision />

      {/* 5. Leadership Team */}
      <AboutLeadership />

      {/* 6. Advisors */}
      <AboutAdvisors />

      {/* 7. Final CTA */}
      <AboutCTA />
    </div>
  );
}
