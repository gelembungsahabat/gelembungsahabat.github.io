import "./App.css";
import { Articles, Hero, About, Experience } from "./sections";

function App() {
  return (
    <div className="homepage">
      <div className="hero">
        <Hero />
      </div>
      <div className="sections">
        <About />
        <Experience />
        <Articles />
      </div>
    </div>
  );
}

export default App;
