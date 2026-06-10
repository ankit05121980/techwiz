/**
 * Central site configuration. Update brand/contact details here.
 * NOTE: Contact details below are realistic placeholders for a fictitious
 * academy. Replace with real values before going live.
 */

export const siteConfig = {
  name: "TechWiz STEM Academy",
  shortName: "TechWiz",
  tagline: "Learn. Build. Innovate.",
  description:
    "Hands-on Robotics, AI, Coding, Electronics & IoT programs for students in Grade 3-12. Project-based STEM learning that turns curious kids into future innovators.",
  // Update to your production domain after deploying to Vercel.
  url: "https://techwiz-stem-academy.vercel.app",
  locale: "en_IN",
  email: "hello@techwizstem.in",
  phoneDisplay: "+91 98220 14567",
  phone: "+919822014567",
  // Digits only, international format for wa.me links.
  whatsapp: "919822014567",
  address: {
    line1: "3rd Floor, Innovation Hub, Civil Lines",
    city: "Nagpur",
    state: "Maharashtra",
    zip: "440001",
    country: "India",
  },
  hours: "Mon-Sat: 9:00 AM - 7:00 PM",
  // Google Maps embed (keyless) centered on Nagpur, Maharashtra.
  mapEmbed:
    "https://www.google.com/maps?q=Civil+Lines,+Nagpur,+Maharashtra+440001&output=embed",
  socials: {
    instagram: "https://instagram.com/techwizstem",
    youtube: "https://youtube.com/@techwizstem",
    facebook: "https://facebook.com/techwizstem",
    linkedin: "https://linkedin.com/company/techwizstem",
    twitter: "https://twitter.com/techwizstem",
  },
  keywords: [
    "robotics classes",
    "coding classes for kids",
    "AI classes for students",
    "STEM academy",
    "robotics training for school students",
    "STEM education India",
    "robotics lab for schools",
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/** Build a wa.me link with an optional prefilled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
