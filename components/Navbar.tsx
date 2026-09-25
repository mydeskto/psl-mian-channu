'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const links = [
  ['Home', '/'],
  ['Schedule', '/schedule'],
  ['Teams', '/teams'],
  ['Players', '/players'],
  ['News', '/news'],
  ['Live', '/live'],
] as const;

type NavbarProps = {
  /** Transparent over hero — merges with hero background until scroll */
  overlay?: boolean;
};

export function Navbar({ overlay = false }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [overlay]);

  const solid = !overlay || scrolled || open;

  return (
    <header
      className={`z-50 text-white transition-all duration-300 ${
        overlay ? 'fixed inset-x-0 top-0' : 'sticky top-0'
      } ${
        solid
          ? 'border-b border-white/10 bg-navy/95 backdrop-blur'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="section-shell flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="PSL Mian Channu" className="h-12 w-12 rounded-full object-cover" />
          <span className="hidden font-display text-xl font-bold tracking-tight sm:block">
            PSL <span className="text-leaf">MIAN CHANNU</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-semibold text-white/75 transition hover:text-leaf">
              {label}
            </Link>
          ))}
          <Link
            href="/schedule"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-navy transition hover:bg-white"
          >
            Get fixtures
          </Link>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/15 p-2 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-navy/95 px-5 py-4 backdrop-blur md:hidden">
          {links.map(([label, href]) => (
            <Link
              onClick={() => setOpen(false)}
              key={href}
              href={href}
              className="block border-b border-white/10 py-3 text-sm font-semibold text-white/80"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
