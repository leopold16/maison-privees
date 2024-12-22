import React from 'react';

export function ManagementModel() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-5xl text-green-950 mb-12">
            Notre Modèle de Gestion
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Barnes conserve systématiquement 1/8 des parts de chaque propriété, 
              garantissant ainsi un alignement parfait des intérêts entre les 
              copropriétaires et le gestionnaire.
            </p>
            
            <div className="bg-barnes-green text-white p-8 rounded-lg mb-8">
              <h3 className="font-serif text-2xl mb-4">Répartition des Parts</h3>
              <ul className="space-y-2">
                <li>• 7/8 disponibles pour les copropriétaires</li>
                <li>• 1/8 conservé par Barnes</li>
                <li>• Minimum d'acquisition : 1/8 de part</li>
              </ul>
            </div>
            
            <h3 className="font-serif text-2xl text-green-950 mb-4">
              Engagement de Barnes
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li>• Gestion professionnelle de la propriété</li>
              <li>• Optimisation des revenus locatifs</li>
              <li>• Maintenance et valorisation du bien</li>
              <li>• Services hôteliers de luxe</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}