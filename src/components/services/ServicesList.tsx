import React from 'react';
import { Clock, ChefHat, Sparkles, Key } from 'lucide-react';

const services = [
  {
    icon: Clock,
    title: "Conciergerie 24/7",
    description: "Une équipe dédiée à votre disposition pour répondre à toutes vos demandes, à tout moment."
  },
  {
    icon: ChefHat,
    title: "Chefs Privés",
    description: "Des chefs étoilés pour des expériences culinaires exceptionnelles dans votre résidence."
  },
  {
    icon: Sparkles,
    title: "Entretien Premium",
    description: "Un service d'entretien quotidien assurant la perfection de votre environnement."
  },
  {
    icon: Key,
    title: "Gestion Clé en Main",
    description: "Une prise en charge complète de votre propriété, de la maintenance aux services personnalisés."
  }
];

export function ServicesList() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-barnes-green/10 mb-6">
                <service.icon className="w-8 h-8 text-barnes-green" />
              </div>
              <h3 className="font-serif text-2xl text-green-950 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}