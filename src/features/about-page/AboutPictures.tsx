import React, { useCallback, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

export const AboutPictures = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const imagePathList = [
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707778229/hemet-images/reakhfahbik7d9bibdgw.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707778236/hemet-images/s6cahmf8flhhqh8txasc.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707778243/hemet-images/nneuxwbnfgw34uzdpebh.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707778250/hemet-images/ueieidkxgahpvocspgxb.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707778256/hemet-images/hectuyozclhic3sz5jib.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707778263/hemet-images/ogmms22uzttetnzs0agx.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707778268/hemet-images/n6gfnnom5zccaavxpjzb.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707778285/hemet-images/sz2e0exgi1y3aw6ldkwl.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707778294/hemet-images/vu0hmcnhsvxmgcnthep9.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707778299/hemet-images/kprmisdothrood48fh1m.webp',
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
            className=" aspect-[3/4] h-full w-full cursor-pointer rounded-md object-cover  md:aspect-square"
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
