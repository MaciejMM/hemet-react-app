import React from 'react';
import { PageTitle } from '../../components/PageTitle';
import { LinkButton } from '../../components/Button';

export const HomeAbout = () => {
  return (
    <div className="main-about m-auto max-w-c-xl grid-cols-2 px-4 py-16 lg:grid lg:grid-rows-1 lg:gap-x-8 lg:py-20">
      <div className="col-start-2 col-end-3 row-start-1 row-end-2  ">
        <img
          src={'https://res.cloudinary.com/dtofeffbi/image/upload/v1707654548/hemet-images/g62cejxyv9mcwf697q5q.webp'}
          alt=""
          className="aspect-video h-full w-full rounded-md object-cover lg:aspect-square"
        ></img>
      </div>
      <main className="col-span-1 flex flex-col justify-center">
        <PageTitle title={'O nas'}></PageTitle>
        <p className="mb-4 font-semibold leading-7 ">
          Firma <span>"Hemet"</span> Henryk Gałecki istnieje na rynku od 2003 roku. Naszą firmę tworzą ludzie z pasją i
          dobrą energią.
        </p>
        <p className="mb-4 leading-7 text-black-90 lg:mb-20">Zajmujemy się produkcją i montażem...</p>
        <LinkButton pageLink={'/about'} title={'Zobacz więcej'} disableBorder={true}></LinkButton>
      </main>
    </div>
  );
};
