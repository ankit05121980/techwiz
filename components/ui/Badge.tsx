import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "lime" | "brand";
}) {
  const styles = {
    default: "bg-background-subtle text-muted border border-border",
    lime: "bg-lime-500/15 text-lime-700 dark:text-lime-300 border border-lime-500/20",
    brand: "bg-primary/10 text-primary border border-primary/20",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        styles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
