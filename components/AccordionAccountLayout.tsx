"use client";
import { CommonImage } from "./image/CommonImage";
import { useState } from "react";
import { CopyButton } from "./buttons/CopyButton";
import { cls } from "@libs/client/Utility";

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
        <div className="text-center text-15 font-medium text-[#524548]">
          {title}
        </div>
        <CommonImage
          src={"/img/icons/arrow_down.svg"}
          width={15}
          providedStyle={cls(
            "absolute top-4 right-4 transition-transform duration-300",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        />
      </div>
      {isOpen && (
        <div className="rounded-b-[8px] bg-[#fffcfc] p-3">
          {rows.map((row, index) => (
            <div
              key={`${row.role}-${row.accountNumber}`}
              className={index > 0 ? "mt-3 border-t border-[#ece8e8] pt-3" : ""}
            >
              <div className="mb-1.5 text-center text-14 text-[#524548]">
                {row.role}
              </div>
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1 text-15 leading-[22px] text-[#524548]">
                  <div className="break-all">
                    {row.bankName} | {row.accountNumber}
                    {row.holderName ? ` (${row.holderName})` : ""}
                  </div>
                </div>
                <CopyButton
                  copyText={row.accountNumber}
                  successMessage="계좌번호를 복사하였습니다."
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

interface AccordionAccountLayoutProps {
  title: string;
  accountHolder: string;
  bankName: string;
  account: string;
  providedStyle?: string;
}

export const AccordionAccountLayout = ({
  title,
  accountHolder,
  bankName,
  account,
  providedStyle,
}: AccordionAccountLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full flex flex-col">
      <div
        className={cls(
          "relative  bg-[#F3EEEE] p-3 cursor-pointer",
          isOpen ? "rounded-t-[8px]" : "rounded-[8px]"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-center text-[#524548] text-14">{title}</div>
        <CommonImage
          src={"/img/icons/arrow_down.svg"}
          width={15}
          providedStyle={cls(
            "absolute top-4 right-4 transition-transform duration-300",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        />
      </div>
      {isOpen && (
        <div className="w-full flex  items-start bg-[#fffcfc] rounded-b-[8px] p-3 justify-between">
          <div className="min-w-0 flex-1 text-[#524548] text-15 leading-[22px]">
            <div className="break-all">
              {bankName} | {account}
              {accountHolder ? ` (${accountHolder})` : ""}
            </div>
          </div>
          <div className="flex flex-col space-y-1 ">
            <CopyButton
              copyText={account}
              successMessage="계좌번호를 복사하였습니다."
            />
          </div>
        </div>
      )}
    </div>
  );
};
