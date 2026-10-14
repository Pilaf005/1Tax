"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Rocket,
  Receipt,
  TrendingUp,
  Award,
  ShieldCheck,
  CheckCircle2,
  Scale,
  AlertTriangle,
  Building2,
  FileText,
  Globe,
  ShieldAlert,
  RotateCcw,
  Clock,
  BarChart2,
  ClipboardCheck,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Layers,
  Sparkles,
} from "lucide-react";

export const HIGH_DEMAND_SERVICES = [
  // ─── SET 1: Fast-Track Formation & Essential Tax (Cards 1–6) ───
  {
    id: "pvt-ltd",
    question: "Looking to incorporate a Private Limited Company with zero rejection guarantee?",
    title: "Private Limited (Pvt Ltd) Setup",
    badge: "Fast-Track Setup",
    description:
      "End-to-end MCA SPICe+ filing with 2 DSCs, DINs, name approval, MoA/AoA drafting, PAN, TAN & bank account.",
    timelineSummary: "⚡ 3–5 Working Days",
    icon: Rocket,
    iconColor: "#2563EB",
    iconBg: "#EFF6FF",
    backCardBg: "linear-gradient(135deg, #1e40af 0%, #0f172a 100%)",
    backCardShadow: "rgba(30, 64, 175, 0.32)",
    backCardBorder: "rgba(96, 165, 250, 0.3)",
    backCardLabel: "MCA SPICe+ FAST-TRACK",
    href: "/services/private-limited-company",
  },
  {
    id: "gst-registration",
    question: "Need a new GST registration or stuck with physical/virtual office verification?",
    title: "New GST Registration",
    badge: "Same-Day Filing",
    description:
      "Aadhaar authentication, HSN classification, principal place of business verification & guaranteed GSTIN allotment.",
    timelineSummary: "⚡ 24–48 Hours",
    icon: Receipt,
    iconColor: "#059669",
    iconBg: "#ECFDF5",
    backCardBg: "linear-gradient(135deg, #065f46 0%, #064e3b 100%)",
    backCardShadow: "rgba(6, 95, 70, 0.32)",
    backCardBorder: "rgba(52, 211, 153, 0.3)",
    backCardLabel: "CBIC GST REG-01",
    href: "/services/gst-registration",
  },
  {
    id: "itr-individual",
    question: "Filing your annual ITR with maximum deductions across Old vs New tax regime?",
    title: "Individual & Salaried ITR",
    badge: "Max Tax Refund",
    description:
      "Form 16 & AIS/TIS reconciliation, capital gains optimization, ESOPs, foreign assets & refund maximization.",
    timelineSummary: "⚡ Same-Day Filing",
    icon: TrendingUp,
    iconColor: "#0284C7",
    iconBg: "#F0F9FF",
    backCardBg: "linear-gradient(135deg, #0369a1 0%, #082f49 100%)",
    backCardShadow: "rgba(3, 105, 161, 0.32)",
    backCardBorder: "rgba(56, 189, 248, 0.3)",
    backCardLabel: "CBDT SEC 139(1) ITR",
    href: "/services/itr-individual",
  },
  {
    id: "msme-registration",
    question: "Want government subsidies, collateral-free credit & 45-day statutory payment protection?",
    title: "MSME / Udyam Certificate",
    badge: "Instant Approval",
    description:
      "Official Udyam portal registration with NIC activity mapping for priority bank lending and tender exemptions.",
    timelineSummary: "⚡ 1–2 Hours",
    icon: Award,
    iconColor: "#EA8932",
    iconBg: "#FFF7ED",
    backCardBg: "linear-gradient(135deg, #c2410c 0%, #7c2d12 100%)",
    backCardShadow: "rgba(194, 65, 12, 0.32)",
    backCardBorder: "rgba(251, 146, 60, 0.3)",
    backCardLabel: "UDYAM REGISTRATION",
    href: "/services/msme-registration",
  },
  {
    id: "trademark-registration",
    question: "Protecting your unique brand name, logo, or tagline from copycat competitors?",
    title: "Trademark Registration (™)",
    badge: "Brand Shield",
    description:
      "Comprehensive IP search across 45 classes, Form TM-A drafting, Vienna codification & immediate ™ symbol usage.",
    timelineSummary: "⚡ 24-Hr TM Filing",
    icon: ShieldCheck,
    iconColor: "#0D9488",
    iconBg: "#F0FDFA",
    backCardBg: "linear-gradient(135deg, #115e59 0%, #042f2e 100%)",
    backCardShadow: "rgba(17, 94, 89, 0.32)",
    backCardBorder: "rgba(45, 212, 191, 0.3)",
    backCardLabel: "CGPDTM TM-A FILING",
    href: "/services/trademark-registration",
  },
  {
    id: "gst-returns",
    question: "Struggling with monthly GSTR-1 & 3B deadlines, 2B matching & ITC reconciliation?",
    title: "Monthly GST Return Filing",
    badge: "Zero Penalty",
    description:
      "Automated GSTR-2B purchase reconciliation, sales register matching, ITC claim optimization & timely 3B submission.",
    timelineSummary: "📅 Monthly Retainer",
    icon: CheckCircle2,
    iconColor: "#4F46E5",
    iconBg: "#EEF2FF",
    backCardBg: "linear-gradient(135deg, #3730a3 0%, #1e1b4b 100%)",
    backCardShadow: "rgba(55, 48, 163, 0.32)",
    backCardBorder: "rgba(129, 140, 248, 0.3)",
    backCardLabel: "GSTR-1 & 3B RECON",
    href: "/services/gst-returns",
  },

  // ─── SET 2: Disputes, Corporate Entities & Trade (Cards 7–12) ───
  {
    id: "llp-registration",
    question: "Forming a partnership business with limited liability protection and zero dividend tax?",
    title: "Limited Liability Partnership (LLP)",
    badge: "Tax-Efficient",
    description:
      "DPIN generation, ROC name approval, customized LLP Agreement drafting (Form 3) and statutory certificate.",
    timelineSummary: "⏱ 4–6 Working Days",
    icon: Scale,
    iconColor: "#0D9488",
    iconBg: "#F0FDFA",
    backCardBg: "linear-gradient(135deg, #0f766e 0%, #134e4a 100%)",
    backCardShadow: "rgba(15, 118, 110, 0.32)",
    backCardBorder: "rgba(45, 212, 191, 0.3)",
    backCardLabel: "MCA FORM 1 & 2 LLP",
    href: "/services/llp-registration",
  },
  {
    id: "it-notice-reply",
    question: "Received an Income Tax Notice under Sec 143(1), 142(1), or 148 scrutiny demand?",
    title: "Income Tax Notice & Scrutiny",
    badge: "High Urgency",
    description:
      "Comprehensive notice analysis, aggressive legal rebuttal drafting, and faceless ITAT / AO department representation.",
    timelineSummary: "🚨 48–72 Hrs Reply",
    icon: AlertTriangle,
    iconColor: "#DC2626",
    iconBg: "#FEF2F2",
    backCardBg: "linear-gradient(135deg, #881337 0%, #4c0519 100%)",
    backCardShadow: "rgba(136, 19, 55, 0.32)",
    backCardBorder: "rgba(251, 113, 133, 0.3)",
    backCardLabel: "CBDT SEC 143(2) DEFENCE",
    href: "/services/it-notice-reply",
  },
  {
    id: "msme-payment-recovery",
    question: "Buyer not paying your business invoices overdue past the statutory 45 days?",
    title: "MSME Payment Recovery",
    badge: "Cash Flow Relief",
    description:
      "Statutory recovery filing under MSMED Act with mandatory 3x RBI compound interest penalty & Council representation.",
    timelineSummary: "⚡ Notice in 24 Hrs",
    icon: Scale,
    iconColor: "#EA8932",
    iconBg: "#FFF7ED",
    backCardBg: "linear-gradient(135deg, #c2410c 0%, #7c2d12 100%)",
    backCardShadow: "rgba(194, 65, 12, 0.32)",
    backCardBorder: "rgba(251, 146, 60, 0.3)",
    backCardLabel: "MSMED ACT 3x RBI PENALTY",
    href: "/services/specialized/msme-payment-recovery",
  },
  {
    id: "itr-business",
    question: "Need Company, LLP, or Partnership balance sheet finalization & corporate ITR filing?",
    title: "Business & Corporate ITR",
    badge: "Corporate Tax",
    description:
      "Statutory financial statement compilation, depreciation schedules, tax audit sync (Form 3CD) & ITR-5/6 filing.",
    timelineSummary: "⏱ 2–4 Working Days",
    icon: Building2,
    iconColor: "#2563EB",
    iconBg: "#EFF6FF",
    backCardBg: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
    backCardShadow: "rgba(30, 58, 138, 0.32)",
    backCardBorder: "rgba(96, 165, 250, 0.3)",
    backCardLabel: "ITR-6 / ITR-5 CORPORATE",
    href: "/services/itr-business",
  },
  {
    id: "gst-notice-reply",
    question: "Received a GST demand order, ASMT-10 discrepancy, or DRC-01 show-cause notice?",
    title: "GST Notice & Demand Defense",
    badge: "Defence & Appeal",
    description:
      "Legal reply to departmental audit queries, DRC-01/01A notices, mismatch explanations & appellate authority appeals.",
    timelineSummary: "🚨 Initial Reply in 48h",
    icon: FileText,
    iconColor: "#D97706",
    iconBg: "#FFFBEB",
    backCardBg: "linear-gradient(135deg, #92400e 0%, #451a03 100%)",
    backCardShadow: "rgba(146, 64, 14, 0.32)",
    backCardBorder: "rgba(245, 158, 11, 0.3)",
    backCardLabel: "GSTN DRC-01 REBUTTAL",
    href: "/services/gst-notice-reply",
  },
  {
    id: "iec",
    question: "Expanding trade internationally and need an Import Export Code (IEC) issued fast?",
    title: "Import Export Code (IEC)",
    badge: "Global Trade",
    description:
      "Fast-track DGFT portal filing, bank authorization, digital certificate issuance & customs ICEGATE integration.",
    timelineSummary: "⚡ 24-Hr Issuance",
    icon: Globe,
    iconColor: "#0284C7",
    iconBg: "#F0F9FF",
    backCardBg: "linear-gradient(135deg, #0284c7 0%, #0c4a6e 100%)",
    backCardShadow: "rgba(2, 132, 199, 0.32)",
    backCardBorder: "rgba(56, 189, 248, 0.3)",
    backCardLabel: "DGFT IEC 10-DIGIT",
    href: "/services/iec",
  },

  // ─── SET 3: Licensing, Audit & Operations (Cards 13–18) ───
  {
    id: "trademark-objection",
    question: "Trademark application marked 'Objected' under Section 9 or 11 by the Examiner?",
    title: "Trademark Objection Reply",
    badge: "30-Day Window",
    description:
      "Strong legal counter-reply to Examination Report with case law citations, user affidavits & hearing advocacy.",
    timelineSummary: "⏱ Drafted in 48 Hrs",
    icon: ShieldAlert,
    iconColor: "#7C3AED",
    iconBg: "#FAF5FF",
    backCardBg: "linear-gradient(135deg, #581c87 0%, #311042 100%)",
    backCardShadow: "rgba(88, 28, 135, 0.32)",
    backCardBorder: "rgba(192, 132, 252, 0.3)",
    backCardLabel: "MIS-R SEC 9/11 REPLY",
    href: "/services/trademark-objection",
  },
  {
    id: "fssai",
    question: "Launching a food business, cloud kitchen, or D2C packaged brand needing FSSAI license?",
    title: "FSSAI Food License",
    badge: "Mandatory License",
    description:
      "FoSCoS basic registration, state or central food licensing with food safety documentation & inspection guidance.",
    timelineSummary: "⚡ 3–7 Working Days",
    icon: Award,
    iconColor: "#16A34A",
    iconBg: "#F0FDF4",
    backCardBg: "linear-gradient(135deg, #15803d 0%, #14532d 100%)",
    backCardShadow: "rgba(21, 128, 61, 0.32)",
    backCardBorder: "rgba(74, 222, 128, 0.3)",
    backCardLabel: "FoSCoS 14-DIGIT FSSAI",
    href: "/services/fssai",
  },
  {
    id: "export-gst-refund",
    question: "Accumulated unutilized ITC on zero-rated exports or need annual LUT filing?",
    title: "Export GST Refund & LUT",
    badge: "Working Capital",
    description:
      "Fast-track liquidation of blocked Input Tax Credit under Rule 89(5), RFD-01 filing & FIRC/BRC certification.",
    timelineSummary: "⚡ 15–30 Days Recovery",
    icon: RotateCcw,
    iconColor: "#059669",
    iconBg: "#ECFDF5",
    backCardBg: "linear-gradient(135deg, #065f46 0%, #064e3b 100%)",
    backCardShadow: "rgba(6, 95, 70, 0.32)",
    backCardBorder: "rgba(52, 211, 153, 0.3)",
    backCardLabel: "CBIC RULE 89(5) RFD-01",
    href: "/services/specialized/export-gst-refund",
  },
  {
    id: "annual-roc-filing",
    question: "Pending annual ROC returns with risk of heavy ₹100/day per form statutory penalties?",
    title: "Annual ROC Filing (AOC-4/MGT-7)",
    badge: "Penalty Shield",
    description:
      "Financial statement filing on MCA, director report drafting, MGT-7 annual return & Director KYC compliance.",
    timelineSummary: "⏱ 2–3 Working Days",
    icon: Clock,
    iconColor: "#0284C7",
    iconBg: "#F0F9FF",
    backCardBg: "linear-gradient(135deg, #0369a1 0%, #0f172a 100%)",
    backCardShadow: "rgba(3, 105, 161, 0.32)",
    backCardBorder: "rgba(56, 189, 248, 0.3)",
    backCardLabel: "MCA AOC-4 & MGT-7",
    href: "/services/annual-roc-filing",
  },
  {
    id: "bookkeeping",
    question: "Need dedicated monthly bookkeeping, bank reconciliation & MIS reporting on Zoho or Tally?",
    title: "Bookkeeping & Accounting",
    badge: "Dedicated CA",
    description:
      "Cloud accounting migration, daily ledger entries, AP/AR tracking, monthly P&L balance sheets & audit readiness.",
    timelineSummary: "📅 Instant Onboarding",
    icon: BarChart2,
    iconColor: "#7C3AED",
    iconBg: "#FAF5FF",
    backCardBg: "linear-gradient(135deg, #581c87 0%, #311042 100%)",
    backCardShadow: "rgba(88, 28, 135, 0.32)",
    backCardBorder: "rgba(192, 132, 252, 0.3)",
    backCardLabel: "ICAI CFO LEDGER",
    href: "/services/bookkeeping",
  },
  {
    id: "tax-audit",
    question: "Business turnover crossed statutory limits and require a certified CA Tax Audit (Form 3CD)?",
    title: "Tax Audit (Section 44AB)",
    badge: "Statutory Audit",
    description:
      "Independent financial verification, 44AB clause-by-clause scrutiny, Form 3CA/3CB certification & UDIN generation.",
    timelineSummary: "📜 CA Certified Audit",
    icon: ClipboardCheck,
    iconColor: "#475569",
    iconBg: "#F1F5F9",
    backCardBg: "linear-gradient(135deg, #334155 0%, #0f172a 100%)",
    backCardShadow: "rgba(51, 65, 85, 0.32)",
    backCardBorder: "rgba(148, 163, 184, 0.3)",
    backCardLabel: "ICAI FORM 3CA / 3CD",
    href: "/services/tax-audit",
  },
];

const CARDS_PER_PAGE = 6;
const TOTAL_PAGES = Math.ceil(HIGH_DEMAND_SERVICES.length / CARDS_PER_PAGE);

export function ProblemFinder() {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsContainerRef = useRef(null);

  const startIndex = currentPage * CARDS_PER_PAGE;
  const currentCards = HIGH_DEMAND_SERVICES.slice(
    startIndex,
    startIndex + CARDS_PER_PAGE
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : TOTAL_PAGES - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < TOTAL_PAGES - 1 ? prev + 1 : 0));
  };

  // Reset horizontal scroll position on page change
  useEffect(() => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  return (
    <section
      id="diagnostic-tool"
      aria-labelledby="diagnostic-heading"
      className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto"
    >
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
        <h2
          id="diagnostic-heading"
          className="text-2xl sm:text-3xl lg:text-[42px] font-extrabold tracking-tight leading-snug sm:leading-tight mb-2.5 sm:mb-4"
          style={{ color: "var(--color-secondary-dark)" }}
        >
          What{" "}
          <span
            className="text-[#EA8932]"
            style={{ color: "var(--color-primary)" }}
          >
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

        {/* Trust Chips */}
        <div className="mt-3.5 sm:mt-5 grid grid-cols-3 sm:flex sm:flex-wrap items-center justify-center gap-1.5 sm:gap-4 text-slate-600 max-w-sm sm:max-w-none mx-auto">
          <div className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-1.5 py-1.5 sm:px-0 sm:py-0 rounded-full sm:rounded-none bg-white sm:bg-transparent border sm:border-0 border-slate-200/80 sm:shadow-none shadow-2xs">
            <CheckCircle2
              size={12}
              className="text-emerald-600 shrink-0 sm:w-[15px] sm:h-[15px]"
            />
            <span className="font-semibold sm:font-medium text-slate-800 sm:text-slate-500 text-[10px] sm:text-xs whitespace-nowrap">
              <span className="sm:hidden">Direct CA Partner</span>
              <span className="hidden sm:inline">
                Direct CA Partner Handling
              </span>
            </span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-1.5 py-1.5 sm:px-0 sm:py-0 rounded-full sm:rounded-none bg-white sm:bg-transparent border sm:border-0 border-slate-200/80 sm:shadow-none shadow-2xs">
            <ShieldCheck
              size={12}
              className="text-emerald-600 shrink-0 sm:w-[15px] sm:h-[15px]"
            />
            <span className="font-semibold sm:font-medium text-slate-800 sm:text-slate-500 text-[10px] sm:text-xs whitespace-nowrap">
              <span className="sm:hidden">Confidential</span>
              <span className="hidden sm:inline">Strict Confidentiality</span>
            </span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-1.5 py-1.5 sm:px-0 sm:py-0 rounded-full sm:rounded-none bg-white sm:bg-transparent border sm:border-0 border-slate-200/80 sm:shadow-none shadow-2xs">
            <Building2
              size={12}
              className="text-emerald-600 shrink-0 sm:w-[15px] sm:h-[15px]"
            />
            <span className="font-semibold sm:font-medium text-slate-800 sm:text-slate-500 text-[10px] sm:text-xs whitespace-nowrap">
              ICAI Compliant
            </span>
          </div>
        </div>
      </div>



      {/* DESKTOP CONTROLS BAR: Top-Left Indicator & Top-Right Arrow Buttons */}
      <div className="hidden md:flex items-center justify-between gap-4 mb-4 sm:mb-5 px-1">
        {/* Top-Left Indicator Pill Badge */}
        <div className="inline-flex items-center gap-1.5 h-9 px-3 rounded-full bg-white border border-slate-200/90 shadow-2xs">
          {[...Array(TOTAL_PAGES)].map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentPage === i
                  ? "w-6 bg-primary shadow-xs shadow-primary/25"
                  : "w-2 bg-slate-200 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>

        {/* Top-Right: Just Arrow Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrevPage}
            aria-label="Previous 6 services"
            className="h-9 w-9 rounded-full border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-700 hover:text-primary transition-all shadow-2xs hover:shadow-xs flex items-center justify-center cursor-pointer active:scale-95"
          >
            <ArrowLeft size={16} />
          </button>

          <button
            type="button"
            onClick={handleNextPage}
            aria-label="Next 6 services"
            className="h-9 w-9 rounded-full border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-700 hover:text-primary transition-all shadow-2xs hover:shadow-xs flex items-center justify-center cursor-pointer active:scale-95"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* CAROUSEL WRAPPER */}
      <div className="relative">

        {/* DIAGNOSTIC CARDS: Compact for Laptop, Single row on Mobile */}
        <div
          ref={cardsContainerRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-4 lg:gap-4.5 pt-1 pb-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 scroll-pl-4 sm:scroll-pl-6"
        >
          {currentCards.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.id}
                href={item.href}
                className="relative group text-left cursor-pointer focus:outline-none w-[84vw] max-w-[340px] shrink-0 snap-start md:w-full md:max-w-none select-none my-1 block h-full"
              >
                {/* 1. BACK TILTED CARD */}
                <div
                  className="absolute inset-0 rounded-2xl transition-all duration-300 transform -rotate-[1.5deg] group-hover:-rotate-[0.5deg] group-hover:scale-[1.01] pointer-events-none"
                  style={{
                    background: item.backCardBg,
                    boxShadow: `0 10px 20px -6px ${item.backCardShadow}, 0 3px 8px -2px ${item.backCardShadow}`,
                    border: `1px solid ${item.backCardBorder}`,
                  }}
                >
                  {/* Top-Right Micro Watermark on Tilted Card */}
                  <div className="absolute top-2 right-3 select-none opacity-20 font-mono text-[8.5px] font-black tracking-widest text-white uppercase">
                    {item.backCardLabel}
                  </div>
                </div>

                {/* 2. FRONT GLASSMORPHIC CARD */}
                <div
                  className="relative z-10 flex flex-col justify-between h-full p-4 sm:p-4.5 lg:p-5 rounded-2xl transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-lg"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.90)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.95)",
                    boxShadow:
                      "0 6px 16px -4px rgba(12, 34, 46, 0.07), 0 2px 6px -2px rgba(12, 34, 46, 0.04)",
                  }}
                >
                  <div>
                    {/* Top Badge & Icon */}
                    <div className="flex items-center justify-between mb-2 sm:mb-2.5">
                      <span
                        className="flex h-8 w-8 sm:h-8.5 sm:w-8.5 lg:h-9 lg:w-9 items-center justify-center rounded-xl border transition-transform group-hover:scale-105"
                        style={{
                          backgroundColor: item.iconBg,
                          color: item.iconColor,
                          borderColor: `${item.iconColor}30`,
                          boxShadow: `0 2px 6px -2px ${item.iconColor}20`,
                        }}
                      >
                        <Icon size={16} className="lg:w-[18px] lg:h-[18px]" />
                      </span>
                      <span
                        className="rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] font-bold tracking-wide uppercase shadow-2xs border"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.95)",
                          borderColor: `${item.iconColor}30`,
                          color: item.iconColor,
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    {/* Question Prompt */}
                    <p className="text-[11px] sm:text-xs font-semibold text-primary mb-1 leading-snug line-clamp-2">
                      {item.question}
                    </p>

                    {/* Service Title */}
                    <h3
                      className="text-sm sm:text-[15px] lg:text-base font-bold leading-tight mb-1 sm:mb-1.5 group-hover:text-primary transition-colors line-clamp-1"
                      style={{
                        color: "var(--color-secondary)",
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[11px] sm:text-xs mb-2.5 sm:mb-3 line-clamp-2 leading-relaxed text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Timeline & Open Detail Page Action */}
                  <div
                    className="pt-2 sm:pt-2.5 border-t flex items-center justify-between text-[10px] sm:text-[11px]"
                    style={{ borderColor: "rgba(226, 232, 240, 0.8)" }}
                  >
                    <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                      <Clock size={11} className="sm:w-3 sm:h-3" style={{ color: item.iconColor }} />
                      {item.timelineSummary}
                    </span>
                    <span
                      className="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold transition-all group-hover:translate-x-1"
                      style={{
                        color: "var(--color-primary)",
                      }}
                    >
                      View Details <ChevronRight size={11} className="sm:w-3 sm:h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* SEE ALL SERVICES BUTTON JUST BELOW CARDS ROW */}
      <div className="flex justify-center mt-3 sm:mt-5 mb-4 sm:mb-6">
        <Link
          href="/services"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 shadow-2xs hover:shadow-xs text-xs sm:text-sm font-bold transition-all group active:scale-[0.99]"
        >
          <Layers size={15} className="text-primary group-hover:scale-110 transition-transform" />
          <span>See All Services</span>
          <ArrowRight size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
