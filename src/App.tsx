import "./App.css";
import { type WheelEvent, useState, useEffect } from "react";
import { SectionBar } from "./components/section-bar";
import { Hero } from "./components/sections/hero";
import { AnimeRecommendation } from "./components/sections/anime-recommendation";
import { FunThings } from "./components/sections/fun-things";
// import { Articles } from "./components/sections/articles";
import { usePreventKeyboardScrolling, usePreventMousewheelZoom } from "./hooks";

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  const scroll = (e: WheelEvent<Element>) => {
    if (e.deltaY >= 1 && currentSection < 2) {
      setCurrentSection((prevState) => prevState + 1);
    }
    if (e.deltaY <= 1 && currentSection >= 1) {
      setCurrentSection((prevState) => prevState - 1);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    setTimeout(() => {
      sections[currentSection].scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [currentSection]);

  usePreventMousewheelZoom();
  usePreventKeyboardScrolling();

  return (
    <>
      <div className="homepage" onWheel={scroll}>
        <Hero setCurrentSection={setCurrentSection} />
        {/* <Articles /> */}
        <AnimeRecommendation />
        <FunThings />
      </div>
      <SectionBar
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </>
  );
}

export default App;
