"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { FormField, Input, Select } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { classOptions, interestAreas } from "@/lib/data";
import { demoSchema } from "@/lib/schemas";
import { useFormPost } from "@/lib/useFormPost";

const empty = {
  studentName: "",
  parentName: "",
  phone: "",
  classLevel: "",
  interest: "",
  company: "",
};

export function DemoForm({ onSuccess }: { onSuccess?: () => void }) {
  const [form, setForm] = useState(empty);
  const [localErrors, setLocalErrors] = useState<Record<string, string>>({});
  const { status, errors, message, submit } = useFormPost("/api/demo");

  const err = (k: string) => localErrors[k] || errors[k];
  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = demoSchema.safeParse(form);
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
    const ok = await submit(parsed.data);
    if (ok) onSuccess?.();
  }

  if (status === "success") {
    return (
      <div className="py-6 text-center">
        <div className="mx-auto grid size-14 place-items-center rounded-full bg-lime-500/15 text-lime-600">
          <CheckCircle2 className="size-8" />
        </div>
        <h3 className="mt-4 text-xl font-bold">Demo Requested!</h3>
        <p className="mt-2 text-sm text-muted">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      <div className="grid gap-3 sm:grid-cols-2">
        <FormField label="Student Name" htmlFor="demo-student" error={err("studentName")}>
          <Input id="demo-student" value={form.studentName} onChange={set("studentName")} placeholder="Student's name" error={err("studentName")} />
        </FormField>
        <FormField label="Parent Name" htmlFor="demo-parent" error={err("parentName")}>
          <Input id="demo-parent" value={form.parentName} onChange={set("parentName")} placeholder="Parent's name" error={err("parentName")} />
        </FormField>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <FormField label="Mobile Number" htmlFor="demo-phone" error={err("phone")}>
          <Input id="demo-phone" inputMode="numeric" value={form.phone} onChange={set("phone")} placeholder="10-digit mobile" error={err("phone")} />
        </FormField>
        <FormField label="Class" htmlFor="demo-class" error={err("classLevel")}>
          <Select id="demo-class" value={form.classLevel} onChange={set("classLevel")} error={err("classLevel")}>
            <option value="">Select class</option>
            {classOptions.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </Select>
        </FormField>
      </div>
      <FormField label="Interest Area" htmlFor="demo-interest" error={err("interest")}>
        <Select id="demo-interest" value={form.interest} onChange={set("interest")} error={err("interest")}>
          <option value="">Select an area</option>
          {interestAreas.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </Select>
      </FormField>
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={form.company} onChange={set("company")} />
      <Button type="submit" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <><Loader2 className="size-4 animate-spin" /> Submitting...</>
        ) : (
          "Book Free Demo Class"
        )}
      </Button>
      {status === "error" && !Object.keys(errors).length && (
        <p className="text-center text-xs text-red-500">{message}</p>
      )}
    </form>
  );
}
