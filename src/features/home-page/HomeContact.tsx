import React from 'react';
import { Link } from 'react-router-dom';
import { Call, Email, LocationOn } from '@mui/icons-material';
import { PageTitle } from '../../components/PageTitle';

export const HomeContact = () => {
  return (
    <div className="max-w-c-xl m-auto px-4 main-contact md:grid md:grid-cols-2 py-16 lg:py-20 md:grid-rows-1 md:gap-x-8">
      <div className="aspect-video md:aspect-square w-full md:h-full md:col-start-1 md:col-end-2">
        <img
          src={'images/pexels-hassan-ouajbir-804065.jpg'}
          className="w-full md:h-full object-cover rounded-md"
          alt=""
        ></img>
      </div>

      <main className="flex flex-col justify-center md:col-start-2 md:col-end-3">
        <PageTitle title={'Kontakt'} disablePaddingTop={false}></PageTitle>
        <h3 className="question text-hm-black75 text-2xl mb-1">Masz pytanie?</h3>
        <p className="question-text pb-6">Napisz do nas, a nasz zespół odezwie się do Ciebie w ciągu 24 godzin.</p>
        <div className=" mt-4 text-lg contact call">
          <Call className="mr-4 text-hm-yellow"></Call>
          <Link className="text-hm-black75 font-semibold" to="tel:+48655120722">
            +48 655 120 722
          </Link>
        </div>
        <div className=" mt-4 text-lg contact email ">
          <Email className="mr-4 text-hm-yellow"></Email>
          <Link className="text-hm-black75 font-semibold" to="mailto:hemet@hemet.hg.pl">
            hemet@hemet.hg.pl
          </Link>
        </div>
        <div className=" mt-4 text-lg contact location">
          <LocationOn className="mr-4 text-hm-yellow"></LocationOn>
          <span className="text-hm-black75 font-semibold">Stare Bojanowo ul. Przemysłowa 1, 64-030 Śmigiel</span>
        </div>
      </main>
    </div>
  );
};
