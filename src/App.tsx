import "./App.css";
import { animateScroll } from "react-scroll";
import { type WheelEvent } from "react";
import { IoWarningOutline } from "react-icons/io5";

function App() {
  const options = {
    duration: 400,
    smooth: true,
  };
  const handleScroll = (event: WheelEvent<HTMLDivElement>) => {
    animateScroll.scrollTo(60, options);
    console.log(event.deltaY);
  };
  return (
    <div className="homepage" onWheel={handleScroll}>
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
    </div>
  );
}

export default App;
