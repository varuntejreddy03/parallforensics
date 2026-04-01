"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Company", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Products", href: "/products" },
  { name: "Partners", href: "/partners" },
  { name: "Events Calendar", href: "/news-events" },
];

const servicesDropdown = [
  { name: "Digital Forensic Solutions", href: "/services/digital-forensic-solutions" },
  { name: "Training and Certification", href: "/services/training-certification" },
];

function DesktopDropdown({
  label,
  items,
  isOpen,
  setIsOpen,
}: {
  label: string;
  items: Array<{ name: string; href: string }>;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
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
        {label}
        <ChevronDown size={11} />
      </button>
      <div
        className={cn(
          "absolute left-0 top-full pt-2 transition-opacity duration-200",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div
          className="z-50 w-64 rounded-md py-2 shadow-lg"
          style={{
            background: "rgba(10, 18, 40, 0.98)",
            border: "1px solid rgba(43, 127, 232, 0.2)",
          }}
        >
          {items.map((item) => (
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
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      style={{
        background: "rgba(10, 18, 40, 0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(43, 127, 232, 0.15)",
        height: "72px",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 sm:px-6 lg:px-8">
        <BrandLogo priority />

        <nav
          className="hidden items-center lg:flex"
          style={{ gap: "28px" }}
          aria-label="Main Navigation"
        >
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

          <DesktopDropdown
            label="Services"
            items={servicesDropdown}
            isOpen={servicesOpen}
            setIsOpen={setServicesOpen}
          />

          <Link
            href="/contact"
            style={{
              background: "transparent",
              border: "1.5px solid #2B7FE8",
              color: "#2B7FE8",
              borderRadius: "6px",
              padding: "10px 20px",
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

        <button
          className="rounded-md p-2 transition-colors lg:hidden"
          style={{ color: "#CBD5E8" }}
          onClick={() => {
            if (isOpen) {
              closeMobileMenu();
              return;
            }

            setIsOpen(true);
          }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute left-0 top-full max-h-[80vh] w-full overflow-y-auto shadow-xl lg:hidden"
          style={{
            background: "rgba(10, 18, 40, 0.98)",
            borderBottom: "1px solid rgba(43, 127, 232, 0.15)",
          }}
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="w-full rounded-md px-3 py-3 transition-colors"
                style={{ color: "#CBD5E8", fontSize: "15px", fontWeight: 500 }}
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            ))}

            <div className="w-full">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between rounded-md px-3 py-3 transition-colors"
                style={{ color: "#CBD5E8", fontSize: "15px", fontWeight: 500 }}
              >
                Services{" "}
                <ChevronDown
                  size={16}
                  className={cn("transition-transform", mobileServicesOpen && "rotate-180")}
                />
              </button>
              {mobileServicesOpen && (
                <div className="mt-1 space-y-1 pl-3">
                  {servicesDropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 transition-colors"
                      style={{ color: "#7B9FCC", fontSize: "13px" }}
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="mt-3 w-full rounded-md px-6 py-3 text-center"
              style={{
                border: "1.5px solid #2B7FE8",
                color: "#2B7FE8",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
