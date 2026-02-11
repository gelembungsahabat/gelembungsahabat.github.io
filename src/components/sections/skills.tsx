import { skillsData } from "../../data";
import "./styles/skills.css";

export function Skills() {
  return (
    <section className="section-skills">
      <h2 className="section-title">Skills & Technologies</h2>

      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.category}</h3>

            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span
                      className={`skill-proficiency proficiency-${skill.proficiency.toLowerCase()}`}
                    >
                      {skill.proficiency}
                    </span>
                  </div>

                  {skill.yearsOfExperience && (
                    <span className="skill-years">
                      {skill.yearsOfExperience}+{" "}
                      {skill.yearsOfExperience === 1 ? "year" : "years"}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
