"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { YoutubeIcon } from "@/components/ui/SocialIcons";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { itemVariants, RevealGroup } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Artwork } from "@/components/ui/Artwork";
import { youtubeVideos } from "@/lib/data";
import { siteConfig } from "@/lib/site";

/** Lightweight YouTube facade — loads the iframe only on click. */
function VideoCard({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className="group relative aspect-video overflow-hidden rounded-3xl border border-border bg-navy shadow-soft"
    >
      {playing ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          className="absolute inset-0 size-full"
          aria-label={`Play video: ${title}`}
        >
          <Artwork
            seed={title}
            icon="Bot"
            className="opacity-95 transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-navy/30">
            <span className="grid size-16 place-items-center rounded-full bg-red-600 text-white shadow-soft transition-transform group-hover:scale-110">
              <Play className="size-7 translate-x-0.5 fill-white" />
            </span>
          </span>
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-4 text-left text-sm font-semibold text-white">
            {title}
          </span>
        </button>
      )}
    </motion.div>
  );
}

export function YouTubeSection() {
  return (
    <Section id="youtube" className="bg-background">
      <SectionHeading
        eyebrow="Watch & Learn"
        title="See TechWiz in Action"
        description="Step inside our labs and watch students bring robots, code, and ideas to life."
      />

      <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
        {youtubeVideos.map((v) => (
          <VideoCard key={v.id} {...v} />
        ))}
      </RevealGroup>

      <div className="mt-8 text-center">
        <ButtonLink href={siteConfig.socials.youtube} external variant="outline">
          <YoutubeIcon className="size-5 text-red-600" /> Visit our YouTube channel
        </ButtonLink>
      </div>
    </Section>
  );
}
