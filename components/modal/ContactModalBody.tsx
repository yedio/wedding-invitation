"use client";

import { CommonImage } from "@components/image/CommonImage";
import { info } from "@libs/client/InfoData";
import { handleCall, handleMessage } from "@libs/client/Utility";

interface ContactRowProps {
  role: string;
  name: string;
  phone: string;
}

function ContactRow({ role, name, phone }: ContactRowProps) {
  return (
    <div className="flex items-center gap-2 border-b border-[#f0f0f0] py-4 last:border-b-0">
      <span className="w-[52px] shrink-0 text-14 text-[#888]">{role}</span>
      <span className="min-w-0 flex-1 text-15 font-medium text-black">
        {name}
      </span>
      <div className="flex shrink-0 gap-2">
        <button
          type="button"
          onClick={() => handleCall(phone)}
          className="flex h-9 w-9 items-center justify-center rounded-4 border border-[#e5e5e5] bg-white active:bg-gray-50"
          aria-label={`${name}에게 전화`}
        >
          <CommonImage src="/img/icons/phone.svg" width={18} alt="" />
        </button>
        <button
          type="button"
          onClick={() => handleMessage(phone)}
          className="flex h-9 w-9 items-center justify-center rounded-4 border border-[#e5e5e5] bg-white active:bg-gray-50"
          aria-label={`${name}에게 문자`}
        >
          <CommonImage src="/img/icons/message.svg" width={18} alt="" />
        </button>
      </div>
    </div>
  );
}

function ContactSection({
  heading,
  rows,
}: {
  heading: string;
  rows: { role: string; name: string; phone: string }[];
}) {
  return (
    <div className="px-5">
      <div className="border-b border-[#e0e0e0] pb-2 pt-5">
        <h3 className="text-15 font-bold text-black">{heading}</h3>
      </div>
      <div className="pb-2">
        {rows.map((row) => (
          <ContactRow key={`${heading}-${row.role}`} {...row} />
        ))}
      </div>
    </div>
  );
}

export function ContactModalBody() {
  const { groomSide, brideSide } = info.weddingContacts;
  return (
    <div className="pb-6">
      <ContactSection heading={groomSide.title} rows={groomSide.rows} />
      <ContactSection heading={brideSide.title} rows={brideSide.rows} />
    </div>
  );
}
