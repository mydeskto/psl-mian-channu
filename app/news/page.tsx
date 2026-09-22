import { Navbar } from '@/components/Navbar';
import { NewsSection } from '@/components/NewsSection';
import { Footer } from '@/components/Footer';
export default function NewsPage() { return <><Navbar/><main><div className="section-shell py-16"><p className="text-xs font-bold uppercase tracking-[.22em] text-brandGreen">From the league</p><h1 className="display mt-2 text-6xl font-black uppercase text-navy">Newsroom</h1></div><NewsSection/></main><Footer/></> }
