import { SectionWrapper } from "@/components/SectionWrapper";
import { CTAButton } from "@/components/CTAButton";
import { ContactForm } from "@/components/ContactForm";
import {
  ChevronRight, ArrowRight, ShieldCheck, GraduationCap,
  CheckCircle2, Briefcase, Users, LayoutDashboard, Settings, Wrench, HeadphonesIcon
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Parall Forensics - Digital Forensics Solutions",
  description: "End-to-end forensic capability building for law enforcement and government agencies. Digital forensics solutions, lab setup, and training programs.",
};

export default function Services() {
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
            <span className="text-slate-900 font-semibold">Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            End-to-end forensic capability building for law enforcement and government
          </p>
        </div>
      </section>

      {/* SECTION 2 — SERVICE 1: DIGITAL FORENSIC SOLUTIONS */}
      <SectionWrapper id="digital-forensics" className="py-24 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/20 rounded-[2.5rem] transform rotate-1 blur-sm"></div>
            <div className="bg-slate-100 rounded-[2rem] p-10 relative overflow-hidden shadow-xl border border-slate-200 aspect-square flex flex-col items-center justify-center text-center">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
              <ShieldCheck size={120} className="text-accent mb-8 drop-shadow-md" strokeWidth={1} />
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary rounded-full mb-6"></div>
              <h3 className="text-2xl font-bold text-slate-800">Advanced Extraction</h3>
              <p className="text-slate-500 mt-2">Zero-day capability infrastructure</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Digital Forensic Solutions
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
            <CTAButton>
              <Link href="/products" className="flex items-center gap-2">
                View Products <ArrowRight size={18} />
              </Link>
            </CTAButton>
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION 3 — SERVICE 2: TRAINING PROGRAMS */}
      <SectionWrapper id="training" className="py-24 bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Forensic Training Programs
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Technology alone is not enough — skilled personnel are critical to effective investigation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <ShieldCheck className="text-primary mb-3" size={28} />
                <h4 className="font-bold text-slate-900 mb-1">Law Enforcement</h4>
                <p className="text-sm text-slate-500">Officers & Investigators</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <Briefcase className="text-primary mb-3" size={28} />
                <h4 className="font-bold text-slate-900 mb-1">Professionals</h4>
                <p className="text-sm text-slate-500">Lawyers & Managers</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sm:col-span-2">
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

            <CTAButton variant="outline" className="text-accent border-accent hover:bg-accent hover:text-white">
              <Link href="#contact-banner" className="flex items-center gap-2">
                Enquire About Training <ArrowRight size={18} />
              </Link>
            </CTAButton>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-bl from-secondary/10 to-accent/20 rounded-[2.5rem] transform -rotate-1 blur-sm"></div>
            <div className="bg-slate-100 rounded-[2rem] p-10 relative overflow-hidden shadow-xl border border-slate-200 aspect-square flex flex-col items-center justify-center text-center">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
              <GraduationCap size={120} className="text-secondary mb-8 drop-shadow-md" strokeWidth={1} />
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mb-6"></div>
              <h3 className="text-2xl font-bold text-slate-800">Capacity Building</h3>
              <p className="text-slate-500 mt-2">Elite operational methodology</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION 4 — SERVICE DELIVERY MODEL */}
      <section className="py-24 bg-slate-50 relative overflow-hidden text-slate-900 border-y border-slate-100">
        <div className="absolute inset-0 bg-blue-500/5 opacity-50 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Engage</h2>
            <p className="text-lg text-slate-600">Our structured, milestone-driven delivery process.</p>
          </div>

          <div className="relative">
            {/* The Connecting Line */}
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-blue-100 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", icon: <LayoutDashboard size={32} />, title: "Assessment", desc: "Evaluating jurisdictional requirements and current capabilities." },
                { step: "02", icon: <Settings size={32} />, title: "Solution Design", desc: "Architecting bespoke infrastructure and software stacks." },
                { step: "03", icon: <Wrench size={32} />, title: "Deployment & Integration", desc: "On-site installation and ecosystem unification." },
                { step: "04", icon: <HeadphonesIcon size={32} />, title: "Training & Support", desc: "Continuous enablement and technical assistance." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center relative group">
                  <div className="w-24 h-24 rounded-2xl bg-white border border-slate-100 shadow-xl flex items-center justify-center text-blue-600 mb-6 relative group-hover:border-blue-400 transition-colors z-10">
                    {item.icon}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed px-4 group-hover:text-slate-900 transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — ENGAGEMENT CTA BANNER */}
      <section id="contact-banner" className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-[2rem] p-12 md:p-16 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight max-w-3xl mx-auto">
                Looking to modernize your state&apos;s forensic infrastructure?
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                <CTAButton className="h-14 px-10 bg-secondary hover:bg-secondary/90 text-white text-lg shadow-lg">
                  <a href="#inline-contact">Start a Conversation</a>
                </CTAButton>
                <CTAButton variant="outline" className="h-14 px-10 border-white/50 text-white hover:bg-white hover:text-primary text-lg">
                  <Link href="/products">Explore Products</Link>
                </CTAButton>
              </div>
            </div>
          </div>
          {/* Quick contact form to fulfill 'scrolls to contact form' expectation explicitly */}
          <div className="mt-16 max-w-3xl mx-auto" id="inline-contact">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Enquire Now</h3>
            <ContactForm />
          </div>
        </div>
      </section>

    </main>
  );
}
