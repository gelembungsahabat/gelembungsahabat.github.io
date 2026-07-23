import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Articles } from "../components/sections";

describe("<Articles />", () => {
  it("renders the section heading", () => {
    render(<Articles />);
    expect(
      screen.getByRole("heading", { name: /articles/i, level: 2 })
    ).toBeInTheDocument();
  });

  it("renders article cards with links", () => {
    render(<Articles />);
    const links = screen.getAllByRole("link");
    // Each article card is an anchor, plus possible "View All Articles" link
    expect(links.length).toBeGreaterThanOrEqual(1);
  });

  it("renders article titles", () => {
    render(<Articles />);
    expect(
      screen.getByText(/best practice for accessibility/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/basic aeromodelling/i)
    ).toBeInTheDocument();
    // Use getAllByText since "install wsl" is a substring of the title
    const installWslElements = screen.getAllByText(/install wsl/i);
    expect(installWslElements.length).toBeGreaterThanOrEqual(1);
  });

  it("renders article subtitles", () => {
    render(<Articles />);
    expect(
      screen.getByText(/divs aren.*evil/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/aeromodelling in a nutshell/i)
    ).toBeInTheDocument();
  });

  it("renders links with correct href attributes", () => {
    render(<Articles />);
    const mediumLink = screen.getByRole("link", {
      name: /best practice for accessibility/i,
    });
    expect(mediumLink).toHaveAttribute(
      "href",
      "https://medium.com/@gelembungsahabat/divs-arent-evil-misusing-them-is-2f1845c695e2"
    );

    const wslLink = screen.getByRole("link", { name: /install wsl/i });
    expect(wslLink).toHaveAttribute("href", "/install-wsl");
  });

  it("renders the 'View All Articles' link when article count exceeds 4", () => {
    render(<Articles />);
    // The data has more than 4 articles (uncommented ones), so the link should appear
    const viewAllLink = screen.getByRole("link", { name: /view all articles/i });
    expect(viewAllLink).toBeInTheDocument();
    expect(viewAllLink).toHaveAttribute("href", "/articles");
  });

  it("renders articles in a grid layout", () => {
    const { container } = render(<Articles />);
    const grid = container.querySelector(".articles-grid");
    expect(grid).toBeInTheDocument();
  });
});