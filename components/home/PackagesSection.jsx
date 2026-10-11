"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { packages } from "@/data/packages";

export function PackagesSection() {
  return (
    <section
      id="packages"
      aria-labelledby="packages-heading"
      className="pt-10 sm:pt-14 lg:pt-16 pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto scroll-mt-20"
    >
      {/* ─────────────────────────────────────────────────────────────
          1. SECTION HEADER AREA
      ───────────────────────────────────────────────────────────── */}
      <div className="text-center max-w-4xl mx-auto mb-7 sm:mb-11">
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
          <span>Turnkey Growth Retainers</span>
        </div>

        {/* Main Headline */}
        <h2
          id="packages-heading"
          className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-snug sm:leading-tight mb-2.5 sm:mb-4"
          style={{ color: "var(--color-secondary-dark)" }}
        >
          Packages Built for{" "}
          <span style={{ color: "var(--color-primary)" }}>Every Stage</span> of
          Your Business
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto font-normal text-slate-600">
          From day-one incorporation to audit-proof compliance and fractional
          CFO leadership - fixed fees, dedicated CAs, and zero hidden charges.
        </p>

        {/* 3 Trust Verification Chips (Same row on mobile, non-scrollable) */}
        <div className="mt-4 sm:mt-6 grid grid-cols-3 sm:flex sm:flex-wrap items-center justify-center gap-1.5 sm:gap-6 text-slate-600 max-w-sm sm:max-w-none mx-auto">
          <div className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-slate-200/80 shadow-2xs">
            <CheckCircle2 size={13} className="text-emerald-600 shrink-0 sm:w-4 sm:h-4" />
            <span className="font-semibold text-slate-800 text-[10px] sm:text-sm whitespace-nowrap">
              100% CA <span className="hidden sm:inline">Partner </span>Handled
            </span>
          </div>
          <div className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-slate-200/80 shadow-2xs">
            <CheckCircle2 size={13} className="text-emerald-600 shrink-0 sm:w-4 sm:h-4" />
            <span className="font-semibold text-slate-800 text-[10px] sm:text-sm whitespace-nowrap">
              Fixed <span className="hidden sm:inline">Transparent </span>Pricing
            </span>
          </div>
          <div className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-slate-200/80 shadow-2xs">
            <CheckCircle2 size={13} className="text-emerald-600 shrink-0 sm:w-4 sm:h-4" />
            <span className="font-semibold text-slate-800 text-[10px] sm:text-sm whitespace-nowrap">
              Custom <span className="hidden sm:inline">Package </span>Builder
            </span>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. 4-COLUMN VISUAL PACKAGES (Swipe Carousel on Mobile, Grid on Desktop)
      ───────────────────────────────────────────────────────────── */}
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch mb-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none -mx-4 px-6 sm:-mx-6 sm:px-8 md:mx-0 md:px-0 scroll-pl-6 sm:scroll-pl-8 pt-1 pb-4 md:py-0">
        {packages.map((pkg) => {
          const isPopular = pkg.isPopular;
          const targetUrl = `/packages/${pkg.slug}`;

          return (
            <Link
              key={pkg.id}
              href={targetUrl}
              scroll={true}
              className="group relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_2px_12px_rgba(12,34,46,0.05)] hover:shadow-[0_16px_32px_rgba(12,34,46,0.12)] hover:-translate-y-1.5 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer w-[82vw] max-w-[310px] shrink-0 snap-start md:w-auto md:max-w-none select-none my-1"
            >
              {/* Full-Bleed Top Artwork (No top/left/right padding & No badges) */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl bg-[#0C222E]">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body — Minimal Textual Info */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold tracking-tight text-[#2A3C3E] group-hover:text-[#EA8932] transition-colors mb-1 leading-snug">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal line-clamp-2 mb-3">
                    {pkg.summary}
                  </p>
                </div>

                {/* Minimal Horizontal Price & Action Footer Row */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                      Starting At
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl sm:text-2xl font-black text-[#2A3C3E] tracking-tight">
                        {pkg.startingPrice}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500">
                        {pkg.cadence}
                      </span>
                    </div>
                  </div>

                  <div className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs flex items-center gap-1.5 transition-all duration-300 text-white shrink-0 bg-[#EA8932] hover:bg-[#d97706] shadow-sm shadow-orange-500/20 group-hover:shadow-md">
                    <span>Explore</span>
                    <ArrowRight
                      size={13}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
