import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  FileCheck2,
  PhoneCall,
  MessageSquare,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  Award,
} from 'lucide-react';
import { packages } from '@/data/packages';
import { PackageTiersGrid } from '@/components/packages/PackageTiersGrid';
import { CustomPackageBuilder } from '@/components/packages/CustomPackageBuilder';
import { WA_NUMBER, SITE_URL } from '@/lib/seo';

// Helper to look up package by slug or alternateSlug
function getPackageBySlug(rawSlug) {
  return packages.find(
    (p) =>
      p.slug === rawSlug ||
      p.id === rawSlug ||
      (p.alternateSlugs && p.alternateSlugs.includes(rawSlug))
  );
}

export async function generateStaticParams() {
  const slugs = [];
  packages.forEach((pkg) => {
    slugs.push({ slug: pkg.slug });
    if (pkg.alternateSlugs) {
      pkg.alternateSlugs.forEach((alt) => slugs.push({ slug: alt }));
    }
  });
  return slugs;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    return {
      title: 'Package Not Found | 1Tax Chartered Accountants',
    };
  }

  return {
    metadataBase: new URL(SITE_URL),
    title: `${pkg.title} Plans & Custom Package Builder | 1Tax Chartered Accountants`,
    description: `Explore fixed-fee ${pkg.title} tiers and build your custom package online. 100% Chartered Accountant handled, faceless digital delivery, starting at ${pkg.startingPrice}.`,
    openGraph: {
      title: `${pkg.title} | 1Tax CA Firm`,
      description: pkg.summary,
      images: [
        {
          url: pkg.image,
          width: 1200,
          height: 675,
          alt: pkg.title,
        },
      ],
    },
  };
}

export default async function PackageDetailPage({ params }) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  const waInquiryUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hello 1Tax! I am reviewing the ${pkg.title} on your website and would like to speak to a Senior CA.`
  )}`;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO HEADER AREA
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-10 pb-14 sm:pb-20 overflow-hidden bg-gradient-to-b from-slate-900 via-[#0C222E] to-slate-900 text-white">
        {/* Ambient atmospheric glows */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[450px] w-[800px] rounded-full blur-3xl opacity-25"
          style={{ backgroundColor: '#EA8932' }}
        />

        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight size={12} />
              </li>
              <li>
                <Link href="/#packages" className="hover:text-white transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <ChevronRight size={12} />
              </li>
              <li className="text-[#EA8932] font-semibold">{pkg.title}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Copy & Actions (7 cols) */}
            <div className="lg:col-span-7">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 bg-white/10 text-amber-300 border border-white/15">
                <Sparkles size={13} className="text-[#EA8932]" />
                <span>{pkg.eyebrow}</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
                {pkg.title} for{' '}
                <span className="text-[#EA8932]">Modern Growing Businesses</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl">
                {pkg.summary}
              </p>

              {/* 4 Trust Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-lg sm:text-xl font-extrabold text-[#EA8932]">
                    {pkg.startingPrice}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">Starting Professional Fee</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-lg sm:text-xl font-extrabold text-white">100% CA</div>
                  <div className="text-[11px] text-slate-400 font-medium">Partner Supervised</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-lg sm:text-xl font-extrabold text-white">15-Min</div>
                  <div className="text-[11px] text-slate-400 font-medium">Avg Response SLA</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-lg sm:text-xl font-extrabold text-emerald-400">Zero</div>
                  <div className="text-[11px] text-slate-400 font-medium">Hidden Fee Markups</div>
                </div>
              </div>

              {/* Jump Links */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#preset-tiers"
                  className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#EA8932] hover:bg-[#D47522] text-white shadow-md transition-all active:scale-[0.98]"
                >
                  View Pre-Built Tiers →
                </a>
                <a
                  href="#custom-builder"
                  className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all active:scale-[0.98]"
                >
                  Build Custom Package
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-white/5 p-2">
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-[#EA8932]" />
                    ICAI Registered Practice
                  </span>
                  <span>Faceless Digital Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. SECTION: PRESET PACKAGE TIERS
      ───────────────────────────────────────────────────────────── */}
      <section id="preset-tiers" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold mb-3 bg-amber-50 text-amber-900 border border-amber-200/60">
            <Award size={13} className="text-[#EA8932]" />
            <span>Curated Preset Options</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Choose Your <span className="text-[#EA8932]">{pkg.title} Tier</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Select one of our all-inclusive curated packages, or use the interactive builder below to configure a custom plan.
          </p>
        </div>

        <PackageTiersGrid packageData={pkg} />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. SECTION: INTERACTIVE CUSTOM PACKAGE BUILDER
      ───────────────────────────────────────────────────────────── */}
      <section id="custom-builder" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold mb-3 bg-teal-50 text-teal-900 border border-teal-200/60">
            <Sparkles size={13} className="text-[#3C5456]" />
            <span>Tailored Specifically For You</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Build Your <span className="text-[#EA8932]">Custom Package</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Don&apos;t need everything? Toggle services on or off to get a live, transparent quote calculated in real-time.
          </p>
        </div>

        <CustomPackageBuilder packageData={pkg} />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. STATUTORY DELIVERABLES & GOVERNING BODIES
      ───────────────────────────────────────────────────────────── */}
      {pkg.scopeModal && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#EA8932] block mb-2">
                  Official Deliverables
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                  {pkg.scopeModal.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {pkg.scopeModal.subtitle}
                </p>

                {/* Governing Bodies */}
                {pkg.scopeModal.governingBodies && (
                  <div className="mb-6">
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Governing Statutory Bodies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pkg.scopeModal.governingBodies.map((gov, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700"
                        >
                          {gov}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Turnaround Commitment */}
                {pkg.scopeModal.timeline && (
                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 flex items-center gap-3">
                    <Clock size={20} className="text-[#EA8932] shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-amber-900 block">
                        Committed SLA Turnaround:
                      </span>
                      <span className="text-xs text-amber-800 font-medium">
                        {pkg.scopeModal.timeline}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Right: Deliverables List (7 cols) */}
              <div className="lg:col-span-7 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Statutory Deliverables Handed Over:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {pkg.scopeModal.statutoryDeliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-2 text-xs text-slate-700"
                    >
                      <CheckCircle2 size={14} className="text-[#EA8932] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          5. PACKAGE SPECIFIC FAQS
      ───────────────────────────────────────────────────────────── */}
      {pkg.faqs && pkg.faqs.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions About {pkg.title}
            </h3>
          </div>
          <div className="space-y-4">
            {pkg.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
                <h4 className="text-base font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          6. BOTTOM CALL TO ACTION STRIP
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-[#0C222E] via-[#163344] to-[#0C222E] text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Have Questions About Which {pkg.title} Option Fits You?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-6">
            Discuss directly with our Managing Chartered Accountant partner. Receive an actionable assessment within 15 minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={waInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-[#0c222e] bg-[#25D366] hover:bg-[#20ba5a] transition-all shadow-md"
            >
              <MessageSquare size={16} />
              <span>Ask a Senior CA on WhatsApp</span>
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all"
            >
              <PhoneCall size={16} />
              <span>Schedule Call Back</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
