import { type JSX } from "react";
import "../styles/article.css";

interface ArticleWrapperData {
  children: JSX.Element[];
}

export const ArticleWrapper = (props: ArticleWrapperData) => {
  return (
    <div className="content-wrapper">
      <a href="/">← Back to Home</a>
      {props.children}
    </div>
  );
};
