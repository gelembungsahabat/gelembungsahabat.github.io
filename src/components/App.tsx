import "./App.css";
import { Articles, Hero, About, Experience, Skills, Contact } from "./sections";
import { Portfolio } from "./sections/portfolio-list";

function App() {
  return (
    <div className="homepage">
      <header className="hero">
        <Hero />
      </header>
      <main id="main-content" className="sections">
        <About />
        <hr />
        <Skills />
        <hr />
        <Experience />
        <hr />
        <Portfolio />
        <hr />
        <Articles />
        <hr />
        <Contact />
      </main>
    </div>
  );
}

export default App;
