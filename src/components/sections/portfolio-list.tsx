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
                  <h2 className="title">{val.title}</h2>
                  <h3 className="subtitle">{val.subtitle}</h3>
                </div>
              </a>
            );
          })
          .slice(0, 5)}
      </div>
    </section>
  );
}
