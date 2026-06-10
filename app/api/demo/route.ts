import { demoSchema } from "@/lib/schemas";
import { handleForm } from "@/lib/handleForm";

export async function POST(req: Request) {
  return handleForm(
    req,
    demoSchema,
    "demo",
    "Thank you! Our team will call you shortly to schedule your free demo class.",
  );
}
