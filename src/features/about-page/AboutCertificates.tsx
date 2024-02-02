import React from 'react';
import { PageTitle } from '../../components/PageTitle';

export const AboutCertificates = () => {
  const CERTIFICATES_TITLE = 'Certyfikaty';
  return (
    <div className="w-full bg-hm-lightgrey py-16 lg:py-20 ">
      <div className="m-auto grid max-w-c-xl  grid-cols-4 gap-x-8 px-4">
        <div className=" col-start-2 col-end-5 row-start-1 row-end-2">
          <PageTitle title={CERTIFICATES_TITLE}></PageTitle>
        </div>

        <div className="font-bolder min col-start-2 col-end-5 row-start-2 row-end-3 pb-6 text-lg">
          Posiadamy certyfikaty nadane przez TUV SUD Polska Sp. z o.o. Warszawa:
        </div>

        <div className=" col-start-1 col-end-2 row-start-1 row-end-4 flex items-center justify-center gap-x-8">
          <img className="" src={'images/tuv-sud.png'} alt="" />
        </div>

        <ul className="col-start-2 col-end-5 row-start-3 row-end-4 flex flex-col  justify-center">
          <li className="pb-2 text-xl font-bold text-hm-black75">EN 1090 -1:2009</li>
          <li className="pb-2 text-xl font-bold text-hm-black75">PN - EN ISO 3834 - 3:2007+ A1</li>
        </ul>
      </div>
    </div>
  );
};
