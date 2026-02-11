import "./styles/portfolio.css";
import { portfolioListData } from "../../data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export function Portfolio() {
  return (
    <section>
      <div className="portfolio-container">
        <h2>Portfolio - Personal Projects</h2>
        <div className="portfolio-grid">
          {portfolioListData
            .slice(0, 5)
            .map((project, idx) => {
              return (
                <article className="portfolio-card" key={idx}>
                  <div className="portfolio-image">
                    <img
                      src={project.imgUrl}
                      alt={`Screenshot of ${project.title} - ${project.subtitle}`}
                      loading="lazy"
                      width="800"
                      height="465"
                    />
                    {project.featured && (
                      <span className="featured-badge">Featured</span>
                    )}
                  </div>

                  <div className="portfolio-content">
                    <h3 className="portfolio-title">{project.title}</h3>
                    <p className="portfolio-subtitle">{project.subtitle}</p>

                    <div className="tech-stack">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="portfolio-description">{project.description}</p>

                    {project.achievements && (
                      <ul className="achievements-list">
                        {project.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    )}

                    <div className="portfolio-links">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="btn-secondary"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <FaGithub /> GitHub
                        </a>
                      )}
                      <a
                        href={project.liveUrl}
                        className="btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <FaExternalLinkAlt /> View Live
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
}
