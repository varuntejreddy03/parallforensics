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
      
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 animate-fade-in drop-shadow-lg leading-tight">
                Empowering Investigations.
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e90ff] mb-4 sm:mb-6 animate-fade-in-delay-1 drop-shadow-lg leading-tight">
                Securing the Digital Frontier.
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-6 sm:mb-8 animate-fade-in-delay-2">
                Advanced Digital Forensics Solutions for Law Enforcement & Government Agencies
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-delay-3">
                <Link
                  href="/services/digital-forensic-solutions"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 text-center"
                >
                  Explore Solutions
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right: Carousel */}
            <div 
              className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative w-full h-[400px] sm:h-[500px] rounded-xl overflow-hidden border-2 border-blue-500 shadow-2xl shadow-blue-500/30">
                {carouselImages.map((item, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image src={item.src} alt={item.caption} fill className="object-cover" />
                    <div className="absolute bottom-4 left-4 bg-blue-600/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <p className="text-white text-sm font-semibold">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}
