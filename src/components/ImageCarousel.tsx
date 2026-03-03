"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const carouselImages = [
    { src: "/ChatGPT Image Mar 3, 2026, 04_27_41 PM.png", caption: "Digital Forensics Command Center" },
    { src: "/ChatGPT Image Mar 3, 2026, 04_27_40 PM.png", caption: "Mobile Device Forensics" },
    { src: "/ChatGPT Image Mar 3, 2026, 04_27_34 PM.png", caption: "Hard Drive Investigation" },
    { src: "/ChatGPT Image Mar 3, 2026, 04_27_32 PM.png", caption: "Chip & Circuit Analysis" },
    { src: "/ChatGPT Image Mar 3, 2026, 04_35_27 PM.png", caption: "Field Investigation" }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, carouselImages.length]);

  return (
    <div 
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full h-[500px] sm:h-[550px]">
        {carouselImages.map((item, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={item.src} alt={item.caption} fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white text-lg sm:text-xl font-semibold text-center">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 py-4 bg-slate-900/50">
        {carouselImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide ? "bg-blue-500 w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
