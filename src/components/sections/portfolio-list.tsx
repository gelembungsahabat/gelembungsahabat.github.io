import "./styles/portfolio.css";
import { portfolioListData } from "../../data";

export function Portfolio() {
  return (
    <section>
      <div className="portfolio-container" tabIndex={0}>
        <h2>Portfolio - Personal Project</h2>
        {portfolioListData
          .map((val, idx) => {
            return (
              <a href={val.href} className="article-card" key={idx}>
                <div className="content-wrapper">
                  <h3>{val.title}</h3>
                  <h4>{val.subtitle}</h4>
                </div>
              </a>
            );
          })
          .slice(0, 5)}
      </div>
    </section>
  );
}
