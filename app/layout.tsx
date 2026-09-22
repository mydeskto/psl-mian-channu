import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://psl4-mian-channu.example.com'),
  title: 'PSL 4 Mian Channu | Official Cricket League',
  description: 'The official home of PSL 4 Mian Channu — fixtures, teams, players, live match coverage, and league news.',
  openGraph: { title: 'PSL 4 Mian Channu', description: 'The city. The passion. The league.', images: ['/og-cover.svg'] },
  icons: { icon: '/logo.png' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
