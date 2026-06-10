import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CourseCard } from "./CourseCard";
import { courses } from "@/lib/data";

export function Courses() {
  return (
    <Section id="courses" className="bg-background-subtle">
      <SectionHeading
        eyebrow="Programs"
        title="Programs Built for Every Age"
        description="Three carefully designed tracks that grow with your child — from playful first builds to portfolio-ready AI projects."
      />

      <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.1}>
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </RevealGroup>

      <div className="mt-12 text-center">
        <ButtonLink href="/courses" variant="outline" size="lg">
          View All Program Details
        </ButtonLink>
      </div>
    </Section>
  );
}
