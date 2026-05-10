import fs from "fs";
import path from "path";

const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".avif",
]);

/**
 * `public` 기준 하위 경로(예: `img/pictures/zip`)에 있는 이미지 파일만 읽어
 * URL 경로 배열로 반환합니다. 파일명 순(숫자 포함 자연 정렬)으로 정렬합니다.
 */
export function listPublicGalleryImages(publicSubdir: string): string[] {
  const dir = path.join(process.cwd(), "public", publicSubdir);
  if (!fs.existsSync(dir)) {
    return [];
  }

  const prefix = `/${publicSubdir.replace(/\\/g, "/")}`;

  return fs
    .readdirSync(dir)
    .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((name) => `${prefix}/${name}`);
}
