import React from 'react';
import { NavLink } from '../../ui/NavLink';

export function DesktopNav() {
  return (
    <div className="hidden lg:flex items-center space-x-8">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/concept">CONCEPT</NavLink>
      <NavLink to="/properties">PROPRIÉTÉS</NavLink>
      <NavLink to="/services">SERVICES</NavLink>
      <NavLink to="/investment">INVESTIR</NavLink>
      <NavLink to="/owners">ESPACE PROPRIÉTAIRES</NavLink>
      <NavLink to="/about">À PROPOS</NavLink>
    </div>
  );
}