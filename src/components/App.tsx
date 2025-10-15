import "./App.css";
import React, {
  type WheelEvent,
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { Articles, Hero, About } from "./sections";

function App() {
  return (
    <div className="homepage">
      <div className="hero">
        <Hero />
      </div>
      <div className="sections">
        <About />
        <Articles />
      </div>
    </div>
  );
}

export default App;
