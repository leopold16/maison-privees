import React from 'react';

export function OwnersHero() {
  return (
    <section className="relative h-[70vh] bg-barnes-green text-white">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
          alt="Luxury Property Management"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="font-serif text-6xl md:text-7xl mb-6">
            Espace Propriétaires
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Gérez vos séjours, suivez vos revenus locatifs et accédez à nos services 
            exclusifs depuis votre espace personnel.
          </p>
        </div>
      </div>
    </section>
  );
}