import '../styles/globals.css'
import { useRef, useState } from "react";


function MyApp({ Component, pageProps }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);


  const handleAudioPlayer = ()=>{
    if (audioRef.current && !isPlaying) {
      audioRef.current.loop = true;
      audioRef.current.play();
      setIsPlaying(true)
    }else if(audioRef.current && isPlaying){
      audioRef.current.pause();
      setIsPlaying(true)
    }
  }


  return <div className='bg-white-100 relative' onClick={()=>handleAudioPlayer()}>
    <audio ref={audioRef} src="/audio/innocent-resume-2024.wav" />
    <Component {...pageProps} /></div>
}

export default MyApp
