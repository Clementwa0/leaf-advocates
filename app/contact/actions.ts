"use server";

import { contactFormSchema } from "@/components/contact/schema";

export type ContactFormState = {
  success: boolean;
  errors?: {
    fullName?: string[];
    email?: string[];
    subject?: string[];
    practiceArea?: string[];
    message?: string[];
    phone?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawData = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    practiceArea: formData.get("practiceArea"),
    phone: formData.get("phone"),
  };

  const parsed = contactFormSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    // 🔥 Replace with email/database logic
    console.log("Form submitted:", parsed.data);

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}