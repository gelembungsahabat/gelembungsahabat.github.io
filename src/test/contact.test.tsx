import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Contact } from "../components/sections";

describe("<Contact />", () => {
  beforeEach(() => {
    // Add clipboard API to Navigator prototype (jsdom doesn't have it)
    Object.defineProperty(Navigator.prototype, "clipboard", {
      value: { writeText: vi.fn().mockResolvedValue(undefined) },
      writable: true,
      configurable: true,
    });
  });

  // ── Rendering ──────────────────────────────────────────────

  it("renders the section heading", () => {
    render(<Contact />);
    expect(
      screen.getByRole("heading", { name: /let's work together/i, level: 2 })
    ).toBeInTheDocument();
  });

  it("renders the contact description", () => {
    render(<Contact />);
    expect(
      screen.getByText(/open to new opportunities/i)
    ).toBeInTheDocument();
  });

  it("renders Download Resume link", () => {
    render(<Contact />);
    const resumeLink = screen.getByRole("link", { name: /download resume/i });
    expect(resumeLink).toBeInTheDocument();
    expect(resumeLink).toHaveAttribute(
      "href",
      "/resume/Muhammad_Wildan-Resume.pdf"
    );
    expect(resumeLink).toHaveAttribute("download");
  });

  it("renders Copy Email button", () => {
    render(<Contact />);
    const copyButton = screen.getByRole("button", { name: /copy email/i });
    expect(copyButton).toBeInTheDocument();
  });

  it("renders social links (LinkedIn, GitHub, Email)", () => {
    render(<Contact />);
    expect(
      screen.getByRole("link", { name: /linkedin profile/i })
    ).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/gelembungsahabat"
    );
    expect(
      screen.getByRole("link", { name: /github profile/i })
    ).toHaveAttribute("href", "https://github.com/gelembungsahabat");
    expect(
      screen.getByRole("link", { name: /send email/i })
    ).toHaveAttribute("href", "mailto:muhammadwildan.career@gmail.com");
  });

  it("opens social links in new tab with noopener", () => {
    render(<Contact />);
    const linkedinLink = screen.getByRole("link", { name: /linkedin profile/i });
    const githubLink = screen.getByRole("link", { name: /github profile/i });
    [linkedinLink, githubLink].forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("renders all three form fields", () => {
    render(<Contact />);
    expect(screen.getByRole('textbox', { name: 'Name' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Email' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Message' })).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    render(<Contact />);
    expect(
      screen.getByRole("button", { name: /send message/i })
    ).toBeInTheDocument();
  });

  // ── Interactions: Copy Email ───────────────────────────────

  it("shows Toast notification after clicking Copy Email", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const copyButton = screen.getByRole("button", { name: /copy email/i });
    await user.click(copyButton);

    expect(
      screen.getByText(/email copied to clipboard/i)
    ).toBeInTheDocument();
  });

  // ── Interactions: Form validation ──────────────────────────

  it("shows validation errors on blur for empty fields", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const nameInput = screen.getByRole('textbox', { name: 'Name' });
    const emailInput = screen.getByRole('textbox', { name: 'Email' });
    const messageInput = screen.getByRole('textbox', { name: 'Message' });

    await user.click(nameInput);
    await user.click(emailInput);
    await user.click(messageInput);
    await user.click(document.body); // blur all

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });
  });

  it("shows validation error for short name", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const nameInput = screen.getByRole('textbox', { name: 'Name' });
    await user.type(nameInput, "A");
    await user.tab();

    await waitFor(() => {
      expect(
        screen.getByText(/name must be at least 2 characters/i)
      ).toBeInTheDocument();
    });
  });

  it("shows validation error for invalid email", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const emailInput = screen.getByRole('textbox', { name: 'Email' });
    await user.type(emailInput, "not-an-email");
    await user.tab();

    await waitFor(() => {
      expect(
        screen.getByText(/please enter a valid email address/i)
      ).toBeInTheDocument();
    });
  });

  it("shows validation error for short message", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const messageInput = screen.getByRole('textbox', { name: 'Message' });
    await user.type(messageInput, "Short");
    await user.tab();

    await waitFor(() => {
      expect(
        screen.getByText(/message must be at least 10 characters/i)
      ).toBeInTheDocument();
    });
  });

  it("sets aria-invalid on fields with errors", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const nameInput = screen.getByRole('textbox', { name: 'Name' });
    await user.click(nameInput);
    await user.tab();

    await waitFor(() => {
      expect(nameInput).toHaveAttribute("aria-invalid", "true");
    });
  });

  // ── Interactions: Form submission ──────────────────────────

  it("shows error toast when submitting empty form", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const submitBtn = screen.getByRole("button", { name: /send message/i });
    await user.click(submitBtn);

    await waitFor(() => {
      expect(
        screen.getByText(/please fix the errors below/i)
      ).toBeInTheDocument();
    });
  });

  it("disables fields during submission", async () => {
    const user = userEvent.setup();
    // Mock fetch to delay so we can observe loading state
    vi.spyOn(globalThis, "fetch").mockImplementationOnce(
      () =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve(
                new Response(
                  JSON.stringify({
                    success: true,
                    message: "Thank you! Your message has been received.",
                  }),
                  { status: 200, headers: { "Content-Type": "application/json" } }
                )
              ),
            500
          )
        )
    );

    render(<Contact />);

    await user.type(screen.getByRole('textbox', { name: 'Name' }), "John Doe");
    await user.type(screen.getByRole('textbox', { name: 'Email' }), "john@example.com");
    await user.type(screen.getByRole('textbox', { name: 'Message' }), "Hello, I'd like to discuss a project opportunity.");

    const submitBtn = screen.getByRole("button", { name: /send message/i });
    await user.click(submitBtn);

    // Button should show loading state
    await waitFor(() => {
      expect(screen.getByRole("button", { name: /sending/i })).toBeInTheDocument();
    });

    // Fields should be disabled during submission
    expect(screen.getByRole('textbox', { name: 'Name' })).toBeDisabled();
    expect(screen.getByRole('textbox', { name: 'Email' })).toBeDisabled();
    expect(screen.getByRole('textbox', { name: 'Message' })).toBeDisabled();

    // Wait for completion
    await waitFor(() => {
      expect(
        screen.getByText(/thank you.*message has been received/i)
      ).toBeInTheDocument();
    });

    vi.restoreAllMocks();
  }, 10000);

  it("submits form successfully and shows success toast", async () => {
    const user = userEvent.setup();
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          success: true,
          message: "Thank you! Your message has been received.",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      )
    );

    render(<Contact />);

    await user.type(screen.getByRole('textbox', { name: 'Name' }), "John Doe");
    await user.type(screen.getByRole('textbox', { name: 'Email' }), "john@example.com");
    await user.type(
      screen.getByRole('textbox', { name: 'Message' }),
      "Hello, I'd like to discuss a project opportunity."
    );

    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/thank you.*message has been received/i)
      ).toBeInTheDocument();
    });

    // Form should be reset after success
    expect(screen.getByRole<HTMLInputElement>('textbox', { name: 'Name' }).value).toBe("");
    expect(screen.getByRole<HTMLInputElement>('textbox', { name: 'Email' }).value).toBe("");
    expect(screen.getByRole<HTMLTextAreaElement>('textbox', { name: 'Message' }).value).toBe("");

    vi.restoreAllMocks();
  });

  it("shows error toast when API returns an error", async () => {
    const user = userEvent.setup();
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          success: false,
          message: "Server error. Please try again.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      )
    );

    render(<Contact />);

    await user.type(screen.getByRole('textbox', { name: 'Name' }), "John Doe");
    await user.type(screen.getByRole('textbox', { name: 'Email' }), "john@example.com");
    await user.type(
      screen.getByRole('textbox', { name: 'Message' }),
      "Hello, I'd like to discuss a project opportunity."
    );

    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/server error/i)
      ).toBeInTheDocument();
    });

    vi.restoreAllMocks();
  });

  it("shows error toast on network failure", async () => {
    const user = userEvent.setup();
    vi.spyOn(globalThis, "fetch").mockRejectedValueOnce(new Error("Network error"));

    render(<Contact />);

    await user.type(screen.getByRole('textbox', { name: 'Name' }), "John Doe");
    await user.type(screen.getByRole('textbox', { name: 'Email' }), "john@example.com");
    await user.type(
      screen.getByRole('textbox', { name: 'Message' }),
      "Hello, I'd like to discuss a project opportunity."
    );

    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/network error/i)
      ).toBeInTheDocument();
    });

    vi.restoreAllMocks();
  });
});