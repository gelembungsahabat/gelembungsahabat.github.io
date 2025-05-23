import { useEffect, useState } from "react";

function usePreloadImage(src: string) {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isCancelled = false;
    if (src) {
      setLoading(true);
      const img = new Image();
      img.onload = () => {
        if (isCancelled) return;
        setLoading(false);
      };
      // eslint-disable-next-line
      img.onerror = (e: any) => {
        if (isCancelled) return;
        setLoading(false);
        setError(e.message || "failed to load image");
      };
      img.src = src;
    } else {
      setLoading(false);
    }

    return () => {
      isCancelled = true;
    };
  }, [src]);

  return { src: src ? src : undefined, isLoading, isError: !!error };
}

export default usePreloadImage;
