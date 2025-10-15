import "../styles/article.css";
import { CodeBlock } from "../../code-block";
import { ArticleWrapper } from "./article-wrapper";
export function SSHSetupArticle() {
  return (
    <ArticleWrapper>
      <h1>SSH Setup</h1>
      <p>
        SSH setup for Git remote is one of important things on software
        development these days. Because of it, you need to learn how to setup
        SSH properly.
      </p>
      <h2>Generate SSH Key</h2>
      <p>
        You can go to terminal (on linux or windows with wsl), and run this
        command:{" "}
      </p>
      <CodeBlock consoleName="Terminal">
        <code>ssh keygen</code>
      </CodeBlock>
      <h2>What's next?</h2>
      <div>
        You can look at their documentation about setting these up on{" "}
        <a href="https://docs.github.com/en/enterprise-cloud@latest/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account">
          github docs{" "}
        </a>
        or{" "}
        <a href="https://docs.gitlab.com/user/ssh/#add-an-ssh-key-to-your-gitlab-account">
          {" "}
          gitlab docs
        </a>
        , because something will changed along with time.
      </div>
    </ArticleWrapper>
  );
}
