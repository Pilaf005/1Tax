'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { MegaMenu } from './MegaMenu';

export function NavDesktop() {
  return (
    <nav
      aria-label="Main navigation"
      className="flex items-center h-full gap-4 xl:gap-6"
    >
      {/* Menu Tabs */}
      <div className="flex items-center h-full">
        <MegaMenu />
      </div>

      {/* Action CTA Buttons */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <Link
          href="/startup-package"
          className="rounded-full px-3.5 py-1.5 text-xs xl:text-sm font-semibold transition-all hover:scale-105 whitespace-nowrap shadow-xs"
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
          className="inline-flex items-center gap-2 rounded-full px-4 xl:px-5 py-2 text-xs xl:text-sm font-semibold text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md active:scale-95 whitespace-nowrap"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          <Phone size={14} />
          Free Consultation
        </Link>
      </div>
    </nav>
  );
}

