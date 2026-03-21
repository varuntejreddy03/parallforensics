"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";

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
    <header style={{
      background: "rgba(10, 18, 40, 0.97)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(43, 127, 232, 0.15)",
      height: "68px",
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 50,
      display: "flex",
      alignItems: "center",
    }}>
      <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center px-6 lg:px-12">

        {/* Logo */}
        <Link href="/" aria-label="Home" className="flex items-center gap-2 group shrink-0">
          <div className="relative shrink-0" style={{ height: "48px", width: "auto", minWidth: "160px" }}>
            <Image
              src="/parall-logo-white-text.png"
              alt="Parall Forensics Logo"
              fill
              className="object-contain"
              style={{ background: "transparent" }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center" style={{ gap: "36px" }} aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{
                color: "#CBD5E8",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.5px",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={e => (e.currentTarget.style.color = "#CBD5E8")}
            >
              {link.name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1"
              style={{
                color: "#CBD5E8",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.5px",
                transition: "color 0.2s",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={e => (e.currentTarget.style.color = "#CBD5E8")}
            >
              Services
              <ChevronDown size={11} />
            </button>
            <div className={cn(
              "absolute top-full left-0 pt-2 transition-opacity duration-200",
              servicesOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
              <div className="w-64 rounded-md shadow-lg py-2 z-50" style={{
                background: "rgba(10, 18, 40, 0.98)",
                border: "1px solid rgba(43, 127, 232, 0.2)",
              }}>
                {servicesDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-sm transition-colors"
                    style={{ color: "#CBD5E8", fontSize: "13px" }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = "#FFFFFF";
                      e.currentTarget.style.background = "rgba(43, 127, 232, 0.1)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = "#CBD5E8";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Us Button */}
          <Link
            href="/contact"
            style={{
              background: "transparent",
              border: "1.5px solid #2B7FE8",
              color: "#2B7FE8",
              borderRadius: "6px",
              padding: "10px 24px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "1px",
              transition: "all 0.25s",
              textDecoration: "none",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#2B7FE8";
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#2B7FE8";
            }}
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-md transition-colors"
          style={{ color: "#CBD5E8" }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full shadow-xl max-h-[80vh] overflow-y-auto" style={{
          background: "rgba(10, 18, 40, 0.98)",
          borderBottom: "1px solid rgba(43, 127, 232, 0.15)",
        }}>
          <div className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="w-full py-3 px-3 rounded-md transition-colors"
                style={{ color: "#CBD5E8", fontSize: "15px", fontWeight: 500 }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="w-full">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full py-3 px-3 rounded-md flex items-center justify-between transition-colors"
                style={{ color: "#CBD5E8", fontSize: "15px", fontWeight: 500 }}
              >
                Services <ChevronDown size={16} className={cn("transition-transform", servicesOpen && "rotate-180")} />
              </button>
              {servicesOpen && (
                <div className="pl-3 mt-1 space-y-1">
                  {servicesDropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-2 px-3 rounded-md transition-colors"
                      style={{ color: "#7B9FCC", fontSize: "13px" }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="w-full text-center mt-3 py-3 px-6 rounded-md"
              style={{
                border: "1.5px solid #2B7FE8",
                color: "#2B7FE8",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
