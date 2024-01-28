import React from 'react';
import { PageTitle } from '../../components/PageTitle';

type Trusted = {
  name: string;
  city: string;
};
export const AboutCooperation = () => {
  const ABOUT_COOPERATION_TITLE: string = 'Zaufali nam';

  const trustedCompanies: Trusted[] = [
    {
      name: 'EXIM Sp. z o.o.',
      city: 'Poznań',
    },
    {
      name: 'PBP "KLIMAS"',
      city: 'Krotoszyn',
    },
    {
      name: 'ŁAGROM',
      city: 'Pogorzela',
    },
    {
      name: 'FOLPLAST',
      city: 'Kościan',
    },
    {
      name: 'PBO',
      city: 'Leszno',
    },
    {
      name: 'MATEX',
      city: 'Wolsztyn',
    },
    {
      name: 'ECO INSTAL',
      city: 'Kościan',
    },
    {
      name: 'GRAMBUB',
      city: 'Poznań',
    },
    {
      name: 'KARGON',
      city: 'Warszawa',
    },
    {
      name: 'FCB',
      city: 'Kostrzyn nad Odrą',
    },
  ];

  const builded = [
    'Coccodrillo Sp. z o.o.',
    'Panattoni',
    'WPIP',
    'Pekabex BET S.A.',
    'AMBIT Sp.z o.o.',
    'YPERO S.A.',
    'BEJOT Sp. z o.o.',
    'LIDL Polska',
    'Biedronka',
  ];

  return (
    <div className="bg-hm-black75 py-16 lg:py-20">
      <div className="max-w-c-xl m-auto px-4 lg:grid lg:grid-cols-8 lg:grid-rows-3 gap-8 lg:grid-rows-trusted">
        <div className="lg:row-start-1 lg:row-end-1  lg:col-start-1 lg:col-end-9">
          <PageTitle title={ABOUT_COOPERATION_TITLE} color={'white'} disablePaddingTop={true}></PageTitle>
        </div>
        <div className="text-white text-lg pb-4 lg:pb-0   font-bolder lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-3 lg:grid lg:items-center lg:border-light lg:border-r-1 ">
          Wykonaliśmy wiele obiektów różnego typu dla takich firm jak:
        </div>
        <ul className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6  lg:row-start-2 lg:row-end-2 lg:col-start-3 lg:col-end-9">
          {builded.map((build, index) => {
            return (
              <li
                key={index}
                className="text-1xl lg:text-1xl text-hm-yellow pb-4 lg:p-0 xl:pb-0 lg:grid  lg:items-center"
              >
                {build}
              </li>
            );
          })}
        </ul>

        <div className="text-white text-lg pt-8 lg:pt-0 pb-4 lg:pb-0 font-bolder lg:row-start-3 lg:row-end-3  lg:col-start-1 lg:grid lg:col-end-3 lg:items-center lg:border-light lg:border-r-1">
          Od kilku lat sukcesywnie współpracujemy z:
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 lg:col-start-3 lg:col-end-9  lg:grid lg:items-center">
          {trustedCompanies.map((company, index) => {
            return (
              <div key={index} className="pb-4 lg:pb-4">
                <div className="text-1xl lg:text-1xl text-hm-yellow font-bolder">{company.name}</div>
                <div className="text-white text-sm lg:text-base ">{company.city}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
