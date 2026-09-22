export type NewsItem = { id: string; title: string; summary: string; date: string; imageUrl: string; category: string };
export const news: NewsItem[] = [
  { id: 'n-1', title: 'Mian Channu gets ready for a month of cricket', summary: 'The city is gearing up for the biggest local T20 spectacle yet, with four teams ready to light up the ground.', date: '28 Aug 2025', imageUrl: '/logo.png', category: 'League news' },
  { id: 'n-2', title: 'Meet the captains leading the charge', summary: 'Four captains, four distinct styles, and one shared ambition: lift the PSL trophy.', date: '27 Aug 2025', imageUrl: '/logo.png', category: 'Feature' },
  { id: 'n-3', title: 'Everything you need to know about match day', summary: 'Gates, timings, ticket desk, and fan zones — your essential guide to a great evening at the ground.', date: '25 Aug 2025', imageUrl: '/logo.png', category: 'Matchday' }
];
