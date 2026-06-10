"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";

export function StickyAdmissionCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("tw_sticky_dismissed")) {
      setDismissed(true);
      return;
    }
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function close() {
    setDismissed(true);
    sessionStorage.setItem("tw_sticky_dismissed", "1");
  }

  return (
    <AnimatePresence>
      {show && !dismissed && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-3 bottom-3 z-40 mx-auto max-w-xl sm:hidden"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/95 p-3 shadow-soft backdrop-blur">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-lime-500 text-white">
              <Sparkles className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">Free demo class</p>
              <p className="truncate text-xs text-muted">Limited seats every week</p>
            </div>
            <Link
              href="/admission"
              className="shrink-0 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
            >
              Book Now
            </Link>
            <button
              onClick={close}
              aria-label="Dismiss"
              className="shrink-0 rounded-full p-1 text-muted hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
