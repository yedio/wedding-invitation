"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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

const SWIPE_THRESHOLD_PX = 48;

export const Gallery = ({ images, providedStyle }: GalleryProps) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [showAllPreview, setShowAllPreview] = useState(false);
  const [fitMode, setFitMode] = useState<"contain" | "cover">("contain");
  const count = images.length;
  const viewerRef = useRef<HTMLDivElement>(null);
  const naturalSizeRef = useRef({ width: 0, height: 0 });

  const updateFitMode = useCallback(() => {
    const { width, height } = naturalSizeRef.current;
    const viewer = viewerRef.current;
    if (!viewer || !width || !height) return;

    const { clientWidth, clientHeight } = viewer;
    if (!clientWidth || !clientHeight) return;

    const imageAspect = width / height;
    const viewerAspect = clientWidth / clientHeight;
    // contain 시 좌우 여백이 생기는 경우(이미지가 뷰어보다 상대적으로 더 길 때)만 cover
    setFitMode(imageAspect < viewerAspect ? "cover" : "contain");
  }, []);

  useEffect(() => {
    if (!open) return;
    setFitMode("contain");
    naturalSizeRef.current = { width: 0, height: 0 };
  }, [index, open]);

  useEffect(() => {
    if (!open) return;
    const viewer = viewerRef.current;
    if (!viewer) return;

    const observer = new ResizeObserver(() => updateFitMode());
    observer.observe(viewer);
    return () => observer.disconnect();
  }, [open, updateFitMode]);
  const hasMorePreview = count > PREVIEW_LIMIT;
  const previewImages = showAllPreview
    ? images
    : images.slice(0, PREVIEW_LIMIT);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const goPrev = useCallback(() => {
    if (count <= 1) return;
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    if (count <= 1) return;
    setIndex((i) => (i + 1) % count);
  }, [count]);

  const swipeStartX = useRef<number | null>(null);

  const onSwipeStart = useCallback((clientX: number) => {
    swipeStartX.current = clientX;
  }, []);

  const onSwipeEnd = useCallback(
    (clientX: number) => {
      if (swipeStartX.current === null || count <= 1) return;
      const deltaX = clientX - swipeStartX.current;
      swipeStartX.current = null;
      if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return;
      if (deltaX > 0) goPrev();
      else goNext();
    },
    [count, goNext, goPrev]
  );

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
                loading="eager"
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
        <div className="relative flex h-full w-full flex-col overflow-hidden">
          <div
            ref={viewerRef}
            className="relative flex min-h-0 w-full flex-1 touch-pan-y items-center justify-center overflow-hidden"
            onTouchStart={(e) => onSwipeStart(e.touches[0].clientX)}
            onTouchEnd={(e) => onSwipeEnd(e.changedTouches[0].clientX)}
            onTouchCancel={() => {
              swipeStartX.current = null;
            }}
          >
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
              key={images[index]}
              src={images[index]}
              onLoad={(e) => {
                const { naturalWidth, naturalHeight } = e.currentTarget;
                naturalSizeRef.current = {
                  width: naturalWidth,
                  height: naturalHeight,
                };
                updateFitMode();
              }}
              providedStyle={cls(
                "!block object-center",
                fitMode === "cover"
                  ? "!h-full !w-full !max-h-none !max-w-none !object-cover"
                  : "!h-auto !w-full !max-h-full !object-contain"
              )}
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
