import "./styles/articles.css";
import { articleListData } from "../../data";
// import { FaArrowRight } from "react-icons/fa";

export function Articles() {
  return (
    <section>
      <div className="articles-container" tabIndex={0}>
        <h1>Article</h1>
        {articleListData
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
          .slice(0, 1)}
        {/* <button aria-label="Next article" className="more-articles-button">
          More Articles Here <FaArrowRight size={"0.7rem"} />
        </button> */}
      </div>
    </section>
  );
}
