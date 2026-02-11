import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import "./styles/hero.css";

export function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="header">
        <div className="hero-header">
          <h1 className="greeting">Muhammad Wildan</h1>
          <h2 className="hero-lead">
            Frontend Engineer | React & TypeScript Specialist
          </h2>
          <p className="hero-tagline">
            4 years building scalable, accessible web applications with modern
            JavaScript frameworks
          </p>

          <div className="hero-badges">
            <span className="availability-badge">Open to Opportunities</span>
            <span className="location-badge">Indonesia</span>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value">4+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">15+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">React</span>
            <span className="stat-label">Core Expertise</span>
          </div>
        </div>

        <div className="social-icons" aria-label="Social Media Links">
          <a
            href="https://github.com/gelembungsahabat"
            className="social-icon-link"
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/gelembungsahabat/"
            className="social-icon-link"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://medium.com/@gelembungsahabat"
            className="social-icon-link"
            aria-label="Medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMedium />
            <span>Medium</span>
          </a>
        </div>
      </div>
    </section>
  );
}
