"use client";

import { useState } from "react";

export default function IntroVideo() {
  const [showIntro, setShowIntro] = useState(true);

  if (!showIntro) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-black">
      <video
        src="/intro.mp4"
        autoPlay
        muted
        playsInline
        onEnded={() => setShowIntro(false)}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
