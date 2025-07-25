import "./styles/articles.css";
import { IoWarningOutline } from "react-icons/io5";

export function Articles() {
  return (
    <section className="articles">
      <div className="articles-container">
        <div>
          <h1>Articles Section</h1>
          <h2>Raw Articles Section</h2>
          <div className="warning-container">
            <IoWarningOutline />
            <p>This Website is under development</p>
          </div>
        </div>
      </div>
    </section>
  );
}
