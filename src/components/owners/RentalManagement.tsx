import React from 'react';
import { TrendingUp, Calendar, Euro } from 'lucide-react';

const rentalStats = [
  {
    icon: Calendar,
    value: "12",
    label: "Semaines louées",
    trend: "+2 vs. 2023"
  },
  {
    icon: Euro,
    value: "45,000€",
    label: "Revenus générés",
    trend: "+15% vs. 2023"
  },
  {
    icon: TrendingUp,
    value: "92%",
    label: "Taux d'occupation",
    trend: "+5% vs. 2023"
  }
];

export function RentalManagement() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl text-green-950 mb-12">
            Gestion des Revenus Locatifs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {rentalStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-barnes-green/10 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-barnes-green" />
                  </div>
                </div>
                <p className="text-3xl font-serif text-green-950 mb-1">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
                <p className="text-sm text-barnes-green mt-2">{stat.trend}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="font-serif text-2xl text-green-950 mb-6">
              Historique des Locations
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b">
                  <div>
                    <p className="font-medium text-green-950">15-22 Juillet 2024</p>
                    <p className="text-gray-600">7 nuits • 4 personnes</p>
                  </div>
                  <p className="text-barnes-green font-medium">8,500€</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}