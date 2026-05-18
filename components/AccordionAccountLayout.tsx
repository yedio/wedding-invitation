"use client";
import { CommonImage } from "./image/CommonImage";
import { useState } from "react";
import { CopyButton } from "./buttons/CopyButton";
import { accountNumberForCopy, cls } from "@libs/client/Utility";

export interface GiftAccountRow {
  role: string;
  bankName: string;
  accountNumber: string;
  holderName: string;
}

interface AccordionAccountSideProps {
  title: string;
  rows: GiftAccountRow[];
}

/** 신랑측 / 신부측 등 상위 탭 — 펼치면 내부에 역할별 계좌 */
export const AccordionAccountSideLayout = ({
  title,
  rows,
}: AccordionAccountSideProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex w-full flex-col">
      <div
        className={cls(
          "relative cursor-pointer bg-[#F3EEEE] px-3 py-3.5",
          isOpen ? "rounded-t-[8px]" : "rounded-[8px]"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-center text-14 font-medium text-[#524548]">
          {title}
        </div>
        <CommonImage
          src={"/img/icons/arrow_down.svg"}
          width={15}
          providedStyle={cls(
            "absolute top-4 right-4 transition-transform duration-500",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        />
      </div>
      {isOpen && (
        <div className="flex flex-col gap-2 rounded-b-[8px] bg-[#fffcfc] p-3 text-14 text-[#524548]">
          {rows.flatMap((row, index) => {
            const block = (
              <div
                key={`${row.role}-${row.accountNumber}`}
                className="flex flex-col gap-1"
              >
                <div className="text-left">{row.role}</div>
                <div className="flex w-full items-center justify-between gap-2 text-left">
                  <div className="min-w-0 flex-1 break-all">
                    {row.bankName} | {row.accountNumber}
                  </div>
                  <div className="shrink-0 self-start">
                    <CopyButton
                      copyText={accountNumberForCopy(row.accountNumber)}
                      imgSize={18}
                      successMessage="계좌번호를 복사하였습니다."
                    />
                  </div>
                </div>
                {row.holderName && (
                  <div className="text-left">{row.holderName}</div>
                )}
              </div>
            );
            if (index === 0) return [block];
            return [
              <div
                key={`sep-${row.role}-${row.accountNumber}`}
                className="border-t border-[#ece8e8]"
                aria-hidden
              />,
              block,
            ];
          })}
        </div>
      )}
    </div>
  );
};
