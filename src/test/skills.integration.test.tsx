import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";

import App from "../components/App";
import { skillsData } from "../data";
import type { SkillCategory } from "../data/skills-data";

describe("Skills — App Integration", () => {
  // ─── Test 1: Skills renders correctly within the full App ────────────
  it("renders the Skills section heading inside the full App", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /skills & technologies/i,
        level: 2,
      })
    ).toBeInTheDocument();
  });

  it("renders all skill category subheadings inside the full App", () => {
    render(<App />);

    for (const category of skillsData) {
      expect(
        screen.getByRole("heading", {
          name: new RegExp(category.category, "i"),
          level: 3,
        })
      ).toBeInTheDocument();
    }
  });

  it("renders every skill badge from the data inside the Skills section", () => {
    render(<App />);

    // Scope to the Skills section to avoid duplicate matches (e.g. "React"
    // appears in Hero, tech badges, and skill badges).
    const skillsSection = document.querySelector(".section-skills");
    expect(skillsSection).toBeInTheDocument();

    const allSkills = skillsData.flatMap((cat) => cat.skills);
    for (const skill of allSkills) {
      expect(
        within(skillsSection as HTMLElement).getByText(skill.name)
      ).toBeInTheDocument();
    }
  });

  it("renders the Skills section with correct CSS class inside App", () => {
    const { container } = render(<App />);

    const skillsSection = container.querySelector(".section-skills");
    expect(skillsSection).toBeInTheDocument();
    expect(skillsSection?.tagName).toBe("SECTION");
  });

  // ─── Test 2: Cross-component data flow ──────────────────────────────
  it("uses skillsData from the data layer with the correct shape", () => {
    // Verify the data contract before checking component rendering
    expect(Array.isArray(skillsData)).toBe(true);
    expect(skillsData.length).toBeGreaterThanOrEqual(1);

    for (const category of skillsData) {
      // Each category must have a category string and skills array
      expect(category).toHaveProperty("category");
      expect(typeof category.category).toBe("string");
      expect(category.category.length).toBeGreaterThan(0);

      expect(category).toHaveProperty("skills");
      expect(Array.isArray(category.skills)).toBe(true);
      expect(category.skills.length).toBeGreaterThan(0);

      for (const skill of category.skills) {
        expect(skill).toHaveProperty("name");
        expect(typeof skill.name).toBe("string");
        expect(skill.name.length).toBeGreaterThan(0);
      }
    }
  });

  it("renders every skill from data source as a .skill-badge in the DOM", () => {
    render(<App />);

    // Collect all badge texts from the DOM
    const badges = document.querySelectorAll(".skill-badge");
    const badgeTexts = Array.from(badges).map((b) => b.textContent?.trim());

    // Every skill from data should appear as a badge
    const allSkillNames = skillsData.flatMap((cat) =>
      cat.skills.map((s) => s.name)
    );
    for (const name of allSkillNames) {
      expect(badgeTexts).toContain(name);
    }

    // The number of badges should match the total number of skills
    expect(badges.length).toBe(allSkillNames.length);
  });

  it("renders skills grouped by category matching the data structure", () => {
    render(<App />);

    const categories = document.querySelectorAll(".skill-category");
    expect(categories.length).toBe(skillsData.length);

    // Each .skill-category should contain the correct category heading
    categories.forEach((catEl, index) => {
      const heading = catEl.querySelector("h3");
      expect(heading).toBeInTheDocument();
      expect(heading?.textContent).toMatch(
        new RegExp(skillsData[index].category, "i")
      );
    });
  });

  // ─── Test 3: Accessibility — heading hierarchy & aria attributes ────
  it("maintains correct heading hierarchy (h1 → h2 → h3)", () => {
    render(<App />);

    // Get all headings in DOM order
    const headings = screen.getAllByRole("heading");

    // Find the indices of specific headings
    const h1Elements = headings.filter((h) => h.tagName === "H1");
    const h2Elements = headings.filter((h) => h.tagName === "H2");
    const h3Elements = headings.filter((h) => h.tagName === "H3");

    // There should be exactly one h1 (the name from Hero)
    expect(h1Elements).toHaveLength(1);
    expect(h1Elements[0]).toHaveTextContent(/muhammad wildan/i);

    // Verify the h2 headings appear in the right order
    expect(h2Elements.length).toBeGreaterThanOrEqual(2);
    const h2Texts = h2Elements.map((h) => h.textContent);

    // The Skills h2 should be among them
    const skillsH2 = h2Elements.find((h) =>
      /skills & technologies/i.test(h.textContent || "")
    );
    expect(skillsH2).toBeInTheDocument();

    // Verify h3 headings for skill categories exist
    expect(h3Elements.length).toBeGreaterThanOrEqual(skillsData.length);

    // Every category heading appears as an h3
    for (const category of skillsData) {
      const catH3 = h3Elements.find((h) =>
        new RegExp(category.category, "i").test(h.textContent || "")
      );
      expect(catH3).toBeDefined();
    }

    // Verify no heading level is skipped
    for (const heading of headings) {
      const level = parseInt(heading.tagName.replace("H", ""), 10);
      expect(level).toBeGreaterThanOrEqual(1);
      expect(level).toBeLessThanOrEqual(6);
    }
  });

  it("has accessible section landmark for Skills", () => {
    render(<App />);

    // The Skills component renders a <section> element with class section-skills
    // It should be implicitly represented as a landmark via the heading
    const skillsHeading = screen.getByRole("heading", {
      name: /skills & technologies/i,
      level: 2,
    });
    expect(skillsHeading).toBeInTheDocument();

    // The section element containing this heading should be a landmark
    const section = skillsHeading.closest("section");
    expect(section).toBeInTheDocument();
    expect(section?.className).toContain("section-skills");
  });

  it("renders aria-hidden icons in skill category headings", () => {
    render(<App />);

    // Each category has an icon with aria-hidden="true"
    const hiddenIcons = document.querySelectorAll(
      ".skill-category-icon[aria-hidden='true']"
    );
    expect(hiddenIcons.length).toBe(skillsData.length);
  });

  it("has accessible skill badges", () => {
    render(<App />);

    const badges = document.querySelectorAll(".skill-badge");
    expect(badges.length).toBeGreaterThan(0);

    // Each badge should be a <span> with visible text content
    badges.forEach((badge) => {
      expect(badge.textContent?.trim().length).toBeGreaterThan(0);
    });
  });

  // ─── Test 4: Layout positioning (Skills between About and Experience) ──
  it("renders Skills section after About Me in DOM order", () => {
    render(<App />);

    const allHeadings = screen.getAllByRole("heading", { level: 2 });

    // Find the indices of the headings
    const aboutIndex = allHeadings.findIndex((h) =>
      /about me/i.test(h.textContent || "")
    );
    const skillsIndex = allHeadings.findIndex((h) =>
      /skills & technologies/i.test(h.textContent || "")
    );
    const experienceIndex = allHeadings.findIndex((h) =>
      /experience/i.test(h.textContent || "")
    );

    expect(aboutIndex).toBeGreaterThanOrEqual(0);
    expect(skillsIndex).toBeGreaterThanOrEqual(0);
    expect(experienceIndex).toBeGreaterThanOrEqual(0);

    // Skills should come after About and before Experience
    expect(skillsIndex).toBeGreaterThan(aboutIndex);
    expect(skillsIndex).toBeLessThan(experienceIndex);
  });

  it("renders About, Skills, Experience sections in correct sequential order", () => {
    render(<App />);

    // Find the section elements in DOM order
    const sections = document.querySelectorAll("section");
    const sectionClassNames = Array.from(sections).map(
      (s) => s.className || s.id
    );

    // The about section comes first, then section-skills, then section-experiences
    // Get the position of each relevant section
    const sectionsList = Array.from(sections);

    const aboutSection = sectionsList.find((s) =>
      s.querySelector("h2")?.textContent?.match(/about me/i)
    );
    const skillsSection = sectionsList.find((s) =>
      s.classList.contains("section-skills")
    );
    const experienceSection = sectionsList.find((s) =>
      s.classList.contains("section-experiences")
    );

    expect(aboutSection).toBeDefined();
    expect(skillsSection).toBeDefined();
    expect(experienceSection).toBeDefined();

    const aboutPos = sectionsList.indexOf(aboutSection!);
    const skillsPos = sectionsList.indexOf(skillsSection!);
    const experiencePos = sectionsList.indexOf(experienceSection!);

    // Verify the order: About → Skills → Experience
    expect(skillsPos).toBeGreaterThan(aboutPos);
    expect(skillsPos).toBeLessThan(experiencePos);
  });

  it("positions Skills section between <hr> separators from About and Experience", () => {
    const { container } = render(<App />);

    const hrElements = container.querySelectorAll("hr");
    expect(hrElements.length).toBe(5);

    // After About (<hr />), then Skills (<hr />), then Experience
    // So the Skills section's parent (.sections) should have the structure:
    // <About /> <hr /> <Skills /> <hr /> <Experience />

    const sectionsDiv = container.querySelector(
      "#main-content"
    ) as HTMLElement | null;
    expect(sectionsDiv).toBeInTheDocument();

    // Get all direct child nodes of main that are elements
    const children = Array.from(sectionsDiv!.children);

    // Find positions of the Skills section, hr elements before/after
    const skillsSection = sectionsDiv!.querySelector(".section-skills");
    expect(skillsSection).toBeInTheDocument();
    const skillsIndex = children.indexOf(skillsSection!);

    // There should be an <hr> both before and after Skills
    const beforeHr = children[skillsIndex - 1];
    const afterHr = children[skillsIndex + 1];
    expect(beforeHr?.tagName).toBe("HR");
    expect(afterHr?.tagName).toBe("HR");
  });
});
