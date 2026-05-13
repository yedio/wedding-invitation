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
    <div className="absolute inset-0 min-h-0 w-full">
      <div
        className="absolute inset-0 flex items-center justify-center text-white"
        style={{
          transform: `translate3d(0, ${parallaxY}px, 0)`,
          willChange: "transform",
        }}
      >
        <div
          className="z-[2] flex flex-col items-center text-center leading-[0.88]"
          style={{ fontFamily: "var(--font-cover-date), serif" }}
        >
          <span className="text-[clamp(4rem,14vh,6.5rem)] font-semibold">
            {yearShort}
          </span>
          <span className="text-[clamp(2.4rem,8.5vh,4rem)] font-medium opacity-[0.96]">
            {month}
          </span>
          <span className="text-[clamp(4rem,14vh,6.5rem)] font-semibold">
            {day}
          </span>
        </div>
      </div>
    </div>
  );
}
