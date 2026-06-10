"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { itemVariants, RevealGroup } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Artwork } from "@/components/ui/Artwork";
import { categoryIcon, showcaseProjects } from "@/lib/data";

export function ProjectShowcase() {
  return (
    <Section id="projects" className="bg-background">
      <SectionHeading
        eyebrow="Project Showcase"
        title="Real Projects Students Build"
        description="These aren't simulations. Students design, wire, code, and take home working machines and apps like these."
      />

      <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {showcaseProjects.map((p) => (
          <motion.article
            key={p.title}
            variants={itemVariants}
            className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-soft"
          >
            <Artwork
              seed={p.title}
              icon={categoryIcon[p.category]}
              className="transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
            <div className="absolute left-4 top-4">
              <Badge variant="lime">{p.category}</Badge>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-1 max-h-0 overflow-hidden text-sm text-white/80 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
                {p.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-medium backdrop-blur"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </RevealGroup>
    </Section>
  );
}
