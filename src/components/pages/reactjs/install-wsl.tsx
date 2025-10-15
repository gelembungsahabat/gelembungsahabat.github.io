import "../styles/article.css";
import { CodeBlock } from "../../code-block";
import { ArticleWrapper } from "./article-wrapper";
export function InstallWSLArticle() {
  return (
    <ArticleWrapper>
      <h1>Install WSL</h1>
      <p>
        Now developers can access the power of both Windows and Linux at the
        same time on a Windows machine. The Windows Subsystem for Linux (WSL)
        lets developers install a Linux distribution (such as Ubuntu, OpenSUSE,
        Kali, Debian, Arch Linux, etc) and use Linux applications, utilities,
        and Bash command-line tools directly on Windows, unmodified, without the
        overhead of a traditional virtual machine or dualboot setup.
      </p>
      <h2>Prerequisites</h2>
      <p>
        You must be running Windows 10 version 2004 and higher (Build 19041 and
        higher) or Windows 11 to use the commands below. If you are on earlier
        versions, you can see{" "}
        <a href="https://learn.microsoft.com/en-us/windows/wsl/install-manual">
          the manual install page.
        </a>
      </p>
      <h2>Install WSL command</h2>
      <p>
        You can now install everything you need to run WSL with a single
        command. Open PowerShell or Windows Command Prompt in administrator mode
        by right-clicking and selecting "Run as administrator", enter this below
        command, then restart your machine.
        <br />
        <CodeBlock consoleName="Powershell">
          <code>wsl --install</code>
        </CodeBlock>
        <br />
        This command will enable the features necessary to run WSL and install
        the Ubuntu distribution of Linux. (This default distribution can be
        changed).
      </p>
    </ArticleWrapper>
  );
}
