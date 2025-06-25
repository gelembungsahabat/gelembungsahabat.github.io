import "./section-bar.css";

const Bar = (props: {
  section: number;
  currentSection: number;
  setCurrentSection: (section: number) => void;
}) => {
  const { section, currentSection, setCurrentSection } = props;
  return (
    <div
      className={
        section === currentSection ? "section-bar-active" : "section-bar"
      }
      onClick={() => setCurrentSection(section)}
    ></div>
  );
};

export const SectionBar = (props: {
  currentSection: number;
  setCurrentSection: (section: number) => void;
}) => {
  const { currentSection, setCurrentSection } = props;
  return (
    <div className="section-bar-wrapper">
      <Bar
        section={0}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Bar
        section={1}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Bar
        section={2}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Bar
        section={3}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </div>
  );
};
