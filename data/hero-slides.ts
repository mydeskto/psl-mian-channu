export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  imageUrl: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
};

export const heroSlides: HeroSlide[] = [
  {
    id: 'memorial',
    eyebrow: 'Malik Sher M. Awan Memorial',
    title: 'The league.\nThe city.\nThe tribute.',
    text: 'PSL Mian Channu returns under the Malik Sher M. Awan Memorial — four teams, one trophy, hometown cricket on a national stage.',
    imageUrl: '/hero/memorial-banner.jpg',
    ctaPrimary: { label: 'Watch live', href: '/live' },
    ctaSecondary: { label: 'Meet the teams', href: '/teams' },
  },
  {
    id: 'lights',
    eyebrow: 'Match night energy',
    title: 'Floodlights.\nFull stands.\nPure drama.',
    text: 'From first ball to last over, every fixture is built for a stadium-night experience the city will remember.',
    imageUrl: '/hero/stadium-lights.jpg',
    ctaPrimary: { label: 'View fixtures', href: '/schedule' },
    ctaSecondary: { label: 'Live centre', href: '/live' },
  },
  {
    id: 'crowd',
    eyebrow: 'Fans of Mian Channu',
    title: 'A city that\nlives cricket.',
    text: 'Local passion. Regional pride. The crowd is the twelfth player when PSL comes to Mian Channu.',
    imageUrl: '/hero/crowd-night.jpg',
    ctaPrimary: { label: 'League hub', href: '/#teams' },
    ctaSecondary: { label: 'Latest news', href: '/news' },
  },
  {
    id: 'action',
    eyebrow: 'On the field',
    title: 'Every over\nmatters.',
    text: 'Strikers, Challengers, Kings and Titans — chase the Net Run Rate, own the points table, lift the cup.',
    imageUrl: '/hero/match-action.jpg',
    ctaPrimary: { label: 'Standings', href: '/#standings' },
    ctaSecondary: { label: 'Players', href: '/players' },
  },
  {
    id: 'craft',
    eyebrow: 'Grassroots to glory',
    title: 'Bat in hand.\nEyes on glory.',
    text: 'Built for next-gen district talent — the memorial tournament is where local names become local legends.',
    imageUrl: '/hero/cricket-bat.jpg',
    ctaPrimary: { label: 'Player spotlight', href: '/players' },
    ctaSecondary: { label: 'Owners', href: '/#owners' },
  },
];
