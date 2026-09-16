import Link from 'next/link';
import {
  Scale, SearchCheck, ShieldCheck, Shield, RotateCcw,
  PackageCheck, FileWarning, MessageSquareWarning, BrainCircuit,
  ArrowRight,
} from 'lucide-react';

const ICON_MAP = {
  Scale, SearchCheck, ShieldCheck, Shield, RotateCcw,
  PackageCheck, FileWarning, MessageSquareWarning, BrainCircuit,
};

const BADGE_VARIANTS = {
  hot:      { bg: '#FEF2F2', color: '#DC2626', text: 'Most Demanded' },
  expert:   { bg: '#EFF6FF', color: '#2563EB' },
  defence:  { bg: '#F0FDF4', color: '#15803D' },
  refund:   { bg: '#FFF7ED', color: '#C2410C' },
  strategic:{ bg: '#FAF5FF', color: '#7C3AED' },
};

export function SpecializedPanel({ services }) {
  return (
    <div className="p-6">
      <p
        className="mb-4 text-xs font-semibold uppercase tracking-widest"
        style={{ color: 'var(--color-primary)' }}
      >
        ⚡ Specialized Expertise — High-Value Practice Areas
      </p>
      <div className="grid grid-cols-3 gap-3">
        {services.map((svc) => {
          const Icon = ICON_MAP[svc.icon] ?? Shield;
          const bv = BADGE_VARIANTS[svc.badgeVariant] ?? BADGE_VARIANTS.expert;
          return (
            <Link
              key={svc.href}
              href={svc.href}
              className="group flex flex-col gap-2 rounded-lg border p-3.5 transition-shadow hover:shadow-md"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-surface)',
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <div
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md"
                  style={{ backgroundColor: 'var(--color-primary-muted)' }}
                >
                  <Icon size={16} style={{ color: 'var(--color-primary)' }} />
                </div>
                <span
                  className="rounded px-1.5 py-0.5 text-[10px] font-semibold"
                  style={{ background: bv.bg, color: bv.color }}
                >
                  {svc.badge}
                </span>
              </div>
              <p
                className="text-sm font-semibold leading-snug group-hover:text-[var(--color-primary)]"
                style={{ color: 'var(--color-secondary)' }}
              >
                {svc.label}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                {svc.description}
              </p>
              <span
                className="mt-auto flex items-center gap-1 text-xs font-medium"
                style={{ color: 'var(--color-primary)' }}
              >
                Get Help <ArrowRight size={11} />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
