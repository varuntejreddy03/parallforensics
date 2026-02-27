"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CTAButton } from "./CTAButton";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Partners", href: "/partners" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scroll ? "bg-white/80 backdrop-blur-md shadow-sm py-4 border-b border-black/5" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Home">
          <div className="flex items-center shrink-0 relative w-[220px] h-[50px]">
            <Image src="/logo.jpeg" alt="Parall Forensics Logo" fill className="object-contain transition-transform group-hover:scale-105" priority />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={cn(
              "text-sm transition-colors font-medium",
              "text-slate-700 hover:text-blue-600"
            )}>
              {link.name}
            </Link>
          ))}
          <CTAButton>
            <Link href="/contact" className="text-white">Get in Touch</Link>
          </CTAButton>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-md transition-colors",
            scroll ? "text-slate-900 hover:bg-black/5" : "text-slate-800 hover:bg-black/5"
          )}
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
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 flex flex-col items-start px-6 py-4 gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg text-slate-800 hover:text-blue-600 font-medium w-full py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 w-full">
            <CTAButton className="w-full">
              <Link href="/contact" onClick={() => setIsOpen(false)}>Get in Touch</Link>
            </CTAButton>
          </div>
        </div>
      )}
    </header>
  );
}
