import { ContactFormExtended } from "./ContactFormExtended";
import { ChevronRight, Mail, User2, MapPin, Clock, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Parall Forensics",
  description: "Get in touch to discuss your forensic infrastructure needs. Contact Parall Forensics in Hyderabad, Telangana.",
};

export default function Contact() {
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
            <span className="text-slate-900 font-semibold">Contact</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Get in touch to discuss your forensic infrastructure needs
          </p>
        </div>
      </section>

      {/* SECTION 2 — TWO-COLUMN LAYOUT */}
      <section className="py-24 bg-surface relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* LEFT COLUMN — Contact Information */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-xs tracking-wider uppercase mb-6">
                  Reach Us Directly
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  Always ready to assist your agency
                </h2>
              </div>

              <div className="space-y-6 flex-1 drop-shadow-sm">

                {/* Contact Card 1 */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-accent/40 transition-colors flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                    <User2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Digital Forensic Manager</h4>
                    <p className="text-slate-600 mb-2">Vikas Saraswat</p>
                    <a href="mailto:vikas.s@paradigmit.com" className="text-accent font-medium hover:underline inline-flex items-center gap-1">
                      <Mail size={14} /> vikas.s@paradigmit.com
                    </a>
                  </div>
                </div>

                {/* Contact Card 2 */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-accent/40 transition-colors flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">General Enquiries</h4>
                    <p className="text-slate-500 mb-2 text-sm">For all other operational discussions</p>
                    <a href="mailto:ceodesk.cs@paradigmit.com" className="text-accent font-medium hover:underline inline-flex items-center gap-1">
                      <Mail size={14} /> ceodesk.cs@paradigmit.com
                    </a>
                  </div>
                </div>

                {/* Address Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-accent/40 transition-colors flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2">Headquarters</h4>
                    <address className="not-italic text-slate-600 leading-relaxed text-[0.95rem]">
                      <strong className="text-slate-800 font-semibold block mb-1">Parall Forensics</strong>
                      2A, 2nd Floor, Trendset Jayabheri Connect,<br />
                      Near Kothaguda Junction, Laxmi Cyber City,<br />
                      Whitefields, Kondapur,<br />
                      Hyderabad, Telangana 500081
                    </address>
                  </div>
                </div>

              </div>

              {/* Google Maps Embed */}
              <div className="mt-8 rounded-2xl overflow-hidden h-64 shadow-md border border-slate-200 bg-slate-100 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0142839217036!2d78.36159677516654!3d17.459021083439908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc5b341ced%3A0xea8ce7942cf7249b!2sTrendset%20Jayabheri%20Connect!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Parall Forensics Office Location"
                  className="absolute inset-0"
                ></iframe>
              </div>

            </div>

            {/* RIGHT COLUMN — Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmNvb3JkaW5hdGU9Im1hbnVhbCI+CjxnIHN0cm9rZT0iIzFCM0E2QyIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBvcGFjaXR5PSIwLjA1Ij4KPHBhdGggZD0iTTIwLDBMMzAsMTcuMzJMMjAsMzQuNjRMMDAsMzQuNjRMMCwxNy4zMloiLz4KPC9nPgo8L3N2Zz4=')] bg-[length:40px_40px] pointer-events-none rounded-tr-[2rem]"></div>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Send us a message</h3>
                <p className="text-slate-500 mb-8">Fill out the form below and our team will securely contact you.</p>

                <ContactFormExtended />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — QUICK INFO STRIP */}
      <section className="bg-slate-50 text-slate-900 py-12 relative overflow-hidden border-t border-slate-100">
        <div className="absolute inset-0 bg-blue-500/5 opacity-30 pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200">

            <div className="flex flex-col items-center justify-center text-center p-6 sm:bg-white md:bg-transparent rounded-2xl md:rounded-none">
              <Mail className="text-blue-600 mb-4" size={32} />
              <h4 className="font-bold text-lg mb-1 text-slate-900">Email Us</h4>
              <p className="text-slate-600">ceodesk.cs@paradigmit.com</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-6 sm:bg-white md:bg-transparent rounded-2xl md:rounded-none">
              <MessageSquare className="text-blue-600 mb-4" size={32} />
              <h4 className="font-bold text-lg mb-1 text-slate-900">Visit Us</h4>
              <p className="text-slate-600">Hyderabad Headquarters</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-6 sm:bg-white md:bg-transparent rounded-2xl md:rounded-none">
              <Clock className="text-blue-600 mb-4" size={32} />
              <h4 className="font-bold text-lg mb-1 text-slate-900">Response Time</h4>
              <p className="text-slate-600">Within 24 Business Hours</p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
