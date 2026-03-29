"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function MaharashtraCyberSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const carouselImages = [
    {
      src: "/Banner Pics/Mahacyber Pics/MAHACYBER-LOGO-Picsart-AiImageEnhancer.png",
      alt: "Maharashtra Cyber Logo",
      objectFit: "contain" as const,
    },
    {
      src: "/Banner Pics/Mahacyber Pics/Devendra-Fadnavis-Mahacyber.JPG",
      alt: "Devendra Fadnavis Maharashtra Cyber",
      objectFit: "cover" as const,
    },
    {
      src: "/Banner Pics/Mahacyber Pics/result_0.jpeg",
      alt: "Security Operations Centre",
      objectFit: "cover" as const,
    },
    {
      src: "/Banner Pics/Mahacyber Pics/WhatsApp Image 2026-03-13 at 1.53.51 PM (1).jpeg",
      alt: "Officers at Cyber Operations",
      objectFit: "cover" as const,
    },
    {
      src: "/Banner Pics/Mahacyber Pics/MC3.JPG",
      alt: "Centre of Excellence Training",
      objectFit: "cover" as const,
    },
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
    <section
      style={{ background: "#0A1628" }}
      className="px-5 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div
            className="group relative h-[350px] overflow-hidden rounded-3xl border-2 border-blue-500/20 bg-slate-900/40 shadow-2xl backdrop-blur-sm sm:h-[450px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {carouselImages.map((image, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  idx === currentSlide ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={
                    image.objectFit === "contain"
                      ? "object-contain bg-slate-900/50 p-12"
                      : "object-cover"
                  }
                />
              </div>
            ))}

            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
              }
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white opacity-0 transition-all hover:scale-110 hover:bg-blue-600 group-hover:opacity-100"
              aria-label="Previous project image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white opacity-0 transition-all hover:scale-110 hover:bg-blue-600 group-hover:opacity-100"
              aria-label="Next project image"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? "w-8 bg-blue-500" : "w-2 bg-white/30"
                  }`}
                  aria-label={`Go to project image ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                Featured Project
              </p>
              <h2 className="text-4xl font-black uppercase tracking-tight leading-[0.95] text-white md:text-5xl lg:text-6xl">
                MAHA CYBER PROJECT
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg font-medium leading-relaxed text-slate-300">
                Parall Forensics partnered with Maharashtra Cyber to establish one of India&apos;s most advanced state-level cyber security and digital forensics infrastructure.
              </p>
              <p className="text-base leading-relaxed text-slate-400">
                The project involved setting up a state-of-the-art Security Operations Centre (SOC), deploying cutting-edge forensic tools, and training hundreds of law enforcement officers. This initiative has significantly strengthened Maharashtra&apos;s capability to combat cybercrime, digital fraud, and online threats, setting a benchmark for other states across India.
              </p>
            </div>

            <Link
              href="/about#projects"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
