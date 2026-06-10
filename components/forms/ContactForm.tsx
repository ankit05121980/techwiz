"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { FormField, Input, Select, Textarea } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { classOptions, interestAreas } from "@/lib/data";
import { contactSchema } from "@/lib/schemas";
import { useFormPost } from "@/lib/useFormPost";

export function ContactForm({ defaultType = "general" }: { defaultType?: "general" | "school" }) {
  const [form, setForm] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    classLevel: "",
    interest: "",
    message: "",
    type: defaultType,
    company: "",
  });
  const [localErrors, setLocalErrors] = useState<Record<string, string>>({});
  const { status, errors, message, submit } = useFormPost("/api/contact");

  const err = (k: string) => localErrors[k] || errors[k];
  const set =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) =>
      setForm({ ...form, [k]: e.target.value });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const key = String(i.path[0]);
        if (!fe[key]) fe[key] = i.message;
      });
      setLocalErrors(fe);
      return;
    }
    setLocalErrors({});
    await submit(parsed.data);
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-soft">
        <div className="mx-auto grid size-14 place-items-center rounded-full bg-lime-500/15 text-lime-600">
          <CheckCircle2 className="size-8" />
        </div>
        <h3 className="mt-4 text-xl font-bold">Message Sent!</h3>
        <p className="mt-2 text-sm text-muted">{message}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Student Name" htmlFor="c-student" error={err("studentName")}>
          <Input id="c-student" value={form.studentName} onChange={set("studentName")} placeholder="Student's name" error={err("studentName")} />
        </FormField>
        <FormField label="Parent Name" htmlFor="c-parent" error={err("parentName")}>
          <Input id="c-parent" value={form.parentName} onChange={set("parentName")} placeholder="Parent's name" error={err("parentName")} />
        </FormField>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Mobile Number" htmlFor="c-phone" error={err("phone")}>
          <Input id="c-phone" inputMode="numeric" value={form.phone} onChange={set("phone")} placeholder="10-digit mobile" error={err("phone")} />
        </FormField>
        <FormField label="Class" htmlFor="c-class" error={err("classLevel")}>
          <Select id="c-class" value={form.classLevel} onChange={set("classLevel")} error={err("classLevel")}>
            <option value="">Select class</option>
            {classOptions.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </Select>
        </FormField>
      </div>
      <FormField label="Interest Area" htmlFor="c-interest" error={err("interest")}>
        <Select id="c-interest" value={form.interest} onChange={set("interest")} error={err("interest")}>
          <option value="">Select an area</option>
          {interestAreas.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </Select>
      </FormField>
      <FormField label="Message (optional)" htmlFor="c-message">
        <Textarea id="c-message" value={form.message} onChange={set("message")} placeholder={form.type === "school" ? "Tell us about your school and what you'd like to set up." : "How can we help?"} />
      </FormField>
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={form.company} onChange={set("company")} />
      <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <><Loader2 className="size-5 animate-spin" /> Sending...</>
        ) : (
          <><Send className="size-5" /> Send Message</>
        )}
      </Button>
      {status === "error" && !Object.keys(errors).length && (
        <p className="text-center text-xs text-red-500">{message}</p>
      )}
    </form>
  );
}
