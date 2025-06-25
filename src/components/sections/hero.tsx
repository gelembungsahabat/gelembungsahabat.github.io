import "./styles/hero.css";

export function Hero(props: { setCurrentSection: (section: number) => void }) {
  const { setCurrentSection } = props;
  return (
    <section className="hero">
      <div className="hero-page-container">
        <div>
          <h1>Hi, I'm Muhammad Wildan</h1>
          <h2>Welcome to my personal blog!</h2>
        </div>
        <div className="card-container">
          <a
            className="card has-bg-img anime-recommendation-img"
            onClick={() => setCurrentSection(1)}
            tabIndex={0}
          >
            <div className="card-title-container">
              <span className="card-title">Anime Recommendation</span>
            </div>
          </a>
          <a
            className="card has-bg-img fun-things-img"
            onClick={() => setCurrentSection(2)}
            tabIndex={0}
          >
            <div className="card-title-container">
              <span className="card-title">Hiragana Quiz</span>
            </div>
          </a>
          <a
            onClick={() => setCurrentSection(3)}
            className="card has-bg-img project-list-img"
          >
            <div className="card-title-container">
              <span className="card-title">Tech Articles</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
