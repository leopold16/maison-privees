import React from 'react';

const comparisonData = [
  {
    category: "Propriété Traditionnelle",
    advantages: ["Propriété totale", "Liberté d'usage complète"],
    disadvantages: ["Coûts élevés", "Gestion complexe", "Immobilisation importante"]
  },
  {
    category: "Maisons Privées Barnes",
    advantages: [
      "Propriété fractionnée premium",
      "Services hôteliers inclus",
      "Gestion professionnelle",
      "Investissement optimisé",
      "Revenus locatifs"
    ],
    disadvantages: ["Usage partagé planifié"]
  },
  {
    category: "Location Hôtelière",
    advantages: ["Aucun engagement", "Services inclus"],
    disadvantages: ["Pas de patrimoine", "Coûts élevés à long terme", "Disponibilité limitée"]
  }
];

export function ModelComparison() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-5xl text-green-950 mb-16 text-center">
          Comparaison des Modèles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comparisonData.map((model, index) => (
            <div 
              key={index}
              className={`p-8 rounded-lg ${
                model.category === "Maisons Privées Barnes" 
                  ? "bg-barnes-green text-white" 
                  : "bg-gray-50"
              }`}
            >
              <h3 className={`font-serif text-2xl mb-6 ${
                model.category === "Maisons Privées Barnes" 
                  ? "text-white" 
                  : "text-green-950"
              }`}>
                {model.category}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className={`font-medium mb-3 ${
                    model.category === "Maisons Privées Barnes" 
                      ? "text-white/90" 
                      : "text-gray-600"
                  }`}>
                    Avantages
                  </h4>
                  <ul className="space-y-2">
                    {model.advantages.map((advantage, i) => (
                      <li key={i} className={
                        model.category === "Maisons Privées Barnes" 
                          ? "text-white/80" 
                          : "text-gray-600"
                      }>
                        • {advantage}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className={`font-medium mb-3 ${
                    model.category === "Maisons Privées Barnes" 
                      ? "text-white/90" 
                      : "text-gray-600"
                  }`}>
                    Limites
                  </h4>
                  <ul className="space-y-2">
                    {model.disadvantages.map((disadvantage, i) => (
                      <li key={i} className={
                        model.category === "Maisons Privées Barnes" 
                          ? "text-white/80" 
                          : "text-gray-600"
                      }>
                        • {disadvantage}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}