import React from 'react';
import { HomeContact } from './HomeContact';
import { HomeWhyUs } from './HomeWhyUs';
import { HomeAbout } from './HomeAbout';
import { HomeServices } from './HomeServices';
import { HomeStats } from './HomeStats';
import { HomeMain } from './HomeMain';

export const HomePage = () => {
  return (
    <div>
      <HomeMain />
      <HomeAbout />
      <HomeStats />
      <HomeServices />
      <HomeWhyUs />
      <HomeContact />
    </div>
  );
};
