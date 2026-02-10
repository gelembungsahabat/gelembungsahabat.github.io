import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Hero } from "../components/sections";

describe("<Hero />", () => {
  it("renders name heading correctly", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: /muhammad wildan/i, level: 1 })
    ).toBeInTheDocument();
  });

  it("renders professional title", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", {
        name: /frontend engineer.*react.*typescript specialist/i,
        level: 2
      })
    ).toBeInTheDocument();
  });

  it("renders tagline with experience", () => {
    render(<Hero />);
    expect(
      screen.getByText(/4 years building scalable, accessible web applications/i)
    ).toBeInTheDocument();
  });

  it("renders availability badge", () => {
    render(<Hero />);
    expect(screen.getByText(/open to opportunities/i)).toBeInTheDocument();
  });

  it("renders location badge", () => {
    render(<Hero />);
    expect(screen.getByText(/indonesia/i)).toBeInTheDocument();
  });

  it("renders stats section", () => {
    render(<Hero />);
    expect(screen.getByText(/4\+/i)).toBeInTheDocument();
    expect(screen.getByText(/years experience/i)).toBeInTheDocument();
    expect(screen.getByText(/15\+/i)).toBeInTheDocument();
    expect(screen.getByText(/projects delivered/i)).toBeInTheDocument();
    expect(screen.getByText(/core expertise/i)).toBeInTheDocument();
  });

  it("renders social media links", () => {
    render(<Hero />);

    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/gelembungsahabat"
    );

    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/gelembungsahabat/"
    );

    expect(screen.getByRole("link", { name: /medium/i })).toHaveAttribute(
      "href",
      "https://medium.com/@gelembungsahabat"
    );
  });
});
