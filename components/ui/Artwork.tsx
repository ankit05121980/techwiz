import * as React from "react";
import { Icon } from "./Icon";
import type { IconName } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * Self-contained, network-free branded artwork used in place of photos.
 * Deterministic gradient + circuit motif keyed off a seed string, with an
 * optional themed icon. Fills its (relative) parent like an image.
 */

const palettes: [string, string][] = [
  ["#0A66C2", "#3a86d8"],
  ["#0954a0", "#8DC63F"],
  ["#0F172A", "#0954a0"],
  ["#73a52f", "#0A66C2"],
  ["#073563", "#3a86d8"],
  ["#0A66C2", "#062a4f"],
  ["#8DC63F", "#0954a0"],
];

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h << 5) - h + str.charCodeAt(i);
  return Math.abs(h);
}

export function Artwork({
  seed,
  icon,
  className,
  showCircuit = true,
}: {
  seed: string;
  icon?: IconName;
  className?: string;
  showCircuit?: boolean;
}) {
  const h = hash(seed);
  const [from, to] = palettes[h % palettes.length];
  const angle = 100 + (h % 80);
  const gid = `aw-${h.toString(36)}`;

  return (
    <div
      className={cn("absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(${angle}deg, ${from}, ${to})` }}
      />
      {showCircuit && (
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.18]"
          viewBox="0 0 400 300"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id={gid} width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M0 20 H14 M26 20 H40 M20 0 V14 M20 26 V40"
                stroke="#fff"
                strokeWidth="1.4"
                fill="none"
              />
              <circle cx="20" cy="20" r="3.2" fill="#fff" />
            </pattern>
          </defs>
          <rect width="400" height="300" fill={`url(#${gid})`} />
        </svg>
      )}
      {/* Soft highlight blob */}
      <div className="absolute -right-8 -top-10 size-40 rounded-full bg-white/15 blur-2xl" />
      {icon && (
        <div className="absolute inset-0 grid place-items-center">
          <Icon name={icon} className="size-20 text-white/90 drop-shadow" strokeWidth={1.4} />
        </div>
      )}
    </div>
  );
}

export function InitialsAvatar({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const h = hash(name);
  const [from, to] = palettes[h % palettes.length];
  return (
    <div
      className={cn(
        "grid place-items-center rounded-full font-semibold text-white",
        className,
      )}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
