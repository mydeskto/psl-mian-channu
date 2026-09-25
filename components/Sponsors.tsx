import { sponsors } from '@/data/sponsors';

export function Sponsors() {
  return (
    <section className="border-y border-slate-200 bg-white py-10">
      <div className="section-shell">
        <div className="mb-8">
          <p className="text-[10px] font-bold uppercase tracking-[.25em] text-slate-400">Proudly supported by</p>
          <h2 className="display mt-1 text-3xl font-black uppercase text-navy">Sports partners</h2>
        </div>
        <div className="grid grid-cols-2 items-center gap-x-10 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="flex flex-col items-center justify-center gap-2.5 text-center">
              <img
                src={`${sponsor.logoUrl}?v=4`}
                alt={`${sponsor.name} logo`}
                className="h-12 w-auto max-w-[140px] object-contain sm:h-14"
              />
              <div>
                <p className="text-sm font-bold text-navy">{sponsor.name}</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{sponsor.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
