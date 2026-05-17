"use client";

import { CoverHeroNames } from "@components/cover/CoverHeroNames";
import { CoverMetaFooter } from "@components/cover/CoverMetaFooter";
import { info } from "@libs/client/InfoData";
import { Cormorant_Infant } from "next/font/google";

const coverSerif = Cormorant_Infant({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-cover-serif",
});

export default function CoverLayout() {
  return (
    <section
      className={`relative w-full overflow-hidden ${coverSerif.variable}`}
    >
      <div className="relative flex h-[100svh] max-h-[840px] w-full flex-col overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
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

        <div className="relative z-[1] flex min-h-0 flex-1 flex-col justify-between px-5 pb-9 pt-11 sm:pb-10 sm:pt-12">
          <CoverHeroNames names={info.coverHero.coupleNamesEn} />
          <CoverMetaFooter />
        </div>
      </div>
    </section>
  );
}
