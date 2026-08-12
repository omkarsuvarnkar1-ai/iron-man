
"use client";

import { useRef, useState } from "react";

type IntroVideoProps = {
  onEnded?: () => void;
};

export default function IntroVideo({ onEnded }: IntroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const finishIntro = () => {
    setFadeOut(true);

    setTimeout(() => {
      onEnded?.();
    }, 800);
  };

  const toggleSound = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.muted) {
      video.muted = false;
      video.volume = 1;
      setIsMuted(false);

      video.play().catch(() => {});
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-black transition-opacity duration-800 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        src="/intro.mp4"
        autoPlay
        muted
        playsInline
        onEnded={finishIntro}
        className="h-full w-full object-cover"
      />

      {/* Music ON / OFF */}
      <button
        onClick={toggleSound}
        className="absolute bottom-8 right-8 z-[100000]
        rounded-full border border-cyan-400/50
        bg-black/70 px-6 py-3
        font-mono text-xs tracking-[0.2em]
        text-cyan-300 backdrop-blur-md
        transition-all duration-300
        hover:border-cyan-300
        hover:bg-cyan-400/10
        hover:shadow-[0_0_25px_rgba(0,220,255,0.4)]"
      >
        {isMuted ? "🔇 MUSIC OFF" : "🔊 MUSIC ON"}
      </button>

      {/* Skip Intro */}
      <button
        onClick={finishIntro}
        className="absolute bottom-8 left-8 z-[100000]
        rounded-full border border-white/20
        bg-black/60 px-6 py-3
        font-mono text-xs tracking-[0.2em]
        text-white/80 backdrop-blur-md
        transition-all duration-300
        hover:border-white/50
        hover:text-white"
      >
        SKIP INTRO →
      </button>

      {/* Stark status */}
      <div
        className="absolute top-8 left-8 z-[100000]
        font-mono text-[10px]
        tracking-[0.3em]
        text-cyan-300/60"
      >
        STARK INDUSTRIES // SYSTEM INITIALIZING
      </div>
    </div>
  );
}
