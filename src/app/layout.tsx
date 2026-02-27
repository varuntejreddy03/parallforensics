import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://parallforensics.com"),
  title: {
    default: "Parall Forensics | Digital Forensics Solutions for Law Enforcement India",
    template: "%s | Parall Forensics"
  },
  description: "Parall Forensics provides advanced digital forensic tools, cyber lab setup, and training for state governments and law enforcement agencies across India.",
  keywords: "Parall Forensics, Digital Forensics Company India, Cyber Forensics Hyderabad, Law Enforcement Forensic Tools, Digital Evidence Analysis, Cybercrime Investigation, State Police Cyber Lab Setup, Computer Forensic Tools, Mobile Forensic Software, Smartphone Data Extraction, Hard Disk Imaging, Write Blocker, Network Forensic Tools, Cloud Forensic Solutions, Memory Forensics, CDR Analysis Software, OSINT Tools, Cryptocurrency Investigation, Blockchain Forensics, Drone Forensic Tools, Digital Evidence Management, Evidence Storage Server, Audio Video Forensics, Deepfake Detection, Digital Forensics Training Police, Forensic Training India, Cybercrime Lab Modernization, Government Technology Partner, Hardware Imager, Damaged Hard Disk Repair, Data Recovery HDD, Fraud Investigation Tools, Bitcoin Investigation",
  openGraph: {
    title: "Parall Forensics | Digital Forensics Solutions",
    description: "Parall Forensics provides advanced digital forensic tools, cyber lab setup, and training for state governments and law enforcement agencies across India.",
    url: "https://parallforensics.com",
    siteName: "Parall Forensics",
    images: [{
      url: "/logo.png",
      width: 1200,
      height: 630,
      alt: "Parall Forensics Header Logo"
    }],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://parallforensics.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-outfit antialiased text-slate-800 bg-background`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
