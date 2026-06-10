import { ArrowRight, Phone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <Section className="bg-background">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 px-6 py-16 text-center text-white shadow-glow md:px-12 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
          <div className="pointer-events-none absolute -left-10 -top-10 size-64 rounded-full bg-lime-400/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 size-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Ready to Build the Future?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/85 md:text-lg">
              Give your child the head start that matters. Book a free demo class
              today and watch curiosity turn into capability.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/admission" variant="accent" size="lg">
                Book Free Demo <ArrowRight className="size-5" />
              </ButtonLink>
              <ButtonLink
                href="/contact"
                size="lg"
                className="bg-white/10 text-white hover:bg-white/20"
              >
                <Phone className="size-5" /> Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
