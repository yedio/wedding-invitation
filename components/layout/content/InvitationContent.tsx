import { InvitationOrnament } from "@components/invitation/InvitationOrnament";
import { WeddingCoupleIntro } from "@components/invitation/WeddingCoupleIntro";
import { info } from "@libs/client/InfoData";
import { LineBreaker } from "@libs/client/Utility";
import { Wrapper } from "../common/Layout";

export const InvitationContent = () => {
  const { text } = info;

  return (
    <Wrapper>
      <div className="flex w-full flex-col items-center space-y-6">
        <InvitationOrnament />
        <div className="text-15 text-center leading-[24px]">
          {LineBreaker(text.invitation)}
        </div>
        <WeddingCoupleIntro />
      </div>
    </Wrapper>
  );
};
