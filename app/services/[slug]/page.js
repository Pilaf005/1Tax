import Link from "next/link";
import { ArrowLeft, Building2, CheckCircle2, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { WA_NUMBER } from "@/lib/seo";

function formatSlugTitle(slug) {
  if (!slug) return "Service Detail";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "";
  const title = formatSlugTitle(slug);

  return (
    <main className="min-h-[70vh] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/services" className="hover:text-primary transition-colors">
          Services
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none">
          {title}
        </span>
      </nav>

      {/* Header Banner */}
      <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 p-6 sm:p-12 mb-10 shadow-2xs">
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100/70 text-amber-900 border border-amber-200">
            <Sparkles size={13} className="text-primary" />
            CA Verified Practice
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/70">
            <ShieldCheck size={13} />
            Direct Partner Handling
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-secondary tracking-tight mb-3">
          {title}
        </h1>
        <p className="text-xs sm:text-base text-slate-600 max-w-2xl leading-relaxed">
          Comprehensive statutory compliance, legal drafting, and strategic advisory provided by senior Chartered Accountants.
        </p>
      </div>

      {/* Placeholder Details Box */}
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white/80 backdrop-blur-sm p-8 sm:p-12 text-center max-w-2xl mx-auto">
        <div className="h-12 w-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center mx-auto mb-4">
          <Building2 size={24} />
        </div>
        <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
          Service Information Page
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
          Detailed documentation checklists, step-by-step statutory timelines, and fee calculators for{" "}
          <strong className="text-slate-700 font-semibold">{title}</strong> will be available here. You can connect directly with our advisory desk for instant assistance.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hello 1Tax! I am inquiring about ${title} and need CA assistance.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-[#d97724] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
          >
            <MessageSquare size={15} />
            Consult CA for {title}
          </a>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold transition-all"
          >
            <ArrowLeft size={15} />
            All Services
          </Link>
        </div>
      </div>
    </main>
  );
}
