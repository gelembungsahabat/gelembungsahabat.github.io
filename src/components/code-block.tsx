import { type JSX } from "react";
import "./code-block.css";

interface CodeBarData {
  consoleName: string;
  children: JSX.Element;
}

export const CodeBlock = (props: CodeBarData) => {
  return (
    <div className="code-block">
      <div className="code-block-head">{props.consoleName}</div>
      <code className="code-block-content">{props.children}</code>
    </div>
  );
};
