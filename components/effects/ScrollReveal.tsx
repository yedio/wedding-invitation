"use client";

import { cls } from "@libs/client/Utility";
import { useEffect, useRef, useState, type PropsWithChildren } from "react";

interface ScrollRevealProps extends PropsWithChildren {
  className?: string;
  /** 제목 등 이전 요소 뒤에 살짝 늦게 올라오게 할 때 */
  delay?: boolean;
  /** false면 슬라이드만 (이미지 lazy 로딩 방해하지 않음) */
  fade?: boolean;
}

export function ScrollReveal({
  children,
  className,
  delay = false,
  fade = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cls(
        "scroll-reveal",
        !fade ? "scroll-reveal--slide-only" : undefined,
        delay ? "scroll-reveal--delay" : undefined,
        isVisible ? "scroll-reveal--visible" : undefined,
        className
      )}
    >
      {children}
    </div>
  );
}
