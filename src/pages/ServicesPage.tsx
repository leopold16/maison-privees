import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ServicesHero } from '../components/services/ServicesHero';
import { ServicesList } from '../components/services/ServicesList';
import { ExclusiveExperiences } from '../components/services/ExclusiveExperiences';

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <ServicesHero />
        <ServicesList />
        <ExclusiveExperiences />
      </main>
      <Footer />
    </div>
  );
}