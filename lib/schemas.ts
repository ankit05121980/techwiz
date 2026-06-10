import { z } from "zod";
import { interestAreas } from "./data";

const phoneRegex = /^[6-9]\d{9}$/; // Indian 10-digit mobile

const name = z.string().trim().min(2, "Please enter at least 2 characters").max(60);
const phone = z
  .string()
  .trim()
  .regex(phoneRegex, "Enter a valid 10-digit mobile number");

export const demoSchema = z.object({
  studentName: name,
  parentName: name,
  phone,
  classLevel: z.string().min(1, "Please select a class"),
  interest: z.enum(interestAreas, {
    message: "Please choose an interest area",
  }),
  // Honeypot — must stay empty.
  company: z.string().max(0).optional(),
});

export const contactSchema = z.object({
  studentName: name,
  parentName: name,
  phone,
  classLevel: z.string().min(1, "Please select a class"),
  interest: z.enum(interestAreas, {
    message: "Please choose an interest area",
  }),
  message: z.string().trim().max(800).optional(),
  type: z.enum(["general", "school"]).optional(),
  company: z.string().max(0).optional(),
});

export const admissionSchema = z.object({
  studentName: name,
  classLevel: z.string().min(1, "Please select a class"),
  school: z.string().trim().min(2, "Please enter the school name").max(120),
  parentName: name,
  phone,
  email: z.string().trim().email("Enter a valid email address"),
  program: z.string().min(1, "Please select a program"),
  company: z.string().max(0).optional(),
});

export const newsletterSchema = z.object({
  email: z.string().trim().email("Enter a valid email address"),
  company: z.string().max(0).optional(),
});

export const leadSchema = z.object({
  parentName: name,
  phone,
  interest: z.enum(interestAreas, {
    message: "Please choose an interest area",
  }),
  company: z.string().max(0).optional(),
});

export type DemoInput = z.infer<typeof demoSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type AdmissionInput = z.infer<typeof admissionSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
export type LeadInput = z.infer<typeof leadSchema>;
