import { Navbar } from '@/components/Navbar';
import { LiveMatch } from '@/components/LiveMatch';
import { Footer } from '@/components/Footer';
export default function LivePage() { return <><Navbar/><main><div className="bg-navy py-16 text-white"><div className="section-shell"><p className="text-xs font-bold uppercase tracking-[.22em] text-leaf">Watch every moment</p><h1 className="display mt-2 text-6xl font-black uppercase">Live match centre</h1></div></div><LiveMatch/></main><Footer/></> }
