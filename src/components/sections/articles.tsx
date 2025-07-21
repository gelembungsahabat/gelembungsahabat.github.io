import "./styles/articles.css";
import { articleListData } from "../../data";

export function Articles() {
  return (
    <section className="articles">
      <h1>Articles Section</h1>
      <div className="articles-container">
        {articleListData.map((val, idx) => {
          return (
            <div className="article-card" key={idx}>
              <h2>{val.title}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
}
