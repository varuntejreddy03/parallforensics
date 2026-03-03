import { SectionWrapper } from "@/components/SectionWrapper";
import {
  ArrowRight, Shield, GraduationCap, Building, Globe
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
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[20%] left-[-10%] w-[50vh] h-[50vh] bg-blue-100/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[60vh] h-[60vh] bg-teal-50/30 rounded-full blur-[140px]" />
          <div className="absolute inset-0 bg-white opacity-[0.03] bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Empowering Investigations.<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Securing the Digital Frontier.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Advanced Digital Forensics Solutions for Law Enforcement & Government Agencies
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/services/digital-forensic-solutions" className="w-full sm:w-auto text-base h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 rounded-md inline-flex items-center justify-center font-medium transition-colors">
                Explore Solutions
              </Link>
              <Link href="/contact" className="w-full sm:w-auto text-base h-12 px-8 border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-md inline-flex items-center justify-center font-medium transition-colors">
                Contact Us
              </Link>
            </div>

            {/* Auto-scrolling Image Carousel */}
            <div className="mt-16 overflow-hidden">
              <div className="flex gap-6 animate-scroll">
                {[
                  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
                  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
                  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=250&fit=crop",
                  "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=250&fit=crop",
                  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
                  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
                  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
                  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=250&fit=crop",
                  "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=250&fit=crop",
                  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop"
                ].map((src, idx) => (
                  <div key={idx} className="flex-shrink-0 w-64 h-40 bg-slate-200 rounded-lg overflow-hidden">
                    <img src={src} alt="Digital Forensics" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper id="what-we-do" className="bg-white relative z-20 -mt-8 pt-24 rounded-t-3xl border-t border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="text-blue-600" size={32} />,
              title: "Digital Forensic Infrastructure Solutions",
              desc: "End-to-end design, deployment, and integration of advanced digital forensic laboratories and investigation ecosystems.",
              link: "/services/digital-forensic-solutions",
              button: "Services"
            },
            {
              icon: <GraduationCap className="text-blue-600" size={32} />,
              title: "Digital Forensic Training Programs",
              desc: "Specialized, hands-on training programs empowering investigators, analysts, and law enforcement with practical forensic expertise.",
              link: "/services/training-certification",
              button: "Training"
            },
            {
              icon: <Building className="text-blue-600" size={32} />,
              title: "Legal and Technical Consultation",
              desc: "Expert advisory services bridging legal compliance and technical forensics to strengthen investigations and courtroom outcomes.",
              link: "/products",
              button: "Products"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-8 rounded-2xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-[1rem] mb-6">
                {item.desc}
              </p>
              <Link href={item.link} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors">
                {item.button} <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="why-parall" className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
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

      <section id="contact" className="py-24 px-6 relative bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Investigation Capabilities?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Connect with our experts to discuss custom forensic solutions tailored to your needs.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </main>
  );
}
