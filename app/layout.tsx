import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { elsie } from './components/font';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio de Bruno Vang',
  description: 'Portfolio de Bruno Vang, Developpeur Front end à Bourges',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-background ${elsie.className}`}>{children}</body>
    </html>
  );
}
