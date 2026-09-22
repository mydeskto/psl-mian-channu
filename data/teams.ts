export type Team = {
  id: string;
  name: string;
  shortName: string;
  logoUrl: string;
  primaryColor: string;
  owner: string;
  coach: string;
  city: string;
};

export const teams: Team[] = [
  { id: 'mian-channu-strikers', name: 'Mian Channu Strikers', shortName: 'MCS', logoUrl: '/logo.png', primaryColor: '#2E9E46', owner: 'Rana Shahzad', coach: 'Ahsan Raza', city: 'Mian Channu' },
  { id: 'chenab-challengers', name: 'Chenab Challengers', shortName: 'CC', logoUrl: '/logo.png', primaryColor: '#1B7A9E', owner: 'Haji Imran', coach: 'Bilal Ahmed', city: 'Chenab Belt' },
  { id: 'kabirwala-kings', name: 'Kabirwala Kings', shortName: 'KK', logoUrl: '/logo.png', primaryColor: '#0E2A52', owner: 'Malik Usman', coach: 'M. Saeed', city: 'Kabirwala' },
  { id: 'tulamba-titans', name: 'Tulamba Titans', shortName: 'TT', logoUrl: '/logo.png', primaryColor: '#F0B429', owner: 'Chaudhry Waqas', coach: 'Rizwan Haider', city: 'Tulamba' }
];
