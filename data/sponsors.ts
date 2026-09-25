export type Sponsor = {
  id: string;
  name: string;
  logoUrl: string;
  tier: 'title' | 'official' | 'associate';
  category: string;
};

/** Clean brand marks only — no rings, frames, or card borders */
export const sponsors: Sponsor[] = [
  { id: 's-hbl', name: 'HBL', logoUrl: '/sponsors/hbl.svg', tier: 'title', category: 'Banking Partner' },
  { id: 's-pepsi', name: 'Pepsi', logoUrl: '/sponsors/pepsi.svg', tier: 'official', category: 'Beverage Partner' },
  { id: 's-kfc', name: 'KFC', logoUrl: '/sponsors/kfc.svg', tier: 'official', category: 'Snacks Partner' },
  { id: 's-ary', name: 'ARY', logoUrl: '/sponsors/ary.svg', tier: 'official', category: 'Media Partner' },
  { id: 's-jazz', name: 'Jazz', logoUrl: '/sponsors/jazz.svg', tier: 'associate', category: 'Telecom Partner' },
  { id: 's-daraz', name: 'Daraz', logoUrl: '/sponsors/daraz.svg', tier: 'associate', category: 'E-commerce Partner' },
];
