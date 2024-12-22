import React from 'react';

export function PropertiesHero() {
  return (
    <section className="relative h-[70vh] bg-barnes-green text-white">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
          alt="Luxury Properties"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="font-serif text-6xl md:text-7xl mb-6">
            Propriétés d'Exception
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Découvrez notre collection exclusive de résidences de prestige, 
            soigneusement sélectionnées pour leur caractère unique et leur emplacement privilégié.
          </p>
        </div>
      </div>
    </section>
  );
}