"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { DemoForm } from "@/components/forms/DemoForm";
import { Counter } from "@/components/ui/Counter";
import { stats, trustBadges } from "@/lib/data";

export function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
      {/* Animated lab background */}
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl container-px py-16 md:py-20">
        <div className="max-w-3xl">
          <div
            className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-lime-500" />
            </span>
            STEM Programs for Grade 3-12 · Robotics · AI · Coding
          </div>

          <h1
            className="mt-6 animate-fade-up text-4xl font-bold leading-[1.05] tracking-tight [animation-delay:60ms] sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Turning Curious Kids Into{" "}
            <span className="text-gradient">Future Innovators</span>
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-muted [animation-delay:120ms] md:text-xl"
          >
            Hands-on Robotics, AI, Coding &amp; Electronics programs for students in
            Grade 3-12. Real projects, expert mentors, and the confidence to build
            what&apos;s next.
          </p>

          <div
            className="mt-8 flex animate-fade-up flex-col gap-3 [animation-delay:180ms] sm:flex-row"
          >
            <Button size="lg" onClick={() => setDemoOpen(true)}>
              Book Free Demo Class <ArrowRight className="size-5" />
            </Button>
            <ButtonLink href="/courses" size="lg" variant="outline">
              <PlayCircle className="size-5" /> Explore Programs
            </ButtonLink>
          </div>

          <ul
            className="mt-8 flex animate-fade-up flex-wrap gap-x-6 gap-y-2 [animation-delay:260ms]"
          >
            {trustBadges.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                <CheckCircle2 className="size-4 text-lime-500" /> {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Animated counters */}
        <div
          className="mt-14 grid max-w-3xl animate-fade-up grid-cols-2 gap-4 [animation-delay:340ms] sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card/70 p-4 backdrop-blur"
            >
              <div className="text-2xl font-bold text-primary md:text-3xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs font-medium text-muted md:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal open={demoOpen} onClose={() => setDemoOpen(false)} title="Book a free demo class">
        <h3 className="text-xl font-bold">Book Your Free Demo Class</h3>
        <p className="mb-5 mt-1 text-sm text-muted">
          Fill in a few details and we&apos;ll reach out to schedule it.
        </p>
        <DemoForm />
      </Modal>
    </section>
  );
}

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 via-background to-background dark:from-navy dark:via-background dark:to-background" />
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      {/* Gradient blobs */}
      <div className="absolute -left-24 top-10 size-80 rounded-full bg-brand-400/30 blur-3xl animate-blob" />
      <div className="absolute right-0 top-1/3 size-96 rounded-full bg-lime-400/25 blur-3xl animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/3 size-80 rounded-full bg-brand-300/20 blur-3xl animate-blob [animation-delay:8s]" />
      {/* Floating circuit nodes */}
      <FloatingNodes />
    </div>
  );
}

function FloatingNodes() {
  const nodes = [
    { x: "12%", y: "30%", d: 0 },
    { x: "80%", y: "22%", d: 1.2 },
    { x: "68%", y: "62%", d: 0.6 },
    { x: "30%", y: "70%", d: 1.8 },
    { x: "90%", y: "55%", d: 2.4 },
  ];
  return (
    <>
      {nodes.map((n, i) => (
        <motion.span
          key={i}
          className="absolute hidden size-3 rounded-full bg-primary/60 shadow-glow md:block"
          style={{ left: n.x, top: n.y }}
          animate={{ y: [0, -18, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 5 + n.d, repeat: Infinity, ease: "easeInOut", delay: n.d }}
        />
      ))}
    </>
  );
}
