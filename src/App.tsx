import "./App.css";
import { type WheelEvent, useState, useEffect } from "react";
import { SectionBar } from "./components/section-bar";
import { Hero } from "./components/sections/hero";
import { AnimeRecommendation } from "./components/sections/anime-recommendation";
import { FunThings } from "./components/sections/fun-things";

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  // ScrollWheel to 'section' functionality
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    setTimeout(() => {
      sections[currentSection].scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [currentSection]);

  const scroll = (e: WheelEvent<Element>) => {
    if (e.deltaY >= 1 && currentSection < 2) {
      setCurrentSection((prevState) => prevState + 1);
    }
    if (e.deltaY <= 1 && currentSection >= 1) {
      setCurrentSection((prevState) => prevState - 1);
    }
  };

  // Prevent (ctrl + scroll) to zoom on browser
  useEffect(() => {
    const rootWrapper = document.getElementById("root");
    if (rootWrapper) {
      rootWrapper.addEventListener(
        "wheel",
        (event) => {
          if (event.ctrlKey) {
            event.preventDefault();
          }
        },
        true
      );
    }
  }, []);

  return (
    <>
      <div className="homepage" onWheel={scroll}>
        <Hero />
        <AnimeRecommendation />
        <FunThings />
      </div>
      <SectionBar currentSection={currentSection} />
    </>
  );
}

export default App;
