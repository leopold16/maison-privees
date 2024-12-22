import React from 'react';

export function ConceptHero() {
  return (
    <section className="relative h-[70vh] bg-barnes-green text-white">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
          alt="Luxury Interior"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="font-serif text-6xl md:text-7xl mb-6">
            Un Nouveau Modèle de Propriété de Luxe
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Découvrez comment Barnes réinvente la copropriété de prestige en alliant 
            flexibilité d'investissement et services d'exception.
          </p>
        </div>
      </div>
    </section>
  );
}