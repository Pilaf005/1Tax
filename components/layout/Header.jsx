'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnnouncementBar } from './AnnouncementBar';
import { NavDesktop } from './NavDesktop';
import { NavMobile } from './NavMobile';

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY =
            window.scrollY || document.documentElement.scrollTop || 0;
          const diff = currentScrollY - lastScrollY.current;

          setIsScrolled(currentScrollY > 20);

          // Near top: always keep visible
          if (currentScrollY <= 20) {
            setIsVisible(true);
          } else if (diff > 8 && currentScrollY > 60) {
            // Scrolling DOWN -> hide navbar & announcement strip
            setIsVisible(false);
          } else if (diff < -5) {
            // Scrolling UP -> smoothly reveal navbar
            setIsVisible(true);
          }

          lastScrollY.current = Math.max(0, currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'shadow-md shadow-slate-900/5' : ''}`}
      style={{
        backgroundColor: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      {/* Announcement bar — hidden on mobile */}
      <div className="hidden sm:block">
        <AnnouncementBar />
      </div>

      {/* Main nav row with max-w container */}
      <div className="relative mx-auto flex h-18 sm:h-20 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo on the left */}
        <Link href="/" aria-label="1Tax — Home" className="flex items-center flex-shrink-0 py-1">
          <Image
            src="/logo.png"
            alt="1Tax Chartered Accountant Firm"
            width={160}
            height={56}
            priority
            className="h-11 sm:h-13 w-auto object-contain transition-all"
            style={{ height: 'auto', maxHeight: '52px' }}
          />
        </Link>

        {/* Right side: Nav tabs + Actions */}
        <div className="hidden lg:flex items-center h-full">
          <NavDesktop />
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
}
