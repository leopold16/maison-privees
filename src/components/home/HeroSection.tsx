import React from 'react';

export function HeroSection() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?auto=format&fit=crop&q=80"
          alt="Luxury Parisian Apartment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="font-serif text-6xl md:text-7xl mb-6">
            Redéfinir l'hospitalité de luxe par l'innovation
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Découvrez une nouvelle vision du luxe immobilier avec Maisons Privées Barnes. 
            Une expérience unique alliant propriété d'exception et services hôteliers exclusifs.
          </p>
          <div className="flex gap-4">
            <button className="btn-primary text-lg">
              Explorez nos propriétés
            </button>
            <button className="btn-outline text-lg">
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}