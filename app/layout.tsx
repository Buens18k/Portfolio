import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import { hmong } from './components/font';
import Footer from './components/footer';
import Header from './components/header';
import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-idauu3o96-buens18ks-projects.vercel.app/'),
  title: {
    absolute: '',
    default: 'Portfolio de Bruno Vang',
    template: '%s - Portfolio de Bruno Vang',
  },
  description: 'Portfolio de Bruno Vang, Developpeur Front end à Bourges',
  openGraph: {
    type: 'website',
    url: 'https://portfolio-idauu3o96-buens18ks-projects.vercel.app',
    title: 'Portfolio de Bruno Vang',
    description: 'Portfolio de Bruno Vang, Developpeur Front end à Bourges',
    siteName: 'My portfolio',
    images: [
      {
        url: '/app/favicon.ico',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@creator',
    images: '/app/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-background max-w-screen-2xl m-auto text-text ${hmong.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
