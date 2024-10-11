import '../styles/globals.css'
import { useEffect, useRef, useState } from "react";


function MyApp({ Component, pageProps }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.loop = true;
      audioRef.current.play();
    }
  }, [isPlaying]);
  return <div className='bg-white-100 relative' onClick={()=>setIsPlaying(true)}>
    <audio ref={audioRef} src="/audio/innocent-resume-2023.wav" />
    <Component {...pageProps} /></div>
}

export default MyApp
