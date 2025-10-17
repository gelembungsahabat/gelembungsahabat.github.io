import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./styles/hero.css";

export function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="header">
        <h1>Hi, I'm Muhammad Wildan</h1>
        <h2>
          Software Engineer specializing in Front-End and Robotics — make
          complicated things simple.
        </h2>
        <div className="icons">
          <a
            href="https://github.com/gelembungsahabat"
            className="icons__link"
            aria-label="Github Wildan"
          >
            <FaGithub style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/gelembungsahabat/"
            className="icons__link"
            aria-label="LinkedIn Wildan"
          >
            <FaLinkedin style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }} />
          </a>
          <a
            href="https://www.instagram.com/gelembungsahabat_"
            className="icons__link"
            aria-label="Instagram Wildan"
          >
            <FaInstagram style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }} />
          </a>
        </div>
      </div>
    </section>
  );
}
