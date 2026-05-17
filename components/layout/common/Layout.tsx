"use client";
import { ScrollReveal } from "@components/effects/ScrollReveal";
import { cls } from "@libs/client/Utility";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative h-full overflow-hidden max-w-[440px] mx-auto bg-white">
      {children}
    </div>
  );
}

interface WrapperProps extends PropsWithChildren {
  providedStyle?: string;
  /** false면 갤러리 등 fixed/인터랙션 섹션용 — ScrollReveal 미적용 */
  reveal?: boolean;
}
export function Wrapper({
  providedStyle,
  reveal = true,
  children,
}: WrapperProps) {
  const className = cls(
    "w-full py-15 flex flex-col items-center",
    providedStyle
  );

  if (!reveal) {
    return <div className={className}>{children}</div>;
  }

  return <ScrollReveal className={className}>{children}</ScrollReveal>;
}

interface FormWithTitleProps extends PropsWithChildren {
  title?: string;
  providedStyle?: string;
}
export function FormWithTitle({
  title,
  providedStyle,
  children,
}: FormWithTitleProps) {
  return (
    <div
      className={cls(
        "w-full flex flex-col items-center space-y-6",
        providedStyle
      )}
    >
      {title && (
        <div className="text-main-color text-18 font-weight-600">{title}</div>
      )}
      {children}
    </div>
  );
}
