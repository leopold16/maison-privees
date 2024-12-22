import React from 'react';

export function PropertyFilters() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <select className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-700">
            <option value="">Localisation</option>
            <option value="paris">Paris</option>
            <option value="cote-azur">Côte d'Azur</option>
            <option value="alps">Alpes</option>
          </select>
          
          <select className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-700">
            <option value="">Prix</option>
            <option value="1m-2m">1M€ - 2M€</option>
            <option value="2m-5m">2M€ - 5M€</option>
            <option value="5m+">5M€+</option>
          </select>
          
          <select className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-700">
            <option value="">Parts disponibles</option>
            <option value="1">1 part</option>
            <option value="2">2 parts</option>
            <option value="3+">3+ parts</option>
          </select>
        </div>
      </div>
    </section>
  );
}