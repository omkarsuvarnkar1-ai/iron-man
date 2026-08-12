"use client";

import { useEffect, useRef, useState } from "react";

export default function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.play().catch(() => {
      // Browser may block autoplay.
      // Muted autoplay is normally allowed.
    });
  }, []);

  if (finished) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-black">
      <video
        ref={videoRef}
        src="/intro.mp4"
        autoPlay
        muted
        playsInline
        onEnded={() => setFinished(true)}
        className="h-full w-full object-cover"
      />

      <button
        onClick={() => setFinished(true)}
        className="absolute bottom-8 right-8 rounded-full border border-white/30 bg-black/50 px-5 py-2 font-mono text-xs tracking-[0.2em] text-white backdrop-blur-md transition hover:border-white"
      >
        SKIP INTRO
      </button>
    </div>
  );
}
