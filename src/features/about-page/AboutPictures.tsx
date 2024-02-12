import React, { useCallback, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

export const AboutPictures = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const imagePathList = [
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707775012/hemet-images/rzbx848vt6prslqydmdj.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707775023/hemet-images/la5odipecexzdpvveo9j.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707775037/hemet-images/usif0muhltd7tsgizing.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707775051/hemet-images/f7hvjxd1kqm9ssdupirw.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707775060/hemet-images/xy3ra6wnhtv5wlc1ly3h.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707775069/hemet-images/ydkykwlczukeznvqvl6g.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707775077/hemet-images/djyulwpcsn9kmebzkivp.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707775082/hemet-images/m9unjpflbfvwz6zoefe0.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707775089/hemet-images/aaxixhtoy2pbfvuckboe.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707775095/hemet-images/unlc7npugfc1x2tynapm.webp',
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
