import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { ConceptPage } from '../pages/ConceptPage';
import { PropertiesPage } from '../pages/PropertiesPage';
import { ServicesPage } from '../pages/ServicesPage';
import { InvestmentPage } from '../pages/InvestmentPage';
import { OwnersSpacePage } from '../pages/OwnersSpacePage';
import { AboutPage } from '../pages/AboutPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/concept',
    element: <ConceptPage />,
  },
  {
    path: '/properties',
    element: <PropertiesPage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/investment',
    element: <InvestmentPage />,
  },
  {
    path: '/owners',
    element: <OwnersSpacePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
]);