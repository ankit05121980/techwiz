import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig, whatsappLink } from "@/lib/site";
import { buildMetadata, jsonLdScript, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with TechWiz STEM Academy. Book a free demo class, ask about our robotics and coding programs, or set up STEM for your school.",
  path: "/contact",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const isSchool = type === "school";

  return (
    <>
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        )}
      />

      <PageHero
        eyebrow={isSchool ? "For Schools" : "Get in Touch"}
        title={isSchool ? "Bring STEM to Your School" : "Let's Talk"}
        description={
          isSchool
            ? "Tell us about your school and we'll design a robotics & innovation program that fits your campus."
            : "Have a question or ready to book a free demo? Our team usually replies within one working day."
        }
      />

      <Section className="bg-background">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Info */}
          <div className="space-y-4">
            <Reveal>
              <a
                href={whatsappLink("Hi TechWiz! I'd like to book a free demo class.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-3xl border border-lime-500/30 bg-lime-500/10 p-6 transition-colors hover:bg-lime-500/15"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-[#25D366] text-white">
                  <MessageCircle className="size-6" />
                </span>
                <div>
                  <p className="font-bold">Chat on WhatsApp</p>
                  <p className="text-sm text-muted">Fastest way to reach us — tap to chat</p>
                </div>
              </a>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={<Phone className="size-5" />} title="Call Us" href={`tel:${siteConfig.phone}`}>
                {siteConfig.phoneDisplay}
              </InfoCard>
              <InfoCard icon={<Mail className="size-5" />} title="Email" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </InfoCard>
              <InfoCard icon={<MapPin className="size-5" />} title="Visit">
                {siteConfig.address.line1}, {siteConfig.address.city}
              </InfoCard>
              <InfoCard icon={<Clock className="size-5" />} title="Hours">
                {siteConfig.hours}
              </InfoCard>
            </div>

            {/* Map */}
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
                <iframe
                  title={`${siteConfig.name} location`}
                  src={siteConfig.mapEmbed}
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <ContactForm defaultType={isSchool ? "school" : "general"} />
          </Reveal>
        </div>
      </Section>

      <Section className="bg-background-subtle">
        <div className="rounded-[2rem] bg-gradient-to-br from-brand-600 to-brand-700 p-10 text-center text-white md:p-14">
          <h2 className="text-3xl font-bold md:text-4xl">Prefer to start right away?</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/85">
            Skip the wait — book your child&apos;s free demo class online in under a minute.
          </p>
          <ButtonLink href="/admission" variant="accent" size="lg" className="mt-6">
            Book Free Demo Class
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}

function InfoCard({
  icon,
  title,
  href,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  href?: string;
  children: React.ReactNode;
}) {
  const inner = (
    <div className="h-full rounded-3xl border border-border bg-card p-5 shadow-soft transition-colors hover:border-primary/30">
      <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </span>
      <p className="mt-3 text-sm font-semibold">{title}</p>
      <p className="mt-0.5 text-sm text-muted">{children}</p>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}
