"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  Award,
  Zap,
} from "lucide-react";
import { PHONE_NUMBER, WA_NUMBER } from "@/lib/seo";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const formattedPhone = "+91 98765 43210";
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hello 1Tax! I would like to consult with a Chartered Accountant."
  )}`;

  return (
    <footer className="bg-[#07161F] text-slate-300 border-t border-slate-800/80">
      {/* ─────────────────────────────────────────────────────────────
          1. TOP TRUST & CREDENTIALS RIBBON
      ───────────────────────────────────────────────────────────── */}
      <div className="border-b border-slate-800/80 bg-[#0A1D28]/60">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-orange-500/10 border border-orange-500/20 text-[#EA8932] flex items-center justify-center shrink-0">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] sm:text-xs font-bold text-white tracking-tight leading-tight">ICAI Regulated Firm</p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 leading-tight truncate sm:whitespace-normal">CA Practice</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] sm:text-xs font-bold text-white tracking-tight leading-tight">&lt; 15-Min Response</p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 leading-tight truncate sm:whitespace-normal">Direct Senior Partner</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] sm:text-xs font-bold text-white tracking-tight leading-tight">Zero Call Centers</p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 leading-tight truncate sm:whitespace-normal">100% CA Handled</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] sm:text-xs font-bold text-white tracking-tight leading-tight">Pan-India Delivery</p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 leading-tight truncate sm:whitespace-normal">100% Digital Practice</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN 5-COLUMN NAVIGATION GRID
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-x-6 gap-y-9 lg:gap-8">
          {/* COLUMN 1: Brand & Contact Identity (4 cols) */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 space-y-4 sm:space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="1Tax Chartered Accountants"
                width={160}
                height={52}
                className="h-10 sm:h-11 w-auto object-contain brightness-105"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal max-w-sm">
              1Tax India is an ICAI-registered Chartered Accountancy firm delivering
              strategic corporate compliance, direct & indirect tax dispute litigation,
              and virtual CFO services to fast-growing Indian enterprises.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EA8932] shrink-0 mt-0.5" />
                <span>
                  H-112, Patel Nagar-III, 1st Floor, Patel Nagar, Ghaziabad, Uttar Pradesh 201001
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EA8932] shrink-0" />
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="hover:text-white transition-colors font-medium"
                >
                  {formattedPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EA8932] shrink-0" />
                <a
                  href="mailto:contact@1tax.in"
                  className="hover:text-white transition-colors"
                >
                  contact@1tax.in
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#EA8932] shrink-0" />
                <span>Mon–Sat: 9:30 AM – 7:00 PM IST</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-[0.98]"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>Chat with Senior CA</span>
              </a>
            </div>
          </div>

          {/* COLUMN 2: Specialized CA Litigation (2 cols on lg, 1 col on mobile) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-3 sm:space-y-3.5">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Specialized Litigation
            </h4>
            <ul className="space-y-2 text-[11.5px] sm:text-xs text-slate-400">
              <li>
                <Link
                  href="/services/specialized/msme-payment-recovery"
                  className="hover:text-[#EA8932] transition-colors leading-snug block"
                >
                  MSME Payment Recovery
                </Link>
              </li>
              <li>
                <Link
                  href="/services/specialized/export-gst-refund"
                  className="hover:text-[#EA8932] transition-colors leading-snug block"
                >
                  Export GST Refunds (LUT)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/specialized/income-tax-assessment"
                  className="hover:text-[#EA8932] transition-colors leading-snug block"
                >
                  Income Tax Scrutiny (143/148)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/specialized/inverted-duty-refund"
                  className="hover:text-[#EA8932] transition-colors leading-snug block"
                >
                  Inverted Duty GST Refunds
                </Link>
              </li>
              <li>
                <Link
                  href="/services/specialized/search-seizure-cases"
                  className="hover:text-[#EA8932] transition-colors leading-snug block"
                >
                  Search &amp; Seizure Defense
                </Link>
              </li>
              <li>
                <Link
                  href="/services/specialized/trademark-litigation"
                  className="hover:text-[#EA8932] transition-colors leading-snug block"
                >
                  Trademark &amp; IP Disputes
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Core Corporate Solutions (2 cols on lg, 1 col on mobile) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-3 sm:space-y-3.5">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Corporate Solutions
            </h4>
            <ul className="space-y-2 text-[11.5px] sm:text-xs text-slate-400">
              <li>
                <Link
                  href="/services/private-limited-company"
                  className="hover:text-[#EA8932] transition-colors leading-snug block"
                >
                  Pvt Ltd Company Setup
                </Link>
              </li>
              <li>
                <Link
                  href="/services/llp-registration"
                  className="hover:text-[#EA8932] transition-colors leading-snug block"
                >
                  LLP Registration
                </Link>
              </li>
              <li>
                <Link
                  href="/services/gst-registration"
                  className="hover:text-[#EA8932] transition-colors leading-snug block"
                >
                  GST Registration &amp; Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/services/corporate-tax-filing"
                  className="hover:text-[#EA8932] transition-colors leading-snug block"
                >
                  Corporate Tax Filing (ITR-6)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mca-annual-filing"
                  className="hover:text-[#EA8932] transition-colors leading-snug block"
                >
                  MCA &amp; ROC Annual Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/virtual-cfo"
                  className="hover:text-[#EA8932] transition-colors leading-snug block"
                >
                  Virtual CFO Retainer
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Turnkey Packages (2 cols on lg, 1 col on mobile) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-3 sm:space-y-3.5">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Retainer Packages
            </h4>
            <ul className="space-y-2 text-[11.5px] sm:text-xs text-slate-400">
              <li>
                <Link
                  href="/packages/startup-package"
                  className="hover:text-[#EA8932] transition-colors leading-snug block"
                >
                  Startup Package
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/compliance"
                  className="hover:text-[#EA8932] transition-colors leading-snug block"
                >
                  Compliance Package
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/accounting"
                  className="hover:text-[#EA8932] transition-colors leading-snug block"
                >
                  Accounting &amp; Bookkeeping
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/virtual-cfo"
                  className="hover:text-[#EA8932] transition-colors leading-snug block"
                >
                  Virtual CFO Package
                </Link>
              </li>
              <li>
                <Link
                  href="/#packages"
                  className="hover:text-[#EA8932] transition-colors font-medium text-slate-300 leading-snug block"
                >
                  Custom Package Builder &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 5: Quick Links & Firm (2 cols on lg, 1 col on mobile) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-3 sm:space-y-3.5">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[11.5px] sm:text-xs text-slate-400">
              <li>
                <Link href="/about" className="hover:text-[#EA8932] transition-colors leading-snug block">
                  About 1Tax
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#EA8932] transition-colors leading-snug block">
                  Knowledge &amp; Insights
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-[#EA8932] transition-colors leading-snug block">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-[#EA8932] transition-colors leading-snug block">
                  Pan-India Locations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#EA8932] transition-colors leading-snug block">
                  Contact Office
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#EA8932] transition-colors font-medium text-[#EA8932] leading-snug block">
                  Request Callback &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. STATUTORY ICAI REGULATORY DISCLAIMER
      ───────────────────────────────────────────────────────────── */}
      <div className="border-t border-slate-800/80 bg-[#051119]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[10.5px] sm:text-[11px] leading-relaxed text-slate-400">
            <span className="font-bold text-slate-300 block mb-1">
              Regulatory Compliance &bull; The Institute of Chartered Accountants of India (ICAI):
            </span>
            As per the rules and regulations prescribed by The Institute of Chartered
            Accountants of India (ICAI), Chartered Accountants are not permitted to advertise
            or solicit client work. The information contained on this website is made
            available exclusively for general informational purposes upon request. 1Tax
            India is an independent professional firm of practicing Chartered Accountants.
            Accessing this website does not constitute an accountant-client engagement.
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. COPYRIGHT & LEGAL POLICY LINKS
      ───────────────────────────────────────────────────────────── */}
      <div className="border-t border-slate-800 bg-[#040C12] text-xs text-slate-500 py-4 sm:py-5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-center sm:text-left text-[11px] sm:text-xs text-slate-400 sm:text-slate-500">
            &copy; {currentYear} 1Tax India. All Rights Reserved. Chartered Accountants Firm.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-6 gap-y-1.5 text-[11px] sm:text-xs">
            <Link
              href="/privacy-policy"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-700">&bull;</span>
            <Link
              href="/terms"
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-slate-700">&bull;</span>
            <Link
              href="/refund-policy"
              className="hover:text-slate-300 transition-colors"
            >
              Refund Policy
            </Link>
            <span className="text-slate-700">&bull;</span>
            <Link
              href="/disclaimer"
              className="hover:text-slate-300 transition-colors"
            >
              Statutory Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
