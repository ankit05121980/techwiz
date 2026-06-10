"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useFormPost } from "@/lib/useFormPost";
import { newsletterSchema } from "@/lib/schemas";
import { FieldError } from "@/components/ui/Field";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [localError, setLocalError] = useState("");
  const { status, message, submit } = useFormPost("/api/newsletter");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = newsletterSchema.safeParse({ email, company });
    if (!parsed.success) {
      setLocalError(parsed.error.issues[0]?.message ?? "Invalid email");
      return;
    }
    setLocalError("");
    const ok = await submit(parsed.data);
    if (ok) setEmail("");
  }

  if (status === "success") {
    return (
      <p className="flex items-center gap-2 rounded-xl bg-lime-500/15 px-4 py-3 text-sm font-medium text-lime-700 dark:text-lime-300">
        <CheckCircle2 className="size-4" /> {message || "You're subscribed!"}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2" noValidate>
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          aria-label="Email address"
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          aria-label="Subscribe"
          className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground transition-colors hover:opacity-90 disabled:opacity-60"
        >
          {status === "submitting" ? (
            <Loader2 className="size-5 animate-spin" />
          ) : (
            <ArrowRight className="size-5" />
          )}
        </button>
      </div>
      <FieldError>{localError || (status === "error" ? message : "")}</FieldError>
    </form>
  );
}
