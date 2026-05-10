"use client";

import { useEffect, useState } from "react";
import { cls } from "@libs/client/Utility";
import { CommonImage } from "./image/CommonImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface GalleryProps {
  images: string[];
  providedStyle?: string;
}

export const Gallery = ({ images, providedStyle }: GalleryProps) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openFullScreen = (index: number) => {
    setCurrentIndex(index);
    setIsFullScreen(true);
  };

  const settings = {
    initialSlide: currentIndex,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    afterChange: (index: number) => setCurrentIndex(index),
  };

  useEffect(() => {
    if (isFullScreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFullScreen]);

  return (
    <>
      <div className={cls("grid grid-cols-3 gap-2", providedStyle)}>
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-[3/4] cursor-pointer overflow-hidden"
            onClick={() => openFullScreen(index)}
          >
            <CommonImage
              src={image}
              providedStyle="h-full w-full !object-cover object-center"
            />
          </div>
        ))}
      </div>
      {isFullScreen && (
        <div className="fixed inset-0 z-20 bg-white flex flex-col items-center justify-center max-w-[440px] mx-auto h-full">
          <button
            type="button"
            className="absolute right-4 top-3 rounded-4 p-2 hover:bg-black/5"
            onClick={() => setIsFullScreen(false)}
            aria-label="닫기"
          >
            <CommonImage src="/img/icons/close.svg" width={20} />
          </button>
          {/* Slide Show */}
          <div className="w-full max-w-[440px]">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className="box-border flex h-[calc(100dvh-5.5rem)] min-h-0 w-full items-center justify-center px-2"
                >
                  <CommonImage
                    src={image}
                    providedStyle="max-h-full max-w-full !object-contain object-center !shrink"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
};
