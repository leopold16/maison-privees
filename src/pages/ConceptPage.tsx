import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ConceptHero } from '../components/concept/ConceptHero';
import { HybridModel } from '../components/concept/HybridModel';
import { InvestorBenefits } from '../components/concept/InvestorBenefits';
import { ModelComparison } from '../components/concept/ModelComparison';

export function ConceptPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <ConceptHero />
        <HybridModel />
        <InvestorBenefits />
        <ModelComparison />
      </main>
      <Footer />
    </div>
  );
}