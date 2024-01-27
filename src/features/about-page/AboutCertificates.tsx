import React from 'react';
import { PageTitle } from '../../components/PageTitle';

export const AboutCertificates = () => {
  const CERTIFICATES_TITLE = 'Certyfikaty';
  return (
    <div className="bg-hm-lightgrey w-full py-16 lg:py-20 ">
      <div className="container grid grid-cols-4 gap-x-8">
        <div className=" col-start-2 col-end-5 row-start-1 row-end-2">
          <PageTitle title={CERTIFICATES_TITLE}></PageTitle>
        </div>

        <div className="text-xl col-start-2 col-end-5 row-start-2 row-end-3 min pb-6">
          Posiadamy certyfikaty nadane przez TUV SUD Polska Sp. z o.o. Warszawa:
        </div>

        <div className=" col-start-1 col-end-2 row-start-1 row-end-4 flex justify-center items-center gap-x-8">
          <img className="" src={'images/tuv-sud.png'} alt="" />
        </div>

        <ul className="col-start-2 col-end-5 row-start-3 row-end-4 flex flex-col  justify-center">
          <li className="font-bold text-xl pb-2 text-hm-black75">EN 1090 -1:2009</li>
          <li className="font-bold text-xl pb-2 text-hm-black75">PN -EN ISO 3834 - 3:2007+ A1</li>
        </ul>
      </div>
    </div>
  );
};
