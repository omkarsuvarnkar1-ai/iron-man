"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicControl() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.35;

    return () => {
      audio.pause();
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Audio could not start:", error);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/stark-theme.mp3"
        preload="auto"
      />

      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Turn music off" : "Turn music on"}
        className="fixed bottom-6 right-6 z-50
                   flex items-center gap-3
                   rounded-full border border-yellow-500/40
                   bg-black/80 px-5 py-3
                   text-xs font-semibold tracking-[0.2em]
                   text-yellow-400
                   shadow-[0_0_25px_rgba(255,190,0,0.25)]
                   backdrop-blur-md
                   transition-all duration-300
                   hover:border-yellow-400
                   hover:shadow-[0_0_35px_rgba(255,190,0,0.45)]"
      >
        <span
          className={`flex h-3 w-3 rounded-full ${
            isPlaying
              ? "animate-pulse bg-yellow-400 shadow-[0_0_12px_#facc15]"
              : "bg-gray-500"
          }`}
        />

        {isPlaying ? "JARVIS // ON" : "JARVIS // OFF"}
      </button>
    </>
  );
}
