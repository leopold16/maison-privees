import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { NavLink } from '../ui/NavLink';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed w-full bg-barnes-green/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/concept">CONCEPT</NavLink>
              <NavLink to="/properties">PROPRIÉTÉS</NavLink>
              <NavLink to="/services">SERVICES</NavLink>
              <NavLink to="/investment">INVESTIR</NavLink>
              <NavLink to="/owners">ESPACE PROPRIÉTAIRES</NavLink>
              <NavLink to="/about">À PROPOS</NavLink>
            </div>

            {/* Header Actions */}
            <div className="flex items-center space-x-4">
              <NavLink to="/contact" className="btn-outline hidden lg:block">Contacts & accès</NavLink>
              <NavLink to="/reserver" className="btn-primary">Réserver</NavLink>
              <NavLink href="#">FR</NavLink>
              <NavLink href="tel:+33186705859">
                <Phone className="w-5 h-5" />
              </NavLink>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`
          fixed inset-y-0 left-0 w-72 bg-barnes-green shadow-xl z-50
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="h-full flex flex-col">
          <nav className="flex-1 px-4 py-20 overflow-y-auto">
            <div className="space-y-2">
              <NavLink to="/" className="block px-4 py-3 text-lg hover:bg-white/10 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>HOME</NavLink>
              <NavLink to="/concept" className="block px-4 py-3 text-lg hover:bg-white/10 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>CONCEPT</NavLink>
              <NavLink to="/properties" className="block px-4 py-3 text-lg hover:bg-white/10 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>PROPRIÉTÉS</NavLink>
              <NavLink to="/services" className="block px-4 py-3 text-lg hover:bg-white/10 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</NavLink>
              <NavLink to="/investment" className="block px-4 py-3 text-lg hover:bg-white/10 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>INVESTIR</NavLink>
              <NavLink to="/owners" className="block px-4 py-3 text-lg hover:bg-white/10 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>ESPACE PROPRIÉTAIRES</NavLink>
              <NavLink to="/about" className="block px-4 py-3 text-lg hover:bg-white/10 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>À PROPOS</NavLink>
              <NavLink to="/contact" className="block px-4 py-3 text-lg hover:bg-white/10 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>CONTACTS & ACCÈS</NavLink>
            </div>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}