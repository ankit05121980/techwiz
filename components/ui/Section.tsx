import * as React from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  containerClassName,
  children,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-28 scroll-mt-24", className)}>
      <div className={cn("mx-auto w-full max-w-7xl container-px", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
