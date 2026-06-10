import { admissionSchema } from "@/lib/schemas";
import { handleForm } from "@/lib/handleForm";

export async function POST(req: Request) {
  return handleForm(
    req,
    admissionSchema,
    "admission",
    "Application received! Our admissions team will contact you to confirm your slot.",
  );
}
