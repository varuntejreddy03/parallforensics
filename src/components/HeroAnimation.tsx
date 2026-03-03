"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(true);

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

      // Radar sweep
      if (timestamp - lastRadarTime > 5000) {
        radarAngle = 0;
        lastRadarTime = timestamp;
      }
      radarAngle += 0.02;
      const radarX = canvas.width * 0.7;
      const radarY = canvas.height * 0.5;
      const radarRadius = 150;
      ctx.strokeStyle = "rgba(0, 255, 0, 0.4)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(radarX, radarY);
      ctx.lineTo(
        radarX + Math.cos(radarAngle) * radarRadius,
        radarY + Math.sin(radarAngle) * radarRadius
      );
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
        if (c.opacity > 0) {
          ctx.strokeStyle = `rgba(30, 144, 255, ${c.opacity})`;
          ctx.lineWidth = 2;
          ctx.strokeRect(c.x - 5, c.y - 5, 10, 10);
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
    <div className="relative w-full min-h-[600px] overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[600px] px-6 text-center">
        <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
          Empowering Investigations.
        </h1>
        <h2 className="text-5xl font-bold text-[#1e90ff] mb-6 animate-fade-in-delay-1">
          Securing the Digital Frontier.
        </h2>
        <p className="text-lg text-slate-400 max-w-3xl mb-8 animate-fade-in-delay-2">
          Advanced Digital Forensics Solutions for Law Enforcement & Government Agencies
        </p>
        <div className="flex gap-4 animate-fade-in-delay-3">
          <Link
            href="/services/digital-forensic-solutions"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Explore Solutions
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
