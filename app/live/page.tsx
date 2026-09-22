import { Navbar } from '@/components/Navbar';
import { LiveMatch } from '@/components/LiveMatch';
import { ScheduleSection } from '@/components/ScheduleSection';
import { Standings } from '@/components/Standings';
import { Footer } from '@/components/Footer';
export default function LivePage() { return <><Navbar/><main><div className="bg-navy py-16 text-white"><div className="section-shell"><p className="text-xs font-bold uppercase tracking-[.22em] text-leaf">Watch every moment</p><h1 className="display mt-2 text-6xl font-black uppercase">Live match centre</h1><p className="mt-4 max-w-xl text-white/60">Watch the current game, review completed matches, and follow the full tournament schedule.</p></div></div><LiveMatch/><ScheduleSection/><Standings/></main><Footer/></> }
