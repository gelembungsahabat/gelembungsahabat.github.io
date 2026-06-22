import { skillsData } from "../../data";
import "./styles/skills.css";

export function Skills() {
  return (
    <section className="section-skills">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-content">
        {skillsData.map((category) => (
          <p key={category.category}>
            <strong>{category.category}:</strong>{" "}
            {category.skills.map((s) => s.name).join(", ")}.
          </p>
        ))}
      </div>
    </section>
  );
}
