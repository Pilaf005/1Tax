'use client';

import Link from 'next/link';
import {
  Calculator, BookOpen, Building2, Calendar, ArrowRight,
  Sparkles, ExternalLink, HelpCircle, FileText, MapPin, Phone
} from 'lucide-react';

const SECTION_ICONS = {
  Calculator,
  BookOpen,
  Building2,
};

export function ResourcesPanel({ tab }) {
  if (!tab || !tab.sections) return null;

  return (
    <div className="p-6 bg-white">
      <div className="grid grid-cols-12 gap-6">
        {/* Main 3 Section Columns */}
        <div className="col-span-8 grid grid-cols-3 gap-6">
          {tab.sections.map((section) => {
            const SectionIcon = SECTION_ICONS[section.icon] ?? FileText;
            return (
              <div key={section.title} className="flex flex-col gap-3">
                {/* Section Header */}
                <div className="flex items-center gap-2 pb-2 border-b" style={{ borderColor: 'var(--color-border)' }}>
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded"
                    style={{ backgroundColor: 'var(--color-primary-muted)' }}
                  >
                    <SectionIcon size={14} style={{ color: 'var(--color-primary-dark)' }} />
                  </div>
                  <h3
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    {section.title}
                  </h3>
                </div>

                {/* Section Items */}
                <ul className="flex flex-col gap-2.5">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="group flex flex-col gap-0.5 rounded-md p-1.5 transition-colors hover:bg-[var(--color-surface-raised)]"
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className="text-sm font-semibold transition-colors group-hover:text-[var(--color-primary)]"
                            style={{ color: 'var(--color-text-primary)' }}
                          >
                            {item.label}
                          </span>
                          {item.badge && (
                            <span
                              className="rounded px-1.5 py-0.2 text-[9px] font-bold uppercase tracking-wider"
                              style={{
                                backgroundColor: 'var(--color-primary-muted)',
                                color: 'var(--color-primary-dark)',
                              }}
                            >
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {item.desc && (
                          <p
                            className="text-[11px] leading-tight"
                            style={{ color: 'var(--color-text-muted)' }}
                          >
                            {item.desc}
                          </p>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Right Highlight / Featured Card */}
        {tab.featured && (
          <div className="col-span-4 flex flex-col">
            <div
              className="flex flex-col justify-between h-full rounded-xl p-5 border"
              style={{
                background: 'linear-gradient(145deg, var(--color-surface-raised), #fff7ed)',
                borderColor: 'var(--color-primary-light)',
              }}
            >
              <div>
                <div className="flex items-center gap-1.5 mb-2.5">
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide"
                    style={{
                      backgroundColor: 'var(--color-primary)',
                      color: '#ffffff',
                    }}
                  >
                    <Calendar size={11} />
                    {tab.featured.tag}
                  </span>
                </div>
                <h4
                  className="text-sm font-bold leading-snug mb-1.5"
                  style={{ color: 'var(--color-secondary-dark)' }}
                >
                  {tab.featured.title}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {tab.featured.description}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t" style={{ borderColor: 'rgba(234, 137, 50, 0.2)' }}>
                <Link
                  href={tab.featured.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold transition-transform hover:translate-x-1"
                  style={{ color: 'var(--color-primary-dark)' }}
                >
                  {tab.featured.cta} <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
