"use client";

import { CommonImage } from "@components/image/CommonImage";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * 청첩장 루트와 동일한 가운데 440px 컬럼 안에서만 모달 표시.
 * (rounded 없음, 세로 전체 h-[100dvh])
 */
const MODAL_COLUMN_CLASS =
  "app-modal-shell fixed inset-0 z-[99999] mx-auto flex h-[100dvh] w-full max-w-[440px] flex-col overflow-hidden bg-white overscroll-none";

interface AppModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  /** true면 헤더·타이틀 없이 닫기만 우측 상단에 표시 */
  hideTitle?: boolean;
  children: React.ReactNode;
}

export function AppModal({
  open,
  onClose,
  title,
  hideTitle = false,
  children,
}: AppModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const { body, documentElement: html } = document;
    const prevBody = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    const prevHtmlOverflow = html.style.overflow;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    return () => {
      body.style.position = prevBody.position;
      body.style.top = prevBody.top;
      body.style.left = prevBody.left;
      body.style.right = prevBody.right;
      body.style.width = prevBody.width;
      body.style.overflow = prevBody.overflow;
      html.style.overflow = prevHtmlOverflow;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className={MODAL_COLUMN_CLASS}
      role="dialog"
      aria-modal="true"
      aria-label={hideTitle ? title ?? "이미지 보기" : undefined}
      aria-labelledby={hideTitle ? undefined : "app-modal-title"}
    >
      {hideTitle ? (
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-4 text-[#999] hover:bg-black/5 hover:text-[#666]"
          aria-label="닫기"
        >
          <CommonImage src="/img/icons/close.svg" width={18} alt="" />
        </button>
      ) : (
        <header className="relative flex h-[54px] shrink-0 items-center justify-center border-[#eee] px-4">
          <h2 id="app-modal-title" className="text-16 font-semibold text-black">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-4 text-[#666] hover:bg-black/5 hover:text-black"
            aria-label="닫기"
          >
            <CommonImage src="/img/icons/close.svg" width={18} alt="" />
          </button>
        </header>
      )}
      <div
        className={
          hideTitle
            ? "relative min-h-0 flex-1 overflow-hidden overscroll-none"
            : "min-h-0 flex-1 overflow-y-auto overscroll-contain"
        }
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
