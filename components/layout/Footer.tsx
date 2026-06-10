import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  InstagramIcon,
  YoutubeIcon,
  FacebookIcon,
  LinkedinIcon,
} from "@/components/ui/SocialIcons";
import { siteConfig } from "@/lib/site";
import { courses, navLinks } from "@/lib/data";
import { Logo } from "./Logo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-subtle">
      <div className="mx-auto max-w-7xl container-px py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3 pt-1">
              <SocialLink href={siteConfig.socials.instagram} label="Instagram">
                <InstagramIcon className="size-[18px]" />
              </SocialLink>
              <SocialLink href={siteConfig.socials.youtube} label="YouTube">
                <YoutubeIcon className="size-[18px]" />
              </SocialLink>
              <SocialLink href={siteConfig.socials.facebook} label="Facebook">
                <FacebookIcon className="size-[18px]" />
              </SocialLink>
              <SocialLink href={siteConfig.socials.linkedin} label="LinkedIn">
                <LinkedinIcon className="size-[18px]" />
              </SocialLink>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Explore
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/admission" className="text-muted transition-colors hover:text-primary">
                  Admission
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Programs
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {courses.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/courses/${c.slug}`}
                    className="text-muted transition-colors hover:text-primary"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Stay in the loop
            </h4>
            <p className="text-sm text-muted">
              Get STEM tips, event invites, and demo-class openings.
            </p>
            <NewsletterForm />
            <ul className="space-y-2.5 pt-2 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  {siteConfig.address.line1}, {siteConfig.address.city},{" "}
                  {siteConfig.address.state} {siteConfig.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-primary" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-primary">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            {siteConfig.tagline} · Made for curious minds.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-9 place-items-center rounded-full border border-border bg-background text-muted transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
    >
      {children}
    </a>
  );
}
