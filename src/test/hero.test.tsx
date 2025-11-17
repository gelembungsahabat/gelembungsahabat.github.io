import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Hero } from "../components/sections";

describe("<Hero />", () => {
  it("renders greeting heading correctly", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: /hi, i'm muhammad wildan/i })
    ).toBeInTheDocument();
  });

  it("renders personal branding text", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", {
        name: /software engineer specializing in front-end/i,
      })
    ).toBeInTheDocument();
  });

  it("renders social media links", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/gelembungsahabat"
    );
  });
});
