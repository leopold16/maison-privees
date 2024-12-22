import React from 'react';

export function InvestmentOpportunities() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-5xl text-green-950 mb-12">
            Opportunités d'Investissement
          </h2>
          
          <div className="space-y-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-serif text-2xl text-green-950 mb-4">
                Investissement Initial
              </h3>
              <p className="text-gray-600 mb-6">
                À partir de 200.000€ pour une part de copropriété dans une résidence 
                d'exception, avec un potentiel de valorisation significatif.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-4 rounded">
                  <p className="text-barnes-green text-2xl font-serif">8-12%</p>
                  <p className="text-gray-600">Rendement Annuel Moyen</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-barnes-green text-2xl font-serif">3-5 ans</p>
                  <p className="text-gray-600">Horizon d'Investissement</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-serif text-2xl text-green-950 mb-4">
                Revenus Locatifs
              </h3>
              <p className="text-gray-600 mb-6">
                Générez des revenus complémentaires grâce à la location de vos 
                semaines non utilisées, gérée par Barnes.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-4 rounded">
                  <p className="text-barnes-green text-2xl font-serif">60%</p>
                  <p className="text-gray-600">Taux d'Occupation Moyen</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-barnes-green text-2xl font-serif">4-6%</p>
                  <p className="text-gray-600">Rendement Locatif Net</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}