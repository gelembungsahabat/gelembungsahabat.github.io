import { skillsData } from "../../data";
import { FaCode, FaServer, FaTools, FaLightbulb } from "react-icons/fa";
import "./styles/skills.css";

const categoryIcons: Record<string, React.ReactNode> = {
  "Frontend Development": <FaCode />,
  "Backend & APIs": <FaServer />,
  "Tools & Practices": <FaTools />,
  "Concepts & Methodologies": <FaLightbulb />,
};

export function Skills() {
  return (
    <section className="section-skills">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-content">
        {skillsData.map((category) => (
          <div key={category.category} className="skill-category">
            <h3 className="skill-category-title">
              <span className="skill-category-icon" aria-hidden="true">
                {categoryIcons[category.category] || null}
              </span>
              {category.category}
            </h3>
            <div className="skill-badges">
              {category.skills.map((skill) => (
                <span key={skill.name} className="skill-badge">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}