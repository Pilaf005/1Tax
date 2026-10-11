'use client';

import { useState, useMemo } from 'react';
import {
  Check,
  Plus,
  ShieldCheck,
  MessageSquare,
  ArrowRight,
  RotateCcw,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { WA_NUMBER } from '@/lib/seo';

export function CustomPackageBuilder({ packageData }) {
  const customServices = packageData.customServices || [];

  // Default selection based on service definition
  const initialSelected = useMemo(() => {
    return customServices
      .filter((s) => s.defaultSelected)
      .map((s) => s.id);
  }, [customServices]);

  const [selectedIds, setSelectedIds] = useState(initialSelected);

  const toggleService = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    setSelectedIds(customServices.map((s) => s.id));
  };

  const resetSelection = () => {
    setSelectedIds(initialSelected);
  };

  // Calculate live total price
  const selectedServices = useMemo(() => {
    return customServices.filter((s) => selectedIds.includes(s.id));
  }, [customServices, selectedIds]);

  const totalPrice = useMemo(() => {
    return selectedServices.reduce((sum, item) => sum + item.price, 0);
  }, [selectedServices]);

  // Generate WhatsApp message with itemized selection
  const waCustomText = useMemo(() => {
    const serviceNames = selectedServices.map((s) => s.name).join(', ');
    const msg = `Hello 1Tax! I configured a custom ${packageData.title} with the following services:\n• ${serviceNames}\n\nEstimated Total Quote: ₹${totalPrice.toLocaleString('en-IN')}\n\nI would like to speak to a Senior CA to proceed with this custom package.`;
    return encodeURIComponent(msg);
  }, [packageData.title, selectedServices, totalPrice]);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-[#0C222E] to-[#163344] text-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-amber-300 border border-white/15 mb-2">
            <Sparkles size={13} className="text-[#EA8932]" />
            <span>Interactive Custom Package Builder</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Build Your Own Custom {packageData.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            Select only the exact legal, tax, and governance services your business needs right now. Real-time fixed pricing with zero hidden fees.
          </p>
        </div>

        {/* Quick selection actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={selectAll}
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer"
          >
            Select All
          </button>
          <button
            type="button"
            onClick={resetSelection}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-slate-200 border border-white/20 transition-all cursor-pointer"
          >
            <RotateCcw size={12} />
            <span>Reset</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Column: Modular Services Checkbox Grid (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 space-y-3.5 border-b lg:border-b-0 lg:border-r border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Available Modular Services ({customServices.length})
            </h4>
            <span className="text-xs text-slate-500 font-medium">
              Click to add / remove services
            </span>
          </div>

          <div className="space-y-3">
            {customServices.map((service) => {
              const isSelected = selectedIds.includes(service.id);

              return (
                <div
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start justify-between gap-4 select-none ${
                    isSelected
                      ? 'bg-amber-50/50 border-[#EA8932] shadow-xs ring-1 ring-[#EA8932]/20'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-start gap-3.5 flex-1">
                    {/* Custom Checkbox */}
                    <div
                      className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isSelected
                          ? 'bg-[#EA8932] border-[#EA8932] text-white shadow-xs'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isSelected ? (
                        <Check size={14} strokeWidth={3} />
                      ) : (
                        <Plus size={14} className="text-slate-400" />
                      )}
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                          {service.category}
                        </span>
                      </div>
                      <h5 className="text-sm font-bold text-slate-900 leading-snug">
                        {service.name}
                      </h5>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Individual Price Tag */}
                  <div className="text-right shrink-0">
                    <span className="text-sm font-extrabold text-[#0c222e]">
                      ₹{service.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-slate-500 block">+ Govt Fees</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Live Sticky Summary & Actions (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-50/70 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Custom Package Summary
              </h4>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                {selectedServices.length} Selected
              </span>
            </div>

            {/* Selected Items List */}
            {selectedServices.length === 0 ? (
              <div className="py-8 text-center text-slate-500 text-sm">
                No services selected. Click on the options on the left to build your package.
              </div>
            ) : (
              <ul className="space-y-2 mb-6 max-h-64 overflow-y-auto pr-1">
                {selectedServices.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between text-xs py-1.5 border-b border-slate-100"
                  >
                    <span className="text-slate-700 font-medium truncate max-w-[200px]">
                      {item.name}
                    </span>
                    <span className="font-bold text-slate-900 shrink-0">
                      ₹{item.price.toLocaleString('en-IN')}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Reassurance list */}
            <div className="space-y-2 mb-6 pt-2 text-xs text-slate-600 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#EA8932] shrink-0" />
                <span>Supervised by Senior Fellow CA (FCA)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#EA8932] shrink-0" />
                <span>Strict ICAI client privilege NDA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#EA8932] shrink-0" />
                <span>Zero hidden fee markups • 100% Faceless Delivery</span>
              </div>
            </div>
          </div>

          {/* Pricing Total Box & CTAs */}
          <div className="pt-4 border-t border-slate-200 space-y-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs flex items-baseline justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Total Investment Quote
                </span>
                <span className="text-[11px] text-slate-500">
                  Fixed professional fee + govt fees at actuals
                </span>
              </div>
              <div className="text-right">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0c222e] tracking-tight">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${waCustomText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-[#0c222e] bg-[#25D366] hover:bg-[#20ba5a] transition-all shadow-md active:scale-[0.99]"
              >
                <MessageSquare size={16} />
                <span>Book This Custom Package on WhatsApp</span>
              </a>

              <a
                href="#consultation-intake"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#0c222e] hover:bg-[#163344] transition-all active:scale-[0.99]"
              >
                <span>Request Custom CA Proposal & Intake</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
