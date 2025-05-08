import { useEffect } from "react";

// Prevent (ctrl + scroll) to zoom on browser
export const usePreventMousewheelZoom = () => {
  useEffect(() => {
    const rootWrapper = document.getElementById("root");
    if (rootWrapper) {
      rootWrapper.addEventListener(
        "wheel",
        (event) => {
          if (event.ctrlKey) {
            event.preventDefault();
          }
        },
        true
      );
    }
  }, []);
};
