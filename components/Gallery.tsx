"use client";

import { useState } from "react";
import { cls } from "@libs/client/Utility";
import { CommonImage } from "./image/CommonImage";
import { AppModal } from "@components/modal/AppModal";

interface GalleryProps {
  images: string[];
  providedStyle?: string;
}

const PREVIEW_LIMIT = 9;

const ARROW_CLASS =
  "absolute top-1/2 z-10 flex h-12 w-10 -translate-y-1/2 items-center justify-center border-0 bg-transparent p-0 text-32 font-light leading-none text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]";

export const Gallery = ({ images, providedStyle }: GalleryProps) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [showAllPreview, setShowAllPreview] = useState(false);
  const count = images.length;
  const hasMorePreview = count > PREVIEW_LIMIT;
  const previewImages = showAllPreview
    ? images
    : images.slice(0, PREVIEW_LIMIT);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const goPrev = () => {
    if (count <= 1) return;
    setIndex((i) => (i - 1 + count) % count);
  };

  const goNext = () => {
    if (count <= 1) return;
    setIndex((i) => (i + 1) % count);
  };

  return (
    <>
      <div className="flex w-full flex-col gap-4">
        <div className={cls("grid grid-cols-3 gap-2", providedStyle)}>
          {previewImages.map((image, i) => (
            <button
              key={image + i}
              type="button"
              className="aspect-[3/4] cursor-pointer overflow-hidden border-0 bg-transparent p-0"
              onClick={() => openAt(i)}
              aria-label={`${i + 1}번째 사진 보기`}
            >
              <CommonImage
                src={image}
                providedStyle="pointer-events-none h-full w-full !object-cover object-center"
              />
            </button>
          ))}
        </div>

        {hasMorePreview && !showAllPreview && (
          <button
            type="button"
            onClick={() => setShowAllPreview(true)}
            className="mx-auto flex flex-row items-center justify-center gap-1 border-0 bg-transparent py-2 text-14 font-medium text-gray-600 transition active:opacity-70"
          >
            <span>더보기</span>
            <CommonImage
              src="/img/icons/arrow_down.svg"
              width={15}
              alt=""
              providedStyle="pointer-events-none shrink-0"
            />
          </button>
        )}
      </div>

      <AppModal
        open={open}
        onClose={() => setOpen(false)}
        hideTitle
        title="웨딩 갤러리"
      >
        <div className="relative flex h-full min-h-[100dvh] w-full flex-col">
          <div className="relative flex min-h-0 flex-1 items-center justify-center">
            {count > 1 && (
              <>
                <button
                  type="button"
                  className={cls(ARROW_CLASS, "left-1")}
                  onClick={goPrev}
                  aria-label="이전 사진"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className={cls(ARROW_CLASS, "right-1")}
                  onClick={goNext}
                  aria-label="다음 사진"
                >
                  ›
                </button>
              </>
            )}

            <CommonImage
              src={images[index]}
              providedStyle="!block !h-auto !w-full !max-h-[calc(100dvh-5rem)] !object-contain object-center"
            />
          </div>

          {count > 1 && (
            <p className="absolute bottom-10 left-0 right-0 text-center text-14 font-normal tabular-nums text-[#b0b0b0]">
              {index + 1} / {count}
            </p>
          )}
        </div>
      </AppModal>
    </>
  );
};
