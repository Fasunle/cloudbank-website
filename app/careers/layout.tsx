import type { Metadata } from 'next';

import Navbar from '@/Components/Layout/NavBar';
import Footer from '@/Components/Layout/Footer';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Careers at Cloudbank and MMG',
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
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
