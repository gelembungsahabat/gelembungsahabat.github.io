import "./section-bar.css";
export const SectionBar = (props: { section: number }) => {
  const { section } = props;
  console.log(section, "section1");
  return (
    <div className="section-bar">
      <div hidden={section === 0}>1</div>
      <div hidden={section === 1}>2</div>
      <div hidden={section === 2}>3</div>
    </div>
  );
};
