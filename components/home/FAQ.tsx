import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappLink } from "@/lib/site";
import { faqs } from "@/lib/data";

export function FAQ() {
  return (
    <Section id="faq" className="bg-background">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, Answered"
            description="Everything parents usually ask before booking a demo. Still unsure? We're a message away."
            align="left"
          />
          <Reveal delay={0.15}>
            <div className="mt-8 hidden rounded-3xl border border-border bg-card p-6 shadow-soft lg:block">
              <p className="font-semibold">Still have a question?</p>
              <p className="mt-1 text-sm text-muted">
                Talk to our team on WhatsApp and get an instant answer.
              </p>
              <ButtonLink
                href={whatsappLink("Hi TechWiz! I have a question about your programs.")}
                external
                variant="accent"
                className="mt-4"
              >
                Chat on WhatsApp
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
            <Accordion items={faqs} />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
