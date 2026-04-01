import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu, Database, ShieldCheck, Users, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "Maharashtra Cyber Project | Parall Forensics",
  description:
    "A comprehensive overview of the Maharashtra Cyber Project, including infrastructure, technology stack, manpower, training, and impact.",
};

const infrastructureItems = [
  "Centralized Integrated Cyber Command and Control Center (C4) at Navi Mumbai",
  "Statewide deployment across cyber police stations and district units",
  "Interconnection of 1,000+ police stations for seamless data sharing",
  "Hybrid architecture with on-premise data centers and secure cloud infrastructure",
  "Regional cyber labs at key locations for decentralized investigation",
  "24/7 Security Operations Center for monitoring and incident response",
];

const technologyItems = [
  "Digital forensic tools for computer, mobile, network, and data recovery work",
  "Technology Assisted Investigation for case management, evidence correlation, and workflow automation",
  "AI and ML platforms for predictive analytics, fraud detection, and anomaly detection",
  "Threat intelligence systems for real-time monitoring, dark web analysis, and OSINT",
  "Cyber crime analytics platforms for linking cases and identifying criminal networks",
  "Malware analysis, reverse engineering, network monitoring, cloud forensics, and cryptocurrency tracking",
  "Data visualization dashboards for command-level decision-making",
];

const manpowerItems = [
  "Cyber Analysts at L1, L2, and L3 levels for monitoring, incident analysis, and threat intelligence",
  "Digital Forensic Experts for computer, mobile, and network forensic examination",
  "Cyber Investigators for evidence collection, case handling, and coordination",
  "Legal Experts for cyber law compliance, admissibility, and prosecution support",
  "SOC Analysts and CERT teams for monitoring, response, and mitigation",
  "Malware Analysts and Reverse Engineers",
  "Trainers and capacity building experts for cyber security and digital forensics training",
  "System and Network Administrators for infrastructure and security operations",
];

const trainingItems = [
  "Establishment of a Cyber Center of Excellence",
  "Regular training programs for police personnel and investigators",
  "Specialized certification programs in digital forensics and cyber security",
  "Simulation labs and cyber ranges for hands-on learning",
];

const citizenItems = [
  "Online cybercrime reporting portals and helplines",
  "Awareness campaigns on cyber fraud, phishing, and online safety",
  "Victim support systems including financial fraud response mechanisms",
];

const impactItems = [
  "Faster case resolution through automation and AI support",
  "Improved coordination across departments and jurisdictions",
  "Enhanced capability to handle fraud, ransomware, and dark web crimes",
  "Strengthened prosecution through scientifically backed digital evidence",
  "A scalable and replicable model for other states in India",
];

function SectionCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.28)] backdrop-blur-sm sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      </div>
      <div className="text-sm leading-7 text-slate-300 sm:text-base">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-slate-200">
          <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-400" />
          <span className="leading-6">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-slate-950 py-24 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(45,212,191,0.12),transparent_28%)]" />
        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            Featured Project
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-black uppercase tracking-tight leading-[0.95] sm:text-5xl lg:text-6xl xl:text-7xl">
                The Maharashtra Cyber Project
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                A flagship Government of Maharashtra initiative building a comprehensive and future-ready cyber security and cybercrime investigation ecosystem through centralized infrastructure, AI-driven analytics, digital forensics, and skilled manpower.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.32)] backdrop-blur-sm sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-blue-300">Project Snapshot</p>
              <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300 sm:text-base">
                <p>
                  Centered on the Integrated Cyber Command and Control Center (C4) at Navi Mumbai.
                </p>
                <p>
                  Built for real-time monitoring, cyber intelligence, and coordinated response.
                </p>
                <p>
                  Designed to strengthen enforcement, prosecution, and citizen-facing cyber services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] space-y-8 px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionCard icon={<Database size={22} />} title="Project Overview">
          <p>
            The Maharashtra Cyber Project is a comprehensive cyber policing framework focused on integrating advanced technologies, centralized infrastructure, and trained manpower to combat the growing scale and sophistication of cyber threats. The backbone of the initiative is the Integrated Cyber Command and Control Center (C4) at Navi Mumbai, which serves as a central hub for real-time monitoring, cyber intelligence, and coordinated response.
          </p>
          <p className="mt-4">
            The initiative leverages AI-driven analytics, big data platforms, and advanced digital forensic tools to enable faster investigations and predictive policing. It also emphasizes statewide cyber infrastructure deployment, specialized manpower training, and citizen-centric services such as online reporting and awareness programs.
          </p>
        </SectionCard>

        <div className="grid gap-8 lg:grid-cols-2">
          <SectionCard icon={<ShieldCheck size={22} />} title="Core Infrastructure & Deployment">
            <BulletList items={infrastructureItems} />
          </SectionCard>

          <SectionCard icon={<Cpu size={22} />} title="Technology Stack & Tools">
            <BulletList items={technologyItems} />
          </SectionCard>
        </div>

        <SectionCard icon={<Users size={22} />} title="Manpower & Human Resource Structure">
          <BulletList items={manpowerItems} />
        </SectionCard>

        <div className="grid gap-8 lg:grid-cols-2">
          <SectionCard icon={<Waves size={22} />} title="Capacity Building & Training">
            <BulletList items={trainingItems} />
          </SectionCard>

          <SectionCard icon={<ArrowRight size={22} />} title="Citizen Services & Outreach">
            <BulletList items={citizenItems} />
          </SectionCard>
        </div>

        <SectionCard icon={<ShieldCheck size={22} />} title="Key Benefits & Impact">
          <BulletList items={impactItems} />
          <p className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5 text-slate-200">
            Overall, the project represents a holistic approach combining technology, deployment strategy, and human resources to enhance cyber resilience and digital policing. It stands as one of the most advanced cyber policing frameworks in India.
          </p>
        </SectionCard>

        <div className="flex justify-center pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Talk to Us About a Similar Program
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}