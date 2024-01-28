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
      <div className="m-auto max-w-c-xl gap-8 px-4 lg:grid lg:grid-cols-8 lg:grid-rows-3 lg:grid-rows-trusted">
        <div className="lg:col-start-1 lg:col-end-9  lg:row-start-1 lg:row-end-1">
          <PageTitle title={ABOUT_COOPERATION_TITLE} color={'white'} disablePaddingTop={true}></PageTitle>
        </div>
        <div className="font-bolder pb-4 text-lg text-white   lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:grid lg:items-center lg:border-r-1 lg:border-light lg:pb-0 ">
          Wykonaliśmy wiele obiektów różnego typu dla takich firm jak:
        </div>
        <ul className="grid grid-cols-3 md:grid-cols-5 lg:col-start-3  lg:col-end-9 lg:row-start-2 lg:row-end-2 lg:grid-cols-6">
          {builded.map((build, index) => {
            return (
              <li key={index} className="text-1xl lg:text-1xl pb-4 text-hm-yellow  lg:grid lg:items-center  xl:pb-0 ">
                {build}
              </li>
            );
          })}
        </ul>

        <div className="font-bolder pb-4 pt-8 text-lg text-white lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-3  lg:grid lg:items-center lg:border-r-1 lg:border-light lg:pb-0 lg:pt-0">
          Od kilku lat sukcesywnie współpracujemy z:
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:col-start-3 lg:col-end-9 lg:grid  lg:grid-cols-6 lg:items-center">
          {trustedCompanies.map((company, index) => {
            return (
              <div key={index} className="pb-4 lg:pb-4">
                <div className="text-1xl lg:text-1xl font-bolder text-hm-yellow">{company.name}</div>
                <div className="text-sm text-white lg:text-base ">{company.city}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
