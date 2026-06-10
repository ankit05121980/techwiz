import { NextResponse } from "next/server";
import type { z } from "zod";

/**
 * Generic POST handler: validates the body against a zod schema and returns a
 * JSON result. Successful submissions are logged server-side.
 *
 * To wire a real backend (email / CRM / Google Sheet), replace the
 * `console.log` below with your provider call (e.g. Resend, Formspree).
 */
export async function handleForm<S extends z.ZodTypeAny>(
  req: Request,
  schema: S,
  label: string,
  successMessage: string,
) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!errors[key]) errors[key] = issue.message;
    }
    return NextResponse.json(
      { ok: false, message: "Please check the highlighted fields.", errors },
      { status: 400 },
    );
  }

  // Drop honeypot before "persisting".
  const data = parsed.data as Record<string, unknown>;
  if (data.company) {
    // Likely a bot — pretend success without storing.
    return NextResponse.json({ ok: true, message: successMessage });
  }
  delete data.company;

  // TODO: integrate email/CRM provider here.
  console.log(`[lead:${label}]`, JSON.stringify(data));

  return NextResponse.json({ ok: true, message: successMessage });
}
