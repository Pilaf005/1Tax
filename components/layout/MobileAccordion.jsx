'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Zap } from 'lucide-react';
import { NAV_TABS } from '@/data/services';

export function MobileAccordion({ onClose }) {
  const [openTabId, setOpenTabId] = useState(null);
  const [openCatId, setOpenCatId] = useState(null);

  function toggleTab(id) {
    setOpenTabId((prev) => (prev === id ? null : id));
    setOpenCatId(null);
  }

  function toggleCat(id) {
    setOpenCatId((prev) => (prev === id ? null : id));
  }

  return (
    <nav aria-label="Mobile navigation" className="flex flex-col">
      {NAV_TABS.map((tab) => {
        const isTabOpen = openTabId === tab.id;
        const isSpecialized = tab.id === 'specialized';

        return (
          <div key={tab.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
            {/* Tab header */}
            <button
              onClick={() => toggleTab(tab.id)}
              className="flex w-full items-center justify-between px-5 py-3.5 text-left text-sm font-semibold transition-colors"
              style={{ color: isSpecialized ? 'var(--color-primary-dark)' : 'var(--color-secondary)' }}
            >
              <span>
                {tab.label}
              </span>
              <ChevronDown
                size={16}
                className="transition-transform duration-200"
                style={{ transform: isTabOpen ? 'rotate(180deg)' : 'none' }}
              />
            </button>

            {/* Expanded content */}
            {isTabOpen && (
              <div className="pb-2" style={{ backgroundColor: 'var(--color-surface-raised)' }}>
                {/* Specialized — flat list */}
                {tab.type === 'specialized' && (
                  <ul className="flex flex-col px-5 pt-1">
                    {tab.services.map((svc) => (
                      <li key={svc.href}>
                        <Link
                          href={svc.href}
                          onClick={onClose}
                          className="flex items-center justify-between py-2 text-sm"
                          style={{ color: 'var(--color-text-primary)' }}
                        >
                          {svc.label}
                          <span
                            className="ml-2 rounded px-1.5 py-0.5 text-[10px] font-semibold"
                            style={{ backgroundColor: 'var(--color-primary-muted)', color: 'var(--color-primary-dark)' }}
                          >
                            {svc.badge}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Mega — nested accordion */}
                {tab.type === 'mega' && (
                  <div>
                    {tab.categories.map((cat) => {
                      const isCatOpen = openCatId === cat.id;
                      return (
                        <div key={cat.id}>
                          <button
                            onClick={() => toggleCat(cat.id)}
                            className="flex w-full items-center justify-between px-8 py-2.5 text-left text-sm transition-colors"
                            style={{ color: isCatOpen ? 'var(--color-primary)' : 'var(--color-text-secondary)', fontWeight: isCatOpen ? 600 : 400 }}
                          >
                            {cat.label}
                            <ChevronDown
                              size={14}
                              className="transition-transform duration-200"
                              style={{ transform: isCatOpen ? 'rotate(180deg)' : 'none' }}
                            />
                          </button>
                          {isCatOpen && (
                            <ul className="flex flex-col pb-1">
                              {cat.services.map((svc) => (
                                <li key={svc.href}>
                                  <Link
                                    href={svc.href}
                                    onClick={onClose}
                                    className="flex items-center gap-2 px-10 py-2 text-sm"
                                    style={{ color: 'var(--color-text-secondary)' }}
                                  >
                                    <span
                                      className="h-1 w-1 rounded-full flex-shrink-0"
                                      style={{ backgroundColor: 'var(--color-primary)' }}
                                    />
                                    {svc.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Resources & Tools — sections with items */}
                {tab.type === 'resources' && (
                  <div>
                    {tab.sections.map((sec, idx) => {
                      const secKey = `${tab.id}-${idx}`;
                      const isSecOpen = openCatId === secKey;
                      return (
                        <div key={sec.title}>
                          <button
                            onClick={() => toggleCat(secKey)}
                            className="flex w-full items-center justify-between px-8 py-2.5 text-left text-sm transition-colors"
                            style={{
                              color: isSecOpen ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                              fontWeight: isSecOpen ? 600 : 400,
                            }}
                          >
                            {sec.title}
                            <ChevronDown
                              size={14}
                              className="transition-transform duration-200"
                              style={{ transform: isSecOpen ? 'rotate(180deg)' : 'none' }}
                            />
                          </button>
                          {isSecOpen && (
                            <ul className="flex flex-col pb-1">
                              {sec.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    onClick={onClose}
                                    className="flex items-center justify-between px-10 py-2 text-sm"
                                    style={{ color: 'var(--color-text-secondary)' }}
                                  >
                                    <span className="flex items-center gap-2">
                                      <span
                                        className="h-1 w-1 rounded-full flex-shrink-0"
                                        style={{ backgroundColor: 'var(--color-primary)' }}
                                      />
                                      {item.label}
                                    </span>
                                    {item.badge && (
                                      <span
                                        className="rounded px-1.5 py-0.2 text-[9px] font-bold uppercase"
                                        style={{
                                          backgroundColor: 'var(--color-primary-muted)',
                                          color: 'var(--color-primary-dark)',
                                        }}
                                      >
                                        {item.badge}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* Footer actions */}
      <div className="flex flex-col gap-3 p-5 mt-2">
        <Link
          href="/startup-package"
          onClick={onClose}
          className="w-full rounded-full py-2.5 text-center text-sm font-semibold"
          style={{
            background: 'linear-gradient(135deg, var(--color-primary-muted), #fff3d4)',
            color: 'var(--color-primary-dark)',
            border: '1.5px solid var(--color-primary-light)',
          }}
        >
          Startup Package
        </Link>
        <Link
          href="/contact"
          onClick={onClose}
          className="w-full rounded-full py-2.5 text-center text-sm font-semibold text-white"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          📞 Free Consultation
        </Link>
      </div>
    </nav>
  );
}
