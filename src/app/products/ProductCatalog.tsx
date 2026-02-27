"use client";

import { useState } from "react";
import {
  Monitor, Smartphone, Network, HardDrive, Cloud, Server, Database,
  Search, Link as LinkIcon, Video, ShieldAlert, Zap, Cpu
} from "lucide-react";

type Category = "All" | "Computer & Storage" | "Mobile & Network" | "Investigation Tools" | "Infrastructure" | "Training Tools";

const products = [
  {
    id: 1,
    title: "Computer Forensics",
    category: "Computer & Storage",
    desc: "Forensic imaging, data recovery, and in-depth analysis of computer systems and storage media.",
    icon: <Monitor size={24} />,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    id: 2,
    title: "Mobile Forensics",
    category: "Mobile & Network",
    desc: "Extraction and analysis tools to retrieve, decode, and interpret data from smartphones and mobile devices.",
    icon: <Smartphone size={24} />,
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    id: 3,
    title: "Network Forensics",
    category: "Mobile & Network",
    desc: "Tools for capturing, monitoring, and analyzing network traffic, logs, and intrusion artifacts.",
    icon: <Network size={24} />,
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    id: 4,
    title: "Memory Forensics",
    category: "Computer & Storage",
    desc: "Acquire and analyze volatile memory (RAM) to detect malware, hidden processes, and live system artifacts.",
    icon: <Cpu size={24} />,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    id: 5,
    title: "Cloud Forensics",
    category: "Computer & Storage",
    desc: "Secure collection and analysis of digital evidence from cloud environments and SaaS applications.",
    icon: <Cloud size={24} />,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    id: 6,
    title: "Hardware Disk Imagers",
    category: "Computer & Storage",
    desc: "Write-blocking imaging devices to securely duplicate digital storage media without altering evidence.",
    icon: <HardDrive size={24} />,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    id: 7,
    title: "CDR Analyzer",
    category: "Investigation Tools",
    desc: "Process and visualize call detail records for communication mapping and intelligence generation.",
    icon: <Database size={24} />,
    color: "bg-emerald-500/10 text-emerald-600"
  },
  {
    id: 8,
    title: "Drone Forensics",
    category: "Investigation Tools",
    desc: "Extract and analyze flight logs, GPS data, and onboard storage from unmanned aerial vehicles (UAVs).",
    icon: <Search size={24} />,
    color: "bg-emerald-500/10 text-emerald-600"
  },
  {
    id: 9,
    title: "Evidence Storage Server",
    category: "Infrastructure",
    desc: "Centralized secure evidence storage with access control and chain-of-custody compliance.",
    icon: <Server size={24} />,
    color: "bg-amber-500/10 text-amber-600"
  },
  {
    id: 10,
    title: "Anti-Magnetic & Anti-Static (ESD) Storeroom",
    category: "Infrastructure",
    desc: "Controlled storage infrastructure to protect electronic evidence from electromagnetic and static damage.",
    icon: <Zap size={24} />,
    color: "bg-amber-500/10 text-amber-600"
  },
  {
    id: 11,
    title: "OSINT Tools",
    category: "Investigation Tools",
    desc: "Intelligence platforms for lawful collection, monitoring, and analysis of publicly available digital information.",
    icon: <ShieldAlert size={24} />,
    color: "bg-emerald-500/10 text-emerald-600"
  },
  {
    id: 12,
    title: "Crypto Analysis / Blockchain Investigation",
    category: "Investigation Tools",
    desc: "Blockchain analytics tools to trace cryptocurrency transactions, analyze wallets, and identify illicit activity.",
    icon: <LinkIcon size={24} />,
    color: "bg-emerald-500/10 text-emerald-600"
  },
  {
    id: 13,
    title: "Audio-Video Authentication",
    category: "Investigation Tools",
    desc: "Forensic multimedia software for authenticity verification, tamper detection, and enhancement.",
    icon: <Video size={24} />,
    color: "bg-emerald-500/10 text-emerald-600"
  }
];

const categories: Category[] = ["All", "Computer & Storage", "Mobile & Network", "Investigation Tools", "Infrastructure", "Training Tools"];

export function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="py-20 bg-surface min-h-[500px]">
      <div className="container mx-auto px-6 md:px-12">

        {/* SECTION 2 — FILTER BAR */}
        <div className="sticky top-20 z-40 bg-surface/80 backdrop-blur-md pt-4 pb-6 border-b border-slate-200 mb-12 -mx-6 px-6 md:mx-0 md:px-0">
          <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${activeCategory === cat
                    ? "bg-accent text-white shadow-md shadow-accent/20"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* SECTION 3 — PRODUCT GRID */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:shadow-xl hover:border-accent/40 transition-all duration-300 group">
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-sm ${product.color}`}>
                      {product.icon}
                    </div>
                    <span className="text-[0.7rem] font-bold uppercase tracking-wider px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{product.title}</h3>
                  <p className="text-slate-600 text-[0.95rem] leading-relaxed mb-6">
                    {product.desc}
                  </p>
                </div>
                <div className="px-8 py-5 border-t border-slate-100 bg-slate-50 mt-auto">
                  <button className="text-sm font-semibold text-accent group-hover:text-primary transition-colors flex items-center gap-1" onClick={() => alert("Product details modal simulation.")}>
                    Learn More <span className="text-lg leading-none ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-2xl border border-slate-200 border-dashed">
            <h3 className="text-xl font-bold text-slate-700 mb-2">No products found</h3>
            <p className="text-slate-500">There are currently no featured products in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}
