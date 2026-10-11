'use client';

import { Check, Clock, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { WA_NUMBER } from '@/lib/seo';

export function PackageTiersGrid({ packageData }) {
  const tiers = packageData.tiers || [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
      {tiers.map((tier) => {
        const isPopular = tier.popular;
        const waTierText = encodeURIComponent(
          `Hello 1Tax! I would like to book the ${tier.name} (${tier.price} ${tier.cadence}) for ${packageData.title}. Please connect me with a Senior CA.`
        );

        return (
          <div
            key={tier.id}
            className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 p-7 sm:p-8 ${
              isPopular
                ? 'bg-white border-2 border-[#EA8932] shadow-2xl lg:-translate-y-2 ring-1 ring-[#EA8932]/20'
                : 'bg-white border border-slate-200/90 shadow-md hover:border-slate-300 hover:shadow-xl'
            }`}
          >
            {/* Top Popular Ribbon */}
            {isPopular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold bg-[#EA8932] text-white shadow-md tracking-tight whitespace-nowrap">
                  <Sparkles size={12} />
                  <span>Recommended • Most Popular</span>
                </span>
              </div>
            )}

            <div>
              {/* Header Info */}
              <div className="mb-4">
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {tier.name}
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {tier.tagline}
                </p>
              </div>

              {/* Price Box */}
              <div className="py-4 border-t border-b border-slate-100 mb-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                    {tier.price}
                  </span>
                  <span className="text-sm font-semibold text-slate-500">
                    {tier.cadence}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 font-medium">
                  {tier.note}
                </p>

                {/* Turnaround Badge */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200/60">
                    <Clock size={11} className="text-[#EA8932]" />
                    <span>{tier.turnaround}</span>
                  </span>
                  <span className="text-[11px] text-slate-500 truncate max-w-[170px]">
                    {tier.idealFor}
                  </span>
                </div>
              </div>

              {/* Deliverable Checkmarks */}
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  What&apos;s Included:
                </p>
                <ul className="space-y-2.5">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100 mt-auto">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${waTierText}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98] ${
                  isPopular
                    ? 'bg-[#EA8932] hover:bg-[#D47522] text-white shadow-md'
                    : 'bg-[#0c222e] hover:bg-[#163344] text-white'
                }`}
              >
                <span>Book {tier.name}</span>
                <ArrowRight size={14} />
              </a>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=${waTierText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-all flex items-center justify-center gap-1.5"
              >
                <MessageSquare size={13} className="text-[#25D366]" />
                <span>Chat with CA About This Tier</span>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
