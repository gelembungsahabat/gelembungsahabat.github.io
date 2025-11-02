import { FaGithub, FaLinkedin, FaInstagram, FaMedium } from "react-icons/fa";
import "./styles/hero.css";

export function Hero() {
  return (
    <section className="hero-wrapper" tabIndex={0}>
      <div className="header">
        <h1 className="greeting">Hi, I'm Muhammad Wildan</h1>
        <h2>
          Software Engineer specializing in Front-End — make complicated things
          simple.
        </h2>
        <div className="icons" aria-label="Social Media Icons">
          <a
            href="https://github.com/gelembungsahabat"
            className="icons__link"
            aria-label="Github"
          >
            <FaGithub style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/gelembungsahabat/"
            className="icons__link"
            aria-label="LinkedIn"
          >
            <FaLinkedin style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }} />
          </a>
          <a
            href="https://medium.com/@gelembungsahabat"
            className="icons__link"
            aria-label="Medium"
          >
            <FaMedium style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }} />
          </a>
        </div>
      </div>
    </section>
  );
}
