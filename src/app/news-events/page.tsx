import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Newspaper } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "News & Events | Parall Forensics",
  description: "Stay updated with Parall Forensics news and upcoming events.",
};

export default function NewsEventsPage() {
  return (
    <main className="min-h-screen bg-surface">
      <section className="relative overflow-hidden border-b border-slate-100 bg-background pb-20 pt-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-slate-50/60" />
          <div className="absolute left-0 top-0 h-[320px] w-[320px] rounded-full bg-blue-500/5 blur-[110px]" />
          <div className="absolute bottom-0 right-0 h-[340px] w-[340px] rounded-full bg-teal-500/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1240px] px-5 text-center sm:px-6 lg:px-8">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/15 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            News & Events
          </div>
          <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Updates, Announcements, and Event Highlights
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
            This section is ready for your upcoming news links and event destinations. The navbar dropdown now points here and can be updated later with final URLs.
          </p>
        </div>
      </section>

      <SectionWrapper className="py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <section
            id="latest-news"
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Newspaper size={26} />
            </div>
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Latest News</h2>
            <p className="mb-8 text-base leading-7 text-slate-600">
              Add company announcements, public-sector milestones, partnership updates, awards, and project launches here.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              About Company
              <ArrowRight size={16} />
            </Link>
          </section>

          <section
            id="events-calendar"
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
              <CalendarDays size={26} />
            </div>
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Events Calendar</h2>
            <p className="mb-8 text-base leading-7 text-slate-600">
              Use this area for conference participation, training events, workshop schedules, and public briefings once you share the final destinations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-600 hover:text-blue-600"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </section>
        </div>
      </SectionWrapper>
    </main>
  );
}
