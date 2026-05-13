import { info } from "@libs/client/InfoData";
import {
  invitationWeekdayTimeLabelKo,
  parseInvitationDate,
} from "@libs/client/Utility";
import { Wrapper } from "../common/Layout";

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

export const InfoContent = () => {
  const dateLine = formatCoverDateLineKo(info.date.at);
  const venueLine = [info.location.place, info.location.hall]
    .filter(Boolean)
    .join(" ");

  return (
    <Wrapper providedStyle="!py-5">
      <div className="w-full px-5 py-4 text-center">
        <div className="flex flex-col space-y-4">
          <p className="text-[20px] leading-snug tracking-tight font-weight-600 flex items-center justify-center space-x-2.5">
            <span className="">{info.date.groom}</span>
            <span>|</span>
            <span className="">{info.date.bride}</span>
          </p>
          <div className="flex flex-col gap-y-2">
            <p className="text-[16px] leading-[1.5]">{dateLine}</p>
            <p className="text-[16px] leading-[1.5]">{venueLine}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
