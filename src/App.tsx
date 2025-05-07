import "./App.css";
import { type WheelEvent, useState, useEffect } from "react";
import { IoWarningOutline } from "react-icons/io5";
import { SectionBar } from "./components/section-bar";

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sections[currentSection].scrollIntoView({ behavior: "smooth" });
  }, [currentSection]);

  const scroll = (e: WheelEvent<Element>) => {
    if (e.deltaY >= 1 && currentSection < 2) {
      setCurrentSection((prevState) => prevState + 1);
    }
    if (e.deltaY <= 1 && currentSection >= 1) {
      setCurrentSection((prevState) => prevState - 1);
    }
  };

  return (
    <>
      <div className="homepage" onWheel={scroll}>
        <section>
          <div className="flex-container">
            <div>
              <h1>Hi, I'm Muhammad Wildan</h1>
              <h2>Welcome to my personal blog!</h2>
              <div className="warning-container">
                <IoWarningOutline />
                <p>This Website is under development</p>
              </div>
            </div>
            <div className="card-container">
              <a
                href="https://github.com/gelembungsahabat?tab=repositories"
                className="card has-bg-img project-list-img"
              >
                <div className="card-title-container">
                  <span className="card-title">Project List</span>
                </div>
              </a>
              <a className="card has-bg-img anime-recommendation-img">
                <div className="card-title-container">
                  <span className="card-title">Anime Recommendation</span>
                </div>
              </a>
              <a className="card has-bg-img fun-things-img">
                <div className="card-title-container">
                  <span className="card-title">Fun Things</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="flex-container">
            <div>
              <h1>Second Section</h1>
              <h2>Raw Second Section</h2>
              <div className="warning-container">
                <IoWarningOutline />
                <p>This Website is under development</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex-container">
            <div>
              <h1>Third Section</h1>
              <h2>Raw Third Section</h2>
              <div className="warning-container">
                <IoWarningOutline />
                <p>This Website is under development</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <SectionBar currentSection={currentSection} />
    </>
  );
}

export default App;
