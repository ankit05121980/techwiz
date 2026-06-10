"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { InitialsAvatar } from "@/components/ui/Artwork";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);
  const count = testimonials.length;

  const go = useCallback(
    (next: number) => {
      setDir(next > index ? 1 : -1);
      setIndex((next + count) % count);
    },
    [index, count],
  );

  const next = useCallback(() => {
    setDir(1);
    setIndex((i) => (i + 1) % count);
  }, [count]);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const t = testimonials[index];

  return (
    <Section id="testimonials" className="bg-background">
      <SectionHeading
        eyebrow="Testimonials"
        title="Loved by Parents & Students"
        description="Real stories from families and learners across India who built skills and confidence with TechWiz."
      />

      <div className="relative mx-auto mt-14 max-w-3xl">
        <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft md:min-h-[280px] md:p-12">
          <Quote className="absolute right-8 top-8 size-16 text-primary/10" />
          <AnimatePresence mode="wait" custom={dir}>
            <motion.figure
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="size-5 fill-lime-500 text-lime-500" />
                ))}
              </div>
              <blockquote className="mt-5 text-lg font-medium leading-relaxed md:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <InitialsAvatar name={t.name} className="size-12 shrink-0 text-sm" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{t.name}</span>
                    <Badge variant={t.type === "Parent" ? "brand" : "lime"}>{t.type}</Badge>
                  </div>
                  <p className="text-sm text-muted">
                    {t.role} · {t.location}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous testimonial"
            className="grid size-11 place-items-center rounded-full border border-border bg-card transition-colors hover:text-primary"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index}
                className="grid size-7 place-items-center"
              >
                <span
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-primary" : "w-2 bg-border"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            onClick={() => go(index + 1)}
            aria-label="Next testimonial"
            className="grid size-11 place-items-center rounded-full border border-border bg-card transition-colors hover:text-primary"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}
