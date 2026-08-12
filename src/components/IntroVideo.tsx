"use client";

import { useState } from "react";

export default function IntroVideo() {
  const [showIntro, setShowIntro] = useState(true);
  const [fading, setFading] = useState(false);

  const finishIntro = () => {
    setFading(true);

    setTimeout(() => {
      setShowIntro(false);
    }, 800);
  };

  if (!showIntro) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-black transition-opacity duration-700 ${
        fading ? "opacity-0" : "opacity-100"
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

      {/* Skip Intro Button */}
      <button
        onClick={finishIntro}
        className="absolute bottom-8 right-8 rounded-full border border-cyan-400/60 bg-black/70 px-6 py-3 font-mono text-sm tracking-[0.2em] text-cyan-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_25px_rgba(0,220,255,0.5)]"
      >
        SKIP INTRO →
      </button>

      {/* JARVIS Status */}
      <div className="absolute bottom-8 left-8 font-mono text-xs tracking-[0.25em] text-cyan-400/70">
        STARK INDUSTRIES // SYSTEM INITIALIZING
      </div>
    </div>
  );
}
