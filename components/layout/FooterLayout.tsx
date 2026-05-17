"use client";
import { useEffect } from "react";
import { ScrollReveal } from "@components/effects/ScrollReveal";
import { copyToClipboard } from "@libs/client/clipboard";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function FooterLayout() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js";
    script.async = true;
    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY);
      }
    };
    document.head.appendChild(script);
  }, []);

  const handleKakaoShare = () => {
    if (!window.Kakao?.isInitialized()) return;

    const invitationUrl = window.location.origin + window.location.pathname;
    const locationUrl = `${window.location.origin}/location`;

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "이진형 ♥ 석예주 결혼합니다",
        description:
          "9월 12일 토요일 오전 11시 10분\n더컨벤션 송파문정 13F 아모르홀",
        imageUrl: `${window.location.origin}/img/pictures/cover_1.jpg`,
        link: {
          mobileWebUrl: invitationUrl,
          webUrl: invitationUrl,
        },
      },
      buttons: [
        {
          title: "모바일 청첩장",
          link: {
            mobileWebUrl: invitationUrl,
            webUrl: invitationUrl,
          },
        },
        {
          title: "위치 보기",
          link: {
            mobileWebUrl: locationUrl,
            webUrl: locationUrl,
          },
        },
      ],
    });
  };

  return (
    <ScrollReveal className="py-8 w-full flex flex-col items-center bg-gray-100 space-y-5">
      <div className="flex flex-col items-center space-y-1">
        <div className="cursor-pointer text-15" onClick={handleKakaoShare}>
          카카오톡 공유하기
        </div>
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
        <span className="text-grey-700 font-weight-700">YEJU</span> All rights
        reserved.
      </div>
    </ScrollReveal>
  );
}
