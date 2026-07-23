export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface ContactFormResult {
  success: boolean;
  message: string;
  errors?: ContactFormErrors;
}

export function validateField(
  field: keyof ContactFormData,
  value: string
): string | undefined {
  switch (field) {
    case "name": {
      const trimmed = value.trim();
      if (!trimmed) return "Name is required.";
      if (trimmed.length < 2) return "Name must be at least 2 characters.";
      return undefined;
    }
    case "email": {
      const trimmed = value.trim();
      if (!trimmed) return "Email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed))
        return "Please enter a valid email address.";
      return undefined;
    }
    case "message": {
      const trimmed = value.trim();
      if (!trimmed) return "Message is required.";
      if (trimmed.length < 10)
        return "Message must be at least 10 characters.";
      return undefined;
    }
  }
}

export function validateForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const nameErr = validateField("name", data.name);
  if (nameErr) errors.name = nameErr;
  const emailErr = validateField("email", data.email);
  if (emailErr) errors.email = emailErr;
  const messageErr = validateField("message", data.message);
  if (messageErr) errors.message = messageErr;
  return errors;
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactFormResult> {
  const clientErrors = validateForm(data);
  if (hasErrors(clientErrors)) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: clientErrors,
    };
  }

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result: ContactFormResult = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message || "Something went wrong. Please try again.",
        errors: result.errors,
      };
    }

    return result;
  } catch (err) {
    console.error("Failed to submit contact form:", err);
    return {
      success: false,
      message: "Network error. Please check your connection and try again.",
    };
  }
}