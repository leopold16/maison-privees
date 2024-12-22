import React from 'react';

export function ServicesHero() {
  return (
    <section className="relative h-[70vh] bg-barnes-green text-white">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80"
          alt="Luxury Services"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="font-serif text-6xl md:text-7xl mb-6">
            Services Exclusifs
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Une expérience de service personnalisée, digne des plus grands hôtels, 
            dans l'intimité de votre résidence.
          </p>
        </div>
      </div>
    </section>
  );
}