import Image from "next/image";

export function MaharashtraCyberSection() {
  return (
    <section style={{ background: "#0A1628" }} className="py-20 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — 2x2 Image Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/Banner Pics/Mahacyber Pics/MAHACYBER-LOGO-Picsart-AiImageEnhancer.png"
                alt="Maharashtra Cyber Logo"
                fill
                className="object-contain bg-slate-900"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/Banner Pics/Mahacyber Pics/Devendra-Fadnavis-Mahacyber.JPG"
                alt="Devendra Fadnavis Maharashtra Cyber"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/Banner Pics/Mahacyber Pics/result_0.jpeg"
                alt="Security Operations Centre"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/Banner Pics/Mahacyber Pics/WhatsApp Image 2026-03-13 at 1.53.51 PM (1).jpeg"
                alt="Officers at Cyber Operations"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">
              Featured Project
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Maharashtra Cyber Security Project
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              Parall Forensics partnered with Maharashtra Cyber to establish one of India&apos;s most advanced state-level cyber security and digital forensics infrastructure. The project involved setting up a state-of-the-art Security Operations Centre (SOC), deploying cutting-edge forensic tools, and training hundreds of law enforcement officers.
            </p>
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              This initiative has significantly strengthened Maharashtra&apos;s capability to combat cybercrime, digital fraud, and online threats — setting a benchmark for other states across India.
            </p>

            {/* Award Badges */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="relative rounded-lg overflow-hidden shadow-xl flex-shrink-0" style={{ width: "200px", height: "120px", boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}>
                <Image
                  src="/Banner Pics/DEA-AWARD-2026.JPG"
                  alt="DEA Award 2026"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl flex-shrink-0" style={{ width: "160px", height: "120px", boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}>
                <Image
                  src="/Banner Pics/DEA-Award.JPG"
                  alt="DEA Award"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-sm font-semibold" style={{ color: "#C8A84B" }}>
                Digital Transformation<br />of the Year — 2026
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
