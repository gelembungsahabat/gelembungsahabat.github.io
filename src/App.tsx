import "./App.css";
import { type WheelEvent, useState, useEffect, useRef } from "react";
import { SectionBar } from "./components/section-bar";
import {
  AnimeRecommendation,
  Articles,
  Hero,
  HiraganaQuiz,
} from "./components/sections";

import { usePreventMousewheelZoom } from "./hooks";

function App() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const startScreenYRef = useRef(0);
  const maxSectionIndex = 3;

  const scroll = (e: WheelEvent<Element>) => {
    if (e.deltaY >= 1 && currentSectionIndex < maxSectionIndex) {
      setCurrentSectionIndex((prevState) => prevState + 1);
    }
    if (e.deltaY <= 1 && currentSectionIndex >= 1) {
      setCurrentSectionIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startScreenYRef.current = e.touches[0].screenY;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const endScreenY = e.changedTouches[0].screenY;
    const startScreenY = startScreenYRef.current;
    if (startScreenY < endScreenY && currentSectionIndex >= 1) {
      setCurrentSectionIndex((prevState) => prevState - 1);
    }
    if (startScreenY > endScreenY && currentSectionIndex < maxSectionIndex) {
      setCurrentSectionIndex((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    // Arrow key scrolling
    const onKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp"].includes(e.code) && currentSectionIndex >= 1) {
        e.preventDefault();
        setCurrentSectionIndex((prevState) => prevState - 1);
      }
      if (
        ["ArrowDown"].includes(e.code) &&
        currentSectionIndex < maxSectionIndex
      ) {
        e.preventDefault();
        setCurrentSectionIndex((prevState) => prevState + 1);
      }
    };
    window.addEventListener("keydown", onKeyDown, false);

    // Scroll to section
    setTimeout(() => {
      sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
    }, 100);

    // Prevent KeyDown being triggered 2 times
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentSectionIndex, setCurrentSectionIndex]);

  usePreventMousewheelZoom();

  return (
    <>
      <div
        className="homepage"
        onWheel={scroll}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Hero setCurrentSection={setCurrentSectionIndex} />
        <AnimeRecommendation />
        <HiraganaQuiz />
        <Articles />
      </div>
      <SectionBar
        currentSection={currentSectionIndex}
        setCurrentSection={setCurrentSectionIndex}
      />
    </>
  );
}

export default App;
