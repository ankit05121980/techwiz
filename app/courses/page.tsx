import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CourseCard } from "@/components/home/CourseCard";
import { courses } from "@/lib/data";
import { buildMetadata, jsonLdScript, coursesJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "STEM Programs for Grade 3-12",
  description:
    "Explore TechWiz robotics, AI, coding, electronics, and IoT programs designed for every age group from Grade 3 to 12. Project-based, mentor-led, and certified.",
  path: "/courses",
});

const benefits = [
  "Hands-on, project-based curriculum",
  "Small batches with expert mentors",
  "STEM-certified completion certificate",
  "Take-home kits & portfolio projects",
  "Online or in-centre learning",
  "Competition & olympiad preparation",
];

export default function CoursesPage() {
  return (
    <>
      {coursesJsonLd().map((ld, i) => (
        <script key={i} {...jsonLdScript(ld)} />
      ))}
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Programs", path: "/courses" },
          ]),
        )}
      />

      <PageHero
        eyebrow="Programs"
        title="Programs That Grow With Your Child"
        description="From first builds to AI capstones — three age-appropriate tracks engineered to turn curiosity into real, future-ready skills."
      >
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/admission" size="lg">
            Book a Free Demo Class
          </ButtonLink>
        </div>
      </PageHero>

      <Section className="bg-background">
        <RevealGroup className="grid gap-6 md:grid-cols-3" stagger={0.1}>
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </RevealGroup>
      </Section>

      <Section className="bg-background-subtle">
        <SectionHeading
          eyebrow="Every Program Includes"
          title="The TechWiz Standard"
          description="No matter which track your child joins, they get the same hands-on, mentor-led experience."
        />
        <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {benefits.map((b) => (
            <li
              key={b}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft"
            >
              <CheckCircle2 className="size-5 shrink-0 text-lime-500" />
              <span className="text-sm font-medium">{b}</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
