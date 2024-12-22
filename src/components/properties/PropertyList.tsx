import React from 'react';

const properties = [
  {
    id: 1,
    title: "Villa Saint-Germain",
    location: "Paris 7ème",
    price: "8.900.000€",
    shares: "3 parts disponibles",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    features: ["450m²", "5 chambres", "Jardin privé", "Service de conciergerie"]
  },
  {
    id: 2,
    title: "Penthouse Trocadéro",
    location: "Paris 16ème",
    price: "12.500.000€",
    shares: "2 parts disponibles",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b46d352",
    features: ["320m²", "4 chambres", "Terrasse panoramique", "Vue Tour Eiffel"]
  },
  // Add more properties...
];

export function PropertyList() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {properties.map((property) => (
            <div key={property.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <h3 className="font-serif text-3xl text-green-950 mb-2">{property.title}</h3>
              <p className="text-gray-600 mb-4">{property.location}</p>
              
              <div className="flex flex-wrap gap-4 mb-4">
                {property.features.map((feature, index) => (
                  <span key={index} className="bg-gray-100 px-3 py-1 text-sm text-gray-700 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-barnes-green font-medium">{property.price}</p>
                  <p className="text-gray-600 text-sm">{property.shares}</p>
                </div>
                <button className="btn-primary">En savoir plus</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}