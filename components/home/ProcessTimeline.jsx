"use client";

import Image from "next/image";
import {
  FileText,
  UserCheck,
  FileCheck2,
  Laptop,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { WA_NUMBER } from "@/lib/seo";

const STEPS = [
  {
    step: "01",
    title: "Tell Us Your Requirement",
    desc: "Share your business need, notice copy, or filing query in under 60 seconds via online form or WhatsApp.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Talk Directly to a CA",
    desc: "Speak directly with a qualified Senior Chartered Accountant for a strategic assessment — never a sales rep.",
    icon: UserCheck,
  },
  {
    step: "03",
    title: "Clear Action Plan & Quote",
    desc: "Receive a transparent roadmap with itemized government fees, timeline commitment, and fixed upfront quote.",
    icon: FileCheck2,
  },
  {
    step: "04",
    title: "We Handle the Process",
    desc: "Our expert team manages statutory filings, legal drafting, and department liaison with 100% faceless digital tracking.",
    icon: Laptop,
  },
  {
    step: "05",
    title: "Stay Compliant & Protected",
    desc: "Receive your incorporation certificate, refund credit, or dispute resolution plus an ongoing compliance calendar.",
    icon: ShieldCheck,
  },
];

export function ProcessTimeline() {
  const waProcessText = encodeURIComponent(
    "Hello 1Tax! I want to start our consultation and get a CA-led action plan for our business requirement.",
  );

  return (
    <section
      id="how-it-works"
      aria-labelledby="process-heading"
      className="pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto scroll-mt-20"
    >
      {/* ─────────────────────────────────────────────────────────────
          1. SECTION HEADER AREA
      ───────────────────────────────────────────────────────────── */}
      <div className="text-center max-w-4xl mx-auto mb-7 sm:mb-9">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-orange-50 border border-orange-200/80 text-[#C25E0A] shadow-2xs mb-3.5">
          <Sparkles size={13} className="text-[#EA8932]" />
          <span>HOW IT WORKS &bull; 5-STEP WORKFLOW</span>
        </div>

        {/* Main Headline */}
        <h2
          id="process-heading"
          className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-tight mb-3.5"
          style={{ color: "var(--color-secondary-dark)" }}
        >
          From Intake to Resolution in{" "}
          <span style={{ color: "var(--color-primary)" }}>5 Simple Steps</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal text-slate-600">
          No bureaucratic paperwork, no junior call center delays. A
          transparent, CA-led roadmap designed for modern businesses.
        </p>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. 5-STEP HORIZONTAL PROCESS CARDS
      ───────────────────────────────────────────────────────────── */}
      <div className="relative mb-8 sm:mb-10">
        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10 items-stretch">
          {STEPS.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.step}
                className="bg-gradient-to-b from-[#0C222E] to-[#142E3D] rounded-2xl p-5 sm:p-6 border border-slate-700/70 shadow-lg hover:border-[#EA8932] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-start group relative overflow-hidden text-left"
              >
                {/* Large Background Watermark Number Centered in Card */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center font-black text-8xl sm:text-9xl text-white/[0.05] group-hover:text-[#EA8932]/15 transition-colors duration-300 select-none pointer-events-none tracking-tighter leading-none"
                >
                  {step.step}
                </span>

                {/* Subtle Ambient Hover Glow */}
                <div
                  className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />

                {/* Row: Logo (Icon) & Heading in the Same Row */}
                <div className="flex items-center gap-3.5 mb-3.5 relative z-10">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:scale-105 group-hover:bg-[#EA8932] transition-all duration-300 shadow-md">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors leading-snug">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal relative z-10">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. REASSURANCE BENCHMARK METRIC STRIP
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="pt-2 md:pt-0 px-2 sm:px-4">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#EA8932] tracking-tight tabular-nums">
              15-Min
            </p>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">
              Average Response SLA
            </p>
          </div>
          <div className="pt-4 md:pt-0 px-2 sm:px-4">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight tabular-nums">
              28 States
            </p>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">
              Faceless Digital Delivery
            </p>
          </div>
          <div className="pt-4 md:pt-0 px-2 sm:px-4">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight tabular-nums">
              100% Direct
            </p>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">
              Partner Accountability
            </p>
          </div>
          <div className="pt-4 md:pt-0 px-2 sm:px-4">
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600 tracking-tight tabular-nums">
              Zero Surprise
            </p>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">
              Statutory Fee Markups
            </p>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. COMPACT CONVERSION RIBBON WITH RELATABLE BACKGROUND IMAGE
      ───────────────────────────────────────────────────────────── */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-700/60 bg-[#0C222E]">
        {/* Relatable 16:9 background image with gradient overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/home/urgent-ca-banner-16x9.jpg"
            alt="Chartered Accountant advisory office"
            fill
            sizes="100vw"
            className="object-cover object-right opacity-35"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C222E] via-[#0C222E]/85 to-[#0C222E]/35" />
        </div>

        {/* Ambient warm glow */}
        <div
          className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ backgroundColor: "#EA8932" }}
        />

        {/* Content container — Compact vertical height */}
        <div className="relative z-10 px-6 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 sm:gap-6">
          {/* Simple One-Liner */}
          <div className="max-w-2xl text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-white tracking-tight leading-snug">
              Have an urgent tax notice, filing deadline, or{" "}
              <span className="text-[#EA8932]">incorporation inquiry?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-normal mt-1.5">
              Speak directly with a Senior Chartered Accountant within 15 minutes.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 shrink-0">
            <a
              href="#consultation-form"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-[#EA8932] hover:bg-[#D47522] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-[0.98]"
            >
              <span>Start 60-Sec Intake</span>
              <ArrowRight size={15} />
            </a>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${waProcessText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-[#25D366] text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:bg-[#20ba5a] active:scale-[0.98]"
            >
              <MessageSquare size={15} className="fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
