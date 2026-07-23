import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "../components/App";

describe("<App />", () => {
  it("renders all major sections", () => {
    render(<App />);

    // Hero section
    expect(
      screen.getByRole("heading", { name: /muhammad wildan/i, level: 1 })
    ).toBeInTheDocument();

    // About section
    expect(
      screen.getByRole("heading", { name: /about me/i, level: 2 })
    ).toBeInTheDocument();

    // Skills section
    expect(
      screen.getByRole("heading", { name: /skills & technologies/i, level: 2 })
    ).toBeInTheDocument();

    // Experience section
    expect(
      screen.getByRole("heading", { name: /experience/i, level: 2 })
    ).toBeInTheDocument();

    // Portfolio section
    expect(
      screen.getByRole("heading", { name: /portfolio.*personal projects/i, level: 2 })
    ).toBeInTheDocument();

    // Articles section
    expect(
      screen.getByRole("heading", { name: /articles/i, level: 2 })
    ).toBeInTheDocument();

    // Contact section
    expect(
      screen.getByRole("heading", { name: /let's work together/i, level: 2 })
    ).toBeInTheDocument();
  });

  it("renders horizontal rules between sections", () => {
    const { container } = render(<App />);
    const hrElements = container.querySelectorAll("hr");
    // There should be 5 hr elements separating 6 sections (excluding hero)
    expect(hrElements.length).toBe(5);
  });

  it("has the main content landmark", () => {
    render(<App />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
    expect(main).toHaveAttribute("id", "main-content");
  });

  it("has the homepage wrapper class", () => {
    const { container } = render(<App />);
    const homepage = container.querySelector(".homepage");
    expect(homepage).toBeInTheDocument();
  });
});