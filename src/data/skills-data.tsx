export type Skill = {
  name: string;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "JavaScript (ES6+)" },
      { name: "HTML5 & CSS3" },
      { name: "Next.js" },
      { name: "Astro" },
      { name: "HTMX" },
      { name: "React Testing Library" }
    ]
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Go" },
      { name: "Node.js" },
      { name: "RESTful APIs" }
    ]
  },
  {
    category: "Tools & Practices",
    skills: [
      { name: "Git & GitHub" },
      { name: "npm/pnpm" },
      { name: "Vitest" },
      { name: "Vercel" },
      { name: "Responsive Design" },
      { name: "Performance Optimization" }
    ]
  },
  {
    category: "Concepts & Methodologies",
    skills: [
      { name: "Web Accessibility (WCAG)" },
      { name: "Component-Driven Development" },
      { name: "Agile/Scrum" },
      { name: "Code Review" }
    ]
  }
];
