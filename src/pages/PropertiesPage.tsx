import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { PropertiesHero } from '../components/properties/PropertiesHero';
import { PropertyList } from '../components/properties/PropertyList';
import { PropertyFilters } from '../components/properties/PropertyFilters';

export function PropertiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <PropertiesHero />
        <PropertyFilters />
        <PropertyList />
      </main>
      <Footer />
    </div>
  );
}