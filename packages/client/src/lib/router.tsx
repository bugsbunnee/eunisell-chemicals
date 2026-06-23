import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import { paths } from './data';

import type { Option } from './entities';

import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import SolutionsPage from '../pages/SolutionsPage';
import IndustrialManufacturingPage from '../pages/IndustrialManufacturingPage';
import SolutionDetailPage from '../pages/SolutionDetailPage';
import OilfieldChemicalsPage from '../pages/OilfieldChemicals';
import KnowledgePage from '../pages/KnowledgePage';
import KnowledgeDetailPage from '../pages/KnowledgeDetailPage';
import BrochuresPage from '../pages/BrochuresPage';
import PartnersPage from '../pages/PartnersPage';
import ContactPage from '../pages/ContactPage';
import CsrPage from '../pages/CsrPage';
import QHSEPage from '../pages/QHSEPage';
import IndustriesServedPage from '../pages/IndustriesServedPage';
import TechnicalServicesPage from '../pages/TechnicalServicesPage';
import ManagementPage from '../pages/ManagementPage';
import CareersPage from '../pages/CareersPage';
import CareerDetailPage from '../pages/CareerDetailPage';

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
        element: <IndustrialManufacturingPage />,
      },
      {
        path: paths.industrialDetail,
        element: <SolutionDetailPage />,
      },
      {
        path: paths.industries,
        element: <IndustriesServedPage />,
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
        path: paths.knowledgeDetail,
        element: <KnowledgeDetailPage />,
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
      {
        path: paths.qhse,
        element: <QHSEPage />,
      },
      {
        path: paths.technical,
        element: <TechnicalServicesPage />,
      },
      {
        path: paths.management,
        element: <ManagementPage />,
      },
      {
        path: paths.careers,
        element: <CareersPage />,
      },
      {
        path: paths.careerDetail,
        element: <CareerDetailPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
