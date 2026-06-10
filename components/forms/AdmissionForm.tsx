"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, PartyPopper } from "lucide-react";
import { FormField, Input, Select } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/Button";
import { classOptions, courses } from "@/lib/data";
import { admissionSchema } from "@/lib/schemas";
import { useFormPost } from "@/lib/useFormPost";
import { cn } from "@/lib/utils";

const steps = ["Student", "Parent & Contact", "Program"] as const;

const stepFields: Record<number, (keyof FormState)[]> = {
  0: ["studentName", "classLevel", "school"],
  1: ["parentName", "phone", "email"],
  2: ["program"],
};

type FormState = {
  studentName: string;
  classLevel: string;
  school: string;
  parentName: string;
  phone: string;
  email: string;
  program: string;
  company: string;
};

export function AdmissionForm({ defaultProgram = "" }: { defaultProgram?: string }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>({
    studentName: "",
    classLevel: "",
    school: "",
    parentName: "",
    phone: "",
    email: "",
    program: defaultProgram,
    company: "",
  });
  const [localErrors, setLocalErrors] = useState<Record<string, string>>({});
  const { status, errors, message, submit } = useFormPost("/api/admission");

  const err = (k: string) => localErrors[k] || errors[k];
  const set =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm({ ...form, [k]: e.target.value });

  function validateStep(s: number): boolean {
    const fields = stepFields[s];
    const partial = admissionSchema.safeParse(form);
    const fe: Record<string, string> = {};
    if (!partial.success) {
      partial.error.issues.forEach((i) => {
        const key = String(i.path[0]);
        if (fields.includes(key as keyof FormState) && !fe[key]) fe[key] = i.message;
      });
    }
    setLocalErrors(fe);
    return Object.keys(fe).length === 0;
  }

  function next() {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, steps.length - 1));
  }
  function back() {
    setLocalErrors({});
    setStep((s) => Math.max(s - 1, 0));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStep(2)) return;
    const parsed = admissionSchema.safeParse(form);
    if (!parsed.success) return;
    await submit(parsed.data);
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border border-border bg-card p-8 text-center shadow-soft md:p-12"
      >
        <div className="mx-auto grid size-16 place-items-center rounded-full bg-lime-500/15 text-lime-600">
          <PartyPopper className="size-9" />
        </div>
        <h3 className="mt-5 text-2xl font-bold">Application Submitted!</h3>
        <p className="mx-auto mt-3 max-w-md text-muted">{message}</p>
        <div className="mt-6 rounded-2xl border border-border bg-background-subtle p-5 text-left text-sm">
          <p className="font-semibold">What happens next?</p>
          <ul className="mt-2 space-y-1.5 text-muted">
            <li className="flex gap-2"><CheckCircle2 className="size-4 shrink-0 text-lime-500" /> Our team calls you within 1 working day.</li>
            <li className="flex gap-2"><CheckCircle2 className="size-4 shrink-0 text-lime-500" /> We schedule your child&apos;s free demo class.</li>
            <li className="flex gap-2"><CheckCircle2 className="size-4 shrink-0 text-lime-500" /> You choose a batch and begin the journey!</li>
          </ul>
        </div>
        <ButtonLink href="/" variant="outline" className="mt-6">
          Back to Home
        </ButtonLink>
      </motion.div>
    );
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
      {/* Stepper */}
      <ol className="mb-8 flex items-center">
        {steps.map((label, i) => (
          <li key={label} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <span
                className={cn(
                  "grid size-9 place-items-center rounded-full border-2 text-sm font-semibold transition-colors",
                  i < step && "border-lime-500 bg-lime-500 text-navy",
                  i === step && "border-primary bg-primary text-primary-foreground",
                  i > step && "border-border text-muted",
                )}
              >
                {i < step ? <CheckCircle2 className="size-5" /> : i + 1}
              </span>
              <span className={cn("hidden text-xs font-medium sm:block", i === step ? "text-foreground" : "text-muted")}>
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <span className={cn("mx-2 h-0.5 flex-1 rounded transition-colors", i < step ? "bg-lime-500" : "bg-border")} />
            )}
          </li>
        ))}
      </ol>

      <form onSubmit={onSubmit} noValidate>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="space-y-4"
          >
            {step === 0 && (
              <>
                <FormField label="Student Name" htmlFor="a-student" error={err("studentName")}>
                  <Input id="a-student" value={form.studentName} onChange={set("studentName")} placeholder="Student's full name" error={err("studentName")} />
                </FormField>
                <FormField label="Class" htmlFor="a-class" error={err("classLevel")}>
                  <Select id="a-class" value={form.classLevel} onChange={set("classLevel")} error={err("classLevel")}>
                    <option value="">Select class</option>
                    {classOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                  </Select>
                </FormField>
                <FormField label="School" htmlFor="a-school" error={err("school")}>
                  <Input id="a-school" value={form.school} onChange={set("school")} placeholder="School name" error={err("school")} />
                </FormField>
              </>
            )}

            {step === 1 && (
              <>
                <FormField label="Parent Name" htmlFor="a-parent" error={err("parentName")}>
                  <Input id="a-parent" value={form.parentName} onChange={set("parentName")} placeholder="Parent's full name" error={err("parentName")} />
                </FormField>
                <FormField label="Phone" htmlFor="a-phone" error={err("phone")}>
                  <Input id="a-phone" inputMode="numeric" value={form.phone} onChange={set("phone")} placeholder="10-digit mobile" error={err("phone")} />
                </FormField>
                <FormField label="Email" htmlFor="a-email" error={err("email")}>
                  <Input id="a-email" type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" error={err("email")} />
                </FormField>
              </>
            )}

            {step === 2 && (
              <>
                <FormField label="Program Interested In" htmlFor="a-program" error={err("program")}>
                  <Select id="a-program" value={form.program} onChange={set("program")} error={err("program")}>
                    <option value="">Select a program</option>
                    {courses.map((c) => (
                      <option key={c.slug} value={c.name}>{c.name} ({c.grades})</option>
                    ))}
                  </Select>
                </FormField>
                <div className="rounded-2xl border border-border bg-background-subtle p-4 text-sm">
                  <p className="font-semibold">Review your details</p>
                  <div className="mt-2 grid gap-1 text-muted sm:grid-cols-2">
                    <div><span className="font-medium text-foreground">Student: </span>{form.studentName || "—"}</div>
                    <div><span className="font-medium text-foreground">Class: </span>{form.classLevel || "—"}</div>
                    <div><span className="font-medium text-foreground">School: </span>{form.school || "—"}</div>
                    <div><span className="font-medium text-foreground">Parent: </span>{form.parentName || "—"}</div>
                    <div><span className="font-medium text-foreground">Phone: </span>{form.phone || "—"}</div>
                    <div><span className="font-medium text-foreground">Email: </span>{form.email || "—"}</div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={form.company} onChange={set("company")} />

        <div className="mt-8 flex items-center justify-between gap-3">
          {step > 0 ? (
            <Button type="button" variant="outline" onClick={back}>
              <ArrowLeft className="size-4" /> Back
            </Button>
          ) : <span />}

          {step < steps.length - 1 ? (
            <Button type="button" onClick={next}>
              Continue <ArrowRight className="size-4" />
            </Button>
          ) : (
            <Button type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? (
                <><Loader2 className="size-4 animate-spin" /> Submitting...</>
              ) : (
                "Submit Application"
              )}
            </Button>
          )}
        </div>
        {status === "error" && !Object.keys(errors).length && (
          <p className="mt-3 text-center text-xs text-red-500">{message}</p>
        )}
      </form>
    </div>
  );
}
