"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Star,
  Sparkles,
  MapPin,
  ChevronLeft,
  ChevronRight,
  FileCheck,
  ThumbsUp,
  Trophy,
} from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 12);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 12);
    }
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [checkScroll]);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth =
        scrollContainerRef.current.firstElementChild?.offsetWidth || 380;
      const scrollAmount = cardWidth + 24; // card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-14 lg:pb-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto scroll-mt-20"
    >
      {/* ─────────────────────────────────────────────────────────────
          1. SECTION HEADER AREA
      ───────────────────────────────────────────────────────────── */}
      <div className="text-center max-w-4xl mx-auto mb-7 sm:mb-10">
        {/* Eyebrow Pill */}
        <div
          className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold mb-3 sm:mb-4 border shadow-2xs"
          style={{
            backgroundColor: "var(--color-primary-muted)",
            borderColor: "var(--color-primary-light)",
            color: "var(--color-primary-dark)",
          }}
        >
          <Sparkles size={13} className="text-[#EA8932]" />
          <span>Client Results & Trust</span>
        </div>

        {/* Main Headline */}
        <h2
          id="testimonials-heading"
          className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-snug sm:leading-tight mb-2.5 sm:mb-4"
          style={{ color: "var(--color-secondary-dark)" }}
        >
          Trusted by{" "}
          <span style={{ color: "var(--color-primary)" }}>
            10,000+ Founders
          </span>
          , Manufacturers & Exporters
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto font-normal text-slate-600 mb-6 sm:mb-8">
          From seed-stage startups to ₹50 Cr+ enterprises — hear how direct
          Senior CA partner guidance transforms compliance, refunds, and tax
          disputes.
        </p>

        {/* Aggregate Trust Score Strip */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 py-5 sm:py-7 px-3 sm:px-6 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {/* 1. Statutory Filings Completed */}
            <div className="flex flex-col items-center justify-center text-center px-2 sm:px-4 py-3 md:py-0 border-r border-slate-200/70">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#2A3C3E] text-white flex items-center justify-center shadow-md shadow-[#2A3C3E]/20 mb-2 sm:mb-3.5">
                <FileCheck size={18} strokeWidth={2.4} className="sm:w-[22px] sm:h-[22px]" />
              </div>
              <p className="text-xl sm:text-[28px] font-black text-[#2A3C3E] tracking-tight leading-none">
                10,000+
              </p>
              <p className="text-[11px] sm:text-[13px] font-medium text-slate-500 mt-1 sm:mt-2">
                Statutory Filings Completed
              </p>
            </div>

            {/* 2. Average Rating */}
            <div className="flex flex-col items-center justify-center text-center px-2 sm:px-4 py-3 md:py-0 md:border-r border-slate-200/70">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#EA8932] text-white flex items-center justify-center shadow-md shadow-orange-500/20 mb-2 sm:mb-3.5">
                <Star size={18} fill="currentColor" className="sm:w-[22px] sm:h-[22px]" />
              </div>
              <p className="text-xl sm:text-[28px] font-black text-[#2A3C3E] tracking-tight leading-none">
                4.5 / 5
              </p>
              <p className="text-[11px] sm:text-[13px] font-medium text-slate-500 mt-1 sm:mt-2">
                Average Rating
              </p>
            </div>

            {/* 3. First-Time Approval Rate */}
            <div className="flex flex-col items-center justify-center text-center px-2 sm:px-4 py-3 md:py-0 border-t md:border-t-0 border-r border-slate-200/70">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#2A3C3E] text-white flex items-center justify-center shadow-md shadow-[#2A3C3E]/20 mb-2 sm:mb-3.5">
                <ThumbsUp size={18} strokeWidth={2.4} className="sm:w-[22px] sm:h-[22px]" />
              </div>
              <p className="text-xl sm:text-[28px] font-black text-[#2A3C3E] tracking-tight leading-none">
                99.4%
              </p>
              <p className="text-[11px] sm:text-[13px] font-medium text-slate-500 mt-1 sm:mt-2">
                First-Time Approval Rate
              </p>
            </div>

            {/* 4. 12+ Years Experience */}
            <div className="flex flex-col items-center justify-center text-center px-2 sm:px-4 py-3 md:py-0 border-t md:border-t-0 border-slate-200/70">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#EA8932] text-white flex items-center justify-center shadow-md shadow-orange-500/20 mb-2 sm:mb-3.5">
                <Trophy size={18} strokeWidth={2.4} className="sm:w-[22px] sm:h-[22px]" />
              </div>
              <p className="text-xl sm:text-[28px] font-black text-[#2A3C3E] tracking-tight leading-none">
                12+ Years
              </p>
              <p className="text-[11px] sm:text-[13px] font-medium text-slate-500 mt-1 sm:mt-2">
                Industry Experience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. SCROLLABLE TESTIMONIALS CAROUSEL
      ───────────────────────────────────────────────────────────── */}
      {/* Scrollable Stage with Left & Right Flanking Buttons */}
      <div className="relative group/carousel">
        {/* Left Arrow Button (Desktop / Tablet only) */}
        <button
          type="button"
          onClick={() => handleScroll("left")}
          disabled={!canScrollLeft}
          aria-label="Previous review"
          className="hidden sm:flex absolute -left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#EA8932] hover:bg-[#D47522] text-white shadow-md hover:shadow-lg disabled:opacity-0 disabled:pointer-events-none transition-all duration-200 items-center justify-center active:scale-95 cursor-pointer ring-2 sm:ring-4 ring-white"
        >
          <ChevronLeft size={18} strokeWidth={2.5} />
        </button>

        {/* Scrollable Track */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 -mx-4 px-6 sm:mx-0 sm:px-1 scroll-pl-6 sm:scroll-pl-1 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="w-[82vw] max-w-[320px] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] shrink-0 snap-start bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group select-none"
            >
              <div>
                {/* Top Row: 5 Stars + Industry Tag */}
                <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10.5px] sm:text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200/60">
                    {t.industry}
                  </span>
                </div>

                {/* Tangible Outcome Metric Chip */}
                <div className="mb-3.5 sm:mb-4">
                  <span className="inline-flex items-center px-2.5 py-1 sm:px-3 rounded-lg text-[11.5px] sm:text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200/60 leading-snug">
                    {t.outcomeBadge}
                  </span>
                </div>

                {/* Client Review Quote */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal italic mb-5 sm:mb-6">
                  “{t.quote}”
                </p>
              </div>

              {/* Client Profile Footer */}
              <div className="pt-3.5 sm:pt-4 border-t border-slate-100 flex items-center gap-3 sm:gap-3.5">
                {/* Avatar Monogram */}
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${t.avatarBg} text-white font-black text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-xs`}
                >
                  {t.initials}
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                    {t.clientName}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium truncate">
                    {t.designation},{" "}
                    <span className="font-semibold text-slate-700">
                      {t.company}
                    </span>
                  </p>
                  <div className="flex items-center gap-1 text-[10.5px] sm:text-[11px] text-slate-400 mt-0.5 truncate">
                    <MapPin size={11} className="shrink-0" />
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow Button (Desktop / Tablet only) */}
        <button
          type="button"
          onClick={() => handleScroll("right")}
          disabled={!canScrollRight}
          aria-label="Next review"
          className="hidden sm:flex absolute -right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#EA8932] hover:bg-[#D47522] text-white shadow-md hover:shadow-lg disabled:opacity-0 disabled:pointer-events-none transition-all duration-200 items-center justify-center active:scale-95 cursor-pointer ring-2 sm:ring-4 ring-white"
        >
          <ChevronRight size={18} strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}
