import React from 'react';
import { Breadcrumb } from '../../components/Breadcrumb';
import { HomeContact } from '../home-page/HomeContact';

export const ContactPage = () => {
  const CONTACT_TITLE = 'Kontakt';

  return (
    <div>
      <Breadcrumb title={CONTACT_TITLE}></Breadcrumb>
      <HomeContact></HomeContact>
    </div>
  );
};
