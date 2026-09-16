import Image from 'next/image';
import Link from 'next/link';
import { AnnouncementBar } from './AnnouncementBar';
import { NavDesktop } from './NavDesktop';
import { NavMobile } from './NavMobile';

export function Header() {
  return (
    <header
      className="sticky top-0 z-40 w-full"
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

