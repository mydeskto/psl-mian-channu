import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export function SectionHeading({ eyebrow, title, action }: { eyebrow: string; title: string; action?: { label: string; href: string } }) {
  return <div className="mb-9 flex flex-wrap items-end justify-between gap-4"><div><p className="mb-2 text-xs font-bold uppercase tracking-[.22em] text-brandGreen">{eyebrow}</p><h2 className="display text-5xl font-black uppercase leading-none text-navy sm:text-6xl">{title}</h2></div>{action && <Link href={action.href} className="group flex items-center gap-2 text-sm font-bold text-navy">{action.label}<ArrowUpRight size={17} className="transition group-hover:translate-x-1 group-hover:-translate-y-1"/></Link>}</div>
}
