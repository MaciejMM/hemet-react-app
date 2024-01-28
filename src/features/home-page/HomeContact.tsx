import React from 'react';
import { Link } from 'react-router-dom';
import { Call, Email, LocationOn } from '@mui/icons-material';
import { PageTitle } from '../../components/PageTitle';

export const HomeContact = () => {
  return (
    <div className="main-contact m-auto max-w-c-xl px-4 py-16 md:grid md:grid-cols-2 md:grid-rows-1 md:gap-x-8 lg:py-20">
      <div className="aspect-video w-full md:col-start-1 md:col-end-2 md:aspect-square md:h-full">
        <img
          src={'images/pexels-hassan-ouajbir-804065.jpg'}
          className="w-full rounded-md object-cover md:h-full"
          alt=""
        ></img>
      </div>

      <main className="flex flex-col justify-center md:col-start-2 md:col-end-3">
        <PageTitle title={'Kontakt'} disablePaddingTop={false}></PageTitle>
        <h3 className=" mb-1 text-2xl text-hm-black75">Masz pytanie?</h3>
        <p className=" pb-6">Napisz do nas, a nasz zespół odezwie się do Ciebie w ciągu 24 godzin.</p>
        <div className="  call mt-4 text-lg">
          <Call className="mr-4 text-hm-yellow"></Call>
          <Link className="font-semibold text-hm-black75" to="tel:+48655120722">
            +48 655 120 722
          </Link>
        </div>
        <div className="  email mt-4 text-lg ">
          <Email className="mr-4 text-hm-yellow"></Email>
          <Link className="font-semibold text-hm-black75" to="mailto:hemet@hemet.hg.pl">
            hemet@hemet.hg.pl
          </Link>
        </div>

        <div className=" location mt-4 text-lg">
          <LocationOn className="mr-4 text-hm-yellow"></LocationOn>
          <span className="font-semibold text-hm-black75">Stare Bojanowo ul. Przemysłowa 1, 64-030 Śmigiel</span>
        </div>
      </main>
    </div>
  );
};
