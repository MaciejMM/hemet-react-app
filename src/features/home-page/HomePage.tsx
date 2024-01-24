import React from "react";
import { HomeMain } from "./HomeMain";
import { HomeAbout } from "./HomeAbout";
import { HomeStats } from "./HomeStats";
import { HomeServices } from "./HomeServices";
import { HomeWhyUs } from "./HomeWhyUs";
import { HomeContact } from "./HomeContact";

export const HomePage = () => {
  return (
    <div>
      <HomeMain />
      <HomeAbout />
      <HomeStats />
      <HomeServices />
      <HomeWhyUs />
      {/*<HomeProjects/>*/}
      <HomeContact />
    </div>
  );
};
