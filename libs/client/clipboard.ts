"use client";

import { toast } from "sonner";

export async function copyToClipboard(
  text: string,
  successMessage?: string
): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    toast.success(successMessage ?? "클립보드에 복사되었습니다.");
    return true;
  } catch (error) {
    console.error("Failed to copy text to clipboard:", error);
    toast.error("복사에 실패했습니다.");
    return false;
  }
}
