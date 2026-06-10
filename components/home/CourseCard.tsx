"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Layers } from "lucide-react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Artwork } from "@/components/ui/Artwork";
import { Badge } from "@/components/ui/Badge";
import { itemVariants } from "@/components/ui/Reveal";
import type { Course } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentRing: Record<Course["accent"], string> = {
  brand: "from-brand-500 to-brand-700",
  lime: "from-lime-500 to-lime-700",
  navy: "from-navy to-brand-700",
};

export function CourseCard({ course }: { course: Course }) {
  return (
    <motion.article
      variants={itemVariants}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Artwork
          seed={course.slug}
          icon={course.icon}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
        <div className="absolute left-4 top-4">
          <Badge variant="lime">{course.grades}</Badge>
        </div>
        <div
          className={cn(
            "absolute bottom-4 left-4 grid size-11 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-soft",
            accentRing[course.accent],
          )}
        >
          <Icon name={course.icon} className="size-5" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold">{course.name}</h3>
        <p className="mt-1 text-sm text-muted">{course.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {course.skills.slice(0, 3).map((s) => (
            <Badge key={s} variant="brand">
              {s}
            </Badge>
          ))}
          {course.skills.length > 3 && (
            <Badge>+{course.skills.length - 3} more</Badge>
          )}
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4 text-sm">
          <div className="flex items-center gap-2 text-muted">
            <Clock className="size-4 text-primary" />
            <span>{course.duration.split("·")[0].trim()}</span>
          </div>
          <div className="flex items-center gap-2 text-muted">
            <Layers className="size-4 text-primary" />
            <span>{course.projectsCount}</span>
          </div>
        </dl>

        <Link
          href={`/courses/${course.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:gap-3"
        >
          Learn More <ArrowRight className="size-4 transition-all" />
        </Link>
      </div>
    </motion.article>
  );
}
