import React from 'react';
import { Phone } from 'lucide-react';
import { NavLink } from '../../ui/NavLink';

export function HeaderActions() {
  return (
    <div className="flex items-center space-x-4">
      <NavLink to="/contact" className="btn-outline hidden lg:block">Contacts & accès</NavLink>
      <NavLink to="/reserver" className="btn-primary">Réserver</NavLink>
      <NavLink href="#">FR</NavLink>
      <NavLink href="tel:+33186705859">
        <Phone className="w-5 h-5" />
      </NavLink>
    </div>
  );
}