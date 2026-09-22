export type StandingsRow = { teamId: string; played: number; won: number; lost: number; nrr: string; points: number };
export const standings: StandingsRow[] = [
  { teamId: 'mian-channu-strikers', played: 2, won: 2, lost: 0, nrr: '+1.42', points: 4 },
  { teamId: 'kabirwala-kings', played: 2, won: 1, lost: 1, nrr: '+0.31', points: 2 },
  { teamId: 'chenab-challengers', played: 1, won: 0, lost: 1, nrr: '-0.62', points: 0 },
  { teamId: 'tulamba-titans', played: 1, won: 0, lost: 1, nrr: '-1.08', points: 0 }
];
