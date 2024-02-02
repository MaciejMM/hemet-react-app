import React, { useCallback, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

export const AboutPictures = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const imagePathList = [
    'images/IMG_20180802_111201.webp',
    'images/IMG_20191030_112518.webp',
    'images/IMG_20180608_132959.webp',
    'images/IMG_20180608_133034.webp',
    'images/IMG_20210318_115316.webp',
    'images/IMG_20201204_120559.webp',
    'images/IMG_20200213_131455.webp',
    'images/IMG_20180608_132952.webp',
    'images/IMG_20201110_103411.webp',
    'images/IMG_20201204_121426.webp',
  ];

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="bg-hm-lightgrey py-16 lg:py-20">
      <div className="m-auto grid max-w-c-xl grid-cols-2 gap-4 px-4 lg:gap-8">
        {imagePathList.map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            className="object-fit aspect-square cursor-pointer rounded-md"
            key={index}
            alt=""
          />
        ))}

        {isViewerOpen && (
          <ImageViewer
            src={imagePathList}
            backgroundStyle={{ zIndex: 100 }}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={false}
            onClose={closeImageViewer}
          />
        )}
      </div>
    </div>
  );
};
