import "./App.css";
import { type WheelEvent, useState, useEffect } from "react";
import { SectionBar } from "./components/section-bar";
import { Hero } from "./components/sections/hero";
import { AnimeRecommendation } from "./components/sections/anime-recommendation";
import { FunThings } from "./components/sections/hiragana-quiz";
import { usePreventMousewheelZoom } from "./hooks";

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

    // Arrow key scrolling
    const onKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp"].includes(e.code) && currentSection >= 1) {
        e.preventDefault();
        setCurrentSection((prevState) => prevState - 1);
      }
      if (["ArrowDown"].includes(e.code) && currentSection < 2) {
        e.preventDefault();
        setCurrentSection((prevState) => prevState + 1);
      }
    };
    window.addEventListener("keydown", onKeyDown, false);

    // Scroll to section
    setTimeout(() => {
      sections[currentSection].scrollIntoView({ behavior: "smooth" });
    }, 100);

    // Prevent KeyDown being triggered 2 times
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentSection, setCurrentSection]);

  usePreventMousewheelZoom();

  return (
    <>
      <div className="homepage" onWheel={scroll}>
        <Hero setCurrentSection={setCurrentSection} />
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
