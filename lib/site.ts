/**
 * Central site configuration. Update brand/contact details here.
 * NOTE: Contact details below are realistic placeholders for a fictitious
 * academy. Replace with real values before going live.
 */

export const siteConfig = {
  name: "Techwiz Robotics Hub",
  shortName: "Techwiz",
  tagline: "Learn. Build. Innovate.",
  description:
    "Hands-on Robotics, AI, Coding, Electronics & IoT programs for students in Grade 3-12. Project-based STEM learning that turns curious kids into future innovators.",
  // Update to your production domain after deploying to Vercel.
  url: "https://techwiz-robotics-hub.vercel.app",
  locale: "en_IN",
  email: "hello@techwizroboticshub.in",
  phoneDisplay: "+91 99266 68897",
  phone: "+919926668897",
  phoneDisplay2: "+91 90390 14714",
  phone2: "+919039014714",
  // Digits only, international format for wa.me links.
  whatsapp: "919926668897",
  address: {
    line1: "165, Sector-D, Behind Astha Hospital",
    city: "Indore",
    state: "Madhya Pradesh",
    zip: "",
    country: "India",
  },
  hours: "Mon-Sat: 9:00 AM - 7:00 PM",
  // Google Maps embed (keyless) centered on Sector-D, Indore, M.P.
  mapEmbed:
    "https://www.google.com/maps?q=Sector+D,+Indore,+Madhya+Pradesh&output=embed",
  socials: {
    instagram: "https://instagram.com/techwiz09",
    youtube: "https://youtube.com/@techwizstem",
    facebook: "https://www.facebook.com/share/1BMa2AtsSm/?mibextid=wwXIfr",
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
