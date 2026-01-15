"use client";

import { useRef, useState, useEffect } from "react";
import { IoPause, IoPlay } from "react-icons/io5";
import { usePathname } from "next/navigation";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [played, setPlayed] = useState(false);
  const pathname = usePathname();

  const handleAudioPlayer = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.loop = true;
        audioRef.current.play().then(() => setIsPlaying(true)).catch(err => console.log("Audio play failed:", err));
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const handleGlobalClick = () => {
      if (!played) {
        setPlayed(true);
        handleAudioPlayer();
      }
    };

    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, [played, isPlaying]);

  return (
    <>
      <div
        className={`${
          pathname === "/"
            ? "top-[25%] md:top-[22%] lg:top-[18%] left-[44%] md:left-10 lg:left-32 h-[60px] w-[60px] rounded-2xl"
            : "top-5 rounded-xl left-[20%] md:left-[25%] lg:left-[35%]"
        } bg-red-50 text-red-600 hover:bg-red-100 p-2 text-bold duration-300 fixed z-[51]`}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleAudioPlayer();
          }}
          className={"h-full w-full flex flex-col justify-center items-center"}
        >
          {isPlaying ? (
            <IoPause className="text-xl font-bold" />
          ) : (
            <IoPlay className="pl-[2px] text-xl font-bold " />
          )}
        </button>
      </div>
      <audio ref={audioRef} src="/audio/innocent-resume-2024.wav" />
    </>
  );
}
