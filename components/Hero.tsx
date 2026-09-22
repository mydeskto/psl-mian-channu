'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { owners } from '@/data/owners';
import { players } from '@/data/players';
import { teams } from '@/data/teams';

const slides = [
  { eyebrow: 'The city. The passion. The league.', title: 'Mian Channu,\\nmeet your league.', text: 'Four teams. One trophy. Every over matters when PSL 4 comes to town.', type: 'season' },
  { eyebrow: 'Captain · Mian Channu Strikers', title: 'Built for the\\nbig moments.', text: 'Hamza Javed leads the home side with fearless intent and a bat made for the spotlight.', type: 'player', player: players[0] },
  { eyebrow: 'Owner · Chenab Challengers', title: 'A league powered\\nby the people.', text: 'Meet the local leaders backing the next generation of cricket in the region.', type: 'owner', owner: owners[1] }
];
export function Hero() {
  const [active, setActive] = useState(0);
  useEffect(() => { const id = setInterval(() => setActive((v) => (v + 1) % slides.length), 6000); return () => clearInterval(id); }, []);
  const slide = slides[active];
  const team = slide.player ? teams.find((item) => item.id === slide.player?.teamId) : slide.owner ? teams.find((item) => item.id === slide.owner?.teamId) : undefined;
  return <section className="relative overflow-hidden bg-navy text-white">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_10%,rgba(46,158,70,.5),transparent_35%),linear-gradient(120deg,#0e2a52_0%,#123d69_55%,#1b7a9e_100%)]"/>
    <div className="absolute -bottom-32 -left-16 h-96 w-[120%] rounded-[50%] border-[24px] border-brandGreen/80"/>
    <div className="section-shell relative grid min-h-[570px] items-center gap-10 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
      <div key={active} className="float-in max-w-xl"><p className="mb-5 text-xs font-bold uppercase tracking-[.28em] text-leaf">{slide.eyebrow}</p><h1 className="display whitespace-pre-line text-6xl font-black uppercase leading-[.86] tracking-[-.02em] sm:text-8xl">{slide.title}</h1><p className="mt-7 max-w-md text-base leading-7 text-blue-100/80">{slide.text}</p><div className="mt-9 flex flex-wrap gap-3"><Link href="/schedule" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy transition hover:bg-white">Explore fixtures <ArrowUpRight size={16}/></Link><Link href="/live" className="rounded-full border border-white/25 px-6 py-3 text-sm font-bold transition hover:border-leaf hover:text-leaf">Watch live</Link></div><div className="mt-10 grid max-w-md grid-cols-3 gap-5 border-t border-white/15 pt-5"><div><p className="display text-3xl font-bold text-white">04</p><p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Teams</p></div><div><p className="display text-3xl font-bold text-white">08</p><p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Fixtures</p></div><div><p className="display text-3xl font-bold text-gold">01 Sep</p><p className="text-[10px] font-bold uppercase tracking-widest text-white/50">First ball</p></div></div></div>
      <div className="relative mx-auto flex w-full max-w-[430px] items-center justify-center">
        <div className="absolute h-[340px] w-[340px] rounded-full border border-white/20 sm:h-[410px] sm:w-[410px]"/><div className="absolute h-[285px] w-[285px] rounded-full border border-leaf/40 sm:h-[345px] sm:w-[345px]"/>
        <div className="relative grid h-[290px] w-[290px] place-items-center overflow-hidden rounded-[36%_64%_58%_42%/40%_42%_58%_60%] bg-white/10 backdrop-blur-sm sm:h-[360px] sm:w-[360px]">
          {slide.type === 'season' ? <><img src="/logo.png" alt="PSL 4 Mian Channu logo" className="w-[235px] rounded-full sm:w-[275px]"/><span className="absolute bottom-7 rounded-full bg-brandGreen px-4 py-2 text-xs font-bold uppercase tracking-[.2em]">Starts 1st September</span></> : <><div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"/><img src="/logo.png" alt={slide.player?.name ?? slide.owner?.name ?? 'League representative'} className="w-[220px] rounded-full opacity-90 sm:w-[270px]"/><div className="absolute bottom-8 left-8"><p className="text-xs uppercase tracking-widest text-leaf">{team?.shortName}</p><p className="display text-3xl font-bold uppercase">{slide.player?.name ?? slide.owner?.name}</p></div></>}
        </div>
      </div>
    </div>
    <div className="section-shell relative flex items-center justify-between pb-8"><div className="flex gap-2">{slides.map((_, i) => <button key={i} onClick={() => setActive(i)} className={`h-1.5 rounded-full transition-all ${i === active ? 'w-10 bg-gold' : 'w-4 bg-white/30'}`} aria-label={`Go to slide ${i + 1}`}/>)}</div><div className="flex gap-2"><button onClick={() => setActive((active + slides.length - 1) % slides.length)} className="rounded-full border border-white/20 p-2 hover:border-white" aria-label="Previous slide"><ChevronLeft size={18}/></button><button onClick={() => setActive((active + 1) % slides.length)} className="rounded-full border border-white/20 p-2 hover:border-white" aria-label="Next slide"><ChevronRight size={18}/></button></div></div>
  </section>;
}
