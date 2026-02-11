import "./styles/articles.css";
import { articleListData } from "../../data";
import { FaArrowRight } from "react-icons/fa";

export function Articles() {
  return (
    <section>
      <div className="articles-container">
        <h2>Articles</h2>
        <div className="articles-grid">
          {articleListData
            .slice(0, 4)
            .map((val, idx) => {
              return (
                <a href={val.href} className="article-card" key={idx}>
                  <div className="content-wrapper">
                    <h3>{val.title}</h3>
                    <h4>{val.subtitle}</h4>
                  </div>
                </a>
              );
            })}
        </div>
        {articleListData.length > 4 && (
          <div className="articles-footer">
            <a href="/articles" className="more-articles-button">
              View All Articles <FaArrowRight size={"0.7rem"} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
