import React from 'react';
import { Call, Email, LocationOn } from '@mui/icons-material';
import { PageTitle } from '../../components/PageTitle';

export const HomeContact = () => {
  return (
    <div
      data-testid="home-contact"
      className="main-contact m-auto max-w-c-xl px-4 py-16 md:grid md:grid-cols-2 md:grid-rows-1 md:gap-x-8 lg:py-20"
    >
      <div className="aspect-video w-full md:col-start-1 md:col-end-2 md:aspect-square md:h-full">
        <img
          src={'https://res.cloudinary.com/dtofeffbi/image/upload/v1707853253/home-page/m8k4iqy1od78q0v8qe8u.webp'}
          className="w-full rounded-md object-cover md:h-full"
          alt=""
        ></img>
      </div>

      <main className="flex flex-col justify-center md:col-start-2 md:col-end-3">
        <PageTitle title={'Kontakt'} disablePaddingTop={false}></PageTitle>
        <h3 className=" mb-1 text-2xl text-hm-black75">Masz pytanie?</h3>
        <p className=" pb-6">Napisz do nas, a nasz zespół odezwie się do Ciebie w ciągu 24 godzin.</p>
        <div className="mt-4 grid grid-flow-row grid-cols-12 text-lg">
          <Call className=" col-span-1 mr-4 text-hm-yellow"></Call>
          <a className=" col-span-11 font-semibold text-hm-black75" data-testid="phone" href="tel:+48655120722">
            +48 655 120 722
          </a>
        </div>
        <div className=" mt-4 grid grid-flow-row grid-cols-12 text-lg">
          <Email className=" col-span-1 mr-4 text-hm-yellow"></Email>
          <a
            className=" col-span-11 font-semibold text-hm-black75"
            data-testid="mailTo"
            href="mailto:hemet@hemet.hg.pl"
          >
            hemet@hemet.hg.pl
          </a>
        </div>
        <div className=" mt-4 grid grid-flow-row grid-cols-12 text-lg">
          <LocationOn className="col-span-1 mr-4 text-hm-yellow"></LocationOn>
          <span className="col-span-11 font-semibold text-hm-black75">
            Stare Bojanowo ul. Przemysłowa 1, 64-030 Śmigiel
          </span>
        </div>
      </main>
    </div>
  );
};
