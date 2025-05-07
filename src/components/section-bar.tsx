import "./section-bar.css";

const Bar = (props: { section: number; currentSection: number }) => {
  const { section, currentSection } = props;
  return (
    <div
      className={
        section === currentSection ? "section-bar-active" : "section-bar"
      }
    ></div>
  );
};

export const SectionBar = (props: { currentSection: number }) => {
  const { currentSection } = props;
  return (
    <div className="section-bar-wrapper">
      <Bar section={0} currentSection={currentSection} />
      <Bar section={1} currentSection={currentSection} />
      <Bar section={2} currentSection={currentSection} />
    </div>
  );
};
