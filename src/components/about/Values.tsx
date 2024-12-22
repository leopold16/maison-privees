import React from 'react';
import { Shield, Heart, Target } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: "Excellence",
    description: "Un engagement sans compromis vers la qualité dans chaque aspect de nos services."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Une passion authentique pour l'immobilier d'exception et l'art de vivre."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Une recherche constante d'innovation pour créer des expériences uniques."
  }
];

export function Values() {
  return (
    <section className="py-24 bg-barnes-green text-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-5xl mb-16 text-center">
          Nos Valeurs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl mb-4">{value.title}</h3>
              <p className="text-white/80">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}