import "./App.css";
import { Articles, Hero, About, Experience } from "./sections";

function App() {
  return (
    <div className="homepage">
      <header className="hero">
        <Hero />
      </header>
      <main className="sections">
        <About />
        <Experience />
        <Articles />
      </main>
    </div>
  );
}

export default App;
