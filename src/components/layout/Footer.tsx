import React from 'react';
import { NavLink } from '../ui/NavLink';

export function Footer() {
  return (
    <footer className="bg-barnes-green text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-2xl mb-4">Contact</h3>
            <p className="text-white/80">14 Avenue George V</p>
            <p className="text-white/80">Paris 75008</p>
            <p className="text-white/80">+33 (0)1 86 70 58 59</p>
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4">Navigation</h3>
            <ul className="space-y-2 text-white/80">
              <li><NavLink to="/">HOME</NavLink></li>
              <li><NavLink to="/concept">CONCEPT</NavLink></li>
              <li><NavLink to="/properties">PROPRIÉTÉS</NavLink></li>
              <li><NavLink to="/services">SERVICES</NavLink></li>
              <li><NavLink to="/investment">INVESTIR</NavLink></li>
              <li><NavLink to="/owners">ESPACE PROPRIÉTAIRES</NavLink></li>
              <li><NavLink to="/about">À PROPOS</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4">Réservation</h3>
            <ul className="space-y-2 text-white/80">
              <li><NavLink to="/reserver">Réserver</NavLink></li>
              <li><NavLink to="/contact">Contacts & accès</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4">Langue</h3>
            <ul className="space-y-2 text-white/80">
              <li><NavLink href="#">FR</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}