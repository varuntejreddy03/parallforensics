// Removed SectionWrapper
import { CTAButton } from "@/components/CTAButton";
import {
  ChevronRight, Handshake, Network, Mail, Building2
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Partners | Parall Forensics - Global Technology Network",
  description: "Parall Forensics is building a powerful network of global forensic technology partners, tool vendors, and research institutions.",
};

export default function Partners() {
  return (
    <main className="min-h-screen bg-surface flex flex-col">

      {/* SECTION 1 — PAGE HERO */}
      <section className="relative pt-32 pb-20 bg-background overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-50 opacity-40"></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-500 mb-6 text-sm font-medium tracking-wide uppercase">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-slate-900 font-semibold">Partners</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Our Partners
          </h1>
          <div className="inline-flex items-center justify-center py-2 px-6 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-medium tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse mr-3"></span> Coming Soon
          </div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We&apos;re building a powerful network of global forensic technology partners.
          </p>
        </div>
      </section>

      {/* SECTION 2 — PLACEHOLDER STATE */}
      <section className="py-24 flex-1 flex flex-col justify-center items-center">
        <div className="container mx-auto px-6 max-w-4xl text-center">

          <div className="w-32 h-32 mx-auto bg-white rounded-[2rem] shadow-xl border border-slate-100 flex items-center justify-center mb-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Network size={56} className="text-accent absolute opacity-20 -left-4 -bottom-4 group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
            <Handshake size={48} className="text-primary relative z-10" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Partner Ecosystem — <span className="text-slate-400 font-light">Coming Soon</span>
          </h2>

          <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            We are in the process of establishing strategic partnerships with leading global forensic technology providers. Our partner network will span across cutting-edge tool vendors, specialized technology integrators, and premier research institutions.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 max-w-2xl mx-auto shadow-sm">
            <Mail className="text-secondary mx-auto mb-4" size={32} />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Interested in Partnering With Us?</h3>
            <p className="text-slate-600 mb-8">
              Reach out directly to our executive desk to explore symbiotic opportunities.
              <br />
              <a href="mailto:ceodesk.cs@paradigmit.com" className="text-accent font-semibold hover:underline mt-2 inline-block">
                ceodesk.cs@paradigmit.com
              </a>
            </p>
            <CTAButton className="h-12 px-8 shadow-md mx-auto">
              <Link href="/services#contact-banner">Contact Us</Link>
            </CTAButton>
          </div>

        </div>
      </section>

      {/* SECTION 3 — PARADIGMIT GROUP AFFILIATION */}
      <section className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-500/5 opacity-30 pointer-events-none"></div>
          <div className="absolute -left-32 bottom-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <div className="shrink-0 w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-white border border-slate-200 flex items-center justify-center p-6 shadow-xl group hover:border-blue-400 transition-colors">
              <div className="flex flex-col items-center">
                <svg width="60" height="60" viewBox="0 0 100 100" className="text-blue-600 group-hover:scale-105 transition-transform">
                  <polygon points="50 5, 95 25, 95 75, 50 95, 5 75, 5 25" fill="none" stroke="currentColor" strokeWidth="6" />
                  <text x="50" y="65" fontSize="40" fill="currentColor" fontWeight="bold" textAnchor="middle">P</text>
                </svg>
                <span className="text-slate-900 font-bold tracking-widest uppercase mt-4 text-xs">ParadigmIT</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-4 justify-center md:justify-start">
                <Building2 size={20} />
                <span className="font-semibold uppercase tracking-wider text-sm">Parent Organization</span>
              </div>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                <strong className="font-bold text-slate-900">Parall Forensics</strong> is a proud member of the <strong className="font-bold text-slate-900">ParadigmIT Group</strong> — a global technology and AI innovation company with 20+ years of experience operating across North America, Europe, Middle East, and Asia.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
