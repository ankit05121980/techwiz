import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes conditionally. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format large numbers with thousands separators. */
export function formatNumber(n: number): string {
  return new Intl.NumberFormat("en-IN").format(n);
}
