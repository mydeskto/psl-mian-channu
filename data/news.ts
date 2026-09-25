export type NewsItem = { id: string; title: string; summary: string; date: string; imageUrl: string; category: string };

export const news: NewsItem[] = [
  {
    id: 'n-1',
    title: 'Malik Sher M. Awan Memorial lights up Mian Channu',
    summary: 'The memorial tournament opens with four franchises, hometown fans, and a full floodlight calendar.',
    date: '28 Aug 2025',
    imageUrl: '/hero/memorial-banner.png',
    category: 'League news',
  },
  {
    id: 'n-2',
    title: 'Meet the captains leading the charge',
    summary: 'Local circuit stars step up as captains — from pace packs to power hitters, every side has a story.',
    date: '27 Aug 2025',
    imageUrl: '/hero/match-action.jpg',
    category: 'Feature',
  },
  {
    id: 'n-3',
    title: 'Everything you need to know about match day',
    summary: 'Gates, timings, ticket desk, and fan zones — your essential guide to a great evening at the ground.',
    date: '25 Aug 2025',
    imageUrl: '/hero/crowd-night.jpg',
    category: 'Matchday',
  },
];
