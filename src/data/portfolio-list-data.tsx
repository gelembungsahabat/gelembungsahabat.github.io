export type PortfolioListData = {
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  achievements?: string[];
  imgUrl: string;
  liveUrl: string;
  githubUrl?: string;
  featured?: boolean;
};

export const portfolioListData: PortfolioListData[] = [
  {
    title: "Anime Search Application",
    subtitle: "Real-time anime database search with advanced filtering",
    description:
      "Built a responsive anime search application using the JikanAPI to practice API integration and state management. Features include real-time search, detailed anime information pages with ratings, and a clean, mobile-first interface that provides seamless browsing experience.",
    techStack: ["React", "TypeScript", "JikanAPI", "CSS3", "Vercel"],
    achievements: [
      "Implemented real-time search with optimized API calls",
      "Responsive design supporting mobile-first approach",
      "Clean UI showcasing anime data with ratings and details",
    ],
    imgUrl: "/images/anime-search-app.png",
    liveUrl: "https://anime-search-app-omega.vercel.app/",
    githubUrl: "https://github.com/gelembungsahabat/anime-search-app",
    featured: true,
  },
  {
    title: "GitHub Pages Portfolio v1",
    subtitle: "First portfolio website with fullpage.js-style navigation",
    description:
      "Initial portfolio website built to showcase projects and establish online presence. Features fullpage.js-inspired fullscreen section scrolling, clean design, and fast loading times. Focused on accessibility and smooth user experience with section-based navigation.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Fullpage.js", "Vercel"],
    achievements: [
      "Implemented smooth fullpage scrolling navigation",
      "Fast page load time with optimized assets",
      "Fully responsive across all device sizes",
    ],
    imgUrl: "/images/portfolio-v1.png",
    liveUrl: "https://gelembungsahabat-github-pages-v1.vercel.app/",
    githubUrl: "https://github.com/gelembungsahabat/github-pages-v1",
    featured: false,
  },
  {
    title: "Otaku Website Portfolio",
    subtitle: "Modern portfolio with anime aesthetic using Next.js",
    description:
      "Portfolio website combining professional web development with anime-inspired design. Built with Next.js for optimized performance, server-side rendering, and modern React patterns. Features dynamic routing, image optimization, and a unique visual identity.",
    techStack: ["Next.js", "React", "TypeScript", "CSS3", "Vercel"],
    achievements: [
      "Server-side rendering for optimal SEO",
      "Image optimization with Next.js Image component",
      "Dynamic routing for smooth navigation",
    ],
    imgUrl: "/images/otaku-website.png",
    liveUrl: "https://anime-page-portfolio.vercel.app/",
    githubUrl: "https://github.com/gelembungsahabat/otaku-portfolio",
    featured: true,
  },
];
