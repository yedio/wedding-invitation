"use client";
import { copyToClipboard } from "@libs/client/clipboard";

export default function FooterLayout() {
  return (
    <div className="py-8 w-full flex flex-col items-center bg-gray-100 space-y-5">
      <div className="flex flex-col items-center space-y-1">
        {/* <div className="font-sans">카카오톡 공유하기</div> */}
        <div
          className="cursor-pointer text-15"
          onClick={() =>
            copyToClipboard(window.location.href, "링크가 복사되었습니다.")
          }
        >
          링크주소 복사하기
        </div>
      </div>
      <div className="text-10 text-gray-500">
        Copyright 2026.{" "}
        <span className="text-grey-700 font-weight-700">FROM YEJU.</span> All
        rights reserved.
      </div>
    </div>
  );
}
