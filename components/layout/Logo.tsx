import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Brand logo — original supplied artwork with the white background removed
 * (transparent) so it blends with the page. A dark-mode variant keeps the
 * wordmark legible. Artwork shapes/colors are unchanged.
 */
export function Logo({ className, height = 52 }: { className?: string; height?: number }) {
  return (
    <Link
      href="/"
      title="Techwiz Robotics Hub — home"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/logo-light.png"
        alt="TechWiz"
        width={233}
        height={268}
        priority
        sizes="160px"
        className="block w-auto dark:hidden"
        style={{ height }}
      />
      <Image
        src="/logo-dark.png"
        alt="TechWiz"
        width={233}
        height={268}
        priority
        sizes="160px"
        className="hidden w-auto dark:block"
        style={{ height }}
      />
    </Link>
  );
}
