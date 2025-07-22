import "./styles/articles.css";
import { articleListData } from "../../data";
import { Link } from "react-router-dom";

export function Articles() {
  return (
    <section className="articles">
      <h1>Tech Articles</h1>
      <div className="articles-container">
        {articleListData.map((val, idx) => {
          return (
            <div className="article-card" key={idx}>
              <Link to="/install-wsl">
                <div className="content-wrapper">
                  <h1 className="title">{val.title}</h1>
                  <h2 className="subtitle">{val.subtitle}</h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
