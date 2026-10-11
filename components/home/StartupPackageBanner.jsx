"use client";

import Link from "next/link";
import {
  Rocket,
  Building2,
  Receipt,
  ShieldCheck,
  Monitor,
  CheckCircle2,
  ArrowRight,
  Clock,
  Sparkles,
  Shield,
  XCircle,
  MessageSquare,
  Calendar,
  Award,
  Check,
} from "lucide-react";
import { WA_NUMBER } from "@/lib/seo";

export function StartupPackageBanner() {
  const waStartupText = encodeURIComponent(
    "Hello 1Tax! I want to explore the All-Inclusive Founder Startup Package for our new business.",
  );

  return (
    <section
      id="startup-package-section"
      aria-labelledby="startup-package-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto"
    >
      {/* ─────────────────────────────────────────────────────────────
          1. SECTION HEADER AREA
      ───────────────────────────────────────────────────────────── */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
        {/* Eyebrow Pill */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border shadow-2xs"
          style={{
            backgroundColor: "var(--color-primary-muted)",
            borderColor: "var(--color-primary-light)",
            color: "var(--color-primary-dark)",
          }}
        >
          <Rocket size={13} className="text-[#EA8932]" />
          <span>All-in-One Founder Launchpad</span>
        </div>

        {/* Main Headline */}
        <h2
          id="startup-package-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4"
          style={{ color: "var(--color-secondary-dark)" }}
        >
          Everything You Need to Start Your Business -{" "}
          <span style={{ color: "var(--color-primary)" }}>
            Ready on Day One
          </span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg leading-relaxed font-normal"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Stop coordinating between 5 different vendors. Get statutory
          incorporation, government registrations, trademark protection,
          accounting setup, and your business website handled under one CA-led
          roof.
        </p>

        {/* Trust Proof Chips */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-medium text-slate-600">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-2xs">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span className="font-semibold text-slate-800">
              150+ Startups Launched This Year
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-2xs">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span className="font-semibold text-slate-800">
              100% Fixed Transparent Quote
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-2xs">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span className="font-semibold text-slate-800">
              Dedicated Senior CA Partner
            </span>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. 4-MODULE BENTO GRID
      ───────────────────────────────────────────────────────────── */}
      <div className="mb-14 sm:mb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#EA8932]">
              Comprehensive Architecture
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              Four Pillars of Frictionless Startup Launch
            </h3>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            <Clock size={12} className="text-[#EA8932]" />
            7–10 Days Handover
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {/* ── MODULE 1: Legal & Company Incorporation (7 cols) ── */}
          <div className="md:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
            {/* Subtle glow decorative blob */}
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Tags & Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200/60">
                    Pvt Ltd • LLP • OPC
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    3–5 Working Days
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Building2 size={20} />
                </div>
              </div>

              {/* Title & Description */}
              <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#EA8932] transition-colors">
                Legal &amp; Company Incorporation
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                End-to-end statutory formation with Ministry of Corporate
                Affairs (MCA). Complete corporate identity, regulatory filings,
                and capital structural drafting.
              </p>

              {/* Deliverables Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <Check
                    size={14}
                    className="text-emerald-600 shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-medium">
                    SPICe+ Part A &amp; B drafting
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <Check
                    size={14}
                    className="text-emerald-600 shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-medium">
                    RUN name reservation check
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <Check
                    size={14}
                    className="text-emerald-600 shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-medium">
                    DIN &amp; DSC issuance for 2 directors
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <Check
                    size={14}
                    className="text-emerald-600 shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-medium">
                    Custom MOA &amp; AOA by Corporate CA
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <Check
                    size={14}
                    className="text-emerald-600 shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-medium">
                    PAN &amp; TAN allotment on filing
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <Check
                    size={14}
                    className="text-emerald-600 shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-medium">
                    EPFO &amp; ESIC registration setups
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700 sm:col-span-2">
                  <Check
                    size={14}
                    className="text-emerald-600 shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-medium">
                    Zero-balance Corporate Bank Account tie-up with top banks
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Guarantee Badge */}
            <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/80">
                <ShieldCheck size={14} className="text-emerald-600" />
                Zero Rejection Guarantee or Full MCA Re-filing Covered
              </span>
              <span className="text-slate-400 font-semibold uppercase text-[10.5px]">
                Module 01
              </span>
            </div>
          </div>

          {/* ── MODULE 2: Tax & Statutory Registrations (5 cols) ── */}
          <div className="md:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              {/* Tags & Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/60">
                    Statutory Safeguards
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    48 Hours
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Receipt size={20} />
                </div>
              </div>

              {/* Title & Description */}
              <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#EA8932] transition-colors">
                Tax &amp; Statutory Registrations
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Complete government portal enrollments for frictionless
                invoicing and high-value sovereign founder benefits.
              </p>

              {/* Deliverables List */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check
                    size={14}
                    className="text-emerald-600 shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-medium">
                    GST Registration with HSN code mapping &amp; state approval
                    advisory
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check
                    size={14}
                    className="text-emerald-600 shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-medium">
                    MSME / Udyam Registration (45-day statutory payment recovery
                    &amp; 3x RBI interest rights)
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check
                    size={14}
                    className="text-emerald-600 shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-medium">
                    Startup India DPIIT recognition filing curated for 3-year
                    Section 80-IAC tax holiday &amp; Angel Tax immunity
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Pill */}
            <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="inline-flex items-center gap-1 font-bold text-emerald-700">
                <Shield size={13} className="text-emerald-600" />
                MSME Law Protected
              </span>
              <span className="text-slate-400 font-semibold uppercase text-[10.5px]">
                Module 02
              </span>
            </div>
          </div>

          {/* ── MODULE 3: Brand & IP Protection (5 cols) ── */}
          <div className="md:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              {/* Tags & Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold border border-purple-200/60">
                    Brand Defense
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    24h Priority
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                  <ShieldCheck size={20} />
                </div>
              </div>

              {/* Title & Description */}
              <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#EA8932] transition-colors">
                Brand &amp; IP Protection
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Safeguard brand identity and equity before public disclosure or
                competitor squatted filings.
              </p>

              {/* Deliverables List */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check
                    size={14}
                    className="text-emerald-600 shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-medium">
                    Comprehensive Trademark class search &amp; phonetics
                    clearance check
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check
                    size={14}
                    className="text-emerald-600 shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-medium">
                    Form TM-A drafting and direct IP India registry filing
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check
                    size={14}
                    className="text-emerald-600 shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-medium">
                    Legal entitlement to use the ™ symbol immediately on filing
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check
                    size={14}
                    className="text-emerald-600 shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-medium">
                    Examination report advisory &amp; objection clearance
                    assistance
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Pill */}
            <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="inline-flex items-center gap-1 font-bold text-purple-700">
                <Award size={13} className="text-purple-600" />™ Symbol
                Entitlement
              </span>
              <span className="text-slate-400 font-semibold uppercase text-[10.5px]">
                Module 03
              </span>
            </div>
          </div>

          {/* ── MODULE 4: Financial Systems & Digital Presence (7 cols) ── */}
          <div className="md:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              {/* Tags & Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200/60">
                    Operations &amp; Launch
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    Turnkey Setup
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-[#EA8932] shrink-0">
                  <Monitor size={20} />
                </div>
              </div>

              {/* Title & Description */}
              <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#EA8932] transition-colors">
                Financial Systems &amp; Digital Presence
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Transition from paper entity to operational, revenue-generating
                business with automated ledger infrastructure and client-ready
                web presence.
              </p>

              {/* Deliverables Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check
                    size={14}
                    className="text-emerald-600 shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-medium">
                    Cloud accounting setup (Zoho Books / QuickBooks / Tally
                    Prime)
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check
                    size={14}
                    className="text-emerald-600 shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-medium">
                    1st-year statutory compliance calendar &amp; tax-saving
                    roadmap
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check
                    size={14}
                    className="text-emerald-600 shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-medium">
                    Modern responsive business launch website with
                    high-converting hero
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check
                    size={14}
                    className="text-emerald-600 shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="font-medium">
                    Lead inquiry forms + custom domain connection + WhatsApp
                    chat setup
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Pill */}
            <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-semibold">
                Ready-to-bill in under 10 days
              </span>
              <span className="text-slate-400 font-semibold uppercase text-[10.5px]">
                Module 04
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. COMPARISON TABLE (Multi-Agency vs 1Tax Launchpad)
      ───────────────────────────────────────────────────────────── */}
      <div className="mb-14 sm:mb-16">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          {/* Table Header Banner */}
          <div className="p-6 sm:p-8 pb-5 border-b border-slate-200/80 bg-slate-50/70">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-[#EA8932] text-xs font-bold mb-2 border border-amber-200/60">
              <Sparkles size={12} />
              <span>Direct Model Analysis</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              The Multi-Agency Nightmare vs. 1Tax Launchpad
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Why modern founders avoid fragmented vendors and choose an
              integrated CA-directed firm.
            </p>
          </div>

          {/* Comparative Matrix Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-200/70 bg-slate-100/60 text-xs font-bold text-slate-700 uppercase tracking-wider">
                  <th className="p-4 sm:p-5 w-1/4">Operational Dimension</th>
                  <th className="p-4 sm:p-5 w-3/8 text-rose-700">
                    <span className="flex items-center gap-1.5">
                      <XCircle size={15} className="text-rose-600 shrink-0" />
                      Traditional Multi-Agency Route
                    </span>
                  </th>
                  <th className="p-4 sm:p-5 w-3/8 text-emerald-800 bg-emerald-50/50">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2
                        size={15}
                        className="text-emerald-600 shrink-0"
                      />
                      1Tax Founder Launchpad
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {/* Row 1: Coordination */}
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-800">
                    Coordination &amp; Management
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">
                    <span className="font-semibold text-slate-800">
                      4 to 5 Disconnected Agencies:
                    </span>{" "}
                    Separate CA, lawyer, trademark agent, graphic freelancer,
                    and web developer working in silos without shared
                    accountability.
                  </td>
                  <td className="p-4 sm:p-5 bg-emerald-50/30 text-slate-900 font-medium">
                    <div className="flex items-start gap-2">
                      <Check
                        size={15}
                        className="text-emerald-600 shrink-0 mt-0.5"
                        strokeWidth={2.5}
                      />
                      <span>
                        <strong>1 Designated Senior CA Partner</strong> as the
                        single accountable project lead handling regulatory,
                        fiscal, and web execution.
                      </span>
                    </div>
                  </td>
                </tr>

                {/* Row 2: Outlay */}
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-800">
                    Financial Outlay &amp; Transparency
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">
                    <span className="font-semibold text-slate-800">
                      ₹1,20,000+ Unpredictable Outlay:
                    </span>{" "}
                    Fragmented quotes, unexpected MCA re-filing charges, hidden
                    drafting surcharges, and billable hourly fees.
                  </td>
                  <td className="p-4 sm:p-5 bg-emerald-50/30 text-slate-900 font-medium">
                    <div className="flex items-start gap-2">
                      <Check
                        size={15}
                        className="text-emerald-600 shrink-0 mt-0.5"
                        strokeWidth={2.5}
                      />
                      <span>
                        <strong>
                          Transparent, All-Inclusive Fixed Investment:
                        </strong>{" "}
                        100% upfront quote covers MCA fees, drafting, filings,
                        and cloud setup with zero surprise billing.
                      </span>
                    </div>
                  </td>
                </tr>

                {/* Row 3: Timeline */}
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-800">
                    Timeline &amp; Speed-to-Market
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">
                    <span className="font-semibold text-slate-800">
                      45 to 60+ Days:
                    </span>{" "}
                    Repetitive KYC handoffs, inter-vendor delays, lack of
                    tracking, and prolonged time before your first commercial
                    invoice.
                  </td>
                  <td className="p-4 sm:p-5 bg-emerald-50/30 text-slate-900 font-medium">
                    <div className="flex items-start gap-2">
                      <Check
                        size={15}
                        className="text-emerald-600 shrink-0 mt-0.5"
                        strokeWidth={2.5}
                      />
                      <span>
                        <strong>Launch-Ready in 7 to 10 Business Days:</strong>{" "}
                        Parallel automated workflows with synchronized DIN, GST,
                        Trademark, and web deployment.
                      </span>
                    </div>
                  </td>
                </tr>

                {/* Row 4: Compliance Risk */}
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-800">
                    Regulatory Risk &amp; Rejection
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">
                    <span className="font-semibold text-slate-800">
                      Elevated Rejection Probability:
                    </span>{" "}
                    High risk of MCA name rejection, misclassified HSN codes,
                    and missing statutory DPIIT benefits due to lack of tax
                    foresight.
                  </td>
                  <td className="p-4 sm:p-5 bg-emerald-50/30 text-slate-900 font-medium">
                    <div className="flex items-start gap-2">
                      <Check
                        size={15}
                        className="text-emerald-600 shrink-0 mt-0.5"
                        strokeWidth={2.5}
                      />
                      <span>
                        <strong>100% ICAI &amp; MCA Compliant:</strong>{" "}
                        Guaranteed partner review, airtight MOA clauses, and
                        complete statutory guarantee or zero-fee re-filing.
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. ACTION & CONVERSION HUB (Pricing & CTA Card)
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto">
        <div
          className="rounded-3xl p-7 sm:p-10 border-2 bg-white text-center shadow-xl relative overflow-hidden"
          style={{
            borderColor: "rgba(234, 137, 50, 0.4)",
            boxShadow: "0 20px 50px -15px rgba(234, 137, 50, 0.15)",
          }}
        >
          {/* Top Popular Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#EA8932] text-white text-xs font-bold uppercase tracking-wider mb-5 shadow-sm">
            <Sparkles size={12} />
            <span>Most Popular for Fast-Growing Companies</span>
          </div>

          {/* Title & Description */}
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            The All-Inclusive Founder Tier
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-6">
            Everything your enterprise needs to incorporate, bill compliant
            invoices, defend your brand, and acquire your first customers.
          </p>

          {/* Pricing Highlight */}
          <div className="mb-7 flex items-baseline justify-center gap-2">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight tabular-nums">
              ₹14,999
            </span>
            <span className="text-xs sm:text-sm text-slate-500 font-medium">
              + Standard Govt &amp; Statutory Fees
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6">
            <Link
              href="/startup-package"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold text-sm shadow-md transition-all hover:opacity-95 active:scale-98 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #EA8932 0%, #c2410c 100%)",
                boxShadow: "0 4px 14px -2px rgba(234, 137, 50, 0.4)",
              }}
            >
              <span>Explore Full Startup Package (Scope &amp; Pricing)</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href="#consultation-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 border font-semibold text-sm transition-all cursor-pointer shadow-2xs"
              style={{ borderColor: "var(--color-border)" }}
            >
              <Calendar size={15} className="text-[#EA8932]" />
              <span>Schedule 15-Min Founder Call</span>
            </a>
          </div>

          {/* WhatsApp Direct Link */}
          <div className="flex justify-center mb-5">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${waStartupText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-colors border cursor-pointer"
              style={{
                backgroundColor: "rgba(37, 211, 102, 0.1)",
                borderColor: "rgba(37, 211, 102, 0.3)",
                color: "#15803D",
              }}
            >
              <span
                className="flex h-4 w-4 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: "var(--color-whatsapp)" }}
              >
                <MessageSquare size={10} />
              </span>
              <span>Chat with Startup CA on WhatsApp</span>
              <ArrowRight size={12} />
            </a>
          </div>

          {/* Trust Reassurance Footnote */}
          <div className="pt-4 border-t border-slate-100">
            <p className="text-[11.5px] text-slate-500 flex items-center justify-center gap-1.5 font-medium">
              <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
              <span>
                No outsourced sales agents. You speak directly with a qualified
                Chartered Accountant registered with the ICAI.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
