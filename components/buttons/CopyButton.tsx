import { CommonImage } from "@components/image/CommonImage";
import { CopyToClipBoard } from "@libs/client/Utility";

interface CopyButtonProps {
  copyText: string;
  successMessage?: string;
}

export const CopyButton = ({
  copyText,
  successMessage = "복사하였습니다.",
}: CopyButtonProps) => {
  return (
    <button
      type="button"
      className="shrink-0 rounded-md p-2 transition-opacity hover:opacity-70 active:opacity-90"
      aria-label="계좌번호 복사"
      onClick={() => CopyToClipBoard(copyText, successMessage)}
    >
      <CommonImage
        src="/img/icons/copy.svg"
        width={22}
        height={22}
        alt=""
      />
    </button>
  );
};
