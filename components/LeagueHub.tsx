import Link from 'next/link';
import { ArrowUpRight, CalendarDays, Shield, Trophy, Users } from 'lucide-react';

const cards = [
  { label: 'Competition', title: 'The tournament', detail: 'Fixtures, results and the road to the final.', href: '/schedule', icon: Trophy, tone: 'bg-gold text-navy' },
  { label: 'The four', title: 'Meet the teams', detail: 'Local rivalries. One trophy.', href: '/teams', icon: Shield, tone: 'bg-leaf text-navy' },
  { label: 'The squad', title: 'Players & captains', detail: 'The names shaping every matchday.', href: '/players', icon: Users, tone: 'bg-teal text-white' },
  { label: 'Matchday', title: 'Full calendar', detail: 'Never miss the next ball in Mian Channu.', href: '/schedule', icon: CalendarDays, tone: 'bg-white text-navy' }
];

export function LeagueHub() {
  return <section className="relative overflow-hidden bg-navy py-14 text-white">
    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-leaf/20" />
    <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-leaf/15" />
    <div className="section-shell relative">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[.22em] text-leaf">Your league, at a glance</p>
          <h2 className="display text-5xl font-black uppercase leading-none sm:text-6xl">The PSL hub</h2>
        </div>
        <Link href="/schedule" className="group flex items-center gap-2 text-sm font-bold text-white/70 transition hover:text-white">Open match centre <ArrowUpRight size={17} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ label, title, detail, href, icon: Icon, tone }) => <Link key={title} href={href} className="group rounded-2xl border border-white/10 bg-white/[.06] p-5 transition hover:-translate-y-1 hover:bg-white/[.1]">
          <div className={`mb-7 flex h-11 w-11 items-center justify-center rounded-xl ${tone}`}><Icon size={19} /></div>
          <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/45">{label}</p>
          <h3 className="display mt-1 text-3xl font-bold uppercase">{title}</h3>
          <p className="mt-2 text-sm leading-5 text-white/55">{detail}</p>
          <span className="mt-5 inline-flex text-xs font-bold uppercase tracking-widest text-leaf">Explore <ArrowUpRight size={14} className="ml-1 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
        </Link>)}
      </div>
    </div>
  </section>;
}
