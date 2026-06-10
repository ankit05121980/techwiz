"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { itemVariants, RevealGroup } from "@/components/ui/Reveal";
import { journeySteps } from "@/lib/data";

export function LearningJourney() {
  return (
    <Section id="journey" className="bg-background-subtle">
      <SectionHeading
        eyebrow="Learning Journey"
        title="From Curious to Confident Innovator"
        description="A clear, proven path that takes every student from their first build to their own original invention."
      />

      <div className="relative mt-16">
        {/* Connecting line */}
        <div className="absolute left-[27px] top-0 h-full w-0.5 bg-gradient-to-b from-brand-500 via-brand-400 to-lime-500 md:left-1/2 md:-translate-x-1/2" />

        <RevealGroup className="space-y-8 md:space-y-2">
          {journeySteps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className={`relative flex items-start gap-6 md:w-1/2 ${
                  isLeft ? "md:ml-0 md:pr-12 md:text-right" : "md:ml-auto md:flex-row-reverse md:pl-12 md:text-left"
                }`}
              >
                <div className="relative z-10 grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-soft">
                  <Icon name={step.icon} className="size-6" />
                  <span className="absolute -right-1.5 -top-1.5 grid size-6 place-items-center rounded-full bg-lime-500 text-xs font-bold text-navy">
                    {i + 1}
                  </span>
                </div>
                <div className="flex-1 rounded-2xl border border-border bg-card p-5 shadow-soft md:mb-8">
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </Section>
  );
}
