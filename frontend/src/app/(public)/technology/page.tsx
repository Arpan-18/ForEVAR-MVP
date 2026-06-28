import React from 'react';
import TechnologyHero from '@/components/technology/TechnologyHero';
import IntelligenceInAction from '@/components/technology/IntelligenceInAction';
import IntelligentRecoveryPathways from '@/components/technology/IntelligentRecoveryPathways';
import InfrastructureRoadmap from '@/components/technology/InfrastructureRoadmap';

export default function TechnologyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <TechnologyHero />

      {/* Screen 2: Protagonist Journey */}
      <IntelligenceInAction />

      {/* Screen 3: Intelligent Recovery Pathways */}
      <IntelligentRecoveryPathways />

      {/* Screen 4: Infrastructure Roadmap */}
      <InfrastructureRoadmap />
    </div>
  );
}
