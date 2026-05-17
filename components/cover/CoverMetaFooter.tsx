"use client";

import { info } from "@libs/client/InfoData";
import {
  invitationWeekdayTimeLabelKo,
  parseInvitationDate,
} from "@libs/client/Utility";

function formatCoverDateLineKo(at: string): string {
  const date = parseInvitationDate(at);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return `${y}년 ${m}월 ${d}일 ${invitationWeekdayTimeLabelKo(date)}`;
}

export function CoverMetaFooter() {
  const dateLine = formatCoverDateLineKo(info.date.at);
  const venueLine = [info.location.place, info.location.hall]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="w-full px-1 text-center text-white">
      <div className="mx-auto max-w-[22rem] space-y-1.5">
        <p className="text-[15px] leading-[1.55] tracking-[-0.01em]">
          {dateLine}
        </p>
        <p className="text-[15px] leading-[1.55] tracking-[-0.01em]">
          {venueLine}
        </p>
      </div>
    </div>
  );
}
