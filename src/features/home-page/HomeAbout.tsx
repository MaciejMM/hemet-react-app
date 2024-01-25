import React from 'react';
import { Link } from 'react-router-dom';

export const HomeAbout = () => {
  return (
    <div className="container main-about py-16 lg:py-20 lg:grid grid-cols-2 lg:gap-x-8">
      <div className="bg-amber-100 col-start-2 col-end-3 row-start-1 row-end-2 max-h-min aspect-video lg:aspect-auto">
        <img src={'images/IMG_20210318_115012.jpg'} alt="" className="object-fill h-full w-full"></img>
      </div>
      <main className="col-start-1 col-end-2 grid items-end">
        <div className="title">O nas</div>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
          magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla
          est ullamcorper eget nulla facilisi etiam dignissim diam quis
        </div>
        <Link to={'/about'} className="btn btn-xl mt-40">
          Zobacz więcej
        </Link>
      </main>
    </div>
  );
};
