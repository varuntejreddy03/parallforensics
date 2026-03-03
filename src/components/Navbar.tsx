"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Partners", href: "/partners" },
  ];

  const servicesDropdown = [
    { name: "Digital Forensic Solutions", href: "/services/digital-forensic-solutions" },
    { name: "Training and Certification", href: "/services/training-certification" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-800 shadow-md py-4">
      <div className="max-w-[1100px] mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Home">
          <div className="flex items-center shrink-0 relative w-[280px] h-[65px]">
            <Image src="/PARALL_FORENSICS_LOGO-BG-REMOVED (2).png" alt="Parall Forensics Logo" fill className="object-contain transition-transform group-hover:scale-105" style={{borderRadius: '12px'}} priority />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm transition-colors font-medium text-white hover:text-blue-400">
              {link.name}
            </Link>
          ))}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="text-sm transition-colors font-medium text-white hover:text-blue-400 flex items-center gap-1">
              Services <ChevronDown size={16} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                {servicesDropdown.map((item) => (
                  <Link key={item.name} href={item.href} className="block px-4 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-md transition-colors text-white hover:bg-white/10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-800 border-b border-slate-700 flex flex-col items-start px-6 py-6 gap-2 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base text-white hover:text-blue-400 font-medium w-full py-3 border-b border-slate-700"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-full border-b border-slate-700">
            <button onClick={() => setServicesOpen(!servicesOpen)} className="text-base text-white font-medium w-full py-3 flex items-center justify-between">
              Services <ChevronDown size={18} className={cn("transition-transform", servicesOpen && "rotate-180")} />
            </button>
            {servicesOpen && (
              <div className="pl-4 pb-3 space-y-2">
                {servicesDropdown.map((item) => (
                  <Link key={item.name} href={item.href} className="block text-sm text-slate-300 hover:text-blue-400 py-2" onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base font-medium transition-colors w-full text-center mt-2" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
