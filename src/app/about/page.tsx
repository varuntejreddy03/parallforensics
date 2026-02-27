import { SectionWrapper } from "@/components/SectionWrapper";
import { CTAButton } from "@/components/CTAButton";
import {
  ChevronRight, GraduationCap, ShieldAlert,
  MapPin, Globe, Cpu, LayoutGrid, CheckCircle2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Parall Forensics - Digital Forensics Company",
  description: "Learn about Parall Forensics, a specialized digital forensics and cyber capability company headquartered in Hyderabad, India, part of ParadigmIT Group.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-surface">

      {/* SECTION 1 — PAGE HERO */}
      <section className="relative pt-32 pb-20 bg-background overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-50 opacity-40"></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[80px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-500 mb-6 text-sm font-medium tracking-wide uppercase">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-slate-900 font-semibold">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            About Parall Forensics
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Empowering agencies with cutting-edge digital forensics and cyber capabilities.
          </p>
        </div>
      </section>

      {/* SECTION 2 — WHO WE ARE */}
      <SectionWrapper id="who-we-are" className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-xs tracking-wider uppercase mb-6">
              Who We Are
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Specialized Digital Forensics & Cyber Capability
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                <strong>Parall Forensics</strong> is a specialized digital forensics and cyber capability company
                headquartered in Hyderabad, India, and a proud member of the ParadigmIT Group.
              </p>
              <p>
                We work at the intersection of technology, investigation, and national security — enabling governments
                and law enforcement agencies to combat evolving cyber threats with precision and confidence.
              </p>
              <p>
                From deploying sophisticated forensic labs for State Police organizations to providing deep,
                capacity-building training modules for frontline cyber heroes, Parall ensures that investigative
                infrastructure outpaces criminal ingenuity.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-secondary/20 rounded-[2.5rem] transform -rotate-2 blur-sm"></div>
            <div className="bg-slate-200 rounded-[2rem] overflow-hidden relative shadow-xl aspect-[4/3]">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10" />
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Cybersecurity investigation center"
                fill
                quality={80}
                className="object-cover relative z-0"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-xl z-20 border border-white">
                <p className="font-bold text-primary mb-1">Empowering Agencies</p>
                <p className="text-sm text-slate-600">Delivering mission-critical solutions since inception.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION 3 — OUR FOCUS AREAS */}
      <SectionWrapper id="focus-areas" className="bg-white py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Focus Areas</h2>
          <p className="text-lg text-slate-600">The three pillars that define our operational expertise and value delivery.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-surface border border-slate-100 hover:border-accent/40 shadow-sm hover:shadow-md transition-all group">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-accent mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <Cpu size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Technology & Investigation</h3>
            <p className="text-slate-600">Integrating best-in-class extraction & correlation tools to uncover hidden digital footprints rapidly.</p>
          </div>

          <div className="p-8 rounded-2xl bg-surface border border-slate-100 hover:border-secondary/40 shadow-sm hover:shadow-md transition-all group">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <ShieldAlert size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">National Security & Cyber Threats</h3>
            <p className="text-slate-600">Providing the critical infrastructure needed to proactively identify, track, and neutralize state-level cyber threats.</p>
          </div>

          <div className="p-8 rounded-2xl bg-surface border border-slate-100 hover:border-accent/40 shadow-sm hover:shadow-md transition-all group">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-accent mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <GraduationCap size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Capacity Building & Training</h3>
            <p className="text-slate-600">Upskilling investigators through rigorous, reality-based simulation and cutting-edge forensic methodologies.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION 4 — PARADIGMIT GROUP CONNECTION */}
      <section className="bg-slate-50 text-slate-900 py-24 relative overflow-hidden border-y border-slate-100">
        <div className="absolute top-0 right-0 w-full h-full bg-blue-500/5 opacity-30 pointer-events-none"></div>
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" />

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <svg width="60" height="60" viewBox="0 0 100 100" className="text-blue-600 opacity-80">
                <polygon points="50 5, 95 25, 95 75, 50 95, 5 75, 5 25" fill="none" stroke="currentColor" strokeWidth="6" />
                <text x="50" y="65" fontSize="40" fill="currentColor" fontWeight="bold" textAnchor="middle">P</text>
              </svg>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-slate-900">
              Backed by Global Technology Excellence
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12">
              As part of <strong className="text-slate-900">ParadigmIT Technology Services</strong> — a global technology and
              AI innovation company with 20+ years of experience — we leverage international best practices,
              secure engineering standards, and scalable architectures.
            </p>

            {/* Regions Row */}
            <div className="pt-8 border-t border-slate-200">
              <p className="text-sm uppercase tracking-widest text-slate-400 mb-8 font-semibold">Our Operational Footprint</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {[
                  { name: "India", icon: <MapPin size={24} /> },
                  { name: "North America", icon: <Globe size={24} /> },
                  { name: "Europe", icon: <Globe size={24} /> },
                  { name: "Middle East", icon: <Globe size={24} /> },
                  { name: "Asia", icon: <Globe size={24} /> },
                ].map((region) => (
                  <div key={region.name} className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {region.icon}
                    </div>
                    <span className="text-sm font-medium text-slate-600">{region.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — OUR APPROACH */}
      <SectionWrapper id="approach" className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Approach</h2>
          <p className="text-lg text-slate-600">A rigorous, end-to-end operational methodology ensuring absolute success.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-slate-200 z-0 pr-[4px]">
            <div className="h-full bg-accent w-full origin-left"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mb-6 shadow-xl relative">
                <div className="absolute inset-2 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <LayoutGrid size={40} />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Design & Deploy</h3>
              <p className="text-slate-600 text-sm leading-relaxed px-4">
                We custom-architect forensic ecosystems tailored to jurisdictional requirements, rapidly deploying specialized hardware.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mb-6 shadow-xl relative">
                <div className="absolute inset-2 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Cpu size={40} />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Integrate & Operationalize</h3>
              <p className="text-slate-600 text-sm leading-relaxed px-4">
                Seamlessly fusing disparate tools—mobile, PC, network, OSINT—into a cohesive, operational investigative pipeline.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mb-6 shadow-xl relative">
                <div className="absolute inset-2 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <GraduationCap size={40} />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Train & Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed px-4">
                Continuous knowledge transfer and technical support to ensure your personnel can extract and defend evidence under pressure.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION 6 — CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-12 md:p-16 max-w-4xl mx-auto shadow-sm">
            <CheckCircle2 size={48} className="text-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Partner with us to build a stronger investigative future.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <CTAButton className="h-12 px-8 shadow-md">
                <Link href="/services">Our Services</Link>
              </CTAButton>
              <CTAButton variant="outline" className="h-12 px-8 border-slate-300 text-slate-700 hover:bg-slate-100">
                <Link href="/#contact">Contact Us</Link>
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
