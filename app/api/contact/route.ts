import { contactSchema } from "@/lib/schemas";
import { handleForm } from "@/lib/handleForm";

export async function POST(req: Request) {
  return handleForm(
    req,
    contactSchema,
    "contact",
    "Thanks for reaching out! We'll get back to you within one working day.",
  );
}
