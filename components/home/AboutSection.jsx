"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  UserCheck,
  ArrowRight,
  MapPin,
  Award,
} from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-14 lg:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20"
    >
      {/* ─────────────────────────────────────────────────────────────
          1. TOP CENTER EYEBROW TAG
      ───────────────────────────────────────────────────────────── */}
      <div className="flex justify-center mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-orange-50 border border-orange-200/80 text-[#C25E0A] shadow-2xs">
          <Building2 className="w-3.5 h-3.5 text-[#EA8932]" />
          <span>ABOUT US &bull; 1TAX INDIA</span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. TWO-COLUMN MAIN CONTENT (LEFT: PROMINENT IMAGE, RIGHT: TEXT)
      ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* LEFT COLUMN: Large, Relatable Image Matching Content Height */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl shadow-slate-900/10 bg-slate-100 w-full h-full min-h-[340px] sm:min-h-[400px]">
            <Image
              src="/images/about/about section.webp"
              alt="1Tax India Chartered Accountant consultation with clients"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
              className="object-cover object-center"
              priority={false}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Clean, short heading & crisp description */}
        <div className="lg:col-span-6 flex flex-col justify-center py-1">
          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#0A2540] tracking-tight leading-tight sm:leading-[1.2] mb-4"
          >
            Direct Senior CA Oversight for{" "}
            <span className="text-[#EA8932]">Modern Growing Businesses</span>
          </h2>

          <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
            <p>
              Headquartered in Patel Nagar, Ghaziabad,{" "}
              <strong>1Tax India</strong> is an ICAI-regulated Chartered
              Accountancy firm built to eliminate the delays, intermediaries,
              and faceless call centers of generic legal tech portals.
            </p>
            <p>
              From complex GST disputes and income tax scrutiny to company
              formation and virtual CFO governance, every matter is supervised
              directly by licensed Fellow Chartered Accountants (FCAs) -
              delivering 100% digital faceless convenience across India with
              institutional rigor.
            </p>
          </div>

          {/* Clean Trust Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <Award className="w-4 h-4 text-[#EA8932] mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#0A2540]">
                  ICAI Regulated
                </p>
                <p className="text-[11px] text-slate-500">
                  Statutory Fellow CAs
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <UserCheck className="w-4 h-4 text-[#EA8932] mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#0A2540]">
                  Zero Call Centers
                </p>
                <p className="text-[11px] text-slate-500">
                  Direct partner access
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <MapPin className="w-4 h-4 text-[#EA8932] mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#0A2540]">
                  Delhi NCR & Pan-India
                </p>
                <p className="text-[11px] text-slate-500">
                  100% Faceless delivery
                </p>
              </div>
            </div>
          </div>

          {/* Action Button & Contact Link */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EA8932] hover:bg-[#d67827] text-white text-xs sm:text-sm font-bold shadow-sm transition-all hover:shadow-md"
            >
              <span>Explore More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://wa.me/919999999999?text=Hello%201Tax,%20I%20would%20like%20to%20consult%20with%20a%20Chartered%20Accountant."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 hover:border-[#0A2540] text-[#0A2540] text-xs sm:text-sm font-semibold transition-colors"
            >
              <span>Consult a Senior CA</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
