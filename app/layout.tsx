import '@/app/globals.css';
import '@/styles/main.scss';

import type { Metadata } from 'next';
import Script from 'next/script';

import Navbar from '@/Components/Layout/NavBar';
import Footer from '@/Components/Layout/Footer';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Cloudbank Offers and Features',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Script id={'zsiqchat'} src={'/scripts/zoho.js'} />
      <body>
        <Navbar />
        <main className='main'>
          <div className='container-custom'>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
