"use client";

import { useState } from "react";

export default function IntroVideo() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const finishIntro = () => {
    setFadeOut(true);

    setTimeout(() => {
      setVisible(false);
    }, 900);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[999999] bg-black transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        src="/intro.mp4"
        autoPlay
        muted
        playsInline
        onEnded={finishIntro}
        className="h-full w-full object-cover"
      />

      <button
        onClick={finishIntro}
        className="absolute bottom-8 right-8 z-[1000000]
        rounded-full border border-cyan-300/50
        bg-black/60 px-6 py-3
        font-mono text-xs tracking-[0.25em]
        text-cyan-100 backdrop-blur-md
        transition-all duration-300
        hover:border-cyan-200
        hover:bg-cyan-400/10
        hover:shadow-[0_0_30px_rgba(0,220,255,0.4)]"
      >
        SKIP INTRO →
      </button>

      <div
        className="absolute bottom-8 left-8 z-[1000000]
        font-mono text-[10px]
        tracking-[0.3em]
        text-cyan-200/60"
      >
        STARK INDUSTRIES // SYSTEM INITIALIZING
      </div>
    </div>
  );
}
