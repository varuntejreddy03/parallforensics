import { CTAButton } from "@/components/CTAButton";
import { ProductCatalog } from "./ProductCatalog";
import { ChevronRight, ArrowRight, Link as LinkIcon, HelpCircle } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Tools | Parall Forensics",
  description: "A comprehensive suite of digital forensic tools across 13 specialized domains. Advanced digital forensic software for law enforcement.",
};

export default function Products() {
  return (
    <main className="min-h-screen bg-surface">

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
            <span className="text-slate-900 font-semibold">Products</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Forensic Products & Technologies
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed border-t border-slate-100 pt-6">
            A comprehensive suite of digital forensic tools across 13 specialized domains
          </p>
        </div>
      </section>

      {/* SECTIONS 2 & 3 — PRODUCT CATALOG COMPONENT */}
      <ProductCatalog />

      {/* SECTION 4 — FEATURED CATEGORY HIGHLIGHT */}
      <section className="bg-slate-50 text-slate-900 relative overflow-hidden py-24 border-y border-slate-100">
        <div className="absolute top-0 right-0 w-full h-full bg-blue-500/5 opacity-50 pointer-events-none"></div>
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="bg-white border border-slate-200 rounded-3xl p-10 md:p-14 shadow-xl lg:flex items-center justify-between gap-12">
            <div className="flex-1 mb-8 lg:mb-0">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-4 border border-blue-100 bg-blue-50 px-3 py-1.5 rounded-full">
                <span className="animate-pulse w-2 h-2 rounded-full bg-blue-600"></span> Category Spotlight
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center gap-4 text-slate-900 leading-tight">
                <LinkIcon className="text-blue-600 shrink-0" size={48} />
                Blockchain & Cryptocurrency Investigation
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Advanced blockchain analytics tools to trace cryptocurrency transactions, decode smart contracts, analyze illicit wallets, and generate court-ready intelligence for digital asset recovery.
              </p>
            </div>

            <div className="shrink-0">
              <CTAButton className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-10 text-lg shadow-lg">
                <Link href="/services#contact-banner" className="flex items-center gap-2">
                  Enquire Now <ArrowRight size={20} />
                </Link>
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — PRODUCT ENQUIRY CTA */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-12 md:p-16 max-w-4xl mx-auto shadow-sm">
            <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-8 mx-auto border border-blue-100 shadow-sm">
              <HelpCircle size={40} className="text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Need help selecting the right forensic tools for your agency?
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
              Our experts can assess your current capabilities and recommend a customized suite of technology tailored to your exact operational requirements.
            </p>
            <CTAButton className="h-14 px-10 shadow-md bg-accent text-white hover:bg-accent/90">
              <Link href="/services#contact-banner">Request a Product Demo</Link>
            </CTAButton>
          </div>
        </div>
      </section>

    </main>
  );
}
