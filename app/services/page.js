import Link from "next/link";
import { ArrowLeft, Building2, ShieldCheck, Sparkles, Layers } from "lucide-react";

export const metadata = {
  title: "All Services Catalog | 1Tax CA Firm",
  description: "Browse the complete directory of professional CA, tax, audit, legal, and corporate compliance services.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-[70vh] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold">All Services</span>
      </nav>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200/80 mb-4">
          <Layers size={14} className="text-primary" />
          <span>Complete Practice Directory</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary tracking-tight mb-4">
          All Services &amp; Solutions
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Comprehensive Chartered Accountant, indirect &amp; direct taxation, corporate secretarial, and legal dispute services designed for modern businesses.
        </p>
      </div>

      {/* Placeholder Body */}
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white/70 backdrop-blur-sm p-8 sm:p-14 text-center max-w-2xl mx-auto shadow-2xs">
        <div className="h-14 w-14 rounded-2xl bg-amber-50 text-primary border border-amber-200/60 flex items-center justify-center mx-auto mb-5 shadow-2xs">
          <Sparkles size={26} />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
          Services Catalog Coming Soon
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
          The complete, searchable services directory is currently being prepared. In the meantime, you can explore the high-demand services on our home page or consult with our senior CA team directly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold transition-all"
          >
            <Building2 size={15} />
            Contact CA Team
          </Link>
        </div>
      </div>
    </main>
  );
}
