import Button from "../../common/button";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useRef } from "react";

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
      <div className=" relative cursor-none  flex items-center w-full justify-center h-full">
        <div className="grayscale absolute top-0 w-full h-full items-center left-0 flex justify-center md:justify-start">
          <div className=" text-center md:text-left text-red-500">
            <h1 className="font-bold  text-4xl pb-4">{"Hi, I'm"}</h1>
            <p className="text-6xl md:text-8xl  ">Innocent Masuki</p>
            <p className="md:text-xl mb-20 pb-8 ">
              <span className="font-bold">freelance </span>
              <span className="font-bold">web</span> and{" "}
              <span className="font-bold">mobile</span> developer.
            </p>
          </div>
          <div className=" hidden md:block opacity-70">
            <Image
              src={"/images/innocent.png"}
              alt="Innocent Masuki Background"
              height="500"
              width="500"
            />
          </div>
        </div>
        <div
          ref={colorRef}
          style={{
            clipPath: "circle(144px at center)",
          }}
          className="box absolute top-0 w-full h-full items-center left-0 flex justify-center md:justify-start"
        >
          <div className=" text-center md:text-left text-red-500">
            <h1 className="font-bold  text-4xl pb-4">{"Hi, I'm"}</h1>
            <p className="text-6xl md:text-8xl  ">Innocent Masuki</p>
            <p className="md:text-xl mb-20 pb-8 ">
              <span className="font-bold">freelance </span>
              <span className="font-bold">web</span> and{" "}
              <span className="font-bold">mobile</span> developer.
            </p>
          </div>
          <div className=" hidden md:block opacity-70">
            <Image
              src={"/images/innocent.png"}
              alt="Innocent Masuki Background"
              height="500"
              width="500"
            />
          </div>
        </div>
        <div
          ref={cursorRef}
          className="absolute  h-72 w-72 rounded-full border-2 border-red-500"
        ></div>
      </div>
      <Script onLoad={() => {}} />
    </>
  );
}
