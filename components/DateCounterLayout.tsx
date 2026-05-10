"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { cls, parseInvitationDate } from "@libs/client/Utility";

interface DateCounterLayoutProps {
  date: string;
  /** 성을 뺀 신랑 이름 (표시용) */
  groomGiven: string;
  /** 성을 뺀 신부 이름 (표시용) */
  brideGiven: string;
  providedStyle?: string;
}

function startOfLocalDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}

export const DateCounterLayout = ({
  date,
  groomGiven,
  brideGiven,
  providedStyle,
}: DateCounterLayoutProps) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [banner, setBanner] = useState<ReactNode>(null);

  const targetDate = useMemo(() => parseInvitationDate(date), [date]);
  const coupleLabel = `${groomGiven}, ${brideGiven}`;

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      let days = 0;
      let hours = 0;
      let minutes = 0;
      let seconds = 0;

      if (difference > 0) {
        days = Math.floor(difference / (1000 * 60 * 60 * 24));
        hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        minutes = Math.floor((difference / (1000 * 60)) % 60);
        seconds = Math.floor((difference / 1000) % 60);
      }

      setTimeRemaining({ days, hours, minutes, seconds });

      const targetDay = startOfLocalDay(targetDate);
      const todayDay = startOfLocalDay(now);

      if (targetDay === todayDay) {
        setBanner(
          <>
            {coupleLabel}의 결혼식이{" "}
            <span className="text-main-color">오늘</span>
            입니다! 🎉
          </>
        );
      } else if (targetDay < todayDay) {
        setBanner(`${coupleLabel}의 결혼식이 지났습니다.`);
      } else {
        setBanner(
          <>
            {coupleLabel}의 결혼식이{" "}
            <span className="text-main-color">{days}일</span> 남았습니다.
          </>
        );
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [coupleLabel, date, targetDate]);

  return (
    <div className={cls("flex flex-col items-center space-y-5", providedStyle)}>
      <div className="flex space-x-2 items-center">
        <DateCounterItem type={"DAYS"} time={timeRemaining.days} />
        <div className="text-[#726265]">:</div>
        <DateCounterItem type={"HOUR"} time={timeRemaining.hours} />
        <div className="text-[#726265]">:</div>
        <DateCounterItem type={"MIN"} time={timeRemaining.minutes} />
        <div className="text-[#726265]">:</div>
        <DateCounterItem type={"SEC"} time={timeRemaining.seconds} />
      </div>
      <div className="text-16 min-h-[1.5em]">{banner}</div>
    </div>
  );
};

interface DateCounterItemProps {
  type: "DAYS" | "HOUR" | "MIN" | "SEC";
  time: number;
}

const DateCounterItem = ({ type, time }: DateCounterItemProps) => {
  return (
    <div className="rounded-[8px] bg-[#f8efef] flex flex-col items-center p-1.5 w-11">
      <div className="text-20 font-weight-700 text-[#726265]">{time}</div>
      <div className="text-10 text-[#726265]">{type}</div>
    </div>
  );
};
