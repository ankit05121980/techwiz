"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { itemVariants, RevealGroup } from "@/components/ui/Reveal";
import { whyCards } from "@/lib/data";

export function WhyTechwiz() {
  return (
    <Section id="why" className="bg-background">
      <SectionHeading
        eyebrow="Why TechWiz"
        title="Why Parents Choose TechWiz"
        description="We blend rigorous STEM fundamentals with hands-on building, so students don't just learn technology — they create with it."
      />

      <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyCards.map((card) => (
          <motion.div
            key={card.title}
            variants={itemVariants}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-glow"
          >
            <div className="absolute -right-10 -top-10 size-32 rounded-full bg-gradient-to-br from-brand-400/10 to-lime-400/10 blur-2xl transition-opacity group-hover:opacity-100" />
            <span className="relative grid size-13 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 p-3 text-white shadow-soft transition-transform group-hover:scale-110">
              <Icon name={card.icon} className="size-6" />
            </span>
            <h3 className="relative mt-5 text-xl font-bold">{card.title}</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-muted">
              {card.description}
            </p>
          </motion.div>
        ))}
      </RevealGroup>
    </Section>
  );
}
