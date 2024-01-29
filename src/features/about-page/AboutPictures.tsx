import React from 'react';

export const AboutPictures = () => {
  const imagePathList = [
    'images/IMG_20180802_111201.webp',
    'images/IMG_20191030_112518.webp',
    'images/IMG_20180608_132959.webp',
    'images/IMG_20210318_115316.webp',
    'images/IMG_20201204_120559.webp',
    'images/IMG_20200213_131455.webp',
  ];

  return (
    <div className="bg-hm-lightgrey py-16 lg:py-20">
      <div className="m-auto grid max-w-c-xl grid-cols-2 gap-4 px-4 lg:gap-8">
        {imagePathList.map((imagePath: string, index: number) => {
          return (
            <img key={index} className="aspect-square h-full w-full rounded-md object-center" src={imagePath} alt="" />
          );
        })}
      </div>
    </div>
  );
};
