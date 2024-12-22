import React from 'react';

export function InvestmentHero() {
  return (
    <section className="relative h-[70vh] bg-barnes-green text-white">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80"
          alt="Luxury Investment"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="font-serif text-6xl md:text-7xl mb-6">
            Investir dans l'Excellence
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Une opportunité unique d'investir dans l'immobilier de prestige 
            avec un modèle innovant de copropriété.
          </p>
        </div>
      </div>
    </section>
  );
}