import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { About } from "../components/sections";

describe("<About />", () => {
  it("renders the section heading", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { name: /about me/i, level: 2 })
    ).toBeInTheDocument();
  });

  it("renders the lead paragraph with Software Engineer", () => {
    render(<About />);
    expect(
      screen.getByText(/software engineer/i)
    ).toBeInTheDocument();
  });

  it("renders three content paragraphs", () => {
    render(<About />);
    // Each paragraph contains key themes of the about section
    expect(
      screen.getByText(/electrical engineering/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/reactjs/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/clarity, collaboration, and care/i)
    ).toBeInTheDocument();
  });

  it("renders the code element for ReactJS", () => {
    render(<About />);
    const codeElements = document.querySelectorAll("code");
    const reactCode = Array.from(codeElements).find(
      (el) => el.textContent === "ReactJS"
    );
    expect(reactCode).toBeInTheDocument();
  });

  it("renders strong emphasis on key skills", () => {
    render(<About />);
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Front-End")).toBeInTheDocument();
  });

  it("has a container div with proper class", () => {
    const { container } = render(<About />);
    const containerDiv = container.querySelector(".container");
    expect(containerDiv).toBeInTheDocument();
  });
});