import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Experience } from "../components/sections";

describe("<Experience />", () => {
  it("renders the section heading", () => {
    render(<Experience />);
    expect(
      screen.getByRole("heading", { name: /experience/i, level: 2 })
    ).toBeInTheDocument();
  });

  it("renders all experience roles", () => {
    render(<Experience />);
    expect(
      screen.getByRole("heading", { name: /software engineer/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /product engineer/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /frontend developer/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /web developer/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /internship/i, level: 3 })
    ).toBeInTheDocument();
  });

  it("renders company names", () => {
    render(<Experience />);
    expect(screen.getByText(/CV Rangga/)).toBeInTheDocument();
    expect(screen.getByText(/Zero One Group/)).toBeInTheDocument();
    // Aegis E-Sport Academy appears in two experience entries
    const aegisElements = screen.getAllByText(/Aegis E-Sport Academy/);
    expect(aegisElements.length).toBe(2);
    expect(screen.getByText(/Nanas Media/)).toBeInTheDocument();
  });

  it("renders experience date ranges", () => {
    render(<Experience />);
    expect(screen.getByText(/December 2025/)).toBeInTheDocument();
    // April 2021 appears in two date ranges
    const aprilElements = screen.getAllByText(/April 2021/);
    expect(aprilElements.length).toBe(2);
    expect(screen.getByText(/January 2021/)).toBeInTheDocument();
    expect(screen.getByText(/November 2020/)).toBeInTheDocument();
    expect(screen.getByText(/December 2019/)).toBeInTheDocument();
  });

  it("renders section subheadings (Responsibilities, Key Achievements, Technologies)", () => {
    render(<Experience />);
    const headings = screen.getAllByRole("heading", { level: 4 });
    const headingTexts = headings.map((h) => h.textContent);
    expect(headingTexts).toContain("Responsibilities");
    expect(headingTexts).toContain("Key Achievements");
    expect(headingTexts).toContain("Technologies");
  });

  it("renders technology badges", () => {
    render(<Experience />);
    const techBadges = document.querySelectorAll(".tech-badge");
    expect(techBadges.length).toBeGreaterThan(0);
    expect(techBadges[0]).toBeInTheDocument();
  });

  it("renders responsibilities as list items", () => {
    render(<Experience />);
    const lists = document.querySelectorAll("ul");
    expect(lists.length).toBeGreaterThan(0);
  });

  it("renders employment type labels", () => {
    render(<Experience />);
    expect(screen.getAllByText(/Full-time/).length).toBeGreaterThanOrEqual(3);
    expect(screen.getByText(/Contract/)).toBeInTheDocument();
    // Internship appears as both role name and type badge
    const internshipElements = screen.getAllByText(/Internship/);
    expect(internshipElements.length).toBe(2);
  });
});