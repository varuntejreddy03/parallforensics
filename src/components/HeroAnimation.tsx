"use client";

import { useEffect, useRef, useState } from "react";
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
    { src: "/Banner Pics/image_7155b228-f498-4829-957e-6ca3ada6f263.png", caption: "AI Driven Investigation & Security" },
    { src: "/Banner Pics/DEA-Award.JPG", caption: "Recognized Excellence" },
    { src: "/banner1.png", caption: "State-of-the-Art Operations Centre" },
    { src: "/banner2.png", caption: "Centre of Excellence Training" },
    { src: "/ChatGPT Image Mar 3, 2026, 04_35_27 PM.png", caption: "Field Investigation Support" },
  ];

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4500);

    return () => window.clearTimeout(timer);
  }, [isPaused, currentSlide, carouselImages.length]);

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

      // Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 8);
        gradient.addColorStop(0, "rgba(30, 144, 255, 0.8)");
        gradient.addColorStop(1, "rgba(30, 144, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
        ctx.fill();

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

      // Radar sweep
      if (timestamp - lastRadarTime > 5000) {
        radarAngle = 0;
        lastRadarTime = timestamp;
      }
      radarAngle += 0.015;
      const radarX = canvas.width * 0.75;
      const radarY = canvas.height * 0.4;
      const radarRadius = 180;
      
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

      ctx.strokeStyle = "rgba(0, 255, 0, 0.15)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(radarX, radarY, radarRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Cursors
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
    <div className="relative w-full overflow-hidden" style={{ minHeight: "520px" }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      <div className="relative z-10 pt-20 pb-10">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center px-5 text-center sm:px-6 lg:px-8">
          
          <div className="mb-8 max-w-3xl space-y-4">
            <h1 className="text-3xl font-extrabold leading-[1.05] text-white drop-shadow-2xl sm:text-4xl md:text-5xl lg:text-6xl">
              Empowering Investigations.<br />Securing the Digital Frontier.
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg">
              Advanced Digital Forensics Solutions for Law Enforcement & Government Agencies
            </p>
          </div>

          {/* Wide Banner Carousel (1200x350 style) */}
          <div 
            className="relative w-full max-w-[1120px] h-[250px] sm:h-[290px] md:h-[330px] rounded-3xl overflow-hidden border border-blue-500/40 shadow-[0_0_40px_rgba(30,144,255,0.24)] group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {carouselImages.map((item, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-[1500ms] ease-out will-change-transform ${
                  idx === currentSlide ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-[1.03] translate-x-2"
                }`}
              >
                <Image 
                  src={item.src} 
                  alt={item.caption} 
                  fill 
                  className="object-cover" 
                  priority={idx === 0} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex justify-center">
                  <div className="rounded-full border border-white/10 bg-black/40 px-5 py-2 shadow-lg backdrop-blur-md">
                    <p className="text-white text-sm font-medium tracking-wide">{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white opacity-0 backdrop-blur-sm transition-all hover:scale-110 hover:bg-blue-600 group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white opacity-0 backdrop-blur-sm transition-all hover:scale-110 hover:bg-blue-600 group-hover:opacity-100"
              aria-label="Next slide"
            >
              <ChevronRight size={28} />
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
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
  );
}
