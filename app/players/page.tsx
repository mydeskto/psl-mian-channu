import { Navbar } from '@/components/Navbar';
import { PlayersSection } from '@/components/PeopleSection';
import { Footer } from '@/components/Footer';
export default function PlayersPage() { return <><Navbar/><main><div className="section-shell py-16"><p className="text-xs font-bold uppercase tracking-[.22em] text-brandGreen">Squads & stars</p><h1 className="display mt-2 text-6xl font-black uppercase text-navy">Players to watch</h1></div><PlayersSection/></main><Footer/></> }
