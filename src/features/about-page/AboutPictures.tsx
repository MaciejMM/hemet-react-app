import React from 'react';

export const AboutPictures = () => {
  return (
    <div className="bg-hm-lightgrey py-16 lg:py-20">
      <div className="m-auto grid max-w-c-xl grid-cols-2 gap-4 px-4 lg:gap-8">
        <img
          className="aspect-square h-full w-full rounded-md object-cover"
          src={'images/IMG_20180802_111201.jpg'}
          alt=""
        />
        <img
          className="aspect-square h-full w-full rounded-md object-cover"
          src={'images/IMG_20191030_112518.jpg'}
          alt=""
        />
        <img
          className="aspect-square h-full w-full rounded-md object-cover"
          src={'images/IMG_20180608_132959.jpg'}
          alt=""
        />
        <img
          className="aspect-square h-full w-full rounded-md object-cover"
          src={'images/IMG_20210318_115316.jpg'}
          alt=""
        />
        <img
          className="aspect-square h-full w-full rounded-md object-cover"
          src={'images/IMG_20201204_120559.jpg'}
          alt=""
        />
        <img
          className="aspect-square h-full w-full rounded-md object-cover"
          src={'images/IMG_20200213_131455.jpg'}
          alt=""
        />
      </div>
    </div>
  );
};
