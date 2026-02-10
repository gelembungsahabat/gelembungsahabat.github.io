import "./App.css";
import { Articles, Hero, About, Experience, Skills, Contact } from "./sections";
import { Portfolio } from "./sections/portfolio-list";

function App() {
  return (
    <div className="homepage">
      <header className="hero">
        <Hero />
      </header>
      <main className="sections">
        <About />
        <hr style={{ opacity: "35%" }} />
        <Skills />
        <hr style={{ opacity: "35%" }} />
        <Experience />
        <hr style={{ opacity: "35%" }} />
        <Portfolio />
        <hr style={{ opacity: "35%" }} />
        <Articles />
        <hr style={{ opacity: "35%" }} />
        <Contact />
      </main>
    </div>
  );
}

export default App;
