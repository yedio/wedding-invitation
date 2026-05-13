"use client";
import type { ReactNode } from "react";
import { CommonImage } from "@components/image/CommonImage";
import { LineBreaker } from "@libs/client/Utility";
import { FormWithTitle, Wrapper } from "./common/Layout";
import { InfoContent } from "./content/InfoContent";
import { WeddingDateContent } from "./content/WeddingDateContent";
import { InvitationContent } from "./content/InvitationContent";
import { GallaryContent } from "./content/GallaryContent";
import { LocationContent } from "./content/LocationContent";
import { AccountContent } from "./content/AccountContent";

export default function ContentLayout({
  galleryImages,
}: {
  galleryImages: string[];
}) {
  return (
    <div className="w-full flex flex-col items-center pb-10">
      <InfoContent />
      {/* 초대합니다 */}
      <InvitationContent />
      {/* 갤러리 */}
      <GallaryContent images={galleryImages} />
      {/* 예식 안내 */}
      <WeddingDateContent />
      {/* 오시는 길 */}
      <LocationContent />
      {/* 마음 전하실 곳 */}
      <AccountContent />
    </div>
  );
}

export interface WayToComeLineItem {
  color: string;
  text: string;
}

interface WayToComeFormProps {
  title: ReactNode;
  descriptions?: string[];
  lineItems?: WayToComeLineItem[];
  img?: string;
}
export function WayToComeForm({
  title,
  descriptions = [],
  lineItems,
  img,
}: WayToComeFormProps) {
  return (
    <div className="flex w-full flex-col gap-1">
      <div className="w-full text-left text-15 font-medium leading-[26px] text-gray-600">
        {title}
      </div>
      <div className="flex w-full flex-col space-y-2 pl-4 text-15 text-gray-700 sm:pl-5">
        {lineItems?.map((row, index) => (
          <div key={index} className="flex gap-2.5 text-15 leading-[27px]">
            <span
              className="mt-[7.5px] inline-block size-3 shrink-0 self-start rounded-full"
              style={{ backgroundColor: row.color }}
              aria-hidden
            />
            <div className="min-w-0 flex-1">{LineBreaker(row.text)}</div>
          </div>
        ))}
        {descriptions.map((desc, index) => (
          <div key={`d-${index}`}>{LineBreaker(desc)}</div>
        ))}
      </div>
      {img && <CommonImage src={img} />}
    </div>
  );
}
