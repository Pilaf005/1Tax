'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { MobileAccordion } from './MobileAccordion';

export function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  function close() { setIsOpen(false); }

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-controls="mobile-drawer"
        aria-expanded={isOpen}
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md transition-colors"
        style={{ color: 'var(--color-secondary)' }}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Slide-in drawer */}
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="fixed top-0 right-0 z-50 h-full w-80 max-w-full overflow-y-auto shadow-xl transition-transform duration-300 lg:hidden"
        style={{
          backgroundColor: 'var(--color-surface)',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: '1px solid var(--color-border)' }}
        >
          <span className="text-sm font-semibold" style={{ color: 'var(--color-secondary)' }}>
            1Tax Services
          </span>
          <button
            onClick={close}
            aria-label="Close menu"
            className="flex items-center justify-center w-8 h-8 rounded-md"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Accordion navigation */}
        <MobileAccordion onClose={close} />
      </aside>
    </>
  );
}
