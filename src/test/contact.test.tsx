import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
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
});
