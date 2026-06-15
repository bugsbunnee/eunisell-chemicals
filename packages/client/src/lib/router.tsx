import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import { paths } from './data';

import HomePage from '../pages/HomePage';
import type { Option } from './entities';

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
    ],
  },
];

export const router = createBrowserRouter(routes);
