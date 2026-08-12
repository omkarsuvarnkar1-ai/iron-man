"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicControl() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/stark-theme.mp3");

    audio.loop = true;
    audio.volume = 0.35;

    audioRef.current = audio;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("JARVIS audio error:", error);
    }
  };

  return (
    <button
      onClick={toggleMusic}
      aria-label={isPlaying ? "Turn music off" : "Turn music on"}
      className={`fixed bottom-6 right-6 z-[9998]
        rounded-full border px-5 py-3
        font-mono text-xs tracking-[0.2em]
        backdrop-blur-md
        transition-all duration-300
        ${
          isPlaying
            ? "border-cyan-300 bg-cyan-400/10 text-cyan-200 shadow-[0_0_30px_rgba(0,220,255,0.35)]"
            : "border-cyan-400/40 bg-black/80 text-cyan-400"
        }
        hover:border-cyan-200
        hover:shadow-[0_0_30px_rgba(0,220,255,0.4)]`}
    >
      {isPlaying ? "🔊 JARVIS // ON" : "🔇 JARVIS // OFF"}
    </button>
  );
}
