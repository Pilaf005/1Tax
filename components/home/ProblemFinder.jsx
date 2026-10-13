"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  Scale,
  Rocket,
  RotateCcw,
  BarChart2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  Building2,
  MessageSquare,
  Lock,
  ChevronRight,
  Sparkles,
  FileText,
  Check,
  X,
} from "lucide-react";
import { WA_NUMBER } from "@/lib/seo";

const PROBLEM_SCENARIOS = [
  {
    id: "tax-notice",
    title: "Tax Notice & Scrutiny",
    badge: "High Urgency",
    badgeVariant: "danger",
    description:
      "Received an Income Tax (Sec 148 / 143(2)) or GST (DRC-01) demand / notice.",
    timelineSummary: "48–72 Hrs Reply",
    icon: AlertTriangle,
    iconColor: "#DC2626",
    iconBg: "#FEF2F2",
    backCardBg: "linear-gradient(135deg, #881337 0%, #4c0519 100%)", // Deep Crimson / Burgundy
    backCardShadow: "rgba(136, 19, 55, 0.32)",
    backCardBorder: "rgba(251, 113, 133, 0.3)",
    backCardLabel: "CBDT / GSTN SEC 143(2)",
    solutionTitle: "Tax Notice & Scrutiny Defense",
    solutionSubtitle:
      "Comprehensive analysis of IT / GST notice with aggressive legal rebuttal drafting and AO / Tribunal representation.",
    recourseText:
      "Senior CA Assessment Reply Drafting & Department Representation. Faceless ITAT / AO submission.",
    governingLaw: "CBDT / GSTN Tribunals",
    resolutionTimeline: "Initial Reply in 48–72 Hrs",
    docList: [
      "Copy of Notice Received (DIN / Reference Number)",
      "Filed ITR-V / GSTR-3B & GSTR-2B computations",
      "Bank statements & relevant ledger entries",
    ],
    waMessage:
      "Hello 1Tax! I received a Tax / GST Notice and need urgent senior CA defense representation.",
  },
  {
    id: "msme-recovery",
    title: "MSME Delayed Payments",
    badge: "Cash Flow Relief",
    badgeVariant: "warning",
    description:
      "Buyer not paying business invoices overdue past statutory 45 days.",
    timelineSummary: "Notice in 24 Hrs",
    icon: Scale,
    iconColor: "#EA8932",
    iconBg: "#FFF7ED",
    backCardBg: "linear-gradient(135deg, #c2410c 0%, #7c2d12 100%)", // Warm Saffron Amber
    backCardShadow: "rgba(194, 65, 12, 0.32)",
    backCardBorder: "rgba(251, 146, 60, 0.3)",
    backCardLabel: "MSMED ACT 3x RBI PENALTY",
    solutionTitle: "MSME Samadhaan Case Filing",
    solutionSubtitle:
      "Statutory recovery filing under MSMED Act 2006 with mandatory 3x RBI compound interest penalty.",
    recourseText:
      "Legal Demand Notice within 24 hours + formal filing on MSME Samadhaan Portal & MSEFC Council representation.",
    governingLaw: "MSME Facilitation Council (MSEFC)",
    resolutionTimeline: "Notice in 24h • Hearing in 45-90 Days",
    docList: [
      "Valid MSME / Udyam Registration Certificate",
      "Purchase Orders / Contracts / Invoices with delivery proofs",
      "Bank statement verifying non-receipt of payment",
    ],
    waMessage:
      "Hello 1Tax! A buyer is holding my MSME payments (>45 days). I want to initiate MSME Samadhaan recovery with 3x interest.",
  },
  {
    id: "startup-incorporation",
    title: "Startup & Company Setup",
    badge: "Fast-Track Setup",
    badgeVariant: "primary",
    description:
      "Starting a new venture: Pvt Ltd, LLP, OPC, or DPIIT Startup India registration.",
    timelineSummary: "5–7 Working Days",
    icon: Rocket,
    iconColor: "#2563EB",
    iconBg: "#EFF6FF",
    backCardBg: "linear-gradient(135deg, #1e40af 0%, #0f172a 100%)", // Corporate Royal Navy
    backCardShadow: "rgba(30, 64, 175, 0.32)",
    backCardBorder: "rgba(96, 165, 250, 0.3)",
    backCardLabel: "MCA SPICe+ / DPIIT REG",
    solutionTitle: "Turnkey Startup Incorporation",
    solutionSubtitle:
      "End-to-end Ministry of Corporate Affairs SPICe+ filing with DSC, DIN, PAN, TAN, GST, and Startup India recognition.",
    recourseText:
      "All-inclusive incorporation with MoA/AoA drafting, bank account opening, and zero-fee DPIIT certification.",
    governingLaw: "Ministry of Corporate Affairs (MCA) / DPIIT",
    resolutionTimeline: "Complete in 5–7 Working Days",
    docList: [
      "PAN Card & Aadhaar of all Directors / Partners",
      "Electricity Bill / NOC for Registered Office address",
      "Bank Statement / Utility Bill for Director address proof",
    ],
    waMessage:
      "Hello 1Tax! I want to incorporate a new Private Limited / LLP company and apply for Startup India benefits.",
  },
  {
    id: "gst-refund",
    title: "Blocked GST / ITC Refunds",
    badge: "Working Capital",
    badgeVariant: "info",
    description:
      "Stuck refunds on Inverted Duty Structure, Export of Services/Goods, or accumulated ITC.",
    timelineSummary: "15–30 Days Recovery",
    icon: RotateCcw,
    iconColor: "#059669",
    iconBg: "#ECFDF5",
    backCardBg: "linear-gradient(135deg, #065f46 0%, #064e3b 100%)", // Deep Treasury Emerald
    backCardShadow: "rgba(6, 95, 70, 0.32)",
    backCardBorder: "rgba(52, 211, 153, 0.3)",
    backCardLabel: "CBIC RULE 89(5) RFD-01",
    solutionTitle: "GST Inverted Duty & Export Refund",
    solutionSubtitle:
      "Fast-track liquidation of blocked Input Tax Credit under Rule 89(5) and RFD-01 filing.",
    recourseText:
      "Reconciliation of GSTR-2B with purchase ledgers, CA certification, RFD-01 submission, and officer liaison.",
    governingLaw: "Central Board of Indirect Taxes & Customs (CBIC)",
    resolutionTimeline: "Disbursement in 15–30 Days",
    docList: [
      "GSTR-1, GSTR-3B & GSTR-2B reconciliation reports",
      "Invoices of input purchases & export/domestic sale invoices",
      "Bank realization certificates (FIRC / BRC for exporters)",
    ],
    waMessage:
      "Hello 1Tax! I have accumulated GST ITC / Inverted Duty structure and need CA support to claim my refund.",
  },
  {
    id: "virtual-cfo",
    title: "Virtual CFO & Accounting",
    badge: "Growth Retainer",
    badgeVariant: "purple",
    description:
      "Need fractional CFO leadership, cloud bookkeeping, monthly MIS, and zero-penalty compliance.",
    timelineSummary: "Instant Onboarding",
    icon: BarChart2,
    iconColor: "#7C3AED",
    iconBg: "#FAF5FF",
    backCardBg: "linear-gradient(135deg, #581c87 0%, #311042 100%)", // Royal Accounting Purple
    backCardShadow: "rgba(88, 28, 135, 0.32)",
    backCardBorder: "rgba(192, 132, 252, 0.3)",
    backCardLabel: "ICAI CFO MIS RETAINER",
    solutionTitle: "Fractional CFO & Finance Retainer",
    solutionSubtitle:
      "Dedicated team of Chartered Accountants managing your monthly accounting, payroll, tax filings, and investor reporting.",
    recourseText:
      "Cloud accounting migration (Zoho/Tally), automated monthly MIS dashboards, cash flow runway planning, and audit readiness.",
    governingLaw: "ICAI Standards / Statutory Compliance",
    resolutionTimeline: "Onboarding within 48 Hours",
    docList: [
      "Current Chart of Accounts & Trail Balance",
      "Previous year ITR and Audit Financial Statements",
      "Access to cloud accounting software or bank statement feeds",
    ],
    waMessage:
      "Hello 1Tax! We need a Virtual CFO and dedicated CA retainer for our business accounting and monthly filings.",
  },
  {
    id: "trademark-dispute",
    title: "Trademark & IP Disputes",
    badge: "Brand Protection",
    badgeVariant: "teal",
    description:
      "Faced with trademark objection, opposition by competitor, or copycat brand infringement.",
    timelineSummary: "Notice in 24–48 Hrs",
    icon: ShieldCheck,
    iconColor: "#0d9488",
    iconBg: "#F0FDF4",
    backCardBg: "linear-gradient(135deg, #115e59 0%, #042f2e 100%)", // Deep Peacock Teal
    backCardShadow: "rgba(17, 94, 89, 0.32)",
    backCardBorder: "rgba(45, 212, 191, 0.3)",
    backCardLabel: "CGPDTM TM-M LITIGATION",
    solutionTitle: "Trademark Litigation & Hearing Defense",
    solutionSubtitle:
      "Defending trademark rights before the Trade Marks Registry and filing legal cease & desist notices.",
    recourseText:
      "Formal reply to TM Examination Report / Notice of Opposition and advocacy representation at hearing.",
    governingLaw:
      "Controller General of Patents, Designs & Trademarks (CGPDTM)",
    resolutionTimeline: "Legal Notice in 24h • Hearing Defense",
    docList: [
      "Trademark Application Number & Examination Report",
      "Proof of continuous prior business use (Invoices / Domain / Socials)",
      "Power of Attorney (Form TM-M / TM-48)",
    ],
    waMessage:
      "Hello 1Tax! I received a Trademark Objection / Notice and need IP legal representation.",
  },
];

export function ProblemFinder() {
  const [activeModalScenario, setActiveModalScenario] = useState(null);

  // Close modal on Escape key and lock body scroll when open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveModalScenario(null);
      }
    };

    if (activeModalScenario) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalScenario]);

  return (
    <section
      id="diagnostic-tool"
      aria-labelledby="diagnostic-heading"
      className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto"
    >
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-11">
        <h2
          id="diagnostic-heading"
          className="text-2xl sm:text-3xl lg:text-[42px] font-extrabold tracking-tight leading-snug sm:leading-tight mb-2.5 sm:mb-4"
          style={{ color: "var(--color-secondary-dark)" }}
        >
          What{" "}
          <span className="text-[#EA8932]" style={{ color: "var(--color-primary)" }}>
            Business or Tax Challenge
          </span>{" "}
          Are You Facing Today?
        </h2>

        <p
          className="text-xs sm:text-base lg:text-lg leading-relaxed font-normal"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Select your situation below to see the exact legal recourse, required
          documentation, and guaranteed CA resolution timeline.
        </p>

        {/* Trust Chips (Same row on mobile, non-scrollable) */}
        <div className="mt-3.5 sm:mt-5 grid grid-cols-3 sm:flex sm:flex-wrap items-center justify-center gap-1.5 sm:gap-4 text-slate-600 max-w-sm sm:max-w-none mx-auto">
          <div className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-1.5 py-1.5 sm:px-0 sm:py-0 rounded-full sm:rounded-none bg-white sm:bg-transparent border sm:border-0 border-slate-200/80 sm:shadow-none shadow-2xs">
            <CheckCircle2 size={12} className="text-emerald-600 shrink-0 sm:w-[15px] sm:h-[15px]" />
            <span className="font-semibold sm:font-medium text-slate-800 sm:text-slate-500 text-[10px] sm:text-xs whitespace-nowrap">
              <span className="sm:hidden">Direct CA Partner</span>
              <span className="hidden sm:inline">Direct CA Partner Handling</span>
            </span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-1.5 py-1.5 sm:px-0 sm:py-0 rounded-full sm:rounded-none bg-white sm:bg-transparent border sm:border-0 border-slate-200/80 sm:shadow-none shadow-2xs">
            <ShieldCheck size={12} className="text-emerald-600 shrink-0 sm:w-[15px] sm:h-[15px]" />
            <span className="font-semibold sm:font-medium text-slate-800 sm:text-slate-500 text-[10px] sm:text-xs whitespace-nowrap">
              <span className="sm:hidden">Confidential</span>
              <span className="hidden sm:inline">Strict Confidentiality</span>
            </span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-1.5 py-1.5 sm:px-0 sm:py-0 rounded-full sm:rounded-none bg-white sm:bg-transparent border sm:border-0 border-slate-200/80 sm:shadow-none shadow-2xs">
            <Building2 size={12} className="text-emerald-600 shrink-0 sm:w-[15px] sm:h-[15px]" />
            <span className="font-semibold sm:font-medium text-slate-800 sm:text-slate-500 text-[10px] sm:text-xs whitespace-nowrap">
              ICAI Compliant
            </span>
          </div>
        </div>
      </div>

      {/* DIAGNOSTIC CARDS (Full-bleed swipe carousel on mobile, 3 Columns on Desktop) */}
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-7 lg:gap-8 pt-2 pb-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none -mx-4 px-6 sm:-mx-6 sm:px-8 md:mx-0 md:px-0 scroll-pl-6 sm:scroll-pl-8">
        {PROBLEM_SCENARIOS.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveModalScenario(item)}
              className="relative group text-left cursor-pointer focus:outline-none w-[82vw] max-w-[310px] shrink-0 snap-start md:w-full md:max-w-none select-none my-1"
              aria-haspopup="dialog"
            >
              {/* 1. BACK TILTED CARD (Matching desktop tilt) */}
              <div
                className="absolute inset-0 rounded-2xl transition-all duration-300 transform -rotate-[2.5deg] group-hover:-rotate-[1deg] group-hover:scale-[1.01] pointer-events-none"
                style={{
                  background: item.backCardBg,
                  boxShadow: `0 14px 28px -6px ${item.backCardShadow}, 0 4px 12px -2px ${item.backCardShadow}`,
                  border: `1px solid ${item.backCardBorder}`,
                }}
              >
                {/* Top-Right Micro Watermark on Tilted Card */}
                <div className="absolute top-2.5 right-3.5 select-none opacity-25 font-mono text-[9px] font-black tracking-widest text-white uppercase">
                  {item.backCardLabel}
                </div>
              </div>

              {/* 2. FRONT GLASSMORPHIC CARD (0deg horizontal, same size, Frosted Glass) */}
              <div
                className="relative z-10 flex flex-col justify-between p-4.5 sm:p-6 rounded-2xl transition-all duration-300 transform group-hover:-translate-y-1.5 group-hover:shadow-2xl"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.88)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.95)",
                  boxShadow:
                    "0 10px 25px -5px rgba(12, 34, 46, 0.08), 0 4px 10px -3px rgba(12, 34, 46, 0.05)",
                }}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span
                      className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl border transition-transform group-hover:scale-105"
                      style={{
                        backgroundColor: item.iconBg,
                        color: item.iconColor,
                        borderColor: `${item.iconColor}30`,
                        boxShadow: `0 2px 8px -2px ${item.iconColor}25`,
                      }}
                    >
                      <Icon size={18} className="sm:w-[22px] sm:h-[22px]" />
                    </span>
                    <span
                      className="rounded-full px-2 py-0.5 sm:px-2.5 text-[10px] sm:text-[11px] font-bold tracking-wide uppercase shadow-2xs border"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        borderColor: `${item.iconColor}30`,
                        color: item.iconColor,
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3
                    className="text-base sm:text-lg font-bold leading-snug mb-1.5 sm:mb-2 group-hover:text-[#EA8932] transition-colors"
                    style={{
                      color: "var(--color-secondary)",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Timeline & Diagnose action */}
                <div
                  className="pt-3 sm:pt-3.5 border-t flex items-center justify-between text-[11px] sm:text-xs"
                  style={{ borderColor: "rgba(226, 232, 240, 0.8)" }}
                >
                  <span className="flex items-center gap-1.5 text-slate-500 font-medium text-[11px] sm:text-xs">
                    <Clock size={13} style={{ color: item.iconColor }} />
                    {item.timelineSummary}
                  </span>
                  <span
                    className="flex items-center gap-1 text-[11px] sm:text-xs font-bold transition-all group-hover:translate-x-1"
                    style={{
                      color: "var(--color-primary)",
                    }}
                  >
                    Diagnose <ChevronRight size={13} />
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* BENCHMARK PROOF STRIP (Frosted Glassmorphic Ribbon with Ambient Lighting) */}
      <div className="relative mt-12 sm:mt-16 group">
        {/* Ambient Gradient Glow behind glass */}
        <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/15 via-teal-500/10 to-emerald-500/15 blur-xl opacity-70 transition-opacity group-hover:opacity-90" />

        {/* Main Frosted Glass Surface */}
        <div
          className="relative rounded-2xl sm:rounded-3xl p-4.5 sm:p-7 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 transition-all duration-300"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.86)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.95)",
            boxShadow:
              "0 20px 45px -10px rgba(12, 34, 46, 0.08), 0 0 0 1px rgba(234, 137, 50, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.9)",
          }}
        >
          {/* Left Feature: 99.4% Glass Badge & Dispute Authority */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3.5 sm:gap-5 w-full lg:w-auto text-center sm:text-left">
            <div
              className="flex flex-row sm:flex-col items-center justify-center py-1.5 px-3.5 sm:py-0 sm:px-0 sm:h-16 sm:w-24 rounded-full sm:rounded-2xl shrink-0 border transition-transform group-hover:scale-105 gap-1.5 sm:gap-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(234, 137, 50, 0.15), rgba(234, 137, 50, 0.05))",
                borderColor: "rgba(234, 137, 50, 0.35)",
                boxShadow:
                  "0 4px 12px -2px rgba(234, 137, 50, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.8)",
              }}
            >
              <div className="flex items-center gap-1 text-[14px] sm:text-lg font-extrabold tracking-tight text-[#c2410c]">
                <ShieldCheck size={14} className="text-[#EA8932] shrink-0 sm:w-4 sm:h-4" />
                <span>99.4%</span>
              </div>
              <span className="text-[10px] sm:text-[9px] font-bold uppercase tracking-wider text-amber-800/80 sm:mt-0.5">
                Resolved
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  Dispute &amp; Statutory Tax Matter Success Rate
                </h4>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Pan-India
                </span>
              </div>
              <p className="text-[11.5px] sm:text-xs text-slate-500 leading-relaxed max-w-xl mx-auto sm:mx-0">
                Over{" "}
                <strong className="font-semibold text-slate-800">
                  ₹50+ Crores recovered &amp; saved
                </strong>{" "}
                across Pan-India tribunals, high-pitch scrutiny waivers, and
                statutory MSME decrees.
              </p>
            </div>
          </div>

          {/* Right Metrics Cluster: Dividers, Bold Stat Figures & Live Status */}
          <div className="grid grid-cols-3 divide-x divide-slate-200/80 text-xs w-full lg:w-auto lg:flex lg:items-center lg:gap-6 lg:divide-x lg:justify-end pt-3 sm:pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-200/60">
            <div className="text-center lg:text-left px-1 sm:px-2 lg:px-0 lg:pr-6">
              <div className="text-sm sm:text-xl font-extrabold text-slate-900 tracking-tight">
                ₹50 Cr+
              </div>
              <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-0.5 leading-tight">
                Recovered / Saved
              </div>
            </div>

            <div className="text-center lg:text-left px-1 sm:px-2 lg:px-6">
              <div className="text-sm sm:text-xl font-extrabold text-slate-900 tracking-tight">
                10,000+
              </div>
              <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-0.5 leading-tight">
                Compliances Handled
              </div>
            </div>

            <div className="text-center lg:text-left px-1 sm:px-2 lg:px-0 lg:pl-6">
              <div className="text-sm sm:text-xl font-extrabold text-emerald-600 tracking-tight flex items-center gap-1 sm:gap-1.5 justify-center lg:justify-start">
                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500 animate-ping" />
                15 Min
              </div>
              <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-0.5 leading-tight">
                Avg Response Time
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL: Immediate CA Assessment & Recourse */}
      {activeModalScenario && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs transition-opacity"
          onClick={() => setActiveModalScenario(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-scenario-title"
        >
          <div className="relative w-full max-w-[720px]">
            {/* Ambient Glow behind Dialog */}
            <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#EA8932]/20 via-teal-500/15 to-[#0c222e]/30 blur-2xl opacity-70" />

            {/* Modal Box */}
            <div
              className="relative w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl border border-slate-200/80 transition-transform"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Teal Gradient & Corner Light */}
              <div
                className="px-6 py-4 sm:px-7 sm:py-4.5 text-white relative z-10"
                style={{
                  background:
                    "linear-gradient(135deg, #0c222e 0%, #164e63 55%, #042f2e 100%)",
                }}
              >
                {/* Decorative Corner Radial Light */}
                <div
                  className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full blur-2xl opacity-20"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />

                <div className="relative z-10 flex items-center justify-between mb-2">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: "rgba(234, 137, 50, 0.15)",
                      color: "#FDBA74",
                      border: "1px solid rgba(234, 137, 50, 0.3)",
                    }}
                  >
                    <Sparkles size={11} className="text-[#EA8932]" />
                    Immediate CA Assessment
                  </span>

                  <div className="flex items-center gap-2.5">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 border border-emerald-400/30 text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Senior CA Online
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveModalScenario(null)}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-slate-200 hover:text-white transition-all cursor-pointer focus:outline-none"
                      aria-label="Close dialog"
                    >
                      <X size={15} />
                    </button>
                  </div>
                </div>

                <h3
                  id="modal-scenario-title"
                  className="relative z-10 text-lg sm:text-xl font-extrabold text-white leading-tight mb-1 pr-4 tracking-tight"
                >
                  {activeModalScenario.solutionTitle}
                </h3>
                <p className="relative z-10 text-xs text-slate-300 leading-normal">
                  {activeModalScenario.solutionSubtitle}
                </p>
              </div>

              {/* Modal Body */}
              <div className="px-6 py-4 sm:px-7 sm:py-5 space-y-3.5 bg-white">
                {/* Recommended Recourse Box (Warm Amber Gradient & Elevated Badge) */}
                <div
                  className="p-3 sm:p-3.5 rounded-xl border"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(254, 243, 199, 0.45) 0%, rgba(255, 247, 237, 0.8) 100%)",
                    borderColor: "rgba(234, 137, 50, 0.35)",
                    boxShadow: "0 2px 8px -2px rgba(234, 137, 50, 0.1)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white mt-0.5 shadow-2xs"
                      style={{
                        background:
                          "linear-gradient(135deg, #EA8932 0%, #c2410c 100%)",
                      }}
                    >
                      <Check size={15} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4
                        className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-0.5"
                        style={{ color: "#c2410c" }}
                      >
                        Recommended Legal Recourse
                      </h4>
                      <p
                        className="text-xs sm:text-sm font-semibold leading-snug"
                        style={{ color: "var(--color-secondary-dark)" }}
                      >
                        {activeModalScenario.recourseText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Diagnostic Specs Grid (Authority + Timeline) */}
                <div className="grid grid-cols-2 gap-3">
                  <div
                    className="py-2.5 px-3.5 rounded-xl bg-slate-50/80 border transition-all hover:bg-slate-50"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Building2
                        size={12}
                        style={{ color: "var(--color-primary)" }}
                      />
                      Governing Authority
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                      {activeModalScenario.governingLaw}
                    </div>
                  </div>

                  <div className="py-2.5 px-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/70 transition-all hover:bg-emerald-50">
                    <div className="text-[10px] font-bold text-emerald-700/80 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Clock size={12} className="text-emerald-600" />
                      Resolution Timeline
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-emerald-800 truncate">
                      {activeModalScenario.resolutionTimeline}
                    </div>
                  </div>
                </div>

                {/* Required Documentation Checklist (3 Columns on Desktop) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Documentation Checklist
                    </span>
                    <span
                      className="rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide"
                      style={{
                        backgroundColor: "#ECFDF5",
                        color: "#047857",
                        border: "1px solid #A7F3D0",
                      }}
                    >
                      Zero Physical Visits
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {activeModalScenario.docList.map((doc, i) => (
                      <div
                        key={i}
                        className="py-2 px-2.5 rounded-xl bg-slate-50/80 border border-slate-100 flex items-start gap-2 text-[11px] text-slate-700"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-emerald-600 shrink-0 mt-0.5"
                        />
                        <span className="leading-snug font-medium line-clamp-2">
                          {doc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons (Side-by-Side on Desktop) */}
                <div
                  className="pt-3 border-t space-y-2"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <a
                      href="#consultation-form"
                      onClick={() => setActiveModalScenario(null)}
                      className="w-full font-bold py-2.5 px-4 rounded-xl text-white shadow-md transition-all flex items-center justify-center gap-2 text-xs sm:text-sm hover:opacity-95 active:scale-98 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(135deg, #EA8932 0%, #c2410c 100%)",
                        boxShadow: "0 4px 14px -2px rgba(234, 137, 50, 0.4)",
                      }}
                    >
                      <span>Request Free 30-Min Strategy Call</span>
                      <ArrowRight size={14} />
                    </a>

                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(activeModalScenario.waMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white hover:bg-slate-50 font-semibold py-2.5 px-4 rounded-xl border transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer shadow-2xs"
                      style={{
                        borderColor: "var(--color-border)",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      <span
                        className="flex h-4 w-4 items-center justify-center rounded-full text-white"
                        style={{ backgroundColor: "var(--color-whatsapp)" }}
                      >
                        <MessageSquare size={10} />
                      </span>
                      <span>WhatsApp Instant Case Review</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-center gap-3 text-[10px] sm:text-[11px] text-slate-400 pt-0.5 font-medium">
                    <span className="flex items-center gap-1">
                      <Lock size={11} className="text-slate-500" />
                      100% Confidential
                    </span>
                    <span>•</span>
                    <span>Direct Partner Handling</span>
                    <span>•</span>
                    <span>No Sales Pitch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
