import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Brand logo — original supplied artwork with the white background removed
 * (transparent). A dark-mode variant keeps the wordmark legible. Size is
 * controlled via `imgClassName` (Tailwind height classes + w-auto).
 */
export function Logo({
  className,
  imgClassName = "h-14",
}: {
  className?: string;
  imgClassName?: string;
}) {
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
        sizes="220px"
        className={cn("block w-auto dark:hidden", imgClassName)}
      />
      <Image
        src="/logo-dark.png"
        alt="TechWiz"
        width={233}
        height={268}
        priority
        sizes="220px"
        className={cn("hidden w-auto dark:block", imgClassName)}
      />
    </Link>
  );
}
