import { SectionWrapper } from "@/components/SectionWrapper";
import { CTAButton } from "@/components/CTAButton";
import { ContactForm } from "@/components/ContactForm";
import {
  ArrowRight, Shield, GraduationCap, Building,
  Monitor, Smartphone, Network, Link as LinkIcon, Search, Video, Globe
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Parall Forensics",
    "url": "https://parallforensics.com",
    "logo": "https://parallforensics.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2A 2nd Floor, Trendset Jayabheri Connect, Kondapur",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500081",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "ceodesk.cs@paradigmit.com",
      "contactType": "general enquiry"
    }
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[20%] left-[-10%] w-[50vh] h-[50vh] bg-blue-100/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[60vh] h-[60vh] bg-teal-50/30 rounded-full blur-[140px]" />
          <div className="absolute inset-0 bg-white opacity-[0.03] bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50/50 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-600">Member of ParadigmIT Group | 20+ Years of Excellence</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Empowering Investigations.<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Securing the Digital Frontier.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Advanced Digital Forensics Solutions for Law Enforcement & Government Agencies
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton className="w-full sm:w-auto text-base h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200">
                Explore Solutions
              </CTAButton>
              <CTAButton variant="outline" className="w-full sm:w-auto text-base h-12 px-8 group border-slate-200 text-slate-700 hover:bg-slate-50">
                Contact Us
              </CTAButton>
            </div>

            {/* Stats Strip */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm text-slate-400 font-medium tracking-wide uppercase">
              <span>10+ States Engaged</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200 hidden sm:block"></span>
              <span>13+ Forensic Domains</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200 hidden sm:block"></span>
              <span>Trusted by Law Enforcement</span>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper id="what-we-do" className="bg-white relative z-20 -mt-8 pt-24 rounded-t-3xl border-t border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 font-bold text-xs tracking-widest uppercase mb-4">
            WHAT WE DO
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Core Competencies</h2>
          <p className="text-slate-600 text-lg">Delivering robust, full-spectrum cyber capabilities to critical infrastructure and law enforcement.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="text-blue-600" size={32} />,
              title: "Digital Forensic Solutions",
              desc: "Deep extraction, decoding, and analysis of digital evidence from diverse endpoints to uncover critical investigative leads."
            },
            {
              icon: <GraduationCap className="text-blue-600" size={32} />,
              title: "Forensic Training Programs",
              desc: "Capacity building and elite training modules designed by veterans to prepare agents against next-generation cyber threats."
            },
            {
              icon: <Building className="text-blue-600" size={32} />,
              title: "Government Cyber Lab Setup",
              desc: "Turnkey infrastructure provisioning, hardware integration, and software deployment for state-of-the-art regional cyber labs."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-8 rounded-2xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors uppercase text-sm tracking-wide">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-[1rem]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="why-parall" className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="bg-slate-900 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden shadow-2xl order-2 lg:order-1">
            <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-blue-600/30 blur-[80px] rounded-full"></div>
            <h3 className="text-3xl font-bold mb-8">Member of ParadigmIT</h3>
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
                <span>Dedicated to national security & forensic excellence</span>
              </li>
            </ul>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">Why Choose Us</div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Bridging the Gap Between <span className="text-blue-600">Technology</span> and <span className="text-teal-600">National Security</span>.
            </h2>
            <div className="text-xl text-slate-600 leading-relaxed border-l-4 border-blue-600 pl-6 mb-8 italic">
              &quot;We enable governments and law enforcement agencies to combat evolving cyber threats with precision.&quot;
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">
              Parall Forensics brings enterprise technical architecture to the frontline of digital investigations. We help agencies build future-ready forensic ecosystems.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="products" className="bg-white py-24 border-t border-slate-100">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-teal-200 bg-teal-50 text-teal-600 font-bold text-xs tracking-widest uppercase mb-4">
              OUR ARSENAL
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Forensic Technology</h2>
            <p className="text-lg text-slate-600">Enterprise-grade tools for penetrating the most complex digital ecosystems.</p>
          </div>
          <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md mt-6 md:mt-0">
            View All Products <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <Monitor size={24} />, title: "Computer Forensics", desc: "Retrieve deleted data and analyze system artifacts." },
            { icon: <Smartphone size={24} />, title: "Mobile Forensics", desc: "Bypass locks and extract encrypted mobile communications." },
            { icon: <Network size={24} />, title: "Network Forensics", desc: "Monitor packets and trace sophisticated cyber intrusions." },
            { icon: <LinkIcon size={24} />, title: "Blockchain Investigation", desc: "De-anonymize illicit cryptocurrency transactions." },
            { icon: <Search size={24} />, title: "OSINT Tools", desc: "Scrape and synthesize intelligence from the deep open web." },
            { icon: <Video size={24} />, title: "Audio-Video Forensics", desc: "Enhance, authenticate, and clarify multimedia evidence." },
          ].map((cat, idx) => (
            <div key={idx} className="bg-white p-7 rounded-xl border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all group shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-slate-50 text-blue-600 flex items-center justify-center mb-5 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {cat.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 uppercase text-sm tracking-wide">{cat.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{cat.desc}</p>
              <Link href="/products" className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <section id="contact" className="py-24 px-6 relative bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-[2.5rem] p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-white/5 opacity-20 bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to modernize your digital investigation?
                </h2>
                <p className="text-blue-50 text-lg mb-10 leading-relaxed">
                  Get in touch with our experts to discuss custom lab setups, forensic tools, and agency-wide training programs.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-white font-medium">
                  <div className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold text-sm">
                    <Shield size={16} />
                    Secure & Confidential
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold text-sm">
                    Response within 24 hours
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[20px] p-8 md:p-10 shadow-2xl relative">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-sans">Get In Touch</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
