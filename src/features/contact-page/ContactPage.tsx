import React from 'react';
import { Breadcrumb } from '../../components/Breadcrumb';
import { HomeContact } from '../home-page/HomeContact';

export const ContactPage = () => {
  const CONTACT_TITLE = 'Kontakt';

  return (
    <div className="mt-32 lg:mt-10">
      <Breadcrumb title={CONTACT_TITLE} data-testid="breadcrumb"></Breadcrumb>
      <HomeContact data-testid="home-contact"></HomeContact>
    </div>
  );
};
