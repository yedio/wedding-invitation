import { Gallery } from "@components/Gallery";
import { FormWithTitle, Wrapper } from "../common/Layout";

export const GallaryContent = ({ images }: { images: string[] }) => {
  if (images.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      <FormWithTitle title={"웨딩 갤러리"}>
        <div className="px-4 w-full">
          <Gallery images={images} />
        </div>
      </FormWithTitle>
    </Wrapper>
  );
};
