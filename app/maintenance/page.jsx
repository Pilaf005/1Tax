import Image from "next/image";
import {
  Phone,
  MessageSquare,
  Mail,
  Clock,
  ShieldCheck,
  Award,
} from "lucide-react";

export const metadata = {
  title: "Under Maintenance — 1Tax India",
  description:
    "1Tax is currently undergoing scheduled maintenance. Please check back soon.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenancePage() {
  const maintenancePhone = "+918742941874";
  const formattedPhone = "+91 87429 41874";
  const waUrl = `https://wa.me/918742941874?text=${encodeURIComponent(
    "Hello 1Tax! I am contacting you regarding an urgent business tax & compliance inquiry during your scheduled maintenance."
  )}`;

  return (
    <div className="min-h-screen bg-[#07161F] text-slate-100 flex flex-col justify-between relative overflow-hidden selection:bg-[#EA8932] selection:text-white">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute -top-40 -left-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#EA8932" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-15"
        style={{ backgroundColor: "#14b8a6" }}
      />

      {/* Top minimal brand bar */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="1Tax Chartered Accountants"
            width={160}
            height={52}
            priority
            className="h-10 sm:h-12 w-auto object-contain brightness-110"
          />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-orange-500/10 border border-orange-500/20 text-[#EA8932]">
          <span className="w-2 h-2 rounded-full bg-[#EA8932] animate-pulse" />
          <span>Scheduled Maintenance</span>
        </div>
      </header>

      {/* Main hero card */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="max-w-2xl w-full mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-800/80 border border-slate-700/60 text-slate-300 shadow-sm mb-6">
            <Award className="w-3.5 h-3.5 text-[#EA8932]" />
            <span>ICAI-Regulated Chartered Accountants Firm</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6">
            We’ll Be Back <span className="text-[#EA8932]">Soon</span>
          </h1>

          {/* Core Message */}
          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl mx-auto mb-8 sm:mb-10">
            Our website is currently under maintenance as we work to improve
            your experience. Please check back soon.
          </p>

          {/* Advisory & Urgent Contact Card */}
          <div className="bg-[#0C222E]/80 backdrop-blur-md border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl text-left">
            <div className="flex items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-5">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white">
                  Need Urgent CA Advisory or Case Filing?
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  Our Patel Nagar office and senior partners remain fully
                  operational.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-400 font-medium shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Partners Online</span>
              </div>
            </div>

            {/* Quick contact buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-5">
              <a
                href={`tel:${maintenancePhone}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#0C222E] text-xs sm:text-sm font-bold shadow-md transition-all active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-[#0C222E] shrink-0" />
                <span>Call {formattedPhone}</span>
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                <span>WhatsApp Senior CA</span>
              </a>
            </div>

            {/* Micro info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-400 border-t border-slate-800/60">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#EA8932] shrink-0" />
                <span>Mon–Sat 9:30 AM – 7:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 w-full border-t border-slate-800/80 bg-[#040C12] text-xs text-slate-500 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
          <p className="text-[11px] sm:text-xs">
            &copy; {new Date().getFullYear()} 1Tax India. Chartered Accountants
            Firm.
          </p>
          <p className="text-[11px] text-slate-500 inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>ICAI Compliant &bull; Digital Faceless Practice</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
