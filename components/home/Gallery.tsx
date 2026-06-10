"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryCategories, galleryItems, type GalleryItem } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>("All");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const items =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === filter);

  return (
    <Section id="gallery" className="bg-background-subtle">
      <SectionHeading
        eyebrow="Gallery"
        title="Inside the TechWiz Experience"
        description="Builds, breakthroughs, and big smiles from our labs, workshops, and competitions."
      />

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all",
              filter === cat
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted hover:border-primary/40 hover:text-primary",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4"
      >
        <AnimatePresence>
          {items.map((item) => (
            <motion.button
              layout
              key={item.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActive(item)}
              className={cn(
                "group relative block w-full overflow-hidden rounded-2xl border border-border",
                item.tall ? "aspect-[3/4]" : "aspect-[4/3]",
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/70 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur">
                  {item.category}
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/80 p-4 backdrop-blur-sm"
          >
            <button
              aria-label="Close"
              className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="size-6" />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative h-[70vh] w-full max-w-4xl overflow-hidden rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={active.src} alt={active.alt} fill sizes="100vw" className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
