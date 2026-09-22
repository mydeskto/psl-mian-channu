import Link from 'next/link';
import { ArrowUpRight, CalendarDays, MapPin, Radio } from 'lucide-react';
import { schedule } from '@/data/schedule';
import { teams } from '@/data/teams';

export function MatchdayRail() {
  const match = schedule.find((item) => item.status === 'live') ?? schedule[2];
  const home = teams.find((team) => team.id === match.teamAId)!;
  const away = teams.find((team) => team.id === match.teamBId)!;
  return <section className="relative z-10 -mt-8 pb-3">
    <div className="section-shell">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#081c38] text-white shadow-2xl shadow-navy/20">
        <div className="grid items-center lg:grid-cols-[1fr_1.7fr_1fr]">
          <div className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r">
            <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-leaf"><Radio size={13}/> Matchday 03</div>
            <p className="display text-2xl font-bold uppercase">Live from the ground</p>
            <p className="mt-1 text-xs text-white/45">Mian Channu Cricket Ground</p>
          </div>
          <div className="flex items-center justify-center gap-7 px-6 py-5 sm:gap-12 lg:px-8">
            <div className="text-center"><span className="team-mark mx-auto mb-2 h-12 w-12 text-xs" style={{ backgroundColor: home.primaryColor }}>{home.shortName}</span><p className="text-xs font-bold">{home.shortName}</p></div>
            <div className="text-center"><p className="display text-3xl font-black text-gold">126/2</p><p className="mt-1 text-[10px] uppercase tracking-widest text-white/40">8.2 overs · need 48</p></div>
            <div className="text-center"><span className="team-mark mx-auto mb-2 h-12 w-12 text-xs" style={{ backgroundColor: away.primaryColor }}>{away.shortName}</span><p className="text-xs font-bold">{away.shortName}</p></div>
          </div>
          <div className="flex items-center justify-between gap-7 border-t border-white/10 p-5 lg:border-l lg:border-t-0 lg:px-7"><div className="text-xs text-white/50"><p className="flex items-center gap-2"><CalendarDays size={13} className="text-leaf"/>{match.date} · {match.time}</p><p className="mt-2 flex items-center gap-2"><MapPin size={13} className="text-leaf"/>{match.venue}</p></div><Link href="/live" className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-navy transition hover:bg-white" aria-label="Open live match centre"><ArrowUpRight size={17}/></Link></div>
        </div>
      </div>
    </div>
  </section>;
}
