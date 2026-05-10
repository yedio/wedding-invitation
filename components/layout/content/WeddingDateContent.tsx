import { CalendarCapture } from "@components/CalendarCapture";
import { DateCounterLayout } from "@components/DateCounterLayout";
import { info } from "@libs/client/InfoData";
import {
  invitationDateDotLabel,
  invitationWeekdayTimeLabelKo,
  koreanGivenOnly,
  parseInvitationDate,
} from "@libs/client/Utility";
import { FormWithTitle, Wrapper } from "../common/Layout";

export const WeddingDateContent = () => {
  const { at, groom, bride } = info.date;
  const eventAt = parseInvitationDate(at);

  return (
    <Wrapper>
      <FormWithTitle title="예식 안내">
        <div className="flex flex-col items-center space-y-10">
          <div className="flex flex-col space-y-7">
            <div className="flex flex-col items-center space-y-1">
              <p className="text-24 text-gray-700">
                {invitationDateDotLabel(at)}
              </p>
              <p className="text-16">{invitationWeekdayTimeLabelKo(eventAt)}</p>
            </div>
            <div className="flex w-[320px] justify-center border-b border-t border-[#e8dfdf] py-4">
              <CalendarCapture date={at} />
            </div>
          </div>
          <DateCounterLayout
            date={at}
            groomGiven={koreanGivenOnly(groom)}
            brideGiven={koreanGivenOnly(bride)}
          />
        </div>
      </FormWithTitle>
    </Wrapper>
  );
};
