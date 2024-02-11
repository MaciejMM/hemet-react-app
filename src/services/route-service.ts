import { ContactPage } from '../features/contact-page/ContactPage';
import { AboutPage } from '../features/about-page/AboutPage';
import { ProjectPage } from '../features/projects-page/ProjectPage';
import React from 'react';

export type LinkParam = {
  path: string;
  text: string;
  valid: boolean;
  component: () => React.JSX.Element;
};

const routes = [
  { path: '/about', text: 'O nas', valid: true, component: AboutPage },

  {
    path: '/projects',
    text: 'Projekty',
    valid: true,
    component: ProjectPage,
  },
  { path: '/contacts', text: 'Kontakt', valid: true, component: ContactPage },
];

export const getAllRoutes = (): LinkParam[] => {
  return routes.filter((i) => i.valid);
};
