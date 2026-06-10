"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, itemVariants, RevealGroup } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { schoolFeatures } from "@/lib/data";

export function SchoolCollab() {
  return (
    <Section id="schools" className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.07]" />
      <div className="pointer-events-none absolute -right-20 top-0 size-96 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 size-96 rounded-full bg-lime-500/10 blur-3xl" />

      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <Badge className="bg-white/10 text-lime-300">For Schools</Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl lg:text-[2.75rem]">
              Bring STEM Education to Your School
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-lg text-white/70 md:text-lg">
              Partner with TechWiz to launch a future-ready robotics and innovation
              program on your campus — fully managed, from lab to curriculum to
              competitions.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-6 space-y-2">
              {[
                "End-to-end lab setup & curriculum",
                "Certified teacher training",
                "Annual competitions & showcases",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="size-5 text-lime-400" /> {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <ButtonLink
              href="/contact?type=school"
              variant="accent"
              size="lg"
              className="mt-8"
            >
              Schedule School Demo
            </ButtonLink>
          </Reveal>
        </div>

        <RevealGroup className="grid gap-4 sm:grid-cols-2">
          {schoolFeatures.map((f) => (
            <motion.div
              key={f.title}
              variants={itemVariants}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-lime-400/40"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-lime-500 text-white">
                <Icon name={f.icon} className="size-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                {f.description}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
