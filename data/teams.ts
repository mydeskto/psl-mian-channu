export type Team = {
  id: string;
  name: string;
  shortName: string;
  logoUrl: string;
  primaryColor: string;
  owner: string;
  coach: string;
  city: string;
  tagline: string;
};

export const teams: Team[] = [
  {
    id: 'mian-channu-strikers',
    name: 'Mian Channu Strikers',
    shortName: 'MCS',
    logoUrl: '/teams/mcs.png',
    primaryColor: '#2E9E46',
    owner: 'Adv. Malik Masood Awan',
    coach: 'Ahsan Raza',
    city: 'Mian Channu',
    tagline: 'Home thunder. City pride.',
  },
  {
    id: 'chenab-challengers',
    name: 'Chenab Challengers',
    shortName: 'CC',
    logoUrl: '/teams/cc.png',
    primaryColor: '#1B7A9E',
    owner: 'Adv. Malik Naveed Awan',
    coach: 'Bilal Ahmed',
    city: 'Chenab Belt',
    tagline: 'Flow strong. Fight harder.',
  },
  {
    id: 'kabirwala-kings',
    name: 'Kabirwala Kings',
    shortName: 'KK',
    logoUrl: '/teams/kk.png',
    primaryColor: '#0E2A52',
    owner: 'Khan Kashif',
    coach: 'M. Saeed',
    city: 'Kabirwala',
    tagline: 'Royal intent. Sharp cricket.',
  },
  {
    id: 'tulamba-titans',
    name: 'Tulamba Titans',
    shortName: 'TT',
    logoUrl: '/teams/tt.png',
    primaryColor: '#F0B429',
    owner: 'Raja Murtaza',
    coach: 'Rizwan Haider',
    city: 'Tulamba',
    tagline: 'Bold bats. Fearless overs.',
  },
];
