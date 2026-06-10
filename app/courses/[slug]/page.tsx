import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  Target,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Artwork } from "@/components/ui/Artwork";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { courses } from "@/lib/data";
import {
  buildMetadata,
  jsonLdScript,
  courseJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return buildMetadata({ title: "Program Not Found", path: "/courses" });
  return buildMetadata({
    title: `${course.name} (${course.grades})`,
    description: course.summary,
    path: `/courses/${course.slug}`,
    keywords: [...course.skills, "STEM program", course.name],
  });
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const ld = courseJsonLd(slug);

  return (
    <>
      {ld && <script {...jsonLdScript(ld)} />}
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Programs", path: "/courses" },
            { name: course.name, path: `/courses/${course.slug}` },
          ]),
        )}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 container-px lg:grid-cols-2">
          <div>
            <Reveal>
              <div className="flex items-center gap-2">
                <Badge variant="lime">{course.grades}</Badge>
                <Badge variant="brand">{course.projectsCount}</Badge>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                {course.name}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-2 text-lg font-medium text-primary">{course.tagline}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 max-w-xl text-muted">{course.summary}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-2 text-muted">
                  <Clock className="size-4 text-primary" /> {course.duration}
                </span>
                <span className="flex items-center gap-2 text-muted">
                  <Layers className="size-4 text-primary" /> {course.format}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={`/admission?program=${encodeURIComponent(course.name)}`} size="lg">
                  Enroll / Book Demo <ArrowRight className="size-5" />
                </ButtonLink>
                <ButtonLink href="/courses" variant="outline" size="lg">
                  All Programs
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-soft">
              <Artwork seed={course.slug} icon={course.icon} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              <div className="absolute bottom-4 left-4 grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-lime-500 text-white shadow-soft">
                <Icon name={course.icon} className="size-7" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <Section className="bg-background">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">What You&apos;ll Learn</h2>
            <p className="mt-2 text-muted">
              A curriculum that builds real, transferable skills step by step.
            </p>
            <div className="mt-6 space-y-4">
              {course.modules.map((m, i) => (
                <Reveal key={m.title} delay={i * 0.05}>
                  <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold">{m.title}</h3>
                      <p className="mt-1 text-sm text-muted">{m.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <h3 className="flex items-center gap-2 font-semibold">
                <Sparkles className="size-5 text-primary" /> Skills Gained
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {course.skills.map((s) => (
                  <Badge key={s} variant="brand">{s}</Badge>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <h3 className="flex items-center gap-2 font-semibold">
                <Target className="size-5 text-primary" /> Outcomes
              </h3>
              <ul className="mt-4 space-y-2.5">
                {course.outcomes.map((o) => (
                  <li key={o} className="flex gap-2 text-sm text-muted">
                    <CheckCircle2 className="size-4 shrink-0 text-lime-500" /> {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section className="bg-background-subtle">
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          Projects You&apos;ll Build
        </h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {course.projects.map((p, i) => (
            <Reveal key={p} delay={i * 0.05}>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-lime-500 text-white">
                  <Layers className="size-5" />
                </span>
                <span className="font-medium">{p}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-700 p-8 text-center text-white md:p-12">
          <h3 className="text-2xl font-bold md:text-3xl">
            Ready to start {course.name}?
          </h3>
          <p className="mx-auto mt-3 max-w-md text-white/85">
            Book a free demo class and see if it&apos;s the right fit — no commitment.
          </p>
          <ButtonLink
            href={`/admission?program=${encodeURIComponent(course.name)}`}
            variant="accent"
            size="lg"
            className="mt-6"
          >
            Book Free Demo
          </ButtonLink>
        </div>
      </Section>

      {/* Other programs */}
      <Section className="bg-background">
        <h2 className="text-center text-xl font-bold">Explore Other Programs</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {courses
            .filter((c) => c.slug !== course.slug)
            .map((c) => (
              <Link
                key={c.slug}
                href={`/courses/${c.slug}`}
                className="rounded-2xl border border-border bg-card px-5 py-3 text-sm font-medium shadow-soft transition-colors hover:border-primary/40 hover:text-primary"
              >
                {c.name} <span className="text-muted">· {c.grades}</span>
              </Link>
            ))}
        </div>
      </Section>
    </>
  );
}
