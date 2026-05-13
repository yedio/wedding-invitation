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
          className="aspect-[5/3] w-full rounded-[8px] object-cover shadow-sm"
          loading="lazy"
        />
        <div className="flex flex-col mx-auto mt-8 w-max max-w-full grid-cols-[auto_auto_auto] items-baseline gap-x-2 gap-y-3 text-15 font-medium leading-[26px] text-black">
          <ParentInfoItem
            father={groomLine.parent1}
            mother={groomLine.parent2}
            child={groomLine.self}
            gender="M"
          />
          <ParentInfoItem
            father={brideLine.parent1}
            mother={brideLine.parent2}
            child={brideLine.self}
            gender="F"
          />
        </div>
        <button
          type="button"
          onClick={() => setContactOpen(true)}
          className="mt-6 flex w-full max-w-[200px] items-center justify-center gap-2 rounded-[100px] border border-main-color/35 bg-white py-2 text-15 font-medium text-main-color transition active:bg-[#fff8f9]"
        >
          <span className="text-11" aria-hidden>
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

const ParentInfoItem = ({
  father,
  mother,
  child,
  gender,
}: {
  father: string;
  mother: string;
  child: string;
  gender: "M" | "F";
}) => {
  return (
    <div className="flex items-center gap-x-2 text-16">
      <span className="text-left whitespace-nowrap">
        {father} · {mother}
      </span>
      <div className="flex items-center gap-x-1.5">
        <span className="shrink-0 text-[#999999]">의</span>
        <span className="text-[#999999] w-[32px] text-right">
          {gender === "M" ? "아들" : "딸"}
        </span>
      </div>
      <span className="text-right whitespace-nowrap">{child}</span>
    </div>
  );
};
