import React from 'react';

export const HomeStats = () => {
  return (
    <div className="main-stats bg-hm-black75 w-100 py-16 lg:py-20">
      <ul className="max-w-c-xl m-auto px-4  grid grid-cols-2 md:flex md:flex-row md:items-center ">
        <li className="flex flex-col justify-center items-center mb-12 md:mb-0 md:flex-1">
          <span className="text-4xl xl:text-5xl pb-6  detailed text-hm-yellow">300+</span>
          <span className="text-white  ">Ukończonych projektów</span>
        </li>
        <li className=" border-l-1 border-light border-amber-50  flex flex-col justify-center items-center mb-12 md:mb-0 md:flex-1">
          <span className="text-4xl xl:text-5xl pb-6 detailed text-hm-yellow ">50+</span>
          <span className="text-white ">Pracowników</span>
        </li>
        <li className="col-start-1 col-end-3 md:border-l-1 md:border-light flex flex-col justify-center items-center md:mb-0 md:flex-1">
          <span className="text-4xl xl:text-5xl pb-6 detailed text-hm-yellow ">20+</span>
          <span className="text-white ">Lat doświadczenia</span>
        </li>
      </ul>
    </div>
  );
};
