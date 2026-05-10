"use client";

import { AppModal } from "@components/modal/AppModal";
import { ContactModalBody } from "@components/modal/ContactModalBody";
import { info } from "@libs/client/InfoData";
import { useState } from "react";

export function WeddingCoupleIntro() {
  const [contactOpen, setContactOpen] = useState(false);
  const { imageUrl, groomLine, brideLine } = info.weddingIntro;

  return (
    <>
      <div className="flex w-full flex-col items-center px-5 py-8">
        <img
          src={imageUrl}
          alt=""
          className="aspect-[4/5] w-full max-w-[300px] rounded-2xl object-cover shadow-sm"
          loading="lazy"
        />
        <div className="mx-auto mt-8 inline-grid w-max max-w-full grid-cols-[auto_minmax(0,1fr)_auto] items-baseline gap-x-2 gap-y-3 text-15 font-medium leading-[26px] text-black">
          <span className="text-left whitespace-nowrap">
            {groomLine.parent1} · {groomLine.parent2}
          </span>
          <span className="min-w-0 text-center font-normal text-[#999999]">
            의 아들
          </span>
          <span className="text-right whitespace-nowrap">{groomLine.self}</span>
          <span className="text-left whitespace-nowrap">
            {brideLine.parent1} · {brideLine.parent2}
          </span>
          <span className="min-w-0 text-center font-normal text-[#999999]">
            의 딸
          </span>
          <span className="text-right whitespace-nowrap">{brideLine.self}</span>
        </div>
        <button
          type="button"
          onClick={() => setContactOpen(true)}
          className="mt-9 flex w-full max-w-[200px] items-center justify-center gap-2 rounded-4 border border-main-color/35 bg-white py-3 text-16 font-medium text-main-color transition active:bg-[#fff8f9]"
        >
          <span className="text-18" aria-hidden>
            📞
          </span>
          연락하기
        </button>
      </div>

      <AppModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        title="연락하기"
      >
        <ContactModalBody />
      </AppModal>
    </>
  );
}
