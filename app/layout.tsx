import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { hmong } from './components/font';
import Footer from './components/footer';
import Header from './components/header';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-theta-seven-36.vercel.app/'),
  title: {
    absolute: '',
    default: 'Portfolio de Bruno Vang',
    template: '%s - Portfolio de Bruno Vang',
  },
  description: 'Portfolio de Bruno Vang, Developpeur Front end à Bourges',
  openGraph: {
    type: 'website',
    url: 'https://portfolio-theta-seven-36.vercel.app/',
    title: 'Portfolio de Bruno Vang',
    siteName: 'Bruno Vang',
    description: 'Portfolio de Bruno Vang, Developpeur Front end à Bourges',
    images: [
      {
        url: 'https://portfolio-theta-seven-36.vercel.app/images/moiPNG.webp',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={`bg-background max-w-screen-2xl m-auto text-text ${hmong.className}`}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}

// <!-- HTML Meta Tags -->
// <title>Portfolio de Bruno Vang</title>
// <meta name="description" content="Portfolio de Bruno Vang, Developpeur Front end à Bourges">

// <!-- Facebook Meta Tags -->
// <meta property="og:url" content="https://portfolio-theta-seven-36.vercel.app/">
// <meta property="og:type" content="website">
// <meta property="og:title" content="Portfolio de Bruno Vang">
// <meta property="og:description" content="Portfolio de Bruno Vang, Developpeur Front end à Bourges">
// <meta property="og:image" content="https://portfolio-idauu3o96-buens18ks-projects.vercel.app/app/favicon.ico">

// <!-- Twitter Meta Tags -->
// <meta name="twitter:card" content="summary_large_image">
// <meta property="twitter:domain" content="portfolio-theta-seven-36.vercel.app">
// <meta property="twitter:url" content="https://portfolio-theta-seven-36.vercel.app/">
// <meta name="twitter:title" content="Portfolio de Bruno Vang">
// <meta name="twitter:description" content="Portfolio de Bruno Vang, Developpeur Front end à Bourges">
// <meta name="twitter:image" content="https://portfolio-idauu3o96-buens18ks-projects.vercel.app/app/favicon.ico">

// <!-- Meta Tags Generated via https://www.opengraph.xyz --></meta>
