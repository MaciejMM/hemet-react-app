import React from 'react';
import styled from '@emotion/styled';
import { PageTitle } from '../../components/PageTitle';

type Service = {
  name: string;
};

const ServiceCard = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.4s;
  background-color: $white-100;

  &:hover {
    box-shadow: 0 4px 20px 2px rgba(0, 0, 0, 0.1);
  }
`;

export const HomeServices = () => {
  const services: Service[] = [
    {
      name: 'Prefabrykacja i montaż konstrukcji stalowych',
    },
    {
      name: 'Konstrukcje ze stali kwasoodpornej',
    },
    {
      name: 'Zbiorniki ze stali zwykłej i kwasoodpornej',
    },
    {
      name: 'Rurociągi ze stali zwykłej i kwasoodpornej',
    },
    {
      name: 'Silosy różnego typu',
    },
    {
      name: 'Przenośniki różnego typu',
    },
    {
      name: 'Pomosty stalowe',
    },
    {
      name: 'Wyroby ze stali kwasoodpornej i węglowej',
    },
  ];
  const HOME_SERVICES_TEXT = 'Nasze usługi';

  return (
    <div className="container main-services pb-16 lg:py-20 lg:grid lg:grid-cols-2 lg:gap-x-8">
      <img
        className="hidden lg:block lg:col-start-1 lg:col-end-2 lg:h-full lg:object-cover rounded-md"
        src={'images/IMG_20190704_121515.jpg'}
        alt=""
      ></img>
      <main className="lg:col-start-2 lg:col-end-3 lg:flex lg:flex-col lg:justify-center">
        <PageTitle title={HOME_SERVICES_TEXT}></PageTitle>
        {services.map((service, index) => {
          return (
            <ServiceCard className="card px-4  mb-2 last:mb-0" key={index}>
              <div className="card-title flex items-center text-hm-black75 py-6 text-base font-semibold rounded-md">
                <img className="h-6 w-6 mr-3" src={'images/red-crane-services.svg'} alt=""></img>
                {service.name}
              </div>
            </ServiceCard>
          );
        })}
      </main>
    </div>
  );
};
