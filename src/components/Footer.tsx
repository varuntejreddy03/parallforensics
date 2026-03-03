import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 pt-20 pb-10 text-slate-300 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none opacity-50" />
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-16">
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="inline-block group" aria-label="Home">
              <div className="flex items-center shrink-0 relative w-[200px] h-[45px] mb-4">
                <Image src="/parall-logo-white-text.png" alt="Parall Forensics Logo" fill className="object-contain transition-transform group-hover:scale-105" />
              </div>
            </Link>
            <p className="text-sm">
              Empowering Nation with Cutting Edge Technology Solutions
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-accent transition-colors">Products</Link></li>
              <li><Link href="/partners" className="hover:text-accent transition-colors">Partners</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/digital-forensic-solutions" className="hover:text-accent transition-colors">Digital Forensic Solutions</Link></li>
              <li><Link href="/services/training-certification" className="hover:text-accent transition-colors">Training and Certification</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary shrink-0 mt-0.5" size={18} />
                <span>
                  2A 2nd Floor, Trendset Jayabheri Connect,<br />
                  Near Kothaguda Junction, Kondapur,<br />
                  Hyderabad 500081, India
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="text-secondary shrink-0" size={18} />
                <a href="mailto:vikas.s@paradigmit.com" className="hover:text-blue-600 transition-colors">vikas.s@paradigmit.com</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="text-secondary shrink-0" size={18} />
                <a href="mailto:ceodesk.cs@paradigmit.com" className="hover:text-blue-400 transition-colors">ceodesk.cs@paradigmit.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>Copyright &copy; 2026 Parall Forensics.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
