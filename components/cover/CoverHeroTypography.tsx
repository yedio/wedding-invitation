"use client";

import { info } from "@libs/client/InfoData";

interface CoverHeroTypographyProps {
  day: string;
  month: string;
  yearShort: string;
  parallaxY: number;
}

export function CoverHeroTypography({
  day,
  month,
  yearShort,
  parallaxY,
}: CoverHeroTypographyProps) {
  const { topLeft, topRight, bottomLeft, bottomRight } =
    info.coverHero.cornerLabels;

  return (
    <div className="relative min-h-[100svh] w-full">
      <div
        className="relative h-[100svh] w-full text-white"
        style={{
          transform: `translate3d(0, ${parallaxY}px, 0)`,
          willChange: "transform",
        }}
      >
        <p
          className="absolute left-8 top-8 z-[2] text-[10px] font-medium uppercase tracking-[0.28em] sm:left-10 sm:top-10 sm:text-xs"
          style={{ fontFamily: "var(--font-cover-date), serif" }}
        >
          {topLeft}
        </p>

        <div className="absolute right-8 top-8 z-[2] flex items-center gap-2 sm:right-10 sm:top-10">
          <p
            className="text-[10px] font-medium uppercase tracking-[0.28em] sm:text-xs"
            style={{ fontFamily: "var(--font-cover-date), serif" }}
          >
            {topRight}
          </p>
          <button
            type="button"
            className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-4 bg-white/20 text-[10px] font-medium text-white/90 backdrop-blur-[2px] sm:h-9 sm:w-9"
            aria-label="메뉴"
          >
            ···
          </button>
        </div>

        <p
          className="absolute bottom-8 left-8 z-[2] text-[10px] font-medium uppercase tracking-[0.28em] sm:bottom-10 sm:left-10 sm:text-xs"
          style={{ fontFamily: "var(--font-cover-date), serif" }}
        >
          {bottomLeft}
        </p>

        <p
          className="absolute bottom-8 right-8 z-[2] text-[10px] font-medium uppercase tracking-[0.28em] sm:bottom-10 sm:right-10 sm:text-xs"
          style={{ fontFamily: "var(--font-cover-date), serif" }}
        >
          {bottomRight}
        </p>

        <div
          className="absolute left-1/2 top-1/2 z-[2] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center leading-[0.88]"
          style={{ fontFamily: "var(--font-cover-date), serif" }}
        >
          <span className="text-[clamp(3.25rem,11vh,5.25rem)] font-semibold">
            {day}
          </span>
          <span className="text-[clamp(2.4rem,8.5vh,4rem)] font-medium opacity-[0.96]">
            {month}
          </span>
          <span className="text-[clamp(3.25rem,11vh,5.25rem)] font-semibold">
            {yearShort}
          </span>
        </div>
      </div>
    </div>
  );
}
