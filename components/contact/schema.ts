import * as z from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(3),
  practiceArea: z.string(),
  message: z.string().min(10),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;