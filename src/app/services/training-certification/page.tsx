import { SectionWrapper } from "@/components/SectionWrapper";
import { ContactForm } from "@/components/ContactForm";
import { ChevronRight, ArrowRight, GraduationCap, ShieldCheck, Briefcase, Users } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training and Certification | Parall Forensics",
  description: "Forensic training programs for law enforcement, professionals, and students.",
};

export default function TrainingCertification() {
  return (
    <main className="min-h-screen bg-surface">
      <section className="relative pt-32 pb-20 bg-background overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-50 opacity-40"></div>
          <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[80px]" />
        </div>
        <div className="max-w-[75%] relative z-10 mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-500 mb-6 text-sm font-medium tracking-wide uppercase">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-slate-900 font-semibold">Training and Certification</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Training and Certification
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Building skilled forensic professionals for effective investigation
          </p>
        </div>
      </section>

      <SectionWrapper className="py-24 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Forensic Training Programs
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Technology alone is not enough — skilled personnel are critical to effective investigation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
                <ShieldCheck className="text-primary mb-3" size={28} />
                <h4 className="font-bold text-slate-900 mb-1">Law Enforcement</h4>
                <p className="text-sm text-slate-500">Officers & Investigators</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
                <Briefcase className="text-primary mb-3" size={28} />
                <h4 className="font-bold text-slate-900 mb-1">Professionals</h4>
                <p className="text-sm text-slate-500">Lawyers & Managers</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm sm:col-span-2">
                <Users className="text-primary mb-3" size={28} />
                <h4 className="font-bold text-slate-900 mb-1">Students & Academics</h4>
                <p className="text-sm text-slate-500">Aspiring Forensic Analysts & Researchers</p>
              </div>
            </div>

            <div className="mb-10">
              <h4 className="text-sm uppercase tracking-wider font-bold text-slate-400 mb-4">Key Training Highlights</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Practical, investigation-oriented learning
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Hands-on operational readiness
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Legal framework understanding
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  Real-world digital evidence handling
                </li>
              </ul>
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Enquire About Training <ArrowRight size={18} />
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-bl from-secondary/10 to-accent/20 rounded-[2.5rem] transform -rotate-1 blur-sm"></div>
            <div className="bg-slate-100 rounded-[2rem] p-10 relative overflow-hidden shadow-xl border border-slate-200 aspect-square flex flex-col items-center justify-center text-center">
              <GraduationCap size={120} className="text-secondary mb-8 drop-shadow-md" strokeWidth={1} />
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mb-6"></div>
              <h3 className="text-2xl font-bold text-slate-800">Capacity Building</h3>
              <p className="text-slate-500 mt-2">Elite operational methodology</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-[75%] mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-[2rem] p-12 md:p-16 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight max-w-3xl mx-auto">
                Interested in our training programs?
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                <a href="#contact" className="inline-flex items-center justify-center h-14 px-10 bg-white text-primary hover:bg-slate-100 rounded-md font-medium transition-colors">
                  Get Started
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
