import { useState, useEffect } from "react";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  function handleResize(width, height) {
    setWindowSize({
      width: width,
      height: height,
    });
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", function () {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      });
      handleResize(window.innerWidth, window.innerHeight);
      return () =>
        window.removeEventListener("resize", function () {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        });
    }
  }, []);
  return windowSize;
}
