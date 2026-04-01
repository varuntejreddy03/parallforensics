import type { Metadata } from "next";
import { SectionWrapper } from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Events Calendar | Parall Forensics",
  description: "Events calendar placeholder for Parall Forensics.",
};

export default function NewsEventsPage() {
  return (
    <main className="min-h-screen bg-surface">
      <section className="relative overflow-hidden border-b border-slate-100 bg-background pb-20 pt-32">
        <div className="absolute inset-0 bg-slate-50/60" />
        <div className="relative mx-auto w-full max-w-[1240px] px-5 text-center sm:px-6 lg:px-8">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/15 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            Events Calendar
          </div>
          <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Coming Soon
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
            The events calendar is currently blank and will be updated later.
          </p>
        </div>
      </section>

      <SectionWrapper className="py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Empty for now
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}
