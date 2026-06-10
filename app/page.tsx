import { Hero } from "@/components/home/Hero";
import { WhyTechwiz } from "@/components/home/WhyTechwiz";
import { Courses } from "@/components/home/Courses";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { LearningJourney } from "@/components/home/LearningJourney";
import { Testimonials } from "@/components/home/Testimonials";
import { SchoolCollab } from "@/components/home/SchoolCollab";
import { Gallery } from "@/components/home/Gallery";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { YouTubeSection } from "@/components/sections/YouTubeSection";
import { jsonLdScript, faqJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <script {...jsonLdScript(faqJsonLd())} />
      <Hero />
      <WhyTechwiz />
      <Courses />
      <ProjectShowcase />
      <LearningJourney />
      <Testimonials />
      <SchoolCollab />
      <Gallery />
      <YouTubeSection />
      <FAQ />
      <InstagramFeed />
      <FinalCTA />
    </>
  );
}
