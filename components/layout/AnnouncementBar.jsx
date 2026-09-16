'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, MessageCircle } from 'lucide-react';

const SESSION_KEY = 'onetax_announcement_dismissed';
const WA_NUMBER = '919999999999'; // replace with real number
const WA_MESSAGE = encodeURIComponent('Hi! I would like a free 30-minute consultation.');

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(true); // start hidden to avoid flash

  useEffect(() => {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (!stored) setDismissed(false);
  }, []);

  function dismiss() {
    sessionStorage.setItem(SESSION_KEY, '1');
    setDismissed(true);
  }

  if (dismissed) return null;

  return (
    <div
      role="banner"
      className="relative flex items-center justify-center gap-3 px-4 py-2 text-sm text-white"
      style={{ backgroundColor: 'var(--color-secondary-dark)' }}
    >
      <span className="hidden sm:inline font-medium">
        🎉 Free 30-min consultation for new clients —
      </span>
      <Link
        href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-semibold transition-opacity hover:opacity-90"
        style={{ backgroundColor: 'var(--color-whatsapp)', color: '#fff' }}
      >
        <MessageCircle size={13} />
        Book via WhatsApp
      </Link>
      <button
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-0.5 opacity-70 hover:opacity-100"
      >
        <X size={14} />
      </button>
    </div>
  );
}
