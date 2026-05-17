import { Fragment, type JSX, type ReactNode } from "react";

/** `YYYY.MM.DD` 또는 `YYYY.MM.DD HH:mm[:ss]` 형식의 청첩장 일시 문자열 */
export function parseInvitationDate(dateStr: string): Date {
  const trimmed = dateStr.trim();
  const [datePart, ...timeParts] = trimmed.split(/\s+/);
  const [y, m, d] = datePart.split(".").map((part) => Number(part));
  if ([y, m, d].some((n) => Number.isNaN(n))) {
    return new Date(NaN);
  }
  let hours = 0;
  let minutes = 0;
  const timePart = timeParts[0];
  if (timePart) {
    const match = timePart.match(/^(\d{1,2}):(\d{2})(?::\d{2})?$/);
    if (match) {
      hours = Number(match[1]);
      minutes = Number(match[2]);
    }
  }
  return new Date(y, m - 1, d, hours, minutes, 0);
}

export function invitationDateDotLabel(dateStr: string): string {
  return dateStr.trim().split(/\s+/)[0] ?? "";
}

/** 한글 이름에서 첫 글자(성)를 뗀 호칭용 이름 — 예: 이진형 → 진형 */
export function koreanGivenOnly(fullName: string): string {
  const t = fullName.trim();
  if (t.length <= 1) return t;
  return t.slice(1);
}

export function invitationTimeLabelKo(date: Date): string {
  const h = date.getHours();
  const min = date.getMinutes();
  const period = h < 12 ? "오전" : "오후";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return min === 0
    ? `${period} ${hour12}시`
    : `${period} ${hour12}시 ${min}분`;
}

export function invitationWeekdayTimeLabelKo(date: Date): string {
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  const weekday = new Intl.DateTimeFormat("ko-KR", { weekday: "long" }).format(
    date
  );
  return `${weekday} ${invitationTimeLabelKo(date)}`;
}

/** 예: 2026년 7월 4일 토요일 | 오후 12시 */
export function invitationWeddingDateLabelKo(date: Date): string {
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const weekday = new Intl.DateTimeFormat("ko-KR", { weekday: "long" }).format(
    date
  );
  return `${y}년 ${m}월 ${d}일 ${weekday} | ${invitationTimeLabelKo(date)}`;
}

export function cls(...classnames: (string | undefined)[]) {
  return classnames.filter((name) => !!name).join(" ");
}

export const LineBreaker = (
  text?: string,
  keyword?: string
): JSX.Element[] | string => {
  if (!text) return "";

  return text.split("\n").map((line, index) => (
    <span key={index}>
      {index > 0 && <br />}
      {keyword ? HighlightKeyword(line, keyword) : line}
    </span>
  ));
};

export const HighlightKeyword = (text?: string, keyword?: string) => {
  if (!text) {
    text = "";
  }

  if (!keyword || keyword.trim() === "") {
    return text;
  }

  const regex = new RegExp(`(${keyword})`, "gi");
  const parts = text.split(regex);

  return (
    <span className="text-15">
      {parts.map((part, index) =>
        regex.test(part) ? (
          <span key={index} className="text-kgreen-50 font-weight-500">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
};

/** `{내용}` 구간만 강조 색으로 렌더합니다. 중괄호는 화면에 표시되지 않습니다. */
export function BraceHighlight({
  text,
  highlightClassName = "text-main-color",
}: {
  text: string;
  /** 강조 구간 Tailwind 클래스 (기본: main-color 핑크) */
  highlightClassName?: string;
}): ReactNode {
  const nodes: ReactNode[] = [];
  const re = /\{([^}]*)\}/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;

  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      nodes.push(text.slice(last, m.index));
    }
    nodes.push(
      <span key={k++} className={highlightClassName}>
        {m[1]}
      </span>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) {
    nodes.push(text.slice(last));
  }

  return <Fragment>{nodes}</Fragment>;
}

/** 계좌번호 표시용 문자열에서 복사용 숫자만 추출 */
export function accountNumberForCopy(accountNumber: string): string {
  return accountNumber.replace(/[\s-]/g, "");
}

export const handleCall = (phoneNumber: string) => {
  window.location.href = `tel:${phoneNumber}`;
};

export const handleMessage = (phoneNumber: string) => {
  window.location.href = `sms:${phoneNumber}`;
};
