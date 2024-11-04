import "../styles/globals.css";
import { useEffect, useRef, useState } from "react";
import { IoPause, IoPlay } from "react-icons/io5";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [played, setPlayed] = useState(false);

  const router = useRouter();
  const handleAudioPlayer = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.loop = true;
      audioRef.current.play().then(_ => setIsPlaying(true));
    } else if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };


  return <div className="bg-white-100 relative" onClick={() => {
    if (!played) {
      setPlayed(true);
      handleAudioPlayer();
    }
  }}>

    <div
      className={`${router.pathname === "/" ? "top-[25%] md:top-[22%] lg:top-[18%] left-[44%] md:left-10 lg:left-32 h-[60px] w-[60px] rounded-2xl" : "top-5 rounded-xl left-[20%]   md:left-[25%] lg:left-[35%]"} bg-red-50 text-red-600 hover:bg-red-100  p-2 text-bold duration-300 fixed  z-[51] `}>
      <button onClick={() => handleAudioPlayer()}
              className={"h-full w-full flex flex-col justify-center items-center"}>
        {isPlaying ? <IoPause className="text-xl font-bold" /> :
          <IoPlay className="pl-[2px] text-xl font-bold " />}
      </button>
    </div>
    <audio ref={audioRef} src="/audio/innocent-resume-2024.wav" />
    <Component {...pageProps} /></div>;
}

export default MyApp;
