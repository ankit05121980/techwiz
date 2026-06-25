import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Brand logo — uses the original supplied artwork (public/logo.png) as-is,
 * unmodified. Rounded corners only affect the container, not the image.
 */
export function Logo({ className, height = 44 }: { className?: string; height?: number }) {
  return (
    <Link
      href="/"
      title="Techwiz Robotics Hub — home"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/logo.png"
        alt="TechWiz"
        width={333}
        height={410}
        priority
        sizes="120px"
        className="w-auto rounded-md"
        style={{ height }}
      />
    </Link>
  );
}
