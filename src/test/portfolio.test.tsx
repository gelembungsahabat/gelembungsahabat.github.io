import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Portfolio } from "../components/sections/portfolio-list";

describe("<Portfolio />", () => {
  it("renders the section heading", () => {
    render(<Portfolio />);
    expect(
      screen.getByRole("heading", { name: /portfolio.*personal projects/i, level: 2 })
    ).toBeInTheDocument();
  });

  it("renders all project titles", () => {
    render(<Portfolio />);
    expect(
      screen.getByRole("heading", { name: /anime search application/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /nihongo/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /github pages portfolio v1/i, level: 3 })
    ).toBeInTheDocument();
  });

  it("renders project subtitles", () => {
    render(<Portfolio />);
    expect(
      screen.getByText(/real-time anime database search/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/learning japanese using next\.js/i)
    ).toBeInTheDocument();
  });

  it("renders project descriptions", () => {
    render(<Portfolio />);
    // JikanAPI appears both as tech badge and in description
    const jikanElements = screen.getAllByText(/jikanapi/i);
    expect(jikanElements.length).toBe(2);
  });

  it("renders technology badges for each project", () => {
    render(<Portfolio />);
    const techBadges = document.querySelectorAll(".tech-badge");
    expect(techBadges.length).toBeGreaterThanOrEqual(3);
  });

  it("renders GitHub links for projects that have them", () => {
    render(<Portfolio />);
    const githubLinks = screen.getAllByRole("link", { name: /view .* on github/i });
    expect(githubLinks.length).toBeGreaterThanOrEqual(2);
    githubLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", expect.stringContaining("github.com"));
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("renders View Live links for all projects", () => {
    render(<Portfolio />);
    const liveLinks = screen.getAllByRole("link", { name: /view .* live demo/i });
    expect(liveLinks.length).toBe(3);
    liveLinks.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("renders featured badge on featured projects", () => {
    render(<Portfolio />);
    const featuredBadges = document.querySelectorAll(".featured-badge");
    expect(featuredBadges.length).toBeGreaterThanOrEqual(1);
  });

  it("renders project images with correct alt text", () => {
    render(<Portfolio />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(3);
    expect(images[0]).toHaveAttribute(
      "alt",
      expect.stringContaining("Anime Search Application")
    );
  });

  it("renders achievements list items", () => {
    render(<Portfolio />);
    const achievements = document.querySelectorAll(".achievements-list");
    expect(achievements.length).toBeGreaterThanOrEqual(1);
  });
});