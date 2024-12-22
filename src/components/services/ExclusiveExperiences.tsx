import React from 'react';

const experiences = [
  {
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    title: "Gastronomie",
    description: "Dégustations privées et cours de cuisine avec des chefs étoilés"
  },
  {
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58",
    title: "Culture",
    description: "Visites privées de musées et accès privilégié aux événements"
  },
  {
    image: "https://images.unsplash.com/photo-1551525212-a1dc18871d4a",
    title: "Bien-être",
    description: "Spa et soins personnalisés dans le confort de votre résidence"
  }
];

export function ExclusiveExperiences() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-5xl text-green-950 mb-16 text-center">
          Expériences Sur Mesure
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden mb-6">
                <img 
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl text-white mb-2">{experience.title}</h3>
                  <p className="text-white/90">{experience.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}