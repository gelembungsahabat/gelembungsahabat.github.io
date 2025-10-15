import "../styles/article.css";
import { CodeBlock } from "../../code-block";
import { ArticleWrapper } from "./article-wrapper";
export function GitSetupArticle() {
  return (
    <ArticleWrapper>
      <h1>Git Setup</h1>
      <p>
        Git is the most important things on software development these days.
        Because of it, you need to learn how to use Git properly.
      </p>
      <h2>Install Git</h2>
      <p>
        You can go to terminal (on linux or windows with wsl), and run this
        command:{" "}
      </p>
      <CodeBlock consoleName="Terminal">
        <code>sudo apt install git</code>
      </CodeBlock>
      <h2>What's next?</h2>
      <p>
        After installing your Git locally, we need to integrate our local git to
        <code> remote git</code> (like github, bitbucket, gitlab, etc.). Before
        that, you can setup <code>git global name and email</code> from your
        remote git account to identify who is it.
      </p>
      <CodeBlock consoleName="Terminal">
        <>
          git config --global user.email your-email@company.ccc <br />
          git config --global user.name 'your name'
        </>
      </CodeBlock>
      <p>
        Next, you can create repository on your github / gitlab account, then
        inside your Project Directory, run this command below (do NOT include
        these curly branches):
      </p>
      <CodeBlock consoleName="Terminal">
        <>
          cd &#123;your-project-directory&#125; <br />
          git init git add README.md git commit -m "first commit" <br />
          git branch -M main <br />
          git remote add origin
          git@github.com:&#123;your-name&#125;/&#123;your-repository&#125;.git{" "}
          <br />
          git push -u origin main
        </>
      </CodeBlock>
      <p>
        Make sure you've already set SSH up to your github or gitlab account.
        You can check this <a href="/ssh-setup">SSH Setup article</a> for the
        tutorial.
      </p>
      <h2>That's it</h2>
      <p>you've already set your local git with your local machine</p>
    </ArticleWrapper>
  );
}
