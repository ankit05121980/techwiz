import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="TechWiz STEM Academy home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-lime-500 text-white shadow-soft transition-transform group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
          <path
            d="M12 2L3 7l9 5 9-5-9-5Z"
            fill="currentColor"
            opacity="0.95"
          />
          <path
            d="M3 12l9 5 9-5M3 17l9 5 9-5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight">
          Tech<span className="text-primary">Wiz</span>
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
          STEM Academy
        </span>
      </span>
    </Link>
  );
}
