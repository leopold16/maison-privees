import React from 'react';

const teamMembers = [
  {
    role: "Direction Maisons Privées",
    description: "Une équipe de direction expérimentée dans l'immobilier de luxe et l'hôtellerie."
  },
  {
    role: "Experts Immobiliers",
    description: "Des professionnels spécialisés dans la sélection et l'évaluation de propriétés d'exception."
  },
  {
    role: "Gestionnaires de Propriétés",
    description: "Des managers dédiés assurant l'excellence opérationnelle de chaque résidence."
  },
  {
    role: "Concierges Privés",
    description: "Une équipe de concierges d'élite pour un service personnalisé 24/7."
  }
];

export function DedicatedTeam() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-5xl text-green-950 mb-16 text-center">
          Une Équipe Dédiée
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="font-serif text-2xl text-green-950 mb-4">{member.role}</h3>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}