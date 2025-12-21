import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getValidImageUrl(url: string | undefined | null): string {
  if (!url) return "/placeholder.svg";
  if (url.startsWith("/")) return url;

  let validUrl = url;

  // Attempt to fix known typo
  if (url.startsWith("22ttps://")) {
    validUrl = url.replace("22ttps://", "https://");
  }

  try {
    const parsed = new URL(validUrl);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return validUrl;
    }
  } catch {
    console.warn(`Invalid image URL: ${url}`);
  }
  return "/placeholder.svg";
}

export function capitalize(text?: string): string {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
