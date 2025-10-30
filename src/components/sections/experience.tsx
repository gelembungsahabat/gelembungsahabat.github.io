import "./styles/experience.css";

export function Experience() {
  return (
    <section className="experience" tabIndex={0}>
      <div className="experience__container">
        <h1>Experiences</h1>
        <ul className="experience-list">
          <li>
            <span className="date">Apr 2021 – Mar 2025</span>
            <span className="role">
              Product Engineer — <span className="company">Zero One Group</span>
            </span>
          </li>
          <li>
            <span className="date">Jan 2021 – Apr 2021</span>
            <span className="role">
              Front-End Developer —{" "}
              <span className="company">Aegis E-Sport Academy</span>
            </span>
          </li>
          <li>
            <span className="date">Nov 2020 – Dec 2020</span>
            <span className="role">
              Web Developer — <span className="company">Nanas Media</span>
            </span>
          </li>
          <li>
            <span className="date">Dec 2019 – Mar 2020</span>
            <span className="role">
              Internship —{" "}
              <span className="company">Aegis E-Sport Academy</span>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
