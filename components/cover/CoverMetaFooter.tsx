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
  const namesLine = `${info.date.groom} | ${info.date.bride}`;
  const dateLine = formatCoverDateLineKo(info.date.at);
  const venueLine = [info.location.place, info.location.hall]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="w-full px-5 py-4 text-center">
      <div className="mx-auto max-w-[20rem] space-y-1">
        <p className="text-[20px] leading-snug tracking-tight">{namesLine}</p>
        <p className="text-[16px] leading-[1.5]">{dateLine}</p>
        <p className="text-[16px] leading-[1.5]">{venueLine}</p>
      </div>
    </div>
  );
}
