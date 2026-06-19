import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import { paths } from './data';

import type { Option } from './entities';

import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import SolutionsPage from '../pages/SolutionsPage';
import IndustrialPage from '../pages/IndustrialPage';
import OilfieldChemicalsPage from '../pages/OilfieldChemicals';
import KnowledgePage from '../pages/KnowledgePage';
import BrochuresPage from '../pages/BrochuresPage';
import PartnersPage from '../pages/PartnersPage';
import ContactPage from '../pages/ContactPage';
import CsrPage from '../pages/CsrPage';

export const navigation: Option[] = [
  {
    label: 'About Us',
    value: paths.aboutUs,
  },
  {
    label: 'Solutions',
    value: paths.solutions,
  },
  {
    label: 'Industries',
    value: paths.industries,
  },
  {
    label: 'Technical Services',
    value: paths.technical,
  },
  {
    label: 'Knowledge Center',
    value: paths.knowledge,
  },
  {
    label: 'Contact',
    value: paths.contact,
  },
];

export const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: paths.solutions,
        element: <SolutionsPage />,
      },
      {
        path: paths.industrial,
        element: <IndustrialPage />,
      },
      {
        path: paths.oilfield,
        element: <OilfieldChemicalsPage />,
      },
      {
        path: paths.aboutUs,
        element: <AboutPage />,
      },
      {
        path: paths.knowledge,
        element: <KnowledgePage />,
      },
      {
        path: paths.brochures,
        element: <BrochuresPage />,
      },
      {
        path: paths.partners,
        element: <PartnersPage />,
      },
      {
        path: paths.contact,
        element: <ContactPage />,
      },
      {
        path: paths.csr,
        element: <CsrPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
