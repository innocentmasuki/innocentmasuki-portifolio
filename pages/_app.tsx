import "../styles/globals.css";
import { useRef, useState } from "react";
import { IoPauseSharp, IoPlaySharp } from "react-icons/io5";

function MyApp({ Component, pageProps }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [played, setPlayed] = useState(false);

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
    <button onClick={() => handleAudioPlayer()}
            className={`bg-red-50 text-red-600 hover:bg-red-100 rounded-xl p-2 text-bold duration-300 fixed top-4 left-[20%] md:left-[25%] lg:left-[35%] z-[51] `}>
      {isPlaying ? <IoPauseSharp className="text-xl font-bold" /> :
        <IoPlaySharp className="pl-1 text-xl font-bold " />}
    </button>
    <audio ref={audioRef} src="/audio/innocent-resume-2024.wav" />
    <Component {...pageProps} /></div>;
}

export default MyApp;
