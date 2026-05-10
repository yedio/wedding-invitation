"use client";
import { cls, parseInvitationDate } from "@libs/client/Utility";
import { useMemo } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface CalendarCaptureProps {
  date: string;
  providedStyle?: string;
}

export const CalendarCapture = ({
  date,
  providedStyle,
}: CalendarCaptureProps) => {
  const selectedDate = useMemo(() => parseInvitationDate(date), [date]);

  return (
    <div className={cls("w-[280px]", providedStyle)}>
      <Calendar
        value={selectedDate}
        locale="ko-KR"
        showNavigation={false}
        calendarType="gregory" // 일요일이 맨 앞에 오도록 설정
        formatDay={(locale, date) => date.getDate().toString()} // 날짜 뒤 "일" 제거
        tileDisabled={({ date, view }) => {
          // 해당 달 이외의 날짜 숨기기
          if (view === "month" && selectedDate) {
            return date.getMonth() !== selectedDate.getMonth();
          }
          return false;
        }}
        tileClassName={({ date }) => {
          // 일요일만 특별 스타일 적용
          const isSunday = date.getDay() === 0;

          if (isSunday || date.getDate() === 3) {
            return "holiday";
          }
          return "";
        }}
      />
    </div>
  );
};
