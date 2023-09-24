import './globals.scss';

import type { Metadata } from 'next';
import Head from 'next/head';

import Navbar from '@/Components/Layout/NavBar';
import Footer from '@/Components/Layout/Footer';

export const metadata: Metadata = {
  title: 'Home | Cloudwallet Technologies',
  description: 'Cloudbank provides a seamless banking services',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Head key={'global'}>
        <script type='text/javascript' id='zsiqchat'>
          {`
          var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {
            "widgetcode":"88767d22faf46087509a0cdb546cf0089f87c66d924330702d9ab070444253c818dcc6ae192c3f89acbf0beae7faf97d", 
            "values":{},
          ready:function(){}
          };
          var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);
          `}
        </script>
      </Head>
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
