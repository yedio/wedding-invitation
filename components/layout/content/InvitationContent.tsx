import { LineBreaker } from "@libs/client/Utility";
import { FormWithTitle, Wrapper } from "../common/Layout";
import { WeddingCoupleIntro } from "@components/invitation/WeddingCoupleIntro";
import { info } from "@libs/client/InfoData";

export const InvitationContent = () => {
  const { text } = info;

  return (
    <Wrapper>
      <FormWithTitle title={"💘"}>
        <div className="text-15 text-center leading-[24px]">
          {LineBreaker(text.invitation)}
        </div>
        <WeddingCoupleIntro />
      </FormWithTitle>
      <p className="text-main-color text-16"></p>
    </Wrapper>
  );
};
