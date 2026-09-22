import { Navbar } from '@/components/Navbar';
import { ScheduleSection } from '@/components/ScheduleSection';
import { Standings } from '@/components/Standings';
import { Footer } from '@/components/Footer';
export default function SchedulePage() { return <><Navbar/><main><div className="section-shell py-16"><p className="text-xs font-bold uppercase tracking-[.22em] text-brandGreen">PSL match centre</p><h1 className="display mt-2 text-6xl font-black uppercase text-navy">Schedule & results</h1><p className="mt-4 max-w-xl text-slate-500">Browse every fixture, completed result, live game, and upcoming match in one place.</p></div><ScheduleSection/><Standings/></main><Footer/></> }
