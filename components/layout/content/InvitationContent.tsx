import { ScrollReveal } from "@components/effects/ScrollReveal";
import { InvitationOrnament } from "@components/invitation/InvitationOrnament";
import { WeddingCoupleIntro } from "@components/invitation/WeddingCoupleIntro";
import { info } from "@libs/client/InfoData";
import { LineBreaker } from "@libs/client/Utility";
import { Wrapper } from "../common/Layout";

export const InvitationContent = () => {
  const { text } = info;

  return (
    <Wrapper reveal={false}>
      <div className="flex w-full flex-col items-center space-y-6">
        <ScrollReveal className="flex w-full flex-col items-center space-y-6">
          <InvitationOrnament />
          <div className="text-15 text-center leading-[24px]">
            {LineBreaker(text.invitation)}
          </div>
        </ScrollReveal>
        <ScrollReveal className="w-full" delay fade={false}>
          <WeddingCoupleIntro />
        </ScrollReveal>
      </div>
    </Wrapper>
  );
};
