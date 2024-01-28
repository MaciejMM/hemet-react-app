import React from 'react';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../components/PageTitle';

export const HomeAbout = () => {
  return (
    <div className="max-w-c-xl m-auto px-4  main-about py-16 lg:py-20 lg:grid grid-cols-2  lg:gap-x-8  lg:grid-rows-custom-min">
      <div className="bg-amber-100 col-start-2 col-end-3 row-start-1 row-end-2 max-h-min aspect-video lg:aspect-video lg:h-full">
        <img src={'images/IMG_20210318_115012.jpg'} alt="" className="object-fill h-full w-full rounded-md"></img>
      </div>
      <main className="col-span-1 grid ">
        <PageTitle title={'O nas'}></PageTitle>
        <p className="mb-4 font-semibold leading-7">
          Firma <span>"Hemet"</span> Henryk Gałecki istnieje na rynku od 2003 noku. Naszą firmę tworzą ludzie z pasją i
          dobrą energią.
        </p>
        <p className="mb-4 text-hm-black90 leading-7">Zajmujemy się produkcją i montażem...</p>
        <Link to={'/about'} className="btn btn-xl ">
          Zobacz więcej
        </Link>
      </main>
    </div>
  );
};
