import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/home/HeroSection';
import { PropertyShowcase } from './components/home/PropertyShowcase';

function App() {
  return (
    <div className="min-h-screen bg-barnes-green text-white">
      <Header />
      <main>
        <HeroSection />
        <PropertyShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;