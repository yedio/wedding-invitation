import { CommonImage } from "@components/image/CommonImage";
import { copyToClipboard } from "@libs/client/clipboard";

interface CopyButtonProps {
  copyText: string;
  successMessage?: string;
  imgSize?: number;
}

export const CopyButton = ({
  copyText,
  imgSize = 22,
  successMessage = "복사하였습니다.",
}: CopyButtonProps) => {
  return (
    <button
      type="button"
      className="shrink-0 rounded-md p-1 transition-opacity hover:opacity-70 active:opacity-90"
      aria-label="계좌번호 복사"
      onClick={() => copyToClipboard(copyText, successMessage)}
    >
      <CommonImage
        src="/img/icons/copy.svg"
        width={imgSize}
        height={imgSize}
        alt=""
      />
    </button>
  );
};
