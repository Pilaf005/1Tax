import Link from 'next/link';
import { ArrowRight, Flame, Star } from 'lucide-react';

const BADGE_STYLES = {
  Hot:    { bg: '#FEF2F2', color: '#DC2626', icon: Flame },
  Expert: { bg: '#EFF6FF', color: '#2563EB', icon: Star },
};

export function ServicePanel({ category }) {
  if (!category) return null;

  return (
    <div className="flex flex-col flex-1 min-w-0 py-4 px-5">
      {/* Category heading */}
      <div className="mb-3 flex items-center justify-between">
        <p
          className="text-sm font-semibold uppercase tracking-wider"
          style={{ color: 'var(--color-secondary)', letterSpacing: '0.07em' }}
        >
          {category.label}
        </p>
        <Link
          href={category.href}
          className="flex items-center gap-1 text-xs font-medium hover:underline"
          style={{ color: 'var(--color-primary)' }}
        >
          View all <ArrowRight size={12} />
        </Link>
      </div>

      {/* Service links — 2 columns */}
      <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
        {category.services.map((svc) => {
          const BadgeInfo = svc.badge ? BADGE_STYLES[svc.badge] : null;
          return (
            <li key={svc.href}>
              <Link
                href={svc.href}
                className="group flex items-center gap-1.5 rounded py-1 px-1 text-sm transition-colors hover:underline"
                style={{ color: 'var(--color-text-primary)' }}
              >
                <span
                  className="inline-block h-1 w-1 rounded-full flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                />
                <span className="leading-snug group-hover:text-[var(--color-primary)]">
                  {svc.label}
                </span>
                {BadgeInfo && (
                  <span
                    className="ml-1 inline-flex items-center rounded px-1 py-0.5 text-[10px] font-semibold"
                    style={{ background: BadgeInfo.bg, color: BadgeInfo.color }}
                  >
                    <BadgeInfo.icon size={9} className="mr-0.5" />
                    {svc.badge}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
