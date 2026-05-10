import { Gallery } from "@components/Gallery";
import { FormWithTitle, Wrapper } from "../common/Layout";
import { info } from "@libs/client/InfoData";

export const GallaryContent = () => {
  const { image } = info;
  return (
    <Wrapper>
      <FormWithTitle title={"소중한 순간들 📸"}>
        <div className="px-4 w-full">
          <Gallery images={image.zip} />
        </div>
      </FormWithTitle>
    </Wrapper>
  );
};
