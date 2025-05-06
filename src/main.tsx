import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { IconContext } from "react-icons";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IconContext.Provider value={{ size: "1.4rem", className: "icon" }}>
      <App />
    </IconContext.Provider>
  </StrictMode>
);
