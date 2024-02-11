import React from 'react';
import { PageTitle } from '../../components/PageTitle';
import { LinkButton } from '../../components/Button';
import { motion } from 'framer-motion';
import { useScrollDirection } from 'react-use-scroll-direction';

export const HomeAbout = () => {
  const { isScrollingDown } = useScrollDirection();

  return (
    <div className="main-about m-auto max-w-c-xl grid-cols-2 px-4 py-16 lg:grid lg:grid-rows-1 lg:gap-x-8 lg:py-20">
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="col-start-2 col-end-3 row-start-1 row-end-2  "
      >
        <img
          src={'https://res.cloudinary.com/dtofeffbi/image/upload/v1707654548/hemet-images/g62cejxyv9mcwf697q5q.webp'}
          alt=""
          className="aspect-video h-full w-full rounded-md object-cover lg:aspect-square"
        ></img>
      </motion.div>
      <motion.main
        initial={{ opacity: 0, y: isScrollingDown ? -200 : 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="col-span-1 flex flex-col justify-center"
      >
        <PageTitle title={'O nas'}></PageTitle>
        <p className="mb-4 font-semibold leading-7 ">
          Firma <span>"Hemet"</span> Henryk Gałecki istnieje na rynku od 2003 roku. Naszą firmę tworzą ludzie z pasją i
          dobrą energią.
        </p>
        <p className="mb-4 leading-7 text-black-90 lg:mb-20">Zajmujemy się produkcją i montażem...</p>
        <LinkButton pageLink={'/about'} title={'Zobacz więcej'} disableBorder={true}></LinkButton>
      </motion.main>
    </div>
  );
};
