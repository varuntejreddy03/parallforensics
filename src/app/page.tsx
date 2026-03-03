"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { HeroAnimation } from "@/components/HeroAnimation";
import { ImageCarousel } from "@/components/ImageCarousel";
import {
  ArrowRight, Shield, Globe
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* SECTION 1 — HERO */}
      <HeroAnimation />

      <SectionWrapper id="what-we-do" className="bg-white relative z-20 -mt-8 pt-16 sm:pt-24 rounded-t-3xl border-t border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[
            {
              icon: "/ChatGPT Image Mar 3, 2026, 04_34_44 PM.png",
              title: "Digital Forensic Infrastructure Solutions",
              desc: "End-to-end design, deployment, and integration of advanced digital forensic laboratories and investigation ecosystems.",
              link: "/services/digital-forensic-solutions",
              button: "Services"
            },
            {
              icon: "/ChatGPT Image Mar 3, 2026, 04_27_36 PM.png",
              title: "Digital Forensic Training Programs",
              desc: "Specialized, hands-on training programs empowering investigators, analysts, and law enforcement with practical forensic expertise.",
              link: "/services/training-certification",
              button: "Training"
            },
            {
              icon: "/ChatGPT Image Mar 3, 2026, 04_27_35 PM.png",
              title: "Legal and Technical Consultation",
              desc: "Expert advisory services bridging legal compliance and technical forensics to strengthen investigations and courtroom outcomes.",
              link: "/products",
              button: "Products"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-5 sm:p-6 md:p-8 rounded-2xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group shadow-sm">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <Image src={item.icon} alt={item.title} fill className="object-contain" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors leading-tight">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                {item.desc}
              </p>
              <Link href={item.link} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors">
                {item.button} <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="why-parall" className="bg-slate-50 py-16 sm:py-24 border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
          <div className="bg-slate-900 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden shadow-2xl order-2 lg:order-1">
            <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-blue-600/30 blur-[80px] rounded-full"></div>
            <h3 className="text-3xl font-bold mb-8">Parall Forensics</h3>
            <ul className="space-y-8 text-lg font-light text-white/90">
              <li className="flex items-center gap-5">
                <span className="text-teal-400 font-bold text-4xl">20+</span>
                <span>Years of global technology leadership</span>
              </li>
              <li className="flex items-center gap-5">
                <Globe className="text-blue-400 shrink-0" size={32} />
                <span>Global operations across 4 continents</span>
              </li>
              <li className="flex items-center gap-5">
                <Shield className="text-teal-400 shrink-0" size={32} />
                <span>Dedicated to Nation Building and Technological Excellence</span>
              </li>
            </ul>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">Why Choose Us</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 leading-tight">
              Bridging the Gap Between Traditional Investigation and Global Technology Standards
            </h2>
            <div className="text-xl text-slate-600 leading-relaxed border-l-4 border-blue-600 pl-6 mb-8 italic">
              &quot;…combat evolving investigative and policing challenges with precision.&quot;
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">
              Parall Forensics brings enterprise technical architecture to the frontline of digital investigations. We help agencies build future-ready forensic ecosystems.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <section className="py-16 sm:py-20 px-4 sm:px-6 relative bg-white border-t border-slate-100">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            Ready to take action?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services/digital-forensic-solutions" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-base font-semibold transition-colors shadow-lg">
              Explore Solutions
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 px-8 py-3 rounded-lg text-base font-semibold transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Investigation Capabilities?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Connect with our experts to discuss custom forensic solutions tailored to your needs.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors shadow-lg">
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </main>
  );
}
