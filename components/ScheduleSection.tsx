'use client';
import { useState } from 'react';
import { schedule, type MatchStatus } from '@/data/schedule';
import { MatchCard } from './MatchCard';
import { SectionHeading } from './SectionHeading';
export function ScheduleSection({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState<'all' | MatchStatus>('all');
  const matches = compact ? schedule.slice(0, 4) : schedule;
  const visible = matches.filter((match) => filter === 'all' || match.status === filter);
  return <section id="schedule" className="section-space"><div className="section-shell"><SectionHeading eyebrow="Fixtures & results" title="On the calendar" action={{ label: 'View full schedule', href: '/schedule' }}/><div className="mb-7 flex gap-2 overflow-x-auto pb-1">{(['all', 'upcoming', 'live', 'completed'] as const).map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-full px-5 py-2 text-xs font-bold capitalize transition ${filter === item ? 'bg-navy text-white' : 'bg-white text-slate-500 ring-1 ring-slate-200 hover:ring-navy'}`}>{item}</button>)}</div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{visible.map((match) => <MatchCard key={match.id} match={match}/>)}</div></div></section>;
}
