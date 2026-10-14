import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { HeroLeadForm } from "./HeroLeadForm";
import { WA_NUMBER } from "@/lib/seo";

export function HeroSection() {
  const waPreFill = encodeURIComponent(
    "Hello 1Tax! I would like to consult a Senior Chartered Accountant regarding my business tax & compliance.",
  );

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden py-10 lg:py-12"
      style={{
        backgroundColor: "var(--color-background)",
      }}
    >
      {/* Subtle Background Radial Gradients */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: "var(--color-primary-light)" }}
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-96 w-96 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "var(--color-secondary-light)" }}
      />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 overflow-x-clip lg:overflow-visible">
        <div className="grid grid-cols-1 items-center gap-10 lg:gap-10 lg:grid-cols-12">
          {/* Left Column: Copy, Value Proposition & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Eyebrow / Trust Pill (Hidden on mobile mode only) */}
            <div
              className="hidden sm:inline-flex items-center self-start mb-4 lg:mb-5 rounded-full px-3 py-1 sm:px-3.5 sm:py-1.5 border shadow-2xs"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
              </span>
              <p
                className="text-[11px] sm:text-xs font-semibold tracking-tight flex items-center flex-wrap gap-1 sm:gap-1.5"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <span
                  className="font-bold"
                  style={{ color: "var(--color-secondary)" }}
                >
                  ICAI Registered CAs
                </span>
                <span className="opacity-40">•</span>
                <span>Pan-India Advisory</span>
                <span className="opacity-40">•</span>
                <span
                  className="rounded-full px-1.5 py-0.5 text-[10px] sm:text-[11px] font-bold"
                  style={{
                    backgroundColor: "#ECFDF5",
                    color: "#047857",
                    border: "1px solid #A7F3D0",
                  }}
                >
                  99.4% Dispute Resolution
                </span>
              </p>
            </div>

            {/* Main Primary H1 Heading */}
            <h1
              id="hero-title"
              className="text-2xl sm:text-3xl lg:text-[44px] font-extrabold leading-[1.22] sm:leading-[1.2] lg:leading-[1.18] tracking-tight mb-3.5 sm:mb-4 lg:mb-5"
              style={{ color: "var(--color-secondary-dark)" }}
            >
              Chartered Accountant &amp; Tax Advisory Firm for{" "}
              <span
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--color-primary), #d97706, var(--color-primary))",
                }}
              >
                Growing Businesses
              </span>{" "}
              &amp; Complex Tax Disputes
            </h1>

            {/* Subheading */}
            <p
              className="text-xs sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-7 lg:mb-8 max-w-2xl font-normal"
              style={{ color: "var(--color-text-secondary)" }}
            >
              From end-to-end company registration and startup compliance to
              defending search &amp; seizure notices, GST audits, and recovering
              stuck MSME dues - our senior CAs deliver{" "}
              <strong
                className="font-semibold"
                style={{ color: "var(--color-text-primary)" }}
              >
                zero-penalty compliance
              </strong>{" "}
              and{" "}
              <strong
                className="font-semibold"
                style={{ color: "var(--color-text-primary)" }}
              >
                aggressive litigation defence
              </strong>
              .
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 mb-7 sm:mb-8 lg:mb-10">
              {/* Primary Action */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 sm:px-7 sm:py-4 text-sm sm:text-base font-bold text-white shadow-md transition-all hover:opacity-95 active:scale-98"
                style={{
                  backgroundColor: "var(--color-primary)",
                  boxShadow: "var(--shadow-glow)",
                }}
              >
                <span>Explore Our Services</span>
                <ArrowRight size={16} />
              </Link>

              {/* Secondary Action (WhatsApp) */}
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${waPreFill}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold border shadow-xs transition-all hover:bg-slate-50"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-primary)",
                }}
              >
                <span
                  className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: "var(--color-whatsapp)" }}
                >
                  <MessageSquare size={13} />
                </span>
                <span>Chat with Senior CA</span>
              </a>
            </div>

            {/* Trust Metrics Strip */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-5 sm:pt-6 border-t"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span
                  className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight"
                  style={{ color: "var(--color-secondary)" }}
                >
                  12+
                </span>
                <span
                  className="text-[11px] sm:text-xs font-medium mt-0.5 sm:mt-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Years Experience
                </span>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span
                  className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight"
                  style={{ color: "var(--color-primary)" }}
                >
                  ₹50Cr+
                </span>
                <span
                  className="text-[11px] sm:text-xs font-medium mt-0.5 sm:mt-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Refunds &amp; Recoveries
                </span>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span
                  className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight"
                  style={{ color: "var(--color-secondary)" }}
                >
                  10,000+
                </span>
                <span
                  className="text-[11px] sm:text-xs font-medium mt-0.5 sm:mt-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Compliance Filings
                </span>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center gap-1 justify-center sm:justify-start">
                  <span
                    className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    4.5
                  </span>
                  <span className="text-amber-500 text-base sm:text-lg">★</span>
                </div>
                <span
                  className="text-[11px] sm:text-xs font-medium mt-0.5 sm:mt-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Rating
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Card */}
          <div className="lg:col-span-5">
            <HeroLeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
