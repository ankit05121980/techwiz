"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Gift, Loader2 } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { FormField, Input, Select } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { interestAreas } from "@/lib/data";
import { leadSchema } from "@/lib/schemas";
import { useFormPost } from "@/lib/useFormPost";

const STORAGE_KEY = "tw_lead_popup_seen";

export function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ parentName: "", phone: "", interest: "", company: "" });
  const [localErrors, setLocalErrors] = useState<Record<string, string>>({});
  const { status, errors, message, submit } = useFormPost("/api/lead");

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setOpen(true), 14000);
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) setOpen(true);
    };
    document.addEventListener("mouseleave", onLeave);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  function close() {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, "1");
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        fe[String(i.path[0])] = i.message;
      });
      setLocalErrors(fe);
      return;
    }
    setLocalErrors({});
    const ok = await submit(parsed.data);
    if (ok) localStorage.setItem(STORAGE_KEY, "1");
  }

  const err = (k: string) => localErrors[k] || errors[k];

  return (
    <Modal open={open} onClose={close} title="Book a free demo class">
      {status === "success" ? (
        <div className="py-6 text-center">
          <div className="mx-auto grid size-14 place-items-center rounded-full bg-lime-500/15 text-lime-600">
            <CheckCircle2 className="size-8" />
          </div>
          <h3 className="mt-4 text-xl font-bold">You&apos;re all set!</h3>
          <p className="mt-2 text-sm text-muted">
            {message || "Our team will call you shortly to schedule your free demo."}
          </p>
          <Button className="mt-5 w-full" onClick={close}>
            Done
          </Button>
        </div>
      ) : (
        <>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-lime-500 text-white">
              <Gift className="size-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold leading-tight">Claim a Free Demo Class</h3>
              <p className="text-sm text-muted">No cost, no obligation. Limited weekly seats.</p>
            </div>
          </div>
          <form onSubmit={onSubmit} className="space-y-3" noValidate>
            <FormField label="Parent Name" htmlFor="lead-parent" error={err("parentName")}>
              <Input
                id="lead-parent"
                value={form.parentName}
                onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                placeholder="Your full name"
                error={err("parentName")}
              />
            </FormField>
            <FormField label="Mobile Number" htmlFor="lead-phone" error={err("phone")}>
              <Input
                id="lead-phone"
                inputMode="numeric"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="10-digit mobile number"
                error={err("phone")}
              />
            </FormField>
            <FormField label="Interested In" htmlFor="lead-interest" error={err("interest")}>
              <Select
                id="lead-interest"
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                error={err("interest")}
              >
                <option value="">Select an area</option>
                {interestAreas.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </Select>
            </FormField>
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
            <Button type="submit" className="w-full" disabled={status === "submitting"}>
              {status === "submitting" ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Booking...
                </>
              ) : (
                "Book My Free Demo"
              )}
            </Button>
            <button
              type="button"
              onClick={close}
              className="w-full text-center text-xs text-muted hover:text-foreground"
            >
              No thanks, maybe later
            </button>
          </form>
        </>
      )}
    </Modal>
  );
}
