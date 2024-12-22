import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { InvestmentHero } from '../components/investment/InvestmentHero';
import { InvestmentOpportunities } from '../components/investment/InvestmentOpportunities';
import { CaseStudies } from '../components/investment/CaseStudies';
import { ManagementModel } from '../components/investment/ManagementModel';

export function InvestmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <InvestmentHero />
        <InvestmentOpportunities />
        <CaseStudies />
        <ManagementModel />
      </main>
      <Footer />
    </div>
  );
}