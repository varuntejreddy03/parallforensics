import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ChevronRight,
  Globe,
  GraduationCap,
  Cpu,
  LayoutGrid,
  MapPin,
} from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { SectionWrapper } from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "About Company | Parall Forensics - Digital Forensics Company",
  description:
    "Learn about Parall Forensics, a specialized digital forensics and cyber capability company headquartered in Hyderabad, India, and explore our major investigative capability projects.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-surface">
      <section className="relative overflow-hidden border-b border-slate-100 bg-background pb-20 pt-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-50 opacity-40" />
          <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-teal-500/5 blur-[80px]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 text-center sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wide text-slate-500">
            <Link href="/" className="transition-colors hover:text-blue-600">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="font-semibold text-slate-900">About Company</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            About Parall Forensics
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Empowering agencies with cutting-edge digital forensics and cyber capabilities.
          </p>
        </div>
      </section>

      <SectionWrapper id="who-we-are" className="py-24">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              Who We Are
            </div>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Specialized Digital Forensics and Cyber Capability
            </h2>
            <div className="space-y-6 text-justify text-lg leading-relaxed text-slate-600">
              <p>
                <strong>Parall Forensics</strong> is a specialized digital forensics and cyber capability company headquartered in Hyderabad, India, and a proud member of the ParadigmIT Group.
              </p>
              <p>
                We work at the intersection of technology, investigation, and national security, enabling governments and law enforcement agencies to combat evolving cyber threats with precision and confidence.
              </p>
              <p>
                From deploying sophisticated forensic labs for State Police organizations to providing deep, capacity-building training modules for frontline cyber teams, Parall ensures that investigative infrastructure outpaces criminal ingenuity.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -rotate-2 rounded-[2.5rem] bg-gradient-to-tr from-accent/20 to-secondary/20 blur-sm" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-200 shadow-xl">
              <div className="absolute inset-0 z-10 bg-primary/20 mix-blend-multiply" />
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Cybersecurity investigation center"
                fill
                quality={80}
                className="relative z-0 object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 rounded-xl border border-white bg-white/90 p-6 backdrop-blur-md">
                <p className="mb-1 font-bold text-primary">Empowering Agencies</p>
                <p className="text-sm text-slate-600">
                  Delivering mission-critical solutions since inception.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <section className="relative overflow-hidden border-y border-slate-100 bg-slate-50 py-24 text-slate-900">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-full bg-blue-500/5 opacity-30" />
        <div className="absolute -left-32 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <svg width="60" height="60" viewBox="0 0 100 100" className="text-blue-600 opacity-80">
                <polygon
                  points="50 5, 95 25, 95 75, 50 95, 5 75, 5 25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                />
                <text
                  x="50"
                  y="65"
                  fontSize="40"
                  fill="currentColor"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  P
                </text>
              </svg>
            </div>

            <h2 className="mb-8 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Backed by Global Technology Excellence
            </h2>
            <p className="mb-12 text-lg leading-relaxed text-slate-600 md:text-xl">
              As part of <strong className="text-slate-900">ParadigmIT Technology Services</strong>, a global technology and AI innovation company with 20+ years of experience, we leverage international best practices, secure engineering standards, and scalable architectures.
            </p>

            <div className="border-t border-slate-200 pt-8">
              <p className="mb-8 text-sm font-semibold uppercase tracking-widest text-slate-400">
                Our Operational Footprint
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                {[
                  { name: "India", icon: <MapPin size={24} /> },
                  { name: "North America", icon: <Globe size={24} /> },
                  { name: "Europe", icon: <Globe size={24} /> },
                  { name: "Middle East", icon: <Globe size={24} /> },
                  { name: "Asia", icon: <Globe size={24} /> },
                ].map((region) => (
                  <div key={region.name} className="group flex flex-col items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-100 bg-white text-blue-600 shadow-sm transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
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

      <SectionWrapper id="approach" className="bg-surface py-24">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Our Approach</h2>
          <p className="text-lg text-slate-600">
            A rigorous, end-to-end operational methodology ensuring absolute success.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-[10%] right-[10%] top-[60px] z-0 hidden h-1 bg-slate-200 pr-[4px] md:block">
            <div className="h-full w-full origin-left bg-accent" />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6 flex h-32 w-32 items-center justify-center rounded-full border-4 border-slate-100 bg-white shadow-xl">
                <div className="absolute inset-2 flex items-center justify-center rounded-full bg-primary/5 text-primary">
                  <LayoutGrid size={40} />
                </div>
                <div className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-accent text-sm font-bold text-white">
                  1
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">Design & Deploy</h3>
              <p className="px-4 text-sm leading-relaxed text-slate-600">
                We custom-architect forensic ecosystems tailored to jurisdictional requirements, rapidly deploying specialized hardware.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6 flex h-32 w-32 items-center justify-center rounded-full border-4 border-slate-100 bg-white shadow-xl">
                <div className="absolute inset-2 flex items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <Cpu size={40} />
                </div>
                <div className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-accent text-sm font-bold text-white">
                  2
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">Integrate & Operationalize</h3>
              <p className="px-4 text-sm leading-relaxed text-slate-600">
                Seamlessly fusing disparate tools, mobile, PC, network, and OSINT, into a cohesive operational investigative pipeline.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6 flex h-32 w-32 items-center justify-center rounded-full border-4 border-slate-100 bg-white shadow-xl">
                <div className="absolute inset-2 flex items-center justify-center rounded-full bg-accent/10 text-accent">
                  <GraduationCap size={40} />
                </div>
                <div className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-accent text-sm font-bold text-white">
                  3
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">Train & Support</h3>
              <p className="px-4 text-sm leading-relaxed text-slate-600">
                Continuous knowledge transfer and technical support to ensure your personnel can extract and defend evidence under pressure.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <section className="border-t border-slate-100 bg-white py-20">
        <div className="mx-auto w-full max-w-[1240px] px-5 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-slate-50 p-12 shadow-sm md:p-16">
            <CheckCircle2 size={48} className="mx-auto mb-6 text-secondary" />
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
              Partner with us to build a stronger investigative future.
            </h2>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <CTAButton className="h-12 px-8 shadow-md">
                <Link href="/services">Our Services</Link>
              </CTAButton>
              <CTAButton
                variant="outline"
                className="h-12 px-8 border-slate-300 text-slate-700 hover:bg-slate-100"
              >
                <Link href="/contact">Contact Us</Link>
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
