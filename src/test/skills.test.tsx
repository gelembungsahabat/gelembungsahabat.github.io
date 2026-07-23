import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Skills } from "../components/sections";

describe("<Skills />", () => {
  it("renders the section heading", () => {
    render(<Skills />);
    expect(
      screen.getByRole("heading", { name: /skills & technologies/i, level: 2 })
    ).toBeInTheDocument();
  });

  it("renders all skill category titles as subheadings", () => {
    render(<Skills />);
    expect(
      screen.getByRole("heading", { name: /frontend development/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /backend & apis/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /tools & practices/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /concepts & methodologies/i, level: 3 })
    ).toBeInTheDocument();
  });

  it("renders individual skills as badges", () => {
    render(<Skills />);
    const badges = document.querySelectorAll(".skill-badge");
    expect(badges.length).toBeGreaterThanOrEqual(20);

    const badgeTexts = Array.from(badges).map((b) => b.textContent);
    expect(badgeTexts).toContain("React");
    expect(badgeTexts).toContain("TypeScript");
    expect(badgeTexts).toContain("Go");
    expect(badgeTexts).toContain("Node.js");
    expect(badgeTexts).toContain("Vitest");
    expect(badgeTexts).toContain("Vercel");
  });

  it("renders skills in badge containers per category", () => {
    render(<Skills />);
    const categories = document.querySelectorAll(".skill-category");
    expect(categories.length).toBe(4);
  });

  it("renders badge containers for each category", () => {
    render(<Skills />);
    const badgeContainers = document.querySelectorAll(".skill-badges");
    expect(badgeContainers.length).toBe(4);
  });

  it("renders Frontend Development skills", () => {
    render(<Skills />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("JavaScript (ES6+)")).toBeInTheDocument();
    expect(screen.getByText("Astro")).toBeInTheDocument();
    expect(screen.getByText("HTMX")).toBeInTheDocument();
  });

  it("renders Backend & APIs skills", () => {
    render(<Skills />);
    expect(screen.getByText("Go")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("RESTful APIs")).toBeInTheDocument();
  });
});
