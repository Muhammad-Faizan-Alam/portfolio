"use client";
import { useState, useRef } from "react";

export default function WebHoverBox() {
  const boxRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = boxRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div
      ref={boxRef}
      onMouseMove={handleMouseMove}
      className="relative w-[500px] h-[300px] bg-gray-900 overflow-hidden"
    >
      {/* Web grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          maskImage: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 50%)`,
          WebkitMaskImage: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 50%)`,
        }}
      >
        {/* Vertical Lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-white/20"
            style={{ left: `${(i / 20) * 100}%` }}
          />
        ))}
        {/* Horizontal Lines */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-white/20"
            style={{ top: `${(i / 10) * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
}