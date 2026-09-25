import { owners } from '@/data/owners';
import { players } from '@/data/players';
import { teams } from '@/data/teams';
import { SectionHeading } from './SectionHeading';

export function TeamsSection() {
  return (
    <section id="teams" className="section-space bg-paper">
      <div className="section-shell">
        <SectionHeading eyebrow="Four cities. One trophy." title="Meet the teams" action={{ label: 'Explore teams', href: '/teams' }} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teams.map((team) => (
            <article key={team.id} className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-card transition hover:-translate-y-1">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full opacity-20" style={{ backgroundColor: team.primaryColor }} />
              <img src={team.logoUrl} alt={`${team.name} crest`} className="mb-6 h-16 w-16 rounded-2xl object-cover shadow-md" />
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{team.city}</p>
              <h3 className="display mt-1 text-3xl font-bold uppercase text-navy">{team.name}</h3>
              <p className="mt-2 text-sm text-slate-500">{team.tagline}</p>
              <div className="mt-5 border-t border-slate-100 pt-4 text-xs text-slate-500">
                <p>
                  Owner <strong className="text-navy">{team.owner}</strong>
                </p>
                <p className="mt-2">
                  Coach <strong className="text-navy">{team.coach}</strong>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PlayersSection({ compact = false }: { compact?: boolean }) {
  return (
    <section id="players" className="section-space">
      <div className="section-shell">
        <SectionHeading eyebrow="The ones to watch" title="Player spotlight" action={{ label: 'View all players', href: '/players' }} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {players.map((player, index) => {
            const team = teams.find((item) => item.id === player.teamId)!;
            const hideOnSmall = compact && index >= 4;
            return (
              <article
                key={player.id}
                className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card${hideOnSmall ? ' max-md:hidden' : ''}`}
              >
                <div className="relative flex h-52 items-end justify-center overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                  <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(circle at 50% 10%, ${team.primaryColor}, transparent 62%)` }} />
                  <img
                    src={player.photoUrl}
                    alt={player.name}
                    className="relative h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy/80 to-transparent" />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: team.primaryColor }}>
                    {team.shortName} · {player.role}
                  </span>
                  <h3 className="display mt-1 text-3xl font-bold uppercase text-navy">{player.name}</h3>
                  <div className="mt-4 flex gap-4 border-t border-slate-100 pt-3 text-xs">
                    <span>
                      <strong className="block text-base text-navy">{player.stats?.runs}</strong>
                      <span className="text-slate-400">Runs</span>
                    </span>
                    <span>
                      <strong className="block text-base text-navy">{player.stats?.wickets}</strong>
                      <span className="text-slate-400">Wickets</span>
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function OwnersSection() {
  return (
    <section id="owners" className="section-space bg-navy text-white">
      <div className="section-shell">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[.22em] text-leaf">Malik Sher M. Awan Memorial</p>
            <h2 className="display text-5xl font-black uppercase leading-none sm:text-6xl">Meet the owners</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/65">
              Official memorial banner above — individual portraits below, taken from each owner&apos;s original photo on the artwork.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img src="/hero/memorial-banner.png" alt="Malik Sher M. Awan Memorial banner" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {owners.map((owner) => {
            const team = owner.teamId ? teams.find((item) => item.id === owner.teamId) : undefined;
            return (
              <article key={owner.id} className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[.09] to-white/[.03] shadow-xl transition hover:-translate-y-1 hover:border-gold/40">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#071B37]">
                  <img
                    src={`${owner.photoUrl}?v=3`}
                    alt={owner.name}
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071B37] via-[#071B37]/80 to-transparent px-5 pb-5 pt-20">
                    {team ? (
                      <p className="text-[10px] font-bold uppercase tracking-widest text-leaf">{team.shortName} · {owner.role}</p>
                    ) : (
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gold">{owner.role}</p>
                    )}
                    <h3 className="display mt-1 text-2xl font-bold uppercase leading-tight sm:text-3xl">{owner.name}</h3>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm leading-6 text-white/65">{owner.bio}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
