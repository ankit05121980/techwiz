import type { Metadata } from "next";
import { Compass, Eye, Quote, Target } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { ButtonLink } from "@/components/ui/Button";
import { aboutTimeline, aboutValues, stats } from "@/lib/data";
import { buildMetadata, jsonLdScript, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "TechWiz STEM Academy was founded to make world-class, hands-on robotics and AI education accessible to students across India. Discover our story, mission, and vision.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        )}
      />

      <PageHero
        eyebrow="Our Story"
        title="Building India's Next Generation of Innovators"
        description="TechWiz started with a simple conviction: every child is a born maker. We exist to give them the tools, mentors, and confidence to build the future."
      />

      {/* Stats */}
      <Section className="bg-background">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft">
              <div className="text-3xl font-bold text-primary md:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Founder story */}
      <Section className="bg-background-subtle">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Founder's Note" title="Why TechWiz Exists" align="left" />
          <div className="mt-8 space-y-4 text-muted">
            <p>
              When our founder, a robotics engineer, returned to his hometown, he
              noticed something troubling: brilliant, curious students had no access
              to the hands-on technology education that big-city kids took for
              granted. Textbooks talked about robots — but no one was building them.
            </p>
            <p>
              TechWiz was born to close that gap. We started with one classroom and a
              box of motors and sensors, teaching twelve children how to bring
              machines to life. The spark in their eyes told us everything.
            </p>
            <p>
              Today, that same hands-on, build-first philosophy powers every program
              we run — from playful first robots in Grade 3 to AI capstones in Grade
              12. We&apos;re here to prove that world-class STEM learning belongs in
              every city, for every child.
            </p>
          </div>
          <Reveal delay={0.1}>
            <figure className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-soft">
              <Quote className="size-7 text-primary/30" />
              <blockquote className="mt-2 text-lg font-medium">
                We don&apos;t just teach kids about technology. We hand them the tools
                and say, &lsquo;Now go build something the world hasn&apos;t seen.&rsquo;
              </blockquote>
              <figcaption className="mt-3 text-sm text-muted">
                — Founder &amp; Chief Mentor, TechWiz STEM Academy
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-background">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft">
              <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                <Target className="size-6" />
              </span>
              <h3 className="mt-4 text-2xl font-bold">Our Mission</h3>
              <p className="mt-3 text-muted">
                To make hands-on, project-based STEM education accessible and joyful
                for every student in India — turning curiosity into real-world
                problem-solving skills.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft">
              <span className="grid size-12 place-items-center rounded-2xl bg-lime-500/15 text-lime-600">
                <Eye className="size-6" />
              </span>
              <h3 className="mt-4 text-2xl font-bold">Our Vision</h3>
              <p className="mt-3 text-muted">
                A generation of confident young innovators from every city and town —
                building the robots, apps, and ideas that shape a better tomorrow.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-background-subtle">
        <SectionHeading eyebrow="What We Believe" title="Values That Guide Us" />
        <RevealGroup className="mt-12 grid gap-5 md:grid-cols-3">
          {aboutValues.map((v) => (
            <Reveal key={v.title}>
              <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft">
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white">
                  <Icon name={v.icon} className="size-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted">{v.description}</p>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </Section>

      {/* Timeline */}
      <Section className="bg-background">
        <SectionHeading
          eyebrow="Our Journey"
          title="Timeline of Growth"
          description="From a single classroom to a movement across India."
        />
        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute left-[19px] top-2 h-full w-0.5 bg-gradient-to-b from-brand-500 to-lime-500 md:left-1/2 md:-translate-x-1/2" />
          <RevealGroup className="space-y-8">
            {aboutTimeline.map((t, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={t.year}
                  className={`relative flex gap-6 md:w-1/2 ${
                    isLeft ? "md:pr-10 md:text-right" : "md:ml-auto md:flex-row-reverse md:pl-10 md:text-left"
                  }`}
                >
                  <div className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-xs font-bold text-white shadow-soft">
                    {t.year.slice(2)}
                  </div>
                  <div className="flex-1 rounded-2xl border border-border bg-card p-5 shadow-soft">
                    <div className="text-sm font-bold text-primary">{t.year}</div>
                    <h3 className="mt-1 font-bold">{t.title}</h3>
                    <p className="mt-1 text-sm text-muted">{t.description}</p>
                  </div>
                </div>
              );
            })}
          </RevealGroup>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-background-subtle">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 to-brand-700 p-10 text-center text-white md:p-14">
          <Compass className="mx-auto size-10 text-lime-300" />
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Join the TechWiz Family</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/85">
            Give your child a head start with a free demo class. See the spark for
            yourself.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/admission" variant="accent" size="lg">
              Book Free Demo
            </ButtonLink>
            <ButtonLink href="/courses" size="lg" className="bg-white/10 text-white hover:bg-white/20">
              Explore Programs
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
