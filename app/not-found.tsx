import Link from "next/link";
import { Home, Search } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-5 py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/4 top-1/4 size-72 rounded-full bg-brand-400/20 blur-3xl" />
      <div className="relative text-center">
        <p className="text-7xl font-bold text-gradient md:text-9xl">404</p>
        <h1 className="mt-4 text-2xl font-bold md:text-3xl">This page took a detour</h1>
        <p className="mx-auto mt-3 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get
          you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            <Home className="size-5" /> Back to Home
          </ButtonLink>
          <ButtonLink href="/courses" variant="outline" size="lg">
            <Search className="size-5" /> Browse Programs
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm text-muted">
          Or{" "}
          <Link href="/contact" className="font-semibold text-primary hover:underline">
            contact our team
          </Link>{" "}
          for help.
        </p>
      </div>
    </section>
  );
}
