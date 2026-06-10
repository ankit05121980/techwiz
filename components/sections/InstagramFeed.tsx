"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { itemVariants, RevealGroup } from "@/components/ui/Reveal";
import { instagramPosts } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export function InstagramFeed() {
  return (
    <Section id="instagram" className="bg-background-subtle">
      <SectionHeading
        eyebrow="@techwizstem"
        title="Follow the Innovation"
        description="Daily builds, wins, and behind-the-scenes moments from our labs and workshops."
      />

      <RevealGroup className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {instagramPosts.map((post) => (
          <motion.a
            key={post.src}
            variants={itemVariants}
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-2xl border border-border"
          >
            <Image
              src={post.src}
              alt={post.caption}
              fill
              sizes="(max-width: 768px) 50vw, 16vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-600/80 to-lime-600/80 p-2 text-center text-white opacity-0 transition-opacity group-hover:opacity-100">
              <InstagramIcon className="size-6" />
              <span className="text-xs font-medium">{post.caption}</span>
            </div>
          </motion.a>
        ))}
      </RevealGroup>

      <div className="mt-8 text-center">
        <a
          href={siteConfig.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <InstagramIcon className="size-4" /> Follow @techwizstem
        </a>
      </div>
    </Section>
  );
}
