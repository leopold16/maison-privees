import React from 'react';

const milestones = [
  {
    year: "1995",
    title: "Création de Barnes",
    description: "Fondation de Barnes avec une vision innovante de l'immobilier de luxe."
  },
  {
    year: "2010",
    title: "Expansion Internationale",
    description: "Ouverture de bureaux dans les principales capitales mondiales."
  },
  {
    year: "2020",
    title: "Innovation Digitale",
    description: "Lancement de nouvelles solutions technologiques pour nos clients."
  },
  {
    year: "2024",
    title: "Maisons Privées Barnes",
    description: "Création d'un nouveau standard dans la copropriété de luxe."
  }
];

export function BarnesExpertise() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-5xl text-green-950 mb-6">
            Notre Histoire et Expertise
          </h2>
          <p className="text-lg text-gray-600">
            Barnes s'est imposé comme une référence mondiale dans l'immobilier de prestige, 
            en combinant expertise locale et vision internationale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-barnes-green/20" />
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-barnes-green" />
                <div className="pt-8">
                  <p className="text-barnes-green font-serif text-2xl mb-2">{milestone.year}</p>
                  <h3 className="font-serif text-xl text-green-950 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}