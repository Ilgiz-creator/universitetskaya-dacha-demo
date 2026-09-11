import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'Университетская дача — гостевой дом в Петергофе',
  description:
    'Демонстрационный концепт сайта гостевого дома «Университетская дача» в Петергофе.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
