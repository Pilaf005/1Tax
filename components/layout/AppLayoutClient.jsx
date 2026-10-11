"use client";

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function AppLayoutClient({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Instantly scroll to the top of the page on route change without animating from bottom
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
