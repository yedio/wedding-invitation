/* eslint-disable @next/next/no-img-element */
import { cls } from "@libs/client/Utility";
import React, { CSSProperties } from "react";
interface CommonImageProps {
  src?: string;
  alt?: string;
  style?: CSSProperties;
  providedStyle?: string;
  width?: number;
  height?: number;
  onImageClicked?: (e: React.MouseEvent<HTMLImageElement>) => void;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  loading?: "eager" | "lazy";
}
// eslint-disable-next-line react/display-name
export const CommonImage = React.memo(
  ({
    src,
    alt,
    style,
    providedStyle,
    width,
    height,
    onImageClicked,
    onLoad,
    loading,
  }: CommonImageProps) => {
    if (!src) return <></>;

    return (
      <img
        className={cls(
          "shrink-0 object-contain object-center",
          onImageClicked ? "cursor-pointer" : "",
          providedStyle
        )}
        src={src}
        style={{
          width,
          height,
          maxWidth: width,
          maxHeight: height,
          ...style,
        }}
        alt={alt ?? "image"}
        loading={loading}
        decoding="async"
        onClick={onImageClicked}
        onLoad={onLoad}
      />
    );
  }
);
