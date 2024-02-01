import React from 'react';

export const HomeStats = () => {
  return (
    <div className="main-stats w-100 bg-black-75 py-16 lg:py-20">
      <ul className="m-auto grid max-w-c-xl  grid-cols-2 px-4 md:flex md:flex-row md:items-center ">
        <li className="mb-12 flex flex-col items-center justify-center md:mb-0 md:flex-1">
          <span className="detailed pb-6 text-4xl  text-hm-yellow xl:text-5xl">300+</span>
          <span className="text-white  ">Ukończonych projektów</span>
        </li>
        <li className=" mb-12 flex flex-col  items-center justify-center border-l-1 border-amber-50 border-light md:mb-0 md:flex-1">
          <span className="detailed pb-6 text-4xl text-hm-yellow xl:text-5xl ">50+</span>
          <span className="text-white ">Pracowników</span>
        </li>
        <li className="col-start-1 col-end-3 flex flex-col items-center justify-center md:mb-0 md:flex-1 md:border-l-1 md:border-light">
          <span className="detailed pb-6 text-4xl text-hm-yellow xl:text-5xl ">20+</span>
          <span className="text-white ">Lat doświadczenia</span>
        </li>
      </ul>
    </div>
  );
};
