"use client";

import { useState, useId } from "react";
import { ChevronDown, Clock, Sparkles } from "lucide-react";
import { globalFaqs } from "@/data/faqs";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default
  const baseId = useId();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Generate FAQ Schema for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: globalFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faqs"
      aria-labelledby="faq-section-heading"
      className="pt-8 sm:pt-12 lg:pt-14 pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto scroll-mt-20"
    >
      {/* Schema.org FAQ Rich Snippet */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ─────────────────────────────────────────────────────────────
          1. SECTION HEADER
      ───────────────────────────────────────────────────────────── */}
      <div className="text-center max-w-3xl mx-auto mb-9 sm:mb-11">
        {/* Eyebrow Pill */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border shadow-2xs"
          style={{
            backgroundColor: "var(--color-primary-muted)",
            borderColor: "var(--color-primary-light)",
            color: "var(--color-primary-dark)",
          }}
        >
          <Sparkles size={14} className="text-[#EA8932]" />
          <span>Got Questions? We Have Answers</span>
        </div>

        {/* Main Headline */}
        <h2
          id="faq-section-heading"
          className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-tight mb-4"
          style={{ color: "var(--color-secondary-dark)" }}
        >
          Frequently Asked{" "}
          <span style={{ color: "var(--color-primary)" }}>Questions</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg leading-relaxed text-slate-600">
          Clear, straightforward answers about our Senior CA advisory, fixed fee
          structures, litigation response, and 100% faceless delivery.
        </p>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. EXPANSIVE FULL-WIDTH ACCORDION
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto space-y-3.5 sm:space-y-4">
        {globalFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const headingId = `${baseId}-faq-heading-${idx}`;
          const panelId = `${baseId}-faq-panel-${idx}`;

          return (
            <div
              key={faq.id}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "border-[#EA8932]/40 shadow-md ring-1 ring-[#EA8932]/10"
                  : "border-slate-200/80 hover:border-slate-300 shadow-2xs"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(idx)}
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full p-5 sm:p-6 lg:p-7 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <div className="space-y-2 flex-1">
                  {/* Top Badges: Category & SLA */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60">
                      {faq.tag}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200/60 inline-flex items-center gap-1">
                      <Clock size={11} className="text-[#EA8932]" />
                      {faq.sla}
                    </span>
                  </div>

                  {/* Question Text */}
                  <h3
                    className="text-base sm:text-lg lg:text-xl font-bold transition-colors leading-snug"
                    style={{
                      color: isOpen ? "#EA8932" : "var(--color-secondary-dark)",
                    }}
                  >
                    {faq.question}
                  </h3>
                </div>

                {/* Chevron Indicator */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 mt-1 ${
                    isOpen
                      ? "bg-[#EA8932]/10 text-[#EA8932] rotate-180"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <ChevronDown size={18} />
                </div>
              </button>

              {/* Accordion Content Panel */}
              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  className="px-5 pb-6 sm:px-6 sm:pb-7 lg:px-7 lg:pb-7 pt-1 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed animate-in fade-in-50 duration-200"
                >
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. BOTTOM TRUST METRIC STRIP
      ───────────────────────────────────────────────────────────── */}
    </section>
  );
}
