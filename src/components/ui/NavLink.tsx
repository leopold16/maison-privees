import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  to?: string;
}

export function NavLink({ children, className = '', to, href, ...props }: NavLinkProps) {
  // If 'to' prop is provided, use React Router Link, otherwise use regular anchor
  if (to) {
    return (
      <Link 
        to={to} 
        className={`text-white/90 hover:text-white transition-colors ${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <a 
      href={href} 
      className={`text-white/90 hover:text-white transition-colors ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}