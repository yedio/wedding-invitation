import { LineBreaker } from "@libs/client/Utility";

const ACCOUNT_NOTICE =
  "응원하고 격려해주신 모든 분들께 감사드리며\n행복하게 잘 살겠습니다";

export const CloseContent = () => {
  return (
    <div className="relative aspect-[7/3] w-full overflow-hidden">
      <img
        src={"/img/pictures/cover_4.jpg"}
        className="absolute inset-0 h-full w-full object-cover object-bottom"
        loading="lazy"
        alt=""
      />
      <div className="absolute inset-0 bg-black/25" aria-hidden />
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <p className="text-center text-15 leading-[24px] text-white">
          {LineBreaker(ACCOUNT_NOTICE)}
        </p>
      </div>
    </div>
  );
};
