import "./styles/portfolio.css";
import { portfolioListData } from "../../data";

export function Portfolio() {
  return (
    <section>
      <div className="portfolio-container" tabIndex={0}>
        <h1>Portfolio - Personal Project</h1>
        {portfolioListData
          .map((val, idx) => {
            return (
              <a href={val.href} className="article-card" key={idx}>
                <div className="content-wrapper">
                  <h1 className="title">{val.title}</h1>
                  <h2 className="subtitle">{val.subtitle}</h2>
                </div>
              </a>
            );
          })
          .slice(0, 5)}
      </div>
    </section>
  );
}
