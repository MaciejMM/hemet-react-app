import React from "react";
import { HomeContact } from "./HomeContact";
import { HomeWhyUs } from "./HomeWhyUs";
import { HomeMain } from "./HomeMain";
import { HomeAbout } from "./HomeAbout";
import { HomeServices } from "./HomeServices";
import { HomeStats } from "./HomeStats";

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
