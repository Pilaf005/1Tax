import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { HeroLeadForm } from './HeroLeadForm';
import { WA_NUMBER } from '@/lib/seo';


export function HeroSection() {
  const waPreFill = encodeURIComponent(
    'Hello 1Tax! I would like to consult a Senior Chartered Accountant regarding my business tax & compliance.'
  );

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden py-12 lg:py-16"
      style={{
        backgroundColor: 'var(--color-background)',
      }}
    >
      {/* Subtle Background Radial Gradients */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: 'var(--color-primary-light)' }}
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-96 w-96 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: 'var(--color-secondary-light)' }}
      />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Column: Copy, Value Proposition & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Eyebrow / Trust Pill */}
            <div
              className="inline-flex items-center self-start mb-5 rounded-full px-3.5 py-1.5 border shadow-2xs"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <span className="relative flex h-2 w-2 mr-2.5">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                />
              </span>
              <p className="text-xs font-semibold tracking-tight flex items-center flex-wrap gap-1.5" style={{ color: 'var(--color-text-secondary)' }}>
                <span className="font-bold" style={{ color: 'var(--color-secondary)' }}>
                  ICAI Registered Chartered Accountants
                </span>
                <span className="opacity-40">•</span>
                <span>Pan-India Advisory</span>
                <span className="opacity-40">•</span>
                <span
                  className="rounded-full px-2 py-0.5 text-[11px] font-bold"
                  style={{ backgroundColor: '#ECFDF5', color: '#047857', border: '1px solid #A7F3D0' }}
                >
                  99.4% Dispute Resolution Rate
                </span>
              </p>
            </div>

            {/* Main Primary H1 Heading */}
            <h1
              id="hero-title"
              className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.18] tracking-tight mb-5"
              style={{ color: 'var(--color-secondary-dark)' }}
            >
              Chartered Accountant &amp; Tax Advisory Firm for{' '}
              <span
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, var(--color-primary), #d97706, var(--color-primary))',
                }}
              >
                Growing Businesses
              </span>{' '}
              &amp; Complex Tax Disputes
            </h1>

            {/* Subheading */}
            <p
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              From end-to-end company registration and startup compliance to defending search &amp; seizure notices, GST audits, and recovering stuck MSME dues — our senior CAs deliver{' '}
              <strong className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                zero-penalty compliance
              </strong>{' '}
              and{' '}
              <strong className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                aggressive litigation defence
              </strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              {/* Primary Action */}
              <a
                href="#consultation-form"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl px-7 py-4 text-base font-bold text-white shadow-md transition-all hover:opacity-95 active:scale-98"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  boxShadow: 'var(--shadow-glow)',
                }}
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={17} />
              </a>

              {/* Secondary Action (WhatsApp) */}
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${waPreFill}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-4 text-base font-semibold border shadow-xs transition-all hover:bg-slate-50"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text-primary)',
                }}
              >
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: 'var(--color-whatsapp)' }}
                >
                  <MessageSquare size={14} />
                </span>
                <span>Chat with Senior CA</span>
              </a>
            </div>

            {/* Trust Metrics Strip */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--color-secondary)' }}>
                  15+
                </span>
                <span className="text-xs font-medium mt-1" style={{ color: 'var(--color-text-muted)' }}>
                  Years Experience
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--color-primary)' }}>
                  ₹50Cr+
                </span>
                <span className="text-xs font-medium mt-1" style={{ color: 'var(--color-text-muted)' }}>
                  Refunds &amp; Recoveries
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--color-secondary)' }}>
                  10,000+
                </span>
                <span className="text-xs font-medium mt-1" style={{ color: 'var(--color-text-muted)' }}>
                  Compliance Filings
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-2xl lg:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--color-secondary)' }}>
                    4.9
                  </span>
                  <span className="text-amber-500 text-lg">★</span>
                </div>
                <span className="text-xs font-medium mt-1" style={{ color: 'var(--color-text-muted)' }}>
                  Rating (500+ Reviews)
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

