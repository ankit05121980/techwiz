import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * TechWiz logo lockup — circular arrow mark with green motion lines + wordmark.
 * Vector recreation of the supplied brand logo. The wordmark uses currentColor
 * so it stays legible in both light and dark themes; the mark colors are fixed.
 * To use the exact original artwork, drop it at /public/logo and swap this SVG.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      title="Techwiz Robotics Hub — home"
      className={cn("group inline-flex items-center", className)}
    >
      <svg
        viewBox="0 0 188 56"
        className="h-9 w-auto"
        role="img"
        aria-label="TechWiz"
      >
        {/* Circular arrow mark */}
        <g className="transition-transform duration-300 group-hover:rotate-[8deg]" style={{ transformOrigin: "28px 28px" }}>
          <path
            d="M42.7 38.3 A18 18 0 1 1 39.6 14.2"
            fill="none"
            stroke="#1773c0"
            strokeWidth="6.4"
            strokeLinecap="round"
          />
          {/* Arrowhead */}
          <path
            d="M34.5 33.5 L45.2 35.2 L40.6 44.8 Z"
            fill="#1773c0"
          />
          {/* Green motion lines */}
          <g stroke="#8DC63F" strokeWidth="4.2" strokeLinecap="round">
            <line x1="21" y1="33" x2="47" y2="21.5" />
            <line x1="20" y1="27.5" x2="52" y2="16.5" />
            <line x1="23.5" y1="22.5" x2="45.5" y2="13" />
          </g>
        </g>
        {/* Wordmark */}
        <text
          x="62"
          y="37.5"
          fontSize="27"
          fontWeight="700"
          letterSpacing="-0.5"
          fill="currentColor"
          style={{ fontFamily: "var(--font-sora), ui-sans-serif, sans-serif" }}
        >
          TechWiz
        </text>
      </svg>
    </Link>
  );
}
