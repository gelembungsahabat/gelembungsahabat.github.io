export type Skill = {
  name: string;
  proficiency: "Expert" | "Advanced" | "Intermediate";
  yearsOfExperience?: number;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", proficiency: "Expert", yearsOfExperience: 4 },
      { name: "TypeScript", proficiency: "Advanced", yearsOfExperience: 3 },
      { name: "JavaScript (ES6+)", proficiency: "Expert", yearsOfExperience: 5 },
      { name: "HTML5 & CSS3", proficiency: "Expert", yearsOfExperience: 5 },
      { name: "Next.js", proficiency: "Advanced", yearsOfExperience: 2 },
      { name: "Astro", proficiency: "Intermediate", yearsOfExperience: 1 },
      { name: "HTMX", proficiency: "Intermediate", yearsOfExperience: 1 },
      { name: "React Testing Library", proficiency: "Advanced", yearsOfExperience: 2 }
    ]
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Go", proficiency: "Intermediate", yearsOfExperience: 1 },
      { name: "Node.js", proficiency: "Intermediate", yearsOfExperience: 2 },
      { name: "RESTful APIs", proficiency: "Advanced", yearsOfExperience: 4 }
    ]
  },
  {
    category: "Tools & Practices",
    skills: [
      { name: "Git & GitHub", proficiency: "Expert", yearsOfExperience: 5 },
      { name: "npm/pnpm", proficiency: "Advanced", yearsOfExperience: 4 },
      { name: "Vitest", proficiency: "Advanced", yearsOfExperience: 2 },
      { name: "Vercel", proficiency: "Advanced", yearsOfExperience: 3 },
      { name: "Responsive Design", proficiency: "Expert", yearsOfExperience: 5 },
      { name: "Performance Optimization", proficiency: "Advanced", yearsOfExperience: 3 }
    ]
  },
  {
    category: "Concepts & Methodologies",
    skills: [
      { name: "Web Accessibility (WCAG)", proficiency: "Advanced" },
      { name: "Component-Driven Development", proficiency: "Expert" },
      { name: "Agile/Scrum", proficiency: "Advanced" },
      { name: "Code Review", proficiency: "Advanced" }
    ]
  }
];
