import { motion } from 'framer-motion';
import React, { useCallback, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import { useScrollDirection } from 'react-use-scroll-direction';

export const AboutPictures = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const { isScrollingDown } = useScrollDirection();
  const imagePathList = [
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707381030/hemet-images/itlpsxpw1r4lbop95rta.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707381196/hemet-images/lnks495kecevqf8m3eft.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707381205/hemet-images/evkynws8vv8utopabsrz.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707381210/hemet-images/j2awltimh1kvteudjekq.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707381226/hemet-images/jeol7g4pg32e7arzh8ll.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707381232/hemet-images/cvwp38k0h78bdqsxeemj.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707381257/hemet-images/cwurqjcrjpxezcuj7i9k.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707381262/hemet-images/bz9p5rf01d0chgcutv3f.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707381267/hemet-images/snfki97mijuj3rhv86u0.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707381281/hemet-images/ytu7lfd5llptwoey8g8p.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707381286/hemet-images/a5ludih1muvymiqwefz2.webp',
    'https://res.cloudinary.com/dtofeffbi/image/upload/v1707381302/hemet-images/oeebdrb3giwgqe6oyeda.webp',
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
          <motion.img
            initial={{ opacity: 0, y: isScrollingDown ? -200 : 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src={src}
            onClick={() => openImageViewer(index)}
            className="aspect-square cursor-pointer rounded-md object-cover"
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
