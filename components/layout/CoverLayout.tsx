"use client";

import { CoverHeroTypography } from "@components/cover/CoverHeroTypography";
import { info } from "@libs/client/InfoData";
import { Cormorant_Infant } from "next/font/google";
import { useEffect, useState } from "react";

const coverDate = Cormorant_Infant({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-cover-date",
});

function parseHeroDate(dateStr: string) {
  const part = dateStr.trim().split(/\s+/)[0];
  const [y, m, d] = part.split(".");
  return {
    day: String(Number(d)),
    month: String(Number(m)),
    yearShort: y.slice(-2),
  };
}

export default function CoverLayout() {
  const { day, month, yearShort } = parseHeroDate(info.date.at);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallaxY = -Math.min(scrollY, 520) * 0.42;

  return (
    <section className={`relative w-full overflow-hidden ${coverDate.variable}`}>
      {/* 배경: 전면 이미지 + 파티클 비디오 — 스크롤 시 화면에 고정되는 레이어 */}
      <div
        className="sticky top-0 z-0 flex h-[100svh] w-full -mb-[100svh] flex-col overflow-hidden"
        aria-hidden
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={info.coverHero.backgroundImageUrl}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          draggable={false}
        />
        <video
          id="main-particle"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.5] sm:opacity-[0.55]"
          autoPlay
          loop
          muted
          playsInline
          src={info.coverHero.particleVideoUrl}
        />
      </div>

      {/* 텍스트만 스크롤에 맞춰 위로 이동(패럴랙스) */}
      <div className="relative z-[1] min-h-[100svh] w-full">
        <CoverHeroTypography
          day={day}
          month={month}
          yearShort={yearShort}
          parallaxY={parallaxY}
        />
      </div>
    </section>
  );
}
