import "./App.css";
import { type WheelEvent, useState, useEffect, useRef } from "react";
import { SectionBar } from "./components/section-bar";
import { Hero } from "./components/sections/hero";
import { AnimeRecommendation } from "./components/sections/anime-recommendation";
import { FunThings } from "./components/sections/hiragana-quiz";
import { usePreventMousewheelZoom } from "./hooks";

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const startScreenYRef = useRef(0);

  const scroll = (e: WheelEvent<Element>) => {
    if (e.deltaY >= 1 && currentSection < 2) {
      setCurrentSection((prevState) => prevState + 1);
    }
    if (e.deltaY <= 1 && currentSection >= 1) {
      setCurrentSection((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startScreenYRef.current = e.touches[0].screenY;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const endScreenY = e.changedTouches[0].screenY;
    const startScreenY = startScreenYRef.current;
    if (startScreenY < endScreenY && currentSection >= 1) {
      setCurrentSection((prevState) => prevState - 1);
    }
    if (startScreenY > endScreenY && currentSection < 2) {
      setCurrentSection((prevState) => prevState + 1);
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
      <div
        className="homepage"
        onWheel={scroll}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
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
