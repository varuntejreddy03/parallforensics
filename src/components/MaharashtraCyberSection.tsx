"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function MaharashtraCyberSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const carouselImages = [
    { src: "/Banner Pics/Mahacyber Pics/MAHACYBER-LOGO-Picsart-AiImageEnhancer.png", alt: "Maharashtra Cyber Logo", objectFit: "contain" as const },
    { src: "/Banner Pics/Mahacyber Pics/Devendra-Fadnavis-Mahacyber.JPG", alt: "Devendra Fadnavis Maharashtra Cyber", objectFit: "cover" as const },
    { src: "/Banner Pics/Mahacyber Pics/result_0.jpeg", alt: "Security Operations Centre", objectFit: "cover" as const },
    { src: "/Banner Pics/Mahacyber Pics/WhatsApp Image 2026-03-13 at 1.53.51 PM (1).jpeg", alt: "Officers at Cyber Operations", objectFit: "cover" as const },
    { src: "/Banner Pics/Mahacyber Pics/MC3.JPG", alt: "Centre of Excellence Training", objectFit: "cover" as const },
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, carouselImages.length]);

  return (
    <section style={{ background: "#0A1628" }} className="py-24 px-4 sm:px-6">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Image Slider (The "Sliding Fashion") */}
          <div 
            className="relative h-[350px] sm:h-[450px] rounded-3xl overflow-hidden border-2 border-blue-500/20 shadow-2xl group bg-slate-900/40 backdrop-blur-sm"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {carouselImages.map((image, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`${image.objectFit === 'contain' ? 'object-contain p-12 bg-slate-900/50' : 'object-cover'}`}
                />
              </div>
            ))}
            
            {/* Controls */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-blue-600 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:scale-110 z-20"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-blue-600 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:scale-110 z-20"
            >
              <ChevronRight size={24} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? "bg-blue-500 w-8" : "bg-white/30 w-2"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right — Content */}
          <div className="space-y-8">
            <div>
              <p className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Featured Project
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[0.95]">
                MAHA CYBER PROJECT
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-slate-300 text-lg leading-relaxed font-medium">
                Parall Forensics partnered with Maharashtra Cyber to establish one of India&apos;s most advanced state-level cyber security and digital forensics infrastructure.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                The project involved setting up a state-of-the-art Security Operations Centre (SOC), deploying cutting-edge forensic tools, and training hundreds of law enforcement officers. This initiative has significantly strengthened Maharashtra&apos;s capability to combat cybercrime, digital fraud, and online threats — setting a benchmark for other states across India.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


