import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { IconContext } from "react-icons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InstallWSL } from "./components/pages/install-wsl.tsx";
import { hydrateRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

if (rootElement!.hasChildNodes()!) {
  hydrateRoot(rootElement!, <App />);
} else {
  createRoot(rootElement!).render(
    <StrictMode>
      <IconContext.Provider value={{ size: "1.4rem", className: "icon" }}>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route index element={<App />} />
            <Route path="/install-wsl" element={<InstallWSL />} />
          </Routes>
        </BrowserRouter>
      </IconContext.Provider>
    </StrictMode>
  );
}
