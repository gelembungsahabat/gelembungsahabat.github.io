import "./section-bar.css";

const Bar = (props: { section: number; recentSection: number }) => {
  const { section, recentSection } = props;
  return (
    <div
      className={
        section === recentSection ? "section-bar-active" : "section-bar"
      }
    ></div>
  );
};

export const SectionBar = (props: { section: number }) => {
  const { section } = props;
  return (
    <div className="section-bar-wrapper">
      <Bar section={0} recentSection={section} />
      <Bar section={1} recentSection={section} />
      <Bar section={2} recentSection={section} />
    </div>
  );
};
