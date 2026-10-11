"use client";

import { Star, UserCheck, Scale, Receipt, Zap } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20"
    >
      {/* ─────────────────────────────────────────────────────────────
          1. SECTION HEADER AREA
      ───────────────────────────────────────────────────────────── */}
      <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-9">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-orange-50 border border-orange-200/80 text-[#C25E0A] shadow-2xs mb-3">
          <span>SENIOR CA PARTNERS &bull; ZERO CALL CENTERS</span>
        </div>

        {/* Main Headline */}
        <h2
          id="why-choose-us-heading"
          className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A2540] tracking-tight leading-tight mb-3"
        >
          Why Fast-Growing Businesses{" "}
          <span className="text-[#EA8932]">Trust 1Tax</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
          When corporate compliance, tax scrutiny, and high-value filings are on
          the line, generic portals pass you to junior telecallers. 1Tax gives
          you direct Fellow CA partner oversight with modern digital speed.
        </p>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. SIDE-BY-SIDE 2-COLUMN COMPARISON CARDS
      ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7 items-stretch max-w-6xl mx-auto">
        {/* LEFT CARD: The 1Tax Advantage (Recommended ★) */}
        <div className="relative bg-white rounded-2xl sm:rounded-[24px] border-2 border-[#EA8932] px-5 py-5 sm:px-7 sm:py-6 shadow-[0_12px_32px_rgba(234,137,50,0.10)] flex flex-col justify-between">
          {/* Floating Pill Tag on Top Border */}
          <div className="absolute -top-3.5 right-6 sm:right-8 bg-[#0A2540] text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-md flex items-center gap-1.5 tracking-wide">
            <span>Recommended</span>
            <span className="text-amber-400">★</span>
          </div>

          <div>
            {/* Header: Star Badge + Title */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#EA8932] text-white flex items-center justify-center shadow-xs shrink-0">
                <Star size={19} fill="currentColor" strokeWidth={0} />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0A2540] tracking-tight">
                The 1Tax Advantage
              </h3>
            </div>

            {/* 4 Core Value Points */}
            <div className="space-y-3.5 sm:space-y-4">
              {/* Point 1: Direct Fellow CA Partner Oversight */}
              <div className="flex items-start gap-3 sm:gap-3.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-orange-50 text-[#EA8932] border border-orange-200/60 flex items-center justify-center shrink-0 mt-0.5">
                  <UserCheck size={17} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-[15px] font-bold text-[#0A2540] leading-snug mb-0.5">
                    Direct Fellow CA Partner Oversight
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    Your corporate filings and tax strategies are executed
                    directly by certified Fellow Chartered Accountants (FCAs) —
                    not junior trainees or scripted telecallers.
                  </p>
                </div>
              </div>

              {/* Point 2: High-Stakes Scrutiny & Litigation Defense */}
              <div className="flex items-start gap-3 sm:gap-3.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-orange-50 text-[#EA8932] border border-orange-200/60 flex items-center justify-center shrink-0 mt-0.5">
                  <Scale size={17} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-[15px] font-bold text-[#0A2540] leading-snug mb-0.5">
                    High-Stakes Scrutiny & Litigation Defense
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    Court-ready litigation bench for Income Tax scrutiny (Sec
                    148), Search & Seizure, GST DRC-01 disputes, and MSME 3x RBI
                    interest recovery before authorities.
                  </p>
                </div>
              </div>

              {/* Point 3: 100% Guaranteed Fixed Quotes */}
              <div className="flex items-start gap-3 sm:gap-3.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-orange-50 text-[#EA8932] border border-orange-200/60 flex items-center justify-center shrink-0 mt-0.5">
                  <Receipt size={17} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-[15px] font-bold text-[#0A2540] leading-snug mb-0.5">
                    100% Guaranteed Fixed Quotes
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    All-inclusive upfront pricing with government statutory fees
                    itemized clearly before work begins. Zero unexpected
                    invoices and zero hidden charges.
                  </p>
                </div>
              </div>

              {/* Point 4: Dedicated Partner Desk on WhatsApp */}
              <div className="flex items-start gap-3 sm:gap-3.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-orange-50 text-[#EA8932] border border-orange-200/60 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap size={17} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-[15px] font-bold text-[#0A2540] leading-snug mb-0.5">
                    Dedicated Partner Desk on WhatsApp
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    Guaranteed 15-minute response SLA via dedicated WhatsApp
                    channel. Pan-India faceless delivery across 28 states
                    without physical office visits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CARD: Generic Portals & Aggregators (Distinct Slate Gray) */}
        <div className="bg-[#F1F5F9] rounded-2xl sm:rounded-[24px] border border-slate-200/90 px-5 py-5 sm:px-7 sm:py-6 flex flex-col justify-between shadow-2xs">
          <div>
            {/* Header: Gray Cross + Title */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200 text-slate-400 flex items-center justify-center text-lg font-bold shrink-0 shadow-2xs">
                ✕
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-700 tracking-tight">
                Generic Portals & Aggregators
              </h3>
            </div>

            {/* 4 Pain-Point Rows */}
            <div className="space-y-3.5 sm:space-y-4">
              {/* Pain Point 1: Scripted Call-Center Telecallers */}
              <div className="flex items-start gap-2.5 sm:gap-3">
                <span className="text-rose-500 font-bold text-sm shrink-0 mt-0.5">
                  ✕
                </span>
                <p className="text-xs sm:text-[13px] leading-relaxed">
                  <strong className="text-slate-800 font-bold">
                    Scripted Call-Center Telecallers:{" "}
                  </strong>
                  <span className="text-slate-600 font-normal">
                    Your sensitive corporate finances are passed to entry-level
                    telecallers reading canned scripts, with zero Chartered
                    Accountant accountability.
                  </span>
                </p>
              </div>

              {/* Pain Point 2: Anonymous Third-Party Outsourcing */}
              <div className="flex items-start gap-2.5 sm:gap-3">
                <span className="text-rose-500 font-bold text-sm shrink-0 mt-0.5">
                  ✕
                </span>
                <p className="text-xs sm:text-[13px] leading-relaxed">
                  <strong className="text-slate-800 font-bold">
                    Anonymous Third-Party Outsourcing:{" "}
                  </strong>
                  <span className="text-slate-600 font-normal">
                    Most online aggregators quietly outsource complex filings to
                    unvetted third-party freelancers, creating severe
                    confidentiality and compliance risks.
                  </span>
                </p>
              </div>

              {/* Pain Point 3: Helpless During Departmental Scrutiny */}
              <div className="flex items-start gap-2.5 sm:gap-3">
                <span className="text-rose-500 font-bold text-sm shrink-0 mt-0.5">
                  ✕
                </span>
                <p className="text-xs sm:text-[13px] leading-relaxed">
                  <strong className="text-slate-800 font-bold">
                    Helpless During Departmental Scrutiny:{" "}
                  </strong>
                  <span className="text-slate-600 font-normal">
                    When an Income Tax notice or GST demand arrives, their
                    support tickets bounce between queues because they lack
                    appellate and tribunal litigators.
                  </span>
                </p>
              </div>

              {/* Pain Point 4: Clickbait Teasers & Hidden Fee Traps */}
              <div className="flex items-start gap-2.5 sm:gap-3">
                <span className="text-rose-500 font-bold text-sm shrink-0 mt-0.5">
                  ✕
                </span>
                <p className="text-xs sm:text-[13px] leading-relaxed">
                  <strong className="text-slate-800 font-bold">
                    Clickbait Teasers & Hidden Fee Traps:{" "}
                  </strong>
                  <span className="text-slate-600 font-normal">
                    They lure you with unrealistic ₹499 teaser rates, then slap
                    surprise invoices for government challans, stamp duties, and
                    mandatory documentation.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
