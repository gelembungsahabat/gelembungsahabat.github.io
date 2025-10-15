import "./styles/articles.css";
import { articleListData } from "../../data";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export function Articles() {
  const [pagination, setPagination] = useState(0);
  return (
    <section className="articles">
      <div className="articles-container">
        <button
          aria-label="Previous article"
          className="transparent-button"
          style={{ display: "block", margin: "auto" }}
          disabled={pagination === 0}
          onClick={() =>
            setPagination((prev) => {
              if (prev > 0) {
                return prev - 1;
              } else {
                return prev;
              }
            })
          }
        >
          <IoIosArrowUp />
        </button>
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
          .slice(0 + pagination, 4 + pagination)}
        <button
          aria-label="Next article"
          className="transparent-button"
          style={{ display: "block", margin: "auto" }}
          disabled={pagination === 4}
          onClick={() =>
            setPagination((prev) => {
              if (prev < 4) {
                return prev + 1;
              } else {
                return prev;
              }
            })
          }
        >
          <IoIosArrowDown />
        </button>
      </div>
    </section>
  );
}
