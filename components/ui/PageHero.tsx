import * as React from "react";
import { Reveal } from "./Reveal";
import { Badge } from "./Badge";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.5] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-20 -top-10 size-72 rounded-full bg-brand-400/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 size-72 rounded-full bg-lime-400/15 blur-3xl" />
      <div className="relative mx-auto max-w-4xl container-px text-center">
        {eyebrow && (
          <Reveal>
            <Badge variant="brand">{eyebrow}</Badge>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">{description}</p>
          </Reveal>
        )}
        {children && <Reveal delay={0.15}>{children}</Reveal>}
      </div>
    </section>
  );
}
