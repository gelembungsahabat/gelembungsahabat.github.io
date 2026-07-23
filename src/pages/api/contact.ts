import type { APIRoute } from "astro";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

interface ValidationError {
  field: keyof ContactPayload;
  message: string;
}

function validateContactForm(data: Record<string, unknown>): {
  payload: ContactPayload | null;
  errors: ValidationError[];
} {
  const errors: ValidationError[] = [];

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";

  if (!name) {
    errors.push({ field: "name", message: "Name is required." });
  }

  if (!email) {
    errors.push({ field: "email", message: "Email is required." });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push({ field: "email", message: "Please enter a valid email address." });
  }

  if (!message) {
    errors.push({ field: "message", message: "Message is required." });
  } else if (message.length < 10) {
    errors.push({ field: "message", message: "Message must be at least 10 characters." });
  }

  if (errors.length > 0) {
    return { payload: null, errors };
  }

  return { payload: { name, email, message }, errors: [] };
}

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data: Record<string, unknown> = await request.json();
    const { payload, errors } = validateContactForm(data);

    if (errors.length > 0) {
      return new Response(JSON.stringify({ success: false, errors }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // ── Log the submission (future: send email via Resend/SendGrid) ──
    console.info("[Contact Form Submission]", {
      name: payload!.name,
      email: payload!.email,
      message: payload!.message,
      timestamp: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you! Your message has been received.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("[Contact Form Error]", err);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Something went wrong. Please try again later.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};