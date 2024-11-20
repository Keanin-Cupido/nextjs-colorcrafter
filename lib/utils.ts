import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generatePaletteUrl(colors: string[]) {
  const params = new URLSearchParams();
  colors.forEach((color, index) => {
    params.append(`c${index}`, color.replace("#", ""));
  });
  return `${window.location.origin}/create?${params.toString()}`;
}

export function parseUrlColors(url: string): string[] {
  const params = new URLSearchParams(url.split("?")[1]);
  const colors: string[] = [];
  for (const [key, value] of params.entries()) {
    if (key.startsWith("c")) {
      colors.push(`#${value}`);
    }
  }
  return colors.length > 0 ? colors : ["#FF6B6B", "#4ECDC4"];
}