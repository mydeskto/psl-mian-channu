'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const links = [['Home', '/'], ['Schedule', '/schedule'], ['Teams', '/teams'], ['Players', '/players'], ['News', '/news'], ['Live', '/live']];
export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-white backdrop-blur">
    <div className="section-shell flex h-[76px] items-center justify-between">
      <Link href="/" className="flex items-center gap-3"><img src="/logo.png" alt="PSL 4 Mian Channu" className="h-12 w-12 rounded-full object-cover" /><span className="hidden font-display text-xl font-bold tracking-tight sm:block">PSL 4 <span className="text-leaf">MIAN CHANNU</span></span></Link>
      <nav className="hidden items-center gap-7 md:flex">{links.map(([label, href]) => <Link key={href} href={href} className="text-sm font-semibold text-white/75 transition hover:text-leaf">{label}</Link>)}<Link href="/schedule" className="rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-navy transition hover:bg-white">Get fixtures</Link></nav>
      <button onClick={() => setOpen(!open)} className="rounded-lg border border-white/15 p-2 md:hidden" aria-label="Toggle navigation">{open ? <X size={22}/> : <Menu size={22}/>}</button>
    </div>
    {open && <nav className="border-t border-white/10 bg-navy px-5 py-4 md:hidden">{links.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href} className="block border-b border-white/10 py-3 text-sm font-semibold text-white/80">{label}</Link>)}</nav>}
  </header>;
}
