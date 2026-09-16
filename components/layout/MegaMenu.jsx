'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_TABS } from '@/data/services';
import { MegaMenuPanel } from './MegaMenuPanel';
import { SpecializedPanel } from './SpecializedPanel';
import { ResourcesPanel } from './ResourcesPanel';
import {
  Rocket, Receipt, ClipboardCheck, TrendingUp, Zap, Compass, ChevronDown,
} from 'lucide-react';

const TAB_ICONS = { Rocket, Receipt, ClipboardCheck, TrendingUp, Zap, Compass };

const CLOSE_DELAY = 180; // ms

export function MegaMenu() {
  const [openTabId, setOpenTabId] = useState(null);
  const closeTimer = useRef(null);
  const pathname = usePathname();

  const openTab = useCallback((id) => {
    clearTimeout(closeTimer.current);
    setOpenTabId(id);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenTabId(null), CLOSE_DELAY);
  }, []);

  const cancelClose = useCallback(() => {
    clearTimeout(closeTimer.current);
  }, []);

  const openTab_ = NAV_TABS.find((t) => t.id === openTabId);

  return (
    <div
      className="relative flex items-center h-full gap-0.5 xl:gap-1"
      onMouseLeave={scheduleClose}
      onMouseEnter={cancelClose}
    >
      {/* Tab buttons */}
      {NAV_TABS.map((tab) => {
        const Icon = TAB_ICONS[tab.icon] ?? Rocket;
        const isOpen = openTabId === tab.id;
        const isSpecialized = tab.id === 'specialized';

        return (
          <button
            key={tab.id}
            onMouseEnter={() => openTab(tab.id)}
            onFocus={() => openTab(tab.id)}
            onKeyDown={(e) => e.key === 'Escape' && setOpenTabId(null)}
            aria-haspopup="true"
            aria-expanded={isOpen}
            className="relative flex h-full items-center gap-1 xl:gap-1.5 px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors whitespace-nowrap"
            style={{
              color: isOpen
                ? 'var(--color-primary)'
                : isSpecialized
                ? 'var(--color-primary-dark)'
                : 'var(--color-secondary)',
            }}
          >
            {tab.label}
            <ChevronDown
              size={12}
              className="transition-transform duration-200"
              style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
            {/* Active underline indicator */}
            <span
              className="absolute bottom-0 left-0 h-0.5 w-full transition-all duration-200"
              style={{ backgroundColor: isOpen ? 'var(--color-primary)' : 'transparent' }}
            />
          </button>
        );
      })}

      {/* Dropdown panel */}
      {openTab_ && (
        <div
          className="absolute right-0 top-full z-50 w-[960px] xl:w-[1040px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-b-xl shadow-2xl"
          style={{
            borderTop: `2px solid var(--color-primary)`,
            backgroundColor: 'var(--color-surface)',
          }}
          onMouseEnter={cancelClose}
        >
          {openTab_.type === 'mega' && <MegaMenuPanel tab={openTab_} />}
          {openTab_.type === 'specialized' && <SpecializedPanel services={openTab_.services} />}
          {openTab_.type === 'resources' && <ResourcesPanel tab={openTab_} />}
        </div>
      )}
    </div>
  );
}
