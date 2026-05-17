"use client";

import { cls } from "@libs/client/Utility";
import { useEffect, useRef, useState, type PropsWithChildren } from "react";

interface ScrollRevealProps extends PropsWithChildren {
  className?: string;
}

export function ScrollReveal({ children, className }: ScrollRevealProps) {
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
        isVisible ? "scroll-reveal--visible" : undefined,
        className
      )}
    >
      {children}
    </div>
  );
}
