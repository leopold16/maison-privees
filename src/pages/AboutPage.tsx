import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { AboutHero } from '../components/about/AboutHero';
import { BarnesExpertise } from '../components/about/BarnesExpertise';
import { DedicatedTeam } from '../components/about/DedicatedTeam';
import { Values } from '../components/about/Values';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <AboutHero />
        <BarnesExpertise />
        <DedicatedTeam />
        <Values />
      </main>
      <Footer />
    </div>
  );
}