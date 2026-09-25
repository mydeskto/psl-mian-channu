import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { MatchdayRail } from '@/components/MatchdayRail';
import { LeagueHub } from '@/components/LeagueHub';
import { LiveMatch } from '@/components/LiveMatch';
import { ScheduleSection } from '@/components/ScheduleSection';
import { Standings } from '@/components/Standings';
import { TeamsSection, PlayersSection, OwnersSection } from '@/components/PeopleSection';
import { NewsSection } from '@/components/NewsSection';
import { Sponsors } from '@/components/Sponsors';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar overlay />
      <main>
        <Hero />
        <MatchdayRail />
        <LeagueHub />
        <LiveMatch />
        <ScheduleSection compact />
        <Standings />
        <TeamsSection />
        <PlayersSection compact />
        <OwnersSection />
        <NewsSection />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
