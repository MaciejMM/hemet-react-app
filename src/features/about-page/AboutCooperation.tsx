import React from 'react';
import { PageTitle } from '../../components/PageTitle';

export const AboutCooperation = () => {
  const ABOUT_COOPERATION_TITLE: string = 'Zaufali nam';

  const builded: string[] = [
    'Coccodrillo Sp. z o.o.',
    'Panattoni',
    'WPiP',
    'Pekabex BET S.A.',
    'AMBIT ',
    'YPERO S.A.',
    'BEJOT Sp. z o.o. ',
    'LIDL Polska',
    'Biedronka',
  ];

  return (
    <div className="bg-black-75 py-16 lg:py-20">
      <div className="m-auto max-w-c-xl gap-8 px-4 lg:grid lg:grid-cols-8 lg:grid-rows-2 lg:grid-rows-trusted">
        <div className="lg:col-start-1 lg:col-end-9  lg:row-start-1 lg:row-end-1">
          <PageTitle title={ABOUT_COOPERATION_TITLE} color={'white'} disablePaddingTop={true}></PageTitle>
        </div>
        <div className="font-bolder pb-4 text-lg text-white lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:grid lg:items-center lg:border-r-1 lg:border-light lg:pb-0 ">
          Od kilku lat sukcesywnie współpracujemy z:
        </div>
        <ul className="grid grid-cols-3 gap-4 md:grid-cols-5 lg:col-start-3  lg:col-end-9 lg:row-start-2 lg:row-end-2 lg:grid-cols-5">
          {builded.map((build, index) => {
            return (
              <li
                key={index}
                className="text-1xl lg:text-1xl whitespace-nowrap pr-4  text-hm-yellow lg:grid  lg:items-center xl:pb-0"
              >
                {build}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
