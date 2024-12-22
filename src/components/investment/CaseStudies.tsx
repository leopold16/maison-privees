import React from 'react';

const caseStudies = [
  {
    property: "Villa Saint-Germain, Paris",
    investment: "1/8 de part : 950.000€",
    details: [
      "Valeur totale : 7.600.000€",
      "Revenus locatifs annuels : 42.000€",
      "Plus-value estimée sur 5 ans : 25%",
      "Charges annuelles : 15.000€"
    ]
  },
  {
    property: "Penthouse Côte d'Azur",
    investment: "1/8 de part : 750.000€",
    details: [
      "Valeur totale : 6.000.000€",
      "Revenus locatifs annuels : 38.000€",
      "Plus-value estimée sur 5 ans : 30%",
      "Charges annuelles : 12.000€"
    ]
  }
];

export function CaseStudies() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-5xl text-green-950 mb-16 text-center">
          Études de Cas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="font-serif text-2xl text-green-950 mb-2">
                {study.property}
              </h3>
              <p className="text-barnes-green font-medium mb-6">{study.investment}</p>
              
              <ul className="space-y-3">
                {study.details.map((detail, i) => (
                  <li key={i} className="text-gray-600">• {detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}