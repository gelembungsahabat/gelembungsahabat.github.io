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
            <Link
              to="/install-wsl"
              target="_blank"
              className="article-card"
              key={idx}
            >
              <div className="content-wrapper">
                <h1 className="title">{val.title}</h1>
                <h2 className="subtitle">{val.subtitle}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
