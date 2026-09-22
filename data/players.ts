export type Player = {
  id: string; teamId: string; name: string; role: string; photoUrl: string;
  battingStyle: string; bowlingStyle: string; stats?: { matches: number; runs: number; wickets: number };
};
export const players: Player[] = [
  { id: 'p-1', teamId: 'mian-channu-strikers', name: 'Hamza Javed', role: 'Captain · Batter', photoUrl: '/logo.png', battingStyle: 'Right-hand bat', bowlingStyle: 'Part-time off-spin', stats: { matches: 24, runs: 812, wickets: 4 } },
  { id: 'p-2', teamId: 'mian-channu-strikers', name: 'Usman Tariq', role: 'All-rounder', photoUrl: '/logo.png', battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm medium', stats: { matches: 19, runs: 446, wickets: 21 } },
  { id: 'p-3', teamId: 'chenab-challengers', name: 'Saad Anwar', role: 'Wicketkeeper', photoUrl: '/logo.png', battingStyle: 'Right-hand bat', bowlingStyle: '—', stats: { matches: 31, runs: 901, wickets: 0 } },
  { id: 'p-4', teamId: 'chenab-challengers', name: 'Fahad Riaz', role: 'Fast bowler', photoUrl: '/logo.png', battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm fast', stats: { matches: 22, runs: 103, wickets: 29 } },
  { id: 'p-5', teamId: 'kabirwala-kings', name: 'Danish Iqbal', role: 'Opening batter', photoUrl: '/logo.png', battingStyle: 'Right-hand bat', bowlingStyle: '—', stats: { matches: 28, runs: 1_104, wickets: 0 } },
  { id: 'p-6', teamId: 'kabirwala-kings', name: 'Arslan Yousaf', role: 'Spinner', photoUrl: '/logo.png', battingStyle: 'Left-hand bat', bowlingStyle: 'Left-arm orthodox', stats: { matches: 21, runs: 182, wickets: 25 } },
  { id: 'p-7', teamId: 'tulamba-titans', name: 'Muneeb Akram', role: 'All-rounder', photoUrl: '/logo.png', battingStyle: 'Right-hand bat', bowlingStyle: 'Right-arm medium', stats: { matches: 27, runs: 655, wickets: 18 } },
  { id: 'p-8', teamId: 'tulamba-titans', name: 'Shahzaib Noor', role: 'Finisher', photoUrl: '/logo.png', battingStyle: 'Right-hand bat', bowlingStyle: '—', stats: { matches: 18, runs: 388, wickets: 0 } }
];
