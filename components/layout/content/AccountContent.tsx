import { AccordionAccountSideLayout } from "@components/AccordionAccountLayout";
import { info } from "@libs/client/InfoData";
import { LineBreaker } from "@libs/client/Utility";
import { FormWithTitle, Wrapper } from "../common/Layout";

const ACCOUNT_NOTICE =
  "참석이 어려우신 분들을 위해\n계좌번호를 기재하였습니다.\n너그러운 마음으로 양해 부탁드립니다.";

export const AccountContent = () => {
  const { giftAccountSides } = info;
  return (
    <Wrapper>
      <FormWithTitle title={"마음 전하실 곳"}>
        <div className="flex w-[300px] flex-col items-center space-y-4">
          <div className="text-15 text-center leading-[24px] text-gray-600">
            {LineBreaker(ACCOUNT_NOTICE)}
          </div>
          <div className="flex w-full flex-col space-y-2">
            {giftAccountSides.map((side) => (
              <AccordionAccountSideLayout
                key={side.title}
                title={side.title}
                rows={side.rows}
              />
            ))}
          </div>
        </div>
      </FormWithTitle>
    </Wrapper>
  );
};
