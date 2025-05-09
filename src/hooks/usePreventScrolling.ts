import { useEffect } from "react";

// Prevent mouse wheel scrolling on element by className
export const usePreventScrolling = (className: string) => {
  useEffect(() => {
    const rootWrapper = document.getElementsByClassName(className)[0];
    if (rootWrapper) {
      rootWrapper.addEventListener(
        "wheel",
        (event) => {
          event.preventDefault();
        },
        true
      );
    }
  }, [className]);
};
