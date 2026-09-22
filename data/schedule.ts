export type MatchStatus = 'upcoming' | 'live' | 'completed';
export type Match = { id: string; matchNumber: number; teamAId: string; teamBId: string; date: string; time: string; venue: string; status: MatchStatus; result?: string };
export const schedule: Match[] = [
  { id: 'm-1', matchNumber: 1, teamAId: 'mian-channu-strikers', teamBId: 'chenab-challengers', date: '01 Sep 2025', time: '7:30 PM', venue: 'Mian Channu Cricket Ground', status: 'completed', result: 'MCS won by 6 wickets' },
  { id: 'm-2', matchNumber: 2, teamAId: 'kabirwala-kings', teamBId: 'tulamba-titans', date: '02 Sep 2025', time: '7:30 PM', venue: 'Mian Channu Cricket Ground', status: 'completed', result: 'KK won by 18 runs' },
  { id: 'm-3', matchNumber: 3, teamAId: 'mian-channu-strikers', teamBId: 'kabirwala-kings', date: '04 Sep 2025', time: '7:30 PM', venue: 'Mian Channu Cricket Ground', status: 'live' },
  { id: 'm-4', matchNumber: 4, teamAId: 'chenab-challengers', teamBId: 'tulamba-titans', date: '05 Sep 2025', time: '7:30 PM', venue: 'Mian Channu Cricket Ground', status: 'upcoming' },
  { id: 'm-5', matchNumber: 5, teamAId: 'mian-channu-strikers', teamBId: 'tulamba-titans', date: '07 Sep 2025', time: '7:30 PM', venue: 'Mian Channu Cricket Ground', status: 'upcoming' },
  { id: 'm-6', matchNumber: 6, teamAId: 'chenab-challengers', teamBId: 'kabirwala-kings', date: '08 Sep 2025', time: '7:30 PM', venue: 'Mian Channu Cricket Ground', status: 'upcoming' },
  { id: 'm-7', matchNumber: 7, teamAId: 'mian-channu-strikers', teamBId: 'chenab-challengers', date: '10 Sep 2025', time: '7:30 PM', venue: 'Mian Channu Cricket Ground', status: 'upcoming' },
  { id: 'm-8', matchNumber: 8, teamAId: 'kabirwala-kings', teamBId: 'tulamba-titans', date: '11 Sep 2025', time: '7:30 PM', venue: 'Mian Channu Cricket Ground', status: 'upcoming' }
];
