"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(true);
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let radarAngle = 0;
    let binaryStrings: Array<{ x: number; y: number; text: string; opacity: number }> = [];
    let cursors: Array<{ x: number; y: number; opacity: number; life: number }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const particleCount = Math.floor(canvas.width / 20);
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    const generateBinary = () => {
      const texts = ["0xAF", "FF:3C", "01101", "0xC4", "10110", "A3:F2"];
      return texts[Math.floor(Math.random() * texts.length)];
    };

    let lastBinaryTime = 0;
    let lastCursorTime = 0;
    let lastRadarTime = 0;

    const animate = (timestamp: number) => {
      if (!isVisible) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      ctx.fillStyle = "#0d1117";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Circuit grid
      ctx.strokeStyle = "rgba(30, 144, 255, 0.05)";
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let i = 0; i < canvas.height; i += 50) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }

      // Particles with glow
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Glow effect
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 8);
        gradient.addColorStop(0, "rgba(30, 144, 255, 0.8)");
        gradient.addColorStop(1, "rgba(30, 144, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#1e90ff";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Connections
      ctx.strokeStyle = "rgba(30, 144, 255, 0.3)";
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Binary strings
      if (timestamp - lastBinaryTime > 500) {
        if (binaryStrings.length < 8) {
          binaryStrings.push({
            x: Math.random() < 0.5 ? 50 : canvas.width - 100,
            y: Math.random() * canvas.height,
            text: generateBinary(),
            opacity: 0,
          });
        }
        lastBinaryTime = timestamp;
      }

      binaryStrings = binaryStrings.filter((b) => {
        b.y -= 0.5;
        b.opacity = b.y > canvas.height - 100 ? Math.min(b.opacity + 0.02, 0.6) : b.opacity - 0.02;
        if (b.opacity > 0) {
          ctx.fillStyle = `rgba(30, 144, 255, ${b.opacity})`;
          ctx.font = "14px monospace";
          ctx.fillText(b.text, b.x, b.y);
          return true;
        }
        return false;
      });

      // Radar sweep with glow trail
      if (timestamp - lastRadarTime > 5000) {
        radarAngle = 0;
        lastRadarTime = timestamp;
      }
      radarAngle += 0.015;
      const radarX = canvas.width * 0.75;
      const radarY = canvas.height * 0.4;
      const radarRadius = 180;
      
      // Glow trail
      const gradient = ctx.createLinearGradient(
        radarX,
        radarY,
        radarX + Math.cos(radarAngle) * radarRadius,
        radarY + Math.sin(radarAngle) * radarRadius
      );
      gradient.addColorStop(0, "rgba(0, 255, 0, 0)");
      gradient.addColorStop(0.5, "rgba(0, 255, 0, 0.4)");
      gradient.addColorStop(1, "rgba(0, 255, 0, 0.8)");
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(radarX, radarY);
      ctx.lineTo(
        radarX + Math.cos(radarAngle) * radarRadius,
        radarY + Math.sin(radarAngle) * radarRadius
      );
      ctx.stroke();

      // Radar circle
      ctx.strokeStyle = "rgba(0, 255, 0, 0.15)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(radarX, radarY, radarRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Cursors with pulse effect
      if (timestamp - lastCursorTime > 2000) {
        cursors.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          opacity: 1,
          life: 0,
        });
        lastCursorTime = timestamp;
      }

      cursors = cursors.filter((c) => {
        c.life += 16;
        c.opacity = Math.max(0, 1 - c.life / 2000);
        const pulse = Math.sin(c.life / 100) * 0.3 + 0.7;
        if (c.opacity > 0) {
          ctx.strokeStyle = `rgba(30, 144, 255, ${c.opacity * pulse})`;
          ctx.lineWidth = 2;
          ctx.strokeRect(c.x - 6, c.y - 6, 12, 12);
          ctx.strokeRect(c.x - 4, c.y - 4, 8, 8);
          return true;
        }
        return false;
      });

      animationId = requestAnimationFrame(animate);
    };

    const handleVisibility = () => {
      setIsVisible(document.visibilityState === "visible");
    };

    document.addEventListener("visibilitychange", handleVisibility);
    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [isVisible]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      <div className="relative z-10 min-h-screen flex items-center py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left: Text Content - Takes 3 columns */}
            <div className="lg:col-span-3 text-left space-y-6 pl-16 lg:pl-20">
              <h1 className="text-[42px] sm:text-5xl md:text-6xl lg:text-[42px] font-bold text-white mb-4 animate-fade-in drop-shadow-2xl leading-tight">
                Empowering Investigations. Securing the Digital Frontier.
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 animate-fade-in-delay-2 leading-relaxed max-w-2xl">
                Advanced Digital Forensics Solutions for Law Enforcement & Government Agencies
              </p>
            </div>

            {/* Right: Carousel - Takes 2 columns */}
            <div 
              className="lg:col-span-2 relative pt-8 lg:pt-16"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative w-full h-[450px] sm:h-[550px] rounded-2xl overflow-hidden border-2 border-blue-500/50 shadow-2xl shadow-blue-500/40 backdrop-blur-sm">
                {carouselImages.map((item, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      idx === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image src={item.src} alt={item.caption} fill className="object-cover" priority={idx === 0} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
                      <p className="text-white text-xs font-normal">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-blue-600 text-white p-3 rounded-full transition-all hover:scale-110 backdrop-blur-sm"
                aria-label="Previous slide"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-blue-600 text-white p-3 rounded-full transition-all hover:scale-110 backdrop-blur-sm"
                aria-label="Next slide"
              >
                <ChevronRight size={28} />
              </button>
              
              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? "bg-blue-500 w-10" : "bg-white/40 w-2 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
