import "./styles/experience.css";
import { experienceData } from "../../data";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

export function Experience() {
  return (
    <section className="section-experiences" tabIndex={0}>
      <h2 className="section-title">Experience</h2>

      <div className="experiences-list">
        {experienceData.map((exp, index) => (
          <article key={index} className="experience-card">
            <div className="experience-header">
              <div className="experience-title-group">
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">
                  <FaBriefcase /> {exp.company}
                </p>
              </div>

              <div className="experience-meta">
                <span className="experience-date">
                  <FaCalendar /> {exp.date}
                </span>
                {exp.location && (
                  <span className="experience-location">
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                )}
                <span className="experience-type">{exp.type}</span>
              </div>
            </div>

            {exp.responsibilities && exp.responsibilities.length > 0 && (
              <div className="experience-section">
                <h4>Responsibilities</h4>
                <ul>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="experience-section">
              <h4>Key Achievements</h4>
              <ul className="achievements-list">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div className="experience-technologies">
              <h4>Technologies</h4>
              <div className="tech-stack">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {exp.highlights && exp.highlights.length > 0 && (
              <div className="experience-highlights">
                {exp.highlights.map((highlight, i) => (
                  <p key={i} className="highlight-text">
                    {highlight}
                  </p>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
