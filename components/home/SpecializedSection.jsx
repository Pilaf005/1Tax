"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Star,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";

const SLIDES = [
  // SLIDE 1: High-Stakes Recovery & Litigation
  [
    {
      id: "msme-payment-recovery",
      title: "MSME Payment Recovery",
      href: "/services/specialized/msme-payment-recovery",
      description: "File MSME cases & recover delayed payments legally",
      image: "/images/flagship/msme-recovery-v2.png",
    },
    {
      id: "income-tax-assessment",
      title: "Income Tax Assessment Cases",
      href: "/services/specialized/income-tax-assessment",
      description: "Fight tax demands, scrutiny & reassessment orders",
      image: "/images/flagship/income-tax-assessment-v2.png",
    },
    {
      id: "search-seizure-cases",
      title: "Search & Seizure Cases",
      href: "/services/specialized/search-seizure-cases",
      description: "CA representation & protection for IT search operations",
      image: "/images/flagship/search-seizure-v2.png",
    },
  ],

  // SLIDE 2: GST Liquidity, Export & Dispute Defense
  [
    {
      id: "inverted-duty-refund",
      title: "Inverted Duty Structure Refund",
      href: "/services/specialized/inverted-duty-refund",
      description: "Claim stuck GST refunds on input tax credit",
      image: "/images/flagship/inverted-duty-refund-v2.png",
    },
    {
      id: "export-gst-refund",
      title: "Export GST Refund",
      href: "/services/specialized/export-gst-refund",
      description: "IGST & ITC refund for exporters of goods and services",
      image: "/images/flagship/export-gst-refund-v2.png",
    },
    {
      id: "gst-assessment-dispute",
      title: "GST Assessment & Dispute Support",
      href: "/services/gst-assessment",
      description: "Handle GST notices, demands, appeals & litigation",
      image: "/images/flagship/gst-dispute-v2.png",
    },
  ],

  // SLIDE 3: IP Enforcement, Notice Hearings & Strategic Advisory
  [
    {
      id: "trademark-litigation",
      title: "Trademark Litigation",
      href: "/services/specialized/trademark-litigation",
      description: "Infringement, opposition & trademark enforcement",
      image: "/images/flagship/trademark-litigation-v2.png",
    },
    {
      id: "tax-notice-representation",
      title: "Tax Notice & Representation",
      href: "/services/tax-notice",
      description: "Expert notice response & government hearing representation",
      image: "/images/flagship/tax-notice-v2.png",
    },
    {
      id: "complex-tax-advisory",
      title: "Complex Tax & Compliance Advisory",
      href: "/services/complex-tax-advisory",
      description: "Multi-angle advisory for complex business situations",
      image: "/images/flagship/complex-tax-advisory-v2.png",
    },
  ],
];

const ALL_PRACTICE_CARDS = SLIDES.flat();

export function SpecializedSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  function prevSlide() {
    setActiveSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  }

  function nextSlide() {
    setActiveSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  }

  const currentCards = SLIDES[activeSlide];

  return (
    <section
      id="specialized-services"
      aria-labelledby="specialized-heading"
      className="relative pt-10 sm:pt-14 lg:pt-16 pb-0 overflow-hidden"
      style={{ backgroundColor: "#0c222e" }}
    >
      {/* SVG ClipPath Definitions (Gentle 0.12 curve for mobile, full 0.38 arc on desktop) */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="ctaContinuousArcMobile" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.12 Q 0.5,0 1,0.12 L 1,1 L 0,1 Z" />
          </clipPath>
          <clipPath id="ctaContinuousArc" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.38 Q 0.5,0 1,0.38 L 1,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#EA8932" }}
      />

      {/* Floating 3D Isometric Accents in background */}
      <div className="pointer-events-none absolute top-16 left-12 opacity-15 hidden xl:block">
        <svg
          width="120"
          height="90"
          viewBox="0 0 120 90"
          fill="none"
          stroke="currentColor"
          className="text-sky-300"
        >
          <path d="M60 10 L110 35 L60 60 L10 35 Z" strokeWidth="1.5" />
          <path d="M10 35 L10 65 L60 90 L110 65 L110 35" strokeWidth="1.5" />
          <path d="M60 60 L60 90" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="pointer-events-none absolute top-16 right-12 opacity-15 hidden xl:block">
        <svg
          width="120"
          height="90"
          viewBox="0 0 120 90"
          fill="none"
          stroke="currentColor"
          className="text-amber-300"
        >
          <path d="M60 10 L110 35 L60 60 L10 35 Z" strokeWidth="1.5" />
          <path d="M10 35 L10 65 L60 90 L110 65 L110 35" strokeWidth="1.5" />
          <path d="M60 60 L60 90" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold mb-3 sm:mb-4 border shadow-sm backdrop-blur-md"
            style={{
              backgroundColor: "rgba(234, 137, 50, 0.15)",
              borderColor: "rgba(234, 137, 50, 0.3)",
              color: "#FDBA74",
            }}
          >
            <Sparkles size={13} className="text-amber-400" />
            <span>Flagship Practice Areas</span>
          </div>

          <h2
            id="specialized-heading"
            className="text-2xl sm:text-3xl lg:text-[42px] font-extrabold tracking-tight leading-snug sm:leading-tight mb-3 sm:mb-4 text-white"
          >
            High-Stakes Legal &amp; Tax Practice Areas Where Precision Wins
          </h2>

          <p className="text-xs sm:text-base lg:text-lg leading-relaxed font-normal text-slate-300">
            When standard compliance isn&apos;t enough - our senior CA partners
            lead aggressive defense, statutory recoveries, and high-value tax
            litigation across India.
          </p>
        </div>

        {/* OVERLAPPING FANNED CARDS STAGE WITH LEFT & RIGHT NAVIGATION BUTTONS */}
        <div className="relative pt-2 pb-6">
          {/* LEFT NAVIGATION BUTTON (Dark Circle) */}
          {/* LEFT NAVIGATION BUTTON (Dark Circle Matching Design) */}
          <div className="hidden lg:flex absolute left-0 xl:-left-2 top-1/2 translate-y-4 lg:translate-y-6 z-30">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous 3 practices"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1e293b]/90 text-white shadow-xl border border-slate-700/80 backdrop-blur-sm transition-all hover:bg-[#334155] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ArrowLeft size={18} />
            </button>
          </div>

          {/* RIGHT NAVIGATION BUTTON (Same Dark Circle Design as Left) */}
          <div className="hidden lg:flex absolute right-0 xl:-right-2 top-1/2 translate-y-4 lg:translate-y-6 z-30">
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next 3 practices"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1e293b]/90 text-white shadow-xl border border-slate-700/80 backdrop-blur-sm transition-all hover:bg-[#334155] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          {/* MOBILE VIEW (< md): True Native Horizontal Swipe Carousel with full-bleed touch momentum and snap */}
          <div className="flex md:hidden gap-4 pt-2 pb-8 overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-4 px-6 sm:-mx-6 sm:px-8 scroll-pl-6 sm:scroll-pl-8 relative z-10 [isolation:isolate]">
            {ALL_PRACTICE_CARDS.map((card, idx) => {
              // Alternating subtle playful tilt for the native scrollable cards
              const tiltClass =
                idx % 3 === 0
                  ? "-rotate-2"
                  : idx % 3 === 1
                  ? "rotate-1.5"
                  : "-rotate-1";

              return (
                <div
                  key={`mobile-${card.id}`}
                  className={`w-[82vw] max-w-[310px] shrink-0 snap-start bg-white rounded-2xl border border-blue-100/90 p-5 shadow-2xl transition-all duration-300 flex flex-col justify-start h-[320px] select-none my-1 transform-gpu ${tiltClass}`}
                  style={{
                    boxShadow:
                      "0 20px 45px -10px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.85)",
                  }}
                >
                  {/* Title with Right Triangle Arrow ▸ */}
                  <Link href={card.href} className="group/link block">
                    <h3 className="text-base font-extrabold text-[#0A2540] tracking-tight leading-snug mb-1.5 flex items-center justify-between group-hover/link:text-[#EA8932] transition-colors">
                      <span>{card.title}</span>
                      <span className="text-[#0A2540] group-hover/link:text-[#EA8932] transition-transform group-hover/link:translate-x-1 text-sm">
                        ▸
                      </span>
                    </h3>
                  </Link>

                  {/* Concise 2-line description */}
                  <p className="text-[12.5px] text-[#4A5568] leading-relaxed font-normal mb-2 line-clamp-2">
                    {card.description}
                  </p>

                  {/* 3D ISOMETRIC ILLUSTRATIVE GRAPHIC */}
                  <div className="flex-1 w-full flex items-center justify-center overflow-hidden pt-1 relative transform-gpu">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={360}
                      height={230}
                      className="w-full h-auto max-h-[160px] object-contain select-none pointer-events-none transform-gpu"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* DESKTOP VIEW (md+): Fanned 3-card bottom-pivoted slide deck (100% UNTOUCHED) */}
          <div className="hidden md:flex md:flex-row items-end justify-center relative z-10 [isolation:isolate] pt-4 md:pt-0">
            {currentCards.map((card, idx) => {
              const isLeft = idx === 0;
              const isCenter = idx === 1;
              const isRight = idx === 2;

              let desktopPositionClasses = "";
              if (isLeft) {
                desktopPositionClasses =
                  "md:-rotate-3 md:translate-y-5 lg:translate-y-6 hover:md:translate-y-4 hover:lg:translate-y-5 md:translate-x-[22px] lg:translate-x-[26px] z-0 hover:z-0 origin-bottom";
              } else if (isCenter) {
                desktopPositionClasses =
                  "md:rotate-0 md:translate-y-1 lg:translate-y-2 hover:md:-translate-y-1 hover:lg:-translate-y-1 z-10 hover:z-10 origin-bottom";
              } else if (isRight) {
                desktopPositionClasses =
                  "md:rotate-3 md:translate-y-5 lg:translate-y-6 hover:md:translate-y-4 hover:lg:translate-y-5 md:-translate-x-[22px] lg:-translate-x-[26px] z-0 hover:md:z-0 origin-bottom";
              }

              return (
                <div
                  key={card.id}
                  className={`group md:w-[340px] lg:w-[370px] shrink-0 bg-white rounded-t-[24px] sm:rounded-t-[28px] rounded-b-xl border border-blue-100/80 px-5 sm:px-7 pt-5 sm:pt-7 pb-3.5 sm:pb-5 shadow-2xl transition-all duration-500 ease-out flex flex-col justify-start md:h-[450px] transform-gpu [backface-visibility:hidden] [transform:translateZ(0)] antialiased ${desktopPositionClasses}`}
                  style={{
                    boxShadow: isCenter
                      ? "0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.9), 0 0 20px rgba(56, 189, 248, 0.15)"
                      : "0 15px 35px -10px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {/* Title with Right Triangle Arrow ▸ */}
                  <Link href={card.href} className="group/link block">
                    <h3 className="text-lg sm:text-[22px] font-extrabold text-[#0A2540] tracking-tight leading-snug mb-1.5 sm:mb-2 flex items-center justify-between group-hover/link:text-[#EA8932] transition-colors">
                      <span>{card.title}</span>
                      <span className="text-[#0A2540] group-hover/link:text-[#EA8932] transition-transform group-hover/link:translate-x-1 text-sm sm:text-lg">
                        ▸
                      </span>
                    </h3>
                  </Link>

                  {/* Concise 2-line description */}
                  <p className="text-[13.5px] sm:text-[14px] text-[#4A5568] leading-relaxed font-normal mb-1 sm:mb-2">
                    {card.description}
                  </p>

                  {/* 3D ISOMETRIC ILLUSTRATIVE GRAPHIC */}
                  <div className="flex-1 w-full flex items-center justify-center overflow-hidden pt-1 relative transform-gpu [backface-visibility:hidden]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={360}
                      height={230}
                      className="w-full h-auto md:max-h-[275px] object-contain select-none pointer-events-none transform-gpu [backface-visibility:hidden] [transform:translateZ(0)]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FULL-WIDTH PRONOUNCED CIRCULAR DOME CTA BANNER (SAFFRON AMBER #EA8932) */}
      <div
        className="relative z-20 -mt-10 sm:-mt-14 md:-mt-24 lg:-mt-28 w-full text-white pb-8 sm:pb-10 pt-12 sm:pt-16 md:pt-24 px-4 sm:px-6 lg:px-8 shadow-2xl [clip-path:url(#ctaContinuousArcMobile)] md:[clip-path:url(#ctaContinuousArc)]"
        style={{
          background:
            "linear-gradient(135deg, #EA8932 0%, #E27B22 45%, #C25E0A 100%)",
        }}
      >
        {/* Subtle Ambient Shimmer */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-28 w-96 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: "#FEF08A" }}
        />

        {/* NAVIGATION INDICATOR DIRECTLY ON DOME (Hidden on mobile, preserved on desktop) */}
        <div className="hidden md:flex justify-center -mt-12 mb-7 relative z-30">
          <div className="inline-flex items-center gap-2.5">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="transition-all duration-300 rounded-full cursor-pointer hover:opacity-90"
                style={{
                  width: activeSlide === idx ? 26 : 7,
                  height: 6,
                  backgroundColor:
                    activeSlide === idx ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                  boxShadow:
                    activeSlide === idx
                      ? "0 1px 4px rgba(0, 0, 0, 0.2)"
                      : "none",
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center text-white">
          {/* COLUMN 1: Firm Commitment & Human Connection (Left - 4 cols) */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col justify-center text-center md:text-left space-y-1.5 sm:space-y-2 max-w-md mx-auto md:mx-0 px-2 sm:px-0">
            <p className="text-xs sm:text-base lg:text-[17px] font-semibold text-white leading-relaxed tracking-tight drop-shadow-xs">
              &ldquo;Behind every business is years of hard work. We stand
              between you and tax stress &mdash; real Senior CAs who answer your
              call and treat your company like their own.&rdquo;
            </p>
            <p className="text-[11px] sm:text-[13px] text-amber-100 font-medium tracking-tight">
              <span>The 1Tax Promise &bull; </span>
              <a
                href="#consultation-form"
                className="text-white underline underline-offset-4 font-bold decoration-white/70 hover:decoration-white hover:text-amber-100 transition-colors"
              >
                Partner-Led Care Across India
              </a>
            </p>
          </div>

          {/* COLUMN 2: Laurel Award Trust Seal (Center - 4 cols, directly on background without box) */}
          <div className="md:col-span-4 lg:col-span-4 flex items-center justify-center py-1 sm:py-2 md:py-0">
            <div className="relative group transition-transform hover:scale-105 duration-300">
              <Image
                src="/images/ca-laurel-badge-transparent.png"
                alt="India's Most Trusted CA & Tax Advisory Firm 2026 - 4.5 Rating"
                width={220}
                height={200}
                className="w-36 sm:w-48 lg:w-52 h-auto drop-shadow-sm select-none pointer-events-none"
                priority
              />
            </div>
          </div>

          {/* COLUMN 3: Google Reviews Trust Card & Rate Us Action (Right - 4 cols) */}
          <div className="md:col-span-4 lg:col-span-4 flex items-center justify-center md:justify-center lg:justify-center gap-4 sm:gap-5">
            {/* Google 'G' Icon Badge */}
            <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-white flex items-center justify-center shadow-2xl shrink-0 p-3.5 sm:p-4 hover:scale-105 transition-transform duration-300">
              <svg className="w-full h-full" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.14z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.94H1.27v3.13C3.25 21.31 7.31 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.26c-.25-.72-.38-1.49-.38-2.26s.13-1.54.38-2.26V6.61H1.27C.46 8.23 0 10.06 0 12s.46 3.77 1.27 5.39l4.01-3.13z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.77c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.18 15.24 0 12 0 7.31 0 3.25 2.69 1.27 6.61l4.01 3.13c.95-2.84 3.6-4.97 6.72-4.97z"
                />
              </svg>
            </div>

            {/* Google Reviews Details + Rate Us */}
            <div className="flex flex-col text-left space-y-1">
              <span className="text-lg sm:text-xl lg:text-[22px] font-extrabold text-white leading-tight tracking-tight">
                Google Reviews
              </span>
              <div className="flex items-center gap-2">
                <div className="flex text-[#FBBF24]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="currentColor"
                      strokeWidth={0}
                      className="sm:w-5 sm:h-5"
                    />
                  ))}
                </div>
                <span className="text-base sm:text-lg font-black text-white tracking-tight">
                  4.5 / 5
                </span>
              </div>
              <a
                href="https://www.google.com/search?q=1tax+chartered+accountants"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13.5px] sm:text-sm lg:text-[15px] font-bold text-white/95 hover:text-white underline underline-offset-4 decoration-white/70 hover:decoration-white transition-colors pt-0.5"
              >
                <span>Rate us on Google</span>
                <ExternalLink size={14} className="inline opacity-85" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
