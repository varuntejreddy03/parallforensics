"use client";

import Image from "next/image";

const logos = [
  { src: "/Banner Pics/DEA-Award.JPG", alt: "DEA Award" },
  { src: "/Banner Pics/Mahacyber Pics/MAHACYBER-LOGO-Picsart-AiImageEnhancer.png", alt: "Maharashtra Cyber" },
  { src: "/Banner Pics/DEA-AWARD-2026.JPG", alt: "DEA Award 2026" },
  { src: "/Banner Pics/DEA-Award.JPG", alt: "DEA Award" },
  { src: "/Banner Pics/Mahacyber Pics/MAHACYBER-LOGO-Picsart-AiImageEnhancer.png", alt: "Maharashtra Cyber" },
  { src: "/Banner Pics/DEA-AWARD-2026.JPG", alt: "DEA Award 2026" },
];

export function ClientLogosMarquee() {
  const doubled = [...logos, ...logos];

  return (
    <section
      className="py-10 overflow-hidden"
      style={{
        background: "#0D1B2E",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <p className="text-center text-xs font-bold tracking-widest uppercase mb-8" style={{ color: "rgba(255,255,255,0.3)" }}>
        Trusted By
      </p>

      <div
        className="flex"
        style={{ overflow: "hidden" }}
        onMouseEnter={(e) => {
          const el = e.currentTarget.querySelector(".marquee-track") as HTMLElement;
          if (el) el.style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget.querySelector(".marquee-track") as HTMLElement;
          if (el) el.style.animationPlayState = "running";
        }}
      >
        <div
          className="marquee-track flex items-center"
          style={{
            animation: "marquee 30s linear infinite",
            gap: "60px",
            whiteSpace: "nowrap",
          }}
        >
          {doubled.map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 relative"
              style={{
                height: "50px",
                width: "120px",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
