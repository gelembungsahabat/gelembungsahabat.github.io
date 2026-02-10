export type ExperienceData = {
  date: string;
  role: string;
  company: string;
  location?: string;
  type: "Full-time" | "Contract" | "Internship";
  responsibilities?: string[];
  achievements: string[];
  technologies: string[];
  highlights?: string[];
};

export const experienceData: ExperienceData[] = [
  {
    date: "April 2021 – March 2025",
    role: "Product Engineer",
    company: "Zero One Group",
    location: "Indonesia",
    type: "Full-time",
    responsibilities: [
      "Developed and maintained internal dashboards and web applications",
      "Collaborated with backend engineers on API integration and data flows",
      "Led frontend architecture decisions for new features and improvements",
      "Participated in code reviews and mentored junior developers"
    ],
    achievements: [
      "Built multiple internal tools using React and TypeScript, streamlining workflow efficiency across teams",
      "Improved application performance through code optimization, lazy loading, and modern frontend practices",
      "Implemented HTMX for progressive enhancement, reducing JavaScript complexity while maintaining interactivity",
      "Enhanced application quality by implementing comprehensive testing with Vitest and React Testing Library",
      "Mentored junior developers on React, TypeScript, and frontend best practices"
    ],
    technologies: ["React", "TypeScript", "HTMX", "Go", "JavaScript", "HTML/CSS", "Vitest"],
    highlights: [
      "Led transition from vanilla JavaScript to React + TypeScript architecture",
      "Implemented accessibility improvements achieving WCAG AA compliance"
    ]
  },
  {
    date: "January 2021 – April 2021",
    role: "Frontend Developer",
    company: "Aegis E-Sport Academy",
    location: "Indonesia",
    type: "Full-time",
    responsibilities: [
      "Developed responsive landing pages and marketing websites",
      "Implemented UI/UX designs from Figma mockups to production code",
      "Ensured cross-browser compatibility and mobile responsiveness"
    ],
    achievements: [
      "Built responsive landing pages with mobile-first approach achieving excellent user experience",
      "Implemented pixel-perfect designs with high design fidelity from Figma mockups",
      "Delivered projects on time with clean, maintainable code"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Figma", "Responsive Design"],
    highlights: ["Focused on pixel-perfect implementation and cross-browser compatibility"]
  },
  {
    date: "November 2020 – December 2020",
    role: "Web Developer",
    company: "Nanas Media",
    location: "Indonesia",
    type: "Contract",
    responsibilities: [
      "Built custom WordPress websites for clients",
      "Implemented responsive designs and custom features",
      "Customized WordPress themes to meet client specifications"
    ],
    achievements: [
      "Delivered multiple client projects on time and within budget",
      "Customized WordPress themes achieving high client satisfaction",
      "Implemented responsive designs ensuring mobile compatibility"
    ],
    technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
    highlights: ["Rapid project delivery and client-focused development"]
  },
  {
    date: "December 2019 – March 2020",
    role: "Internship",
    company: "Aegis E-Sport Academy",
    location: "Indonesia",
    type: "Internship",
    responsibilities: [
      "Assisted in frontend development tasks",
      "Learned web development fundamentals and best practices",
      "Collaborated with development team on various projects"
    ],
    achievements: [
      "Completed multiple web development projects during internship",
      "Gained foundational experience in HTML, CSS, and JavaScript",
      "Demonstrated strong learning ability and adaptability"
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    highlights: ["First professional exposure to web development"]
  }
];
