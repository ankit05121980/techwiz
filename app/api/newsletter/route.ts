import { newsletterSchema } from "@/lib/schemas";
import { handleForm } from "@/lib/handleForm";

export async function POST(req: Request) {
  return handleForm(
    req,
    newsletterSchema,
    "newsletter",
    "You're subscribed! Watch your inbox for STEM tips and demo invites.",
  );
}
