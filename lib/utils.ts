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

export function formatEventDate(dateString: string): string {
  if (!dateString) return "";
  try {
    // Extract YYYY-MM-DD regardless of the rest of the string
    const datePart = dateString.includes("T")
      ? dateString.split("T")[0]
      : dateString;
    const parts = datePart.split("-");

    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // JS months are 0-indexed
      const day = parseInt(parts[2], 10);

      const date = new Date(year, month, day);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }

    // Fallback
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}

export function formatEventTime(dateString: string): string {
  if (!dateString) return "";
  try {
    // Treat the time part as local time to avoid timezone shifts
    if (dateString.includes("T")) {
      const timePart = dateString.split("T")[1];
      // Extract HH:mm possibly removing seconds/milliseconds/offsets
      // Matches 14:30 or 14:30:00
      const match = timePart.match(/^(\d{2}):(\d{2})/);
      if (match) {
        const hours = parseInt(match[1], 10);
        const minutes = parseInt(match[2], 10);
        
        // Create a date object with these hours (using arbitrary date)
        const date = new Date();
        date.setHours(hours, minutes, 0, 0);
        
        return date.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
      }
    }
    
    // Fallback for non-ISO or standard parsing
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  } catch {
    return dateString;
  }
}
