import React from 'react';
import { Building2, Users, Star } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: "Gestion Barnes",
    description: "Une exploitation professionnelle garantissant la préservation et la valorisation de votre investissement."
  },
  {
    icon: Users,
    title: "Copropriété Exclusive",
    description: "Un modèle unique limité à 8 copropriétaires par bien, dont une part conservée par Barnes."
  },
  {
    icon: Star,
    title: "Services Premium",
    description: "Des prestations hôtelières haut de gamme et une conciergerie dédiée 24/7."
  }
];

export function HybridModel() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-5xl text-green-950 mb-6">
            Le Modèle Hybride Barnes
          </h2>
          <p className="text-lg text-gray-600">
            Une approche novatrice qui combine les avantages de la propriété 
            traditionnelle avec l'excellence des services hôteliers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-barnes-green/10 mb-6">
                <feature.icon className="w-8 h-8 text-barnes-green" />
              </div>
              <h3 className="font-serif text-2xl text-green-950 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}