import React from 'react';

export function AboutHero() {
  return (
    <section className="relative h-[70vh] bg-barnes-green text-white">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80"
          alt="Barnes Luxury Real Estate"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="font-serif text-6xl md:text-7xl mb-6">
            L'Excellence Barnes
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Depuis plus de 20 ans, Barnes redéfinit les standards de l'immobilier de luxe 
            à travers le monde.
          </p>
        </div>
      </div>
    </section>
  );
}