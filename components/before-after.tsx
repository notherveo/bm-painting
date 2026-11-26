"use client";
import * as React from "react";

import { useRef, useState } from "react";
import { motion } from "motion/react";

export function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [slider, setSlider] = useState(50);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleMove = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.min(Math.max(0, clientX - rect.left), rect.width);
    const percent = Math.round((x / rect.width) * 100);
    setSlider(percent);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setTouchStart(e.clientX);
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (touchStart !== null) handleMove(e.clientX);
  };

  const handlePointerUp = () => {
    setTouchStart(null);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl bg-[#22211b]"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <img
        src="https://picsum.photos/seed/interior1/1200/800"
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <img
        src="https://picsum.photos/seed/interior2/1200/800"
        alt="Before"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-y-0 left-0 bg-[#22211b]/60 z-10"
        style={{ width: `${slider}%` }}
      />
      <div
        className="absolute inset-y-0 right-0 z-10 flex items-center justify-end pr-4"
      >
        <span className="text-white text-sm font-medium">Before</span>
      </div>
      <div
        className="absolute inset-y-0 left-0 z-10 flex items-center justify-start pl-4"
      >
        <span className="text-white text-sm font-medium">After</span>
      </div>
      <div
        className="absolute inset-y-0 w-1 bg-white z-20"
        style={{ left: `${slider}%` }}
      />
      <div
        className="absolute inset-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg z-20 flex items-center justify-center text-[#22211b]"
        style={{ left: `${slider}%`, transform: "translate(-50%, -50%)" }}
      >
        <div className="w-2 h-2 bg-[#22211b] rounded-full" />
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
        <span className="text-white/80 text-sm font-medium">
          {slider}%
        </span>
      </div>
    </div>
  );
}
