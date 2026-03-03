import { SectionWrapper } from "@/components/SectionWrapper";
import { ContactForm } from "@/components/ContactForm";
import { ChevronRight, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Forensic Solutions | Parall Forensics",
  description: "Advanced digital forensic environments tailored for law enforcement and investigative bodies.",
};

export default function DigitalForensicSolutions() {
  return (
    <main className="min-h-screen bg-surface">
      <section className="relative pt-32 pb-20 bg-background overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-50 opacity-40"></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-[75%] relative z-10 mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-500 mb-6 text-sm font-medium tracking-wide uppercase">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-slate-900 font-semibold">Digital Forensic Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Digital Forensic Solutions
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Advanced digital forensic environments for law enforcement and investigative bodies
          </p>
        </div>
      </section>

      <SectionWrapper className="py-24 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/20 rounded-[2.5rem] transform rotate-1 blur-sm"></div>
            <div className="bg-slate-100 rounded-[2rem] p-10 relative overflow-hidden shadow-xl border border-slate-200 aspect-square flex flex-col items-center justify-center text-center">
              <ShieldCheck size={120} className="text-accent mb-8 drop-shadow-md" strokeWidth={1} />
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary rounded-full mb-6"></div>
              <h3 className="text-2xl font-bold text-slate-800">Advanced Extraction</h3>
              <p className="text-slate-500 mt-2">Zero-day capability infrastructure</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Comprehensive Forensic Infrastructure
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We design, implement, and operationalize advanced digital forensic environments tailored to the needs of law enforcement and investigative bodies.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Acquire, preserve, and analyze digital evidence",
                "Strengthen cybercrime and digital evidence investigation capabilities",
                "Modernize forensic laboratories",
                "Deploy industry-leading forensic technologies",
                "Establish scalable and future-ready forensic infrastructure"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={24} />
                  <span className="text-slate-700 text-[1.05rem]">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/products" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              View Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-[75%] mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-[2rem] p-12 md:p-16 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight max-w-3xl mx-auto">
                Ready to modernize your forensic infrastructure?
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                <a href="#contact" className="inline-flex items-center justify-center h-14 px-10 bg-white text-primary hover:bg-slate-100 rounded-md font-medium transition-colors">
                  Start a Conversation
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 max-w-3xl mx-auto" id="contact">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Enquire Now</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
