import "./styles/about.css";

export function About() {
  return (
    <section>
      <div className="container">
        <p className="about-lead">
          I’m a <strong>Software Engineer</strong> who loves turning ideas into
          interactive, scalable, and meaningful digital experiences.
        </p>

        <div className="about-content">
          <p>
            My journey began in <strong>Electrical Engineering</strong>, where I
            discovered how logic and creativity could blend through{" "}
            <strong>robotics</strong>. That curiosity soon grew into a passion
            for software, especially the front-end — where design meets
            functionality and every detail shapes how people feel when using a
            product.
          </p>

          <p>
            Since then, I’ve built and maintained applications with technologies
            like <code>ReactJS</code>, <code>TypeScript</code>,{" "}
            <code>HTMX</code>, and <code>Go</code>. At <em>Zero One Group</em>,
            I worked on internal dashboards and backend systems that improved
            performance, streamlined workflows, and supported real users every
            day.
          </p>

          <p>
            I believe great engineering is about{" "}
            <strong>clarity, collaboration, and care</strong> — writing code
            that not only works, but communicates intention and creates impact.
            When I’m not coding, you’ll probably find me exploring new tools,
            learning robotics concepts, or rethinking how technology can make
            life simpler.
          </p>
        </div>

        <p className="about-short">
          I build interactive, high-performance web apps that harmonize design
          and engineering.
        </p>
      </div>
    </section>
  );
}
