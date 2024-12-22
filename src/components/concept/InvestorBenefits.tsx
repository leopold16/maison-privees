import React from 'react';

const benefits = [
  {
    title: "Flexibilité Maximale",
    description: "Profitez de votre propriété quand vous le souhaitez et générez des revenus locatifs le reste du temps."
  },
  {
    title: "Investissement Optimisé",
    description: "Accédez à des biens d'exception pour une fraction du coût total, tout en bénéficiant de la valorisation du marché."
  },
  {
    title: "Gestion Sans Souci",
    description: "Barnes s'occupe de tout : entretien, location, services... Vous n'avez qu'à profiter."
  }
];

export function InvestorBenefits() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-5xl text-green-950 mb-8">
              Les Avantages pour nos Investisseurs
            </h2>
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index}>
                  <h3 className="font-serif text-2xl text-green-950 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
              alt="Luxury Property Interior"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}