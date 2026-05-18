import { Gallery } from "@components/Gallery";
import { ScrollReveal } from "@components/effects/ScrollReveal";
import { Wrapper } from "../common/Layout";

export const GallaryContent = ({ images }: { images: string[] }) => {
  if (images.length === 0) {
    return null;
  }

  return (
    <Wrapper reveal={false}>
      <div className="w-full flex flex-col items-center space-y-6">
        <ScrollReveal className="w-full flex justify-center">
          <div className="text-main-color text-18 font-weight-600">
            웨딩 갤러리
          </div>
        </ScrollReveal>
        <ScrollReveal className="px-4 w-full" delay fade={false}>
          <Gallery images={images} />
        </ScrollReveal>
      </div>
    </Wrapper>
  );
};
