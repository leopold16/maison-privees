import React, { useEffect } from 'react';
import { NavLink } from '../../ui/NavLink';
import { Phone } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => onClose();
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [onClose]);

  return (
    <>
      {/* Drawer */}
      <div 
        className={`
          fixed inset-y-0 left-0 w-72 bg-barnes-green shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          z-50 flex flex-col
        `}
      >
        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-20 overflow-y-auto">
          <div className="space-y-1">
            {[
              { to: '/', label: 'HOME' },
              { to: '/concept', label: 'CONCEPT' },
              { to: '/properties', label: 'PROPRIÉTÉS' },
              { to: '/services', label: 'SERVICES' },
              { to: '/investment', label: 'INVESTIR' },
              { to: '/owners', label: 'ESPACE PROPRIÉTAIRES' },
              { to: '/about', label: 'À PROPOS' },
              { to: '/contact', label: 'CONTACTS & ACCÈS' }
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={onClose}
                className="block px-4 py-3 text-lg font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-white/10">
          <div className="space-y-4">
            <NavLink 
              to="/reserver" 
              onClick={onClose}
              className="btn-primary w-full flex items-center justify-center py-3"
            >
              Réserver
            </NavLink>
            
            <div className="flex items-center justify-between px-4">
              <NavLink href="#" className="text-sm">FR</NavLink>
              <NavLink href="tel:+33186705859" className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+33 1 86 70 58 59</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 transition-opacity z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
    </>
  );
}