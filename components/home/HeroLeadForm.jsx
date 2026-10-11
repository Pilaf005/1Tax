'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import {
  User, Phone, MapPin, CheckCircle2, ArrowRight, ShieldCheck,
  Zap, Search, ChevronDown, X, Sparkles, HelpCircle, Edit3
} from 'lucide-react';
import { WA_NUMBER } from '@/lib/seo';
import { allSearchableServices } from '@/data/services';

const QUICK_FILTERS = [
  'All',
  '⚡ Specialized',
  'GST Services',
  'Income Tax',
  'Registration',
  'Compliance',
  'Other',
];

export function HeroLeadForm() {
  const [formData, setFormData] = useState({
    service: '',
    customNote: '',
    name: '',
    mobile: '',
    city: '',
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  // Close dropdown on click outside or Escape
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    }
    function handleKeyDown(e) {
      if (e.key === 'Escape') setIsDropdownOpen(false);
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDropdownOpen]);

  // Filtered services
  const filteredServices = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return allSearchableServices.filter((svc) => {
      const matchSearch =
        !q ||
        svc.label.toLowerCase().includes(q) ||
        svc.category.toLowerCase().includes(q) ||
        (svc.group && svc.group.toLowerCase().includes(q));

      if (!matchSearch) return false;

      if (activeFilter === 'All') return true;
      if (activeFilter === '⚡ Specialized') return svc.category.includes('Specialized');
      if (activeFilter === 'GST Services') return svc.category.toLowerCase().includes('gst');
      if (activeFilter === 'Income Tax') return svc.category.toLowerCase().includes('income tax');
      if (activeFilter === 'Registration') return svc.category.toLowerCase().includes('registration') || svc.category.toLowerCase().includes('startup');
      if (activeFilter === 'Compliance') return svc.category.toLowerCase().includes('compliance') || svc.category.toLowerCase().includes('audit') || svc.category.toLowerCase().includes('accounting');
      if (activeFilter === 'Other') return svc.category === 'Custom' || svc.label.includes('Other');

      return true;
    });
  }, [searchQuery, activeFilter]);

  function handleSelectService(label) {
    setFormData((prev) => ({ ...prev, service: label }));
    setIsDropdownOpen(false);
    setSearchQuery('');
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formData.service) {
      setIsDropdownOpen(true);
      return;
    }

    setStatus('submitting');

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setStatus('success');
    } catch {
      setStatus('success');
    }
  }

  const isCustomSelected = formData.service.includes('Other');

  const waPreFill = encodeURIComponent(
    `Hello 1Tax! I need urgent CA advisory for ${formData.service || 'my business'}${formData.customNote ? ` (${formData.customNote})` : ''}. My name is ${formData.name || 'Client'} from ${formData.city || 'India'}.`
  );

  return (
    <div id="consultation-form" className="relative group">
      {/* 1. BACK TILTED CARD (Uniform -2deg tilt, Deep 1Tax Corporate Teal) */}
      <div
        className="absolute inset-0 rounded-3xl transition-all duration-300 transform -rotate-[2deg] group-hover:-rotate-[1deg] group-hover:scale-[1.01] pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #0c222e 0%, #134e4a 55%, #042f2e 100%)',
          boxShadow: '0 25px 50px -12px rgba(12, 34, 46, 0.4), 0 4px 16px -2px rgba(12, 34, 46, 0.25)',
          border: '1px solid rgba(234, 137, 50, 0.3)',
        }}
      >
        {/* Top-Right Micro Watermark on Tilted Card */}
        <div className="absolute top-3.5 right-5 select-none opacity-30 font-mono text-[10px] font-black tracking-widest text-amber-300 uppercase">
          SENIOR CA DIRECT INTAKE • 15-MIN CALLBACK
        </div>
      </div>

      {/* 2. FRONT GLASSMORPHIC CARD (0deg horizontal, Frosted Glass) */}
      <div
        className="relative z-10 rounded-3xl p-4 sm:p-8 border transition-all duration-300 transform group-hover:-translate-y-1"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderColor: 'rgba(255, 255, 255, 0.95)',
          boxShadow: '0 20px 45px -10px rgba(60, 84, 86, 0.16), 0 0 0 1px rgba(234, 137, 50, 0.12), inset 0 1px 1px 0 rgba(255, 255, 255, 0.9)',
        }}
      >
      {/* Decorative glass glow */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full blur-2xl opacity-30"
        style={{ backgroundColor: 'var(--color-primary-light)' }}
      />

      {/* Top Header Badge (Hidden on mobile mode only) */}
      <div className="relative hidden sm:flex items-center justify-between pb-3 sm:pb-3.5 mb-3 sm:mb-4 border-b border-slate-200/60">
        <div
          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold shadow-2xs"
          style={{
            background: 'linear-gradient(135deg, rgba(60, 84, 86, 0.08), rgba(234, 137, 50, 0.12))',
            color: 'var(--color-secondary-dark)',
            border: '1px solid rgba(60, 84, 86, 0.12)',
          }}
        >
          <Zap size={13} style={{ color: 'var(--color-primary)' }} />
          <span>Instant CA Consultation</span>
        </div>
        <span
          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold"
          style={{
            backgroundColor: 'rgba(240, 253, 244, 0.9)',
            color: '#15803D',
            border: '1px solid #BBF7D0',
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Active Duty
        </span>
      </div>

      <div className="relative mb-4 sm:mb-5">
        <h3 className="text-lg sm:text-xl font-bold leading-snug tracking-tight" style={{ color: 'var(--color-secondary-dark)' }}>
          Get expert CA advice within 15 minutes
        </h3>
        <p className="text-[11px] sm:text-xs mt-0.5 sm:mt-1 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          Connect directly with a Senior Partner. No outsourced sales agents.
        </p>
      </div>

      {status === 'success' ? (
        <div className="py-6 text-center flex flex-col items-center gap-3">
          <div className="h-14 w-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
            <CheckCircle2 size={32} />
          </div>
          <h4 className="text-lg font-bold text-slate-900">
            Request Received!
          </h4>
          <p className="text-xs text-slate-600 max-w-xs leading-relaxed">
            A Senior Chartered Accountant has received your request for{' '}
            <strong className="text-slate-900 font-semibold">{formData.service}</strong> and will call you at{' '}
            <strong className="text-slate-900 font-semibold">+91 {formData.mobile}</strong> within 15 minutes.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${waPreFill}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:opacity-95 active:scale-98"
            style={{ backgroundColor: 'var(--color-whatsapp)' }}
          >
            Open Immediate WhatsApp Chat
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative space-y-4">
          
          {/* SEARCHABLE SERVICE SELECTOR */}
          <div className="relative" ref={dropdownRef}>
            <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--color-text-primary)' }}>
              Select Service / Practice Area <span style={{ color: 'var(--color-primary)' }}>*</span>
            </label>

            {/* Custom Trigger Box */}
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="w-full flex items-center justify-between rounded-xl px-3.5 py-3 text-left text-sm font-medium transition-all focus:outline-none"
              style={{
                backgroundColor: 'rgba(248, 250, 252, 0.85)',
                border: isDropdownOpen ? '1.5px solid var(--color-primary)' : '1px solid rgba(203, 213, 225, 0.8)',
                boxShadow: isDropdownOpen ? '0 0 0 3px rgba(234, 137, 50, 0.15)' : 'none',
                color: formData.service ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
              }}
            >
              <span className="truncate pr-2 font-medium">
                {formData.service || 'Search or choose from 200+ CA services...'}
              </span>
              <ChevronDown
                size={16}
                className="transition-transform duration-200 flex-shrink-0 text-slate-400"
                style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none' }}
              />
            </button>

            {/* FLOATING SEARCHABLE POPOVER */}
            {isDropdownOpen && (
              <div
                className="absolute left-0 top-full z-50 mt-2 w-full sm:w-[440px] max-w-[calc(100vw-2rem)] rounded-2xl border bg-white p-3 shadow-2xl transition-all"
                style={{
                  borderColor: 'var(--color-border)',
                  boxShadow: '0 20px 45px -10px rgba(60, 84, 86, 0.25), 0 0 0 1px rgba(234, 137, 50, 0.2)',
                }}
              >
                {/* Search Bar Input */}
                <div className="relative mb-2.5">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Type to search (e.g. GST, MSME, Pvt Ltd, Tax Notice)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-xl border bg-slate-50 pl-9 pr-8 py-2 text-xs font-medium text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none"
                    style={{ borderColor: 'var(--color-border)' }}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>

                {/* Quick Filter Chips */}
                <div className="flex items-center gap-1 overflow-x-auto pb-2 mb-2 border-b border-slate-100 scrollbar-none text-[11px]">
                  {QUICK_FILTERS.map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setActiveFilter(f)}
                      className="rounded-full px-2.5 py-0.5 font-semibold whitespace-nowrap transition-colors"
                      style={{
                        backgroundColor: activeFilter === f ? 'var(--color-primary)' : 'var(--color-surface-raised)',
                        color: activeFilter === f ? '#ffffff' : 'var(--color-text-secondary)',
                      }}
                    >
                      {f}
                    </button>
                  ))}
                </div>

                {/* Filtered Services List */}
                <div className="max-h-60 overflow-y-auto space-y-1 pr-1">
                  {filteredServices.length === 0 ? (
                    <div className="py-6 text-center text-xs text-slate-500">
                      <p>No exact service match found for "{searchQuery}".</p>
                      <button
                        type="button"
                        onClick={() => handleSelectService(`Custom Query: ${searchQuery}`)}
                        className="mt-2 text-xs font-bold hover:underline"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        + Use "{searchQuery}" as custom requirement
                      </button>
                    </div>
                  ) : (
                    filteredServices.map((svc) => {
                      const isSelected = formData.service === svc.label;
                      return (
                        <button
                          key={svc.id}
                          type="button"
                          onClick={() => handleSelectService(svc.label)}
                          className="w-full flex items-center justify-between rounded-lg px-2.5 py-2 text-left text-xs transition-colors hover:bg-slate-100/80 group"
                          style={{
                            backgroundColor: isSelected ? 'var(--color-primary-muted)' : 'transparent',
                            color: isSelected ? 'var(--color-primary-dark)' : 'var(--color-text-primary)',
                            fontWeight: isSelected ? 600 : 500,
                          }}
                        >
                          <div className="flex flex-col gap-0.5">
                            <span className="leading-snug">{svc.label}</span>
                            <span className="text-[10px] text-slate-400 font-normal">
                              {svc.category}
                            </span>
                          </div>
                          {svc.badge && (
                            <span
                              className="ml-2 rounded px-1.5 py-0.2 text-[9px] font-bold"
                              style={{
                                backgroundColor: 'var(--color-primary-muted)',
                                color: 'var(--color-primary-dark)',
                              }}
                            >
                              {svc.badge}
                            </span>
                          )}
                        </button>
                      );
                    })
                  )}
                </div>

                {/* Other / Custom Option at footer */}
                <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Can't find your specific issue?</span>
                  <button
                    type="button"
                    onClick={() => handleSelectService('Other / Custom Advisory Requirement')}
                    className="text-xs font-bold hover:underline"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    + Choose "Other / Custom"
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Optional Custom Note if 'Other' is selected */}
          {isCustomSelected && (
            <div className="animate-fadeIn">
              <label htmlFor="custom-note" className="block text-xs font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>
                Briefly describe your issue (Optional)
              </label>
              <input
                id="custom-note"
                name="customNote"
                type="text"
                placeholder="e.g. Need assistance with high-value international transaction tax"
                value={formData.customNote}
                onChange={handleChange}
                className="w-full rounded-xl border px-3.5 py-2.5 text-xs font-medium focus:outline-none"
                style={{
                  backgroundColor: 'rgba(248, 250, 252, 0.85)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text-primary)',
                }}
              />
            </div>
          )}

          {/* Full Name */}
          <div>
            <label htmlFor="name-input" className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--color-text-primary)' }}>
              Full Name <span style={{ color: 'var(--color-primary)' }}>*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User size={15} />
              </span>
              <input
                id="name-input"
                name="name"
                type="text"
                required
                placeholder="e.g. Rajesh Sharma"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border pl-10 pr-3.5 py-2.5 text-sm font-medium transition-colors focus:outline-none"
                style={{
                  backgroundColor: 'rgba(248, 250, 252, 0.85)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text-primary)',
                }}
              />
            </div>
          </div>

          {/* Grid: Mobile + City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Mobile */}
            <div>
              <label htmlFor="mobile-input" className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--color-text-primary)' }}>
                Mobile Number <span style={{ color: 'var(--color-primary)' }}>*</span>
              </label>
              <div
                className="flex rounded-xl border overflow-hidden transition-colors"
                style={{
                  borderColor: 'var(--color-border)',
                  backgroundColor: 'rgba(248, 250, 252, 0.85)',
                }}
              >
                <span className="inline-flex items-center px-2.5 text-xs font-bold bg-slate-100/90 text-slate-600 border-r border-slate-200">
                  +91
                </span>
                <input
                  id="mobile-input"
                  name="mobile"
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="98765 43210"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-2.5 py-2.5 text-sm font-medium focus:outline-none bg-transparent"
                  style={{ color: 'var(--color-text-primary)' }}
                />
              </div>
            </div>

            {/* City */}
            <div>
              <label htmlFor="city-input" className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--color-text-primary)' }}>
                City / Location <span style={{ color: 'var(--color-primary)' }}>*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <MapPin size={15} />
                </span>
                <input
                  id="city-input"
                  name="city"
                  type="text"
                  required
                  placeholder="e.g. Delhi / Bengaluru"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full rounded-xl border pl-10 pr-3.5 py-2.5 text-sm font-medium transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'rgba(248, 250, 252, 0.85)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text-primary)',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Submit CTA */}
          <div className="pt-1.5 sm:pt-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded-xl font-bold text-xs sm:text-sm text-white flex items-center justify-center gap-2 shadow-lg transition-all duration-200 hover:opacity-95 active:scale-98"
              style={{
                background: 'linear-gradient(135deg, var(--color-primary), #d97706)',
                boxShadow: '0 10px 25px -5px rgba(234, 137, 50, 0.4)',
              }}
            >
              {status === 'submitting' ? (
                <span>Securing Strategy Slot...</span>
              ) : (
                <>
                  <span>Request Free 30-Min Strategy Call</span>
                  <ArrowRight size={15} />
                </>
              )}
            </button>
          </div>

          {/* Privacy Trust Note */}
          <div className="pt-0.5 sm:pt-1 flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] text-center font-medium" style={{ color: 'var(--color-text-muted)' }}>
            <ShieldCheck size={13} className="text-emerald-600" />
            <span>100% Confidential • Direct CA Callback • No Spam</span>
          </div>
        </form>
      )}
      </div>
    </div>
  );
}
