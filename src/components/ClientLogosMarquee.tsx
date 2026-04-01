"use client";

import Image from "next/image";

const logos = [
  { src: "/Client Logos/Gemini_Generated_Image_1dssg61dssg61dss-removebg-preview.png", alt: "Client Logo 1" },
  { src: "/Client Logos/Gemini_Generated_Image_gfbskbgfbskbgfbs-removebg-preview.png", alt: "Client Logo 2" },
  { src: "/Client Logos/Gemini_Generated_Image_yqmtuxyqmtuxyqmt-removebg-preview.png", alt: "Client Logo 3" },
  { src: "/Client Logos/MAHACYBER-LOGO-Picsart-AiImageEnhancer-removebg-preview.png", alt: "Maharashtra Cyber" },
  { src: "/Client Logos/Telangana-Police-Logo-removebg-preview.png", alt: "Telangana Police" },
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
            animation: "marquee 35s linear infinite",
            gap: "100px",
            whiteSpace: "nowrap",
            padding: "0 50px",
          }}
        >
          {doubled.map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 relative"
              style={{
                height: "110px",
                width: "220px",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
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
