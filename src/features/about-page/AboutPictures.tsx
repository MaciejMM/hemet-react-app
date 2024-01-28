import React from 'react';

export const AboutPictures = () => {
  return (
    <div className="bg-hm-lightgrey py-16 lg:py-20">
      <div className="max-w-c-xl m-auto px-4 grid grid-cols-2 gap-4 lg:gap-8">
        <img
          className="rounded-md aspect-square w-full h-full object-cover"
          src={'images/IMG_20180802_111201.jpg'}
          alt=""
        />
        <img
          className="rounded-md aspect-square w-full h-full object-cover"
          src={'images/IMG_20191030_112518.jpg'}
          alt=""
        />
        <img
          className="rounded-md aspect-square w-full h-full object-cover"
          src={'images/IMG_20180608_132959.jpg'}
          alt=""
        />
        <img
          className="rounded-md aspect-square w-full h-full object-cover"
          src={'images/IMG_20210318_115316.jpg'}
          alt=""
        />
        <img
          className="rounded-md aspect-square w-full h-full object-cover"
          src={'images/IMG_20201204_120559.jpg'}
          alt=""
        />
        <img
          className="rounded-md aspect-square w-full h-full object-cover"
          src={'images/IMG_20200213_131455.jpg'}
          alt=""
        />
      </div>
    </div>
  );
};
