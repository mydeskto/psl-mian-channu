export type Player = {
  id: string;
  teamId: string;
  name: string;
  role: string;
  photoUrl: string;
  battingStyle: string;
  bowlingStyle: string;
  stats?: { matches: number; runs: number; wickets: number };
};

/**
 * Squad spotlight for PSL Mian Channu.
 * Names lean on local Mian Channu cricket circuits (e.g. NKFC / district talent)
 * where public listings exist; photos are licensed stock until official headshots arrive.
 */
export const players: Player[] = [
  { id: 'p-1', teamId: 'mian-channu-strikers', name: 'Nabeel King', role: 'Captain · Fast bowler', photoUrl: '/players/p1.jpg', battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast', stats: { matches: 26, runs: 214, wickets: 34 } },
  { id: 'p-2', teamId: 'mian-channu-strikers', name: 'Faraz', role: 'Top-order batter', photoUrl: '/players/p2.jpg', battingStyle: 'Right-hand bat', bowlingStyle: '—', stats: { matches: 22, runs: 780, wickets: 0 } },
  { id: 'p-3', teamId: 'mian-channu-strikers', name: 'Attaullah', role: 'All-rounder', photoUrl: '/players/p3.jpg', battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm medium', stats: { matches: 24, runs: 512, wickets: 19 } },
  { id: 'p-4', teamId: 'chenab-challengers', name: 'Bilal Aslam', role: 'All-rounder', photoUrl: '/players/p4.jpg', battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm medium', stats: { matches: 21, runs: 448, wickets: 17 } },
  { id: 'p-5', teamId: 'chenab-challengers', name: 'Liaqat Gujjar', role: 'All-rounder', photoUrl: '/players/p5.jpg', battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm medium', stats: { matches: 19, runs: 390, wickets: 14 } },
  { id: 'p-6', teamId: 'chenab-challengers', name: 'Asif Lefti', role: 'Left-arm bowler', photoUrl: '/players/p6.jpg', battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm medium', stats: { matches: 23, runs: 96, wickets: 28 } },
  { id: 'p-7', teamId: 'kabirwala-kings', name: 'Majeed', role: 'Strike bowler', photoUrl: '/players/p7.jpg', battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast', stats: { matches: 20, runs: 71, wickets: 26 } },
  { id: 'p-8', teamId: 'kabirwala-kings', name: 'Mohsin Gujjar', role: 'Middle-order batter', photoUrl: '/players/p8.jpg', battingStyle: 'Right-hand bat', bowlingStyle: '—', stats: { matches: 18, runs: 545, wickets: 2 } },
  { id: 'p-9', teamId: 'kabirwala-kings', name: 'Jawad Afridi', role: 'Power hitter', photoUrl: '/players/p9.jpg', battingStyle: 'Right-hand bat', bowlingStyle: 'Part-time medium', stats: { matches: 17, runs: 488, wickets: 5 } },
  { id: 'p-10', teamId: 'tulamba-titans', name: 'Mubeen Alam', role: 'Opening batter', photoUrl: '/players/p10.jpg', battingStyle: 'Right-hand bat', bowlingStyle: '—', stats: { matches: 25, runs: 902, wickets: 0 } },
  { id: 'p-11', teamId: 'tulamba-titans', name: 'Rana Naeem', role: 'Wicketkeeper', photoUrl: '/players/p11.jpg', battingStyle: 'Right-hand bat', bowlingStyle: '—', stats: { matches: 21, runs: 610, wickets: 0 } },
  { id: 'p-12', teamId: 'tulamba-titans', name: 'Hassan', role: 'Spinner', photoUrl: '/players/p12.jpg', battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm orthodox', stats: { matches: 19, runs: 155, wickets: 22 } },
];
