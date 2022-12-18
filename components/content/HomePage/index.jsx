import Script from "next/script";
import { useEffect, useRef } from "react";

import InnocentImage from "./innocentImage";
import HeroTexts from "./heroTexts";

export default function HomePage() {
  const cursorRef = useRef(null);
  const colorRef = useRef(null);
  useEffect(() => {
    if (
      cursorRef.current == null ||
      colorRef.current == null ||
      colorRef == null ||
      cursorRef == null
    )
      return;
    document.addEventListener("mousemove", (e) => {
      if (cursorRef.current == null) return;

      cursorRef.current.setAttribute(
        "style",
        "top: calc(" +
          e.pageY +
          "px - 220px); left: calc(" +
          e.pageX +
          "px - 270px);"
      );

      colorRef.current.setAttribute(
        "style",
        "clip-path: circle(144px at calc(" +
          e.pageX +
          "px - 125px) calc(" +
          e.pageY +
          "px - 75px))"
      );
    });
  }, []);

  return (
    <>
      <div className=" relative cursor-none  flex items-center w-full justify-center  h-full">
        <div className="grayscale absolute top-0 w-full h-full items-center left-0 flex justify-center md:justify-between">
          <HeroTexts />
          <InnocentImage />
        </div>
        <div
          ref={colorRef}
          style={{
            clipPath: "circle(144px at center)",
          }}
          className="box absolute top-0 w-full h-full items-center left-0 flex justify-center md:justify-between"
        >
          <HeroTexts />
          <InnocentImage />
        </div>
        <div
          ref={cursorRef}
          className="absolute  h-72 w-72 lg:-top-96 lg:-left-96 rounded-full border-2 border-red-500"
        ></div>
      </div>
      <Script onLoad={() => {}} />
    </>
  );
}
