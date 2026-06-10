import { leadSchema } from "@/lib/schemas";
import { handleForm } from "@/lib/handleForm";

export async function POST(req: Request) {
  return handleForm(
    req,
    leadSchema,
    "lead",
    "Got it! Our team will call you shortly to book your free demo.",
  );
}
