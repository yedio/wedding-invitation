"use client";

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
  return (
    <div className="relative min-h-[100svh] w-full">
      <div
        className="relative h-[100svh] w-full text-white"
        style={{
          transform: `translate3d(0, ${parallaxY}px, 0)`,
          willChange: "transform",
        }}
      >
        <div
          className="absolute left-1/2 top-1/2 z-[2] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center leading-[0.88]"
          style={{ fontFamily: "var(--font-cover-date), serif" }}
        >
          <span className="text-[clamp(3.25rem,11vh,5.25rem)] font-semibold">
            {yearShort}
          </span>
          <span className="text-[clamp(2.4rem,8.5vh,4rem)] font-medium opacity-[0.96]">
            {month}
          </span>
          <span className="text-[clamp(3.25rem,11vh,5.25rem)] font-semibold">
            {day}
          </span>
        </div>
      </div>
    </div>
  );
}
