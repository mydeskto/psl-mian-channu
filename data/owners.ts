export type Owner = {
  id: string;
  teamId?: string;
  name: string;
  role: string;
  photoUrl: string;
  bio: string;
};

/** Patrons & organizers featured on the Malik Sher M. Awan Memorial banner */
export const owners: Owner[] = [
  {
    id: 'owner-masood',
    teamId: 'mian-channu-strikers',
    name: 'Adv. Malik Masood Awan',
    role: 'Tournament Patron',
    photoUrl: '/owners/masood-awan.jpeg',
    bio: 'Leading voice behind the Malik Sher M. Awan Memorial — driving cricket culture across Mian Channu.',
  },
  {
    id: 'owner-mian',
    name: 'Mian Asif Nadeem',
    role: 'Organizing Partner · with Liaqat Abbasi',
    photoUrl: '/owners/Mian Asif Nadeem.jpeg',
    bio: 'Community organizer helping deliver a memorial tournament that puts local talent on the big stage.',
  },
  {
    id: 'owner-naveed',
    teamId: 'chenab-challengers',
    name: 'Adv. Malik Naveed Awan',
    role: 'League Patron',
    photoUrl: '/owners/Malik Naveed Awan.jpeg',
    bio: 'Advocate and sports patron committed to growing grassroots cricket in the Chenab region.',
  },
  {
    id: 'owner-kashif',
    teamId: 'kabirwala-kings',
    name: 'Khan Kashif',
    role: 'Franchise Backer',
    photoUrl: '/owners/khan-kashif.jpg',
    bio: 'Proud Kabirwala supporter investing in players, coaching, and match-day experience.',
  },
  {
    id: 'owner-murtaza',
    teamId: 'tulamba-titans',
    name: 'Raja Murtaza',
    role: 'Team Patron',
    photoUrl: '/owners/raja-murtaza.jpg',
    bio: 'Energizing Tulamba cricket with fearless team spirit and youth development focus.',
  },
  {
    id: 'owner-guest',
    name: 'Memorial Guest of Honour',
    role: 'Featured Guest',
    photoUrl: '/owners/memorial-guest.jpg',
    bio: 'Honoured guest of the Malik Sher M. Awan Memorial — standing with the league community.',
  },
];
