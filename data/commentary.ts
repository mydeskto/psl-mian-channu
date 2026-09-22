export type CommentaryEntry = { id: string; matchId: string; over: string; ball: string; text: string; timestamp: string };
export const commentary: CommentaryEntry[] = [
  { id: 'c-1', matchId: 'm-3', over: '12.4', ball: '04', text: 'FOUR! Hamza leans into the cover drive and beats the sweeper.', timestamp: '19:42' },
  { id: 'c-2', matchId: 'm-3', over: '12.3', ball: '03', text: 'A dot ball to start the over. Tight line from Arslan.', timestamp: '19:41' },
  { id: 'c-3', matchId: 'm-3', over: '11.6', ball: '06', text: 'Single to long-on. Mian Channu need 48 from 50 balls.', timestamp: '19:38' },
  { id: 'c-4', matchId: 'm-3', over: '11.1', ball: '01', text: 'Play and miss! That one skids through at a lively pace.', timestamp: '19:35' },
  { id: 'c-5', matchId: 'm-3', over: '10.5', ball: '05', text: 'Two runs. Excellent running between the wickets.', timestamp: '19:32' }
];
