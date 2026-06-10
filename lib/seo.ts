import type { Metadata } from "next";
import { siteConfig } from "./site";
import { courses, faqs } from "./data";

/** Build per-page metadata with sensible brand defaults. */
export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const desc = description ?? siteConfig.description;
  return {
    title,
    description: desc,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: { canonical: url },
    openGraph: {
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description: desc,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description: desc,
    },
  };
}

/* ----------------------------- JSON-LD builders --------------------------- */

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "IN",
    },
    sameAs: Object.values(siteConfig.socials),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/courses?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function coursesJsonLd() {
  return courses.map((c) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    name: c.name,
    description: c.summary,
    url: `${siteConfig.url}/courses/${c.slug}`,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    educationalLevel: c.grades,
  }));
}

export function courseJsonLd(slug: string) {
  const c = courses.find((x) => x.slug === slug);
  if (!c) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: c.name,
    description: c.summary,
    url: `${siteConfig.url}/courses/${c.slug}`,
    educationalLevel: c.grades,
    timeRequired: c.duration,
    teaches: c.skills,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

/** Render JSON-LD as a script tag prop. */
export function jsonLdScript(data: object) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  };
}
