import type { Metadata } from "next";
import { Award, Clock3, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { AdmissionForm } from "@/components/forms/AdmissionForm";
import { courses } from "@/lib/data";
import { buildMetadata, jsonLdScript, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Admission & Free Demo Registration",
  description:
    "Register for a free demo class or apply for admission to TechWiz STEM Academy's robotics, AI, and coding programs for Grade 3-12. Quick, easy multi-step form.",
  path: "/admission",
});

const perks = [
  { icon: <Sparkles className="size-5" />, title: "Free Demo Class", text: "No cost, no obligation" },
  { icon: <Clock3 className="size-5" />, title: "Quick Sign-up", text: "Takes under a minute" },
  { icon: <Award className="size-5" />, title: "Certified Programs", text: "STEM completion certificate" },
  { icon: <ShieldCheck className="size-5" />, title: "Small Batches", text: "Personal mentor attention" },
];

export default async function AdmissionPage({
  searchParams,
}: {
  searchParams: Promise<{ program?: string }>;
}) {
  const { program } = await searchParams;
  const matched = courses.find(
    (c) => c.name.toLowerCase() === (program ?? "").toLowerCase() || c.slug === program,
  );

  return (
    <>
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Admission", path: "/admission" },
          ]),
        )}
      />

      <PageHero
        eyebrow="Admission"
        title="Start Your Child's Innovation Journey"
        description="Fill in a few quick details to register for a free demo class or secure a spot. Our team will reach out to confirm everything."
      />

      <Section className="bg-background">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4 lg:sticky lg:top-24">
            <Reveal>
              <h2 className="text-2xl font-bold">Why register today?</h2>
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {perks.map((p) => (
                <Reveal key={p.title}>
                  <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-lime-500 text-white">
                      {p.icon}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{p.title}</p>
                      <p className="text-xs text-muted">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <AdmissionForm defaultProgram={matched?.name ?? ""} />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
