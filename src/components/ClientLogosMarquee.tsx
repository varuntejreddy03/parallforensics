"use client";

import Image from "next/image";

const logos = [
  { src: "/Client Logos/delhi-police.JPG", alt: "Delhi Police" },
  { src: "/Client Logos/Gemini_Generated_Image_gfbskbgfbskbgfbs.png", alt: "Client Logo" },
  { src: "/Client Logos/Indian-Army.JPG", alt: "Indian Army" },
  { src: "/Client Logos/Indian-Navy-Logo.png", alt: "Indian Navy" },
  { src: "/Client Logos/LTTS-LOGO.png", alt: "LTTS" },
  { src: "/Client Logos/MAHACYBER-LOGO-Picsart-AiImageEnhancer.png", alt: "Maharashtra Cyber" },
  { src: "/Client Logos/NIC_Preview-1.png", alt: "NIC" },
  { src: "/Client Logos/Telangana-Police-Logo.png", alt: "Telangana Police" },
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
