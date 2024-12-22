import React from 'react';

const LUXURY_PROPERTIES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    title: "Villa Saint-Germain",
    details: "280m² • 4 chambres • Jardin privé"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    title: "Appartement Trocadéro",
    details: "175m² • 3 chambres • Vue Tour Eiffel"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b46d352",
    title: "Penthouse Champs-Élysées",
    details: "220m² • 3 chambres • Terrasse panoramique"
  }
];

export function PropertyShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-5xl text-green-950 mb-16">
          Propriétés d'Exception
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LUXURY_PROPERTIES.map((property) => (
            <div key={property.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden mb-4">
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-serif text-2xl text-green-950 mb-2">
                {property.title}
              </h3>
              <p className="text-gray-600">
                {property.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}