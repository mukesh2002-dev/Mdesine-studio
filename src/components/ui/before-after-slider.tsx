"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let pos = (x / rect.width) * 100;
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;
    setSliderPos(pos);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-slate-700 bg-[#061224]"
    >
      {/* After Rendered Image (Base background) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterImage}
          alt="After finished building render"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-[#D9531E] text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded shadow-md z-10">
          AFTER
        </div>
      </div>

      {/* Before Blueprint Image (Clipped overlay) */}
      <div
        className="absolute inset-0 h-full overflow-hidden transition-all duration-75"
        style={{ width: `${sliderPos}%` }}
      >
        <div className="relative w-full h-full min-w-full">
          <Image
            src={beforeImage}
            alt="Before 3D architectural blueprint draft"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute top-4 left-4 bg-[#061224] text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded shadow-md border border-slate-700 z-10">
            BEFORE
          </div>
        </div>
      </div>

      {/* Slider Line Divider & Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white/90 shadow-2xl z-20"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-[#061224] border-2 border-[#D9531E] shadow-xl flex items-center justify-center font-bold text-xs sm:text-sm">
          <span>&larr; &rarr;</span>
        </div>
      </div>
    </div>
  );
}
