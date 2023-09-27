import { Metadata } from 'next';

import Brochures from '@/Components/Container/Library/Brochures';
import ForexRate from '@/Components/Container/Library/ForexRate';

export const metadata: Metadata = {
  title: 'Library',
  description: 'Download Cloudbank Brochures',
};

export default function Library() {
  return (
    <>
      <ForexRate />
      <Brochures />
    </>
  );
}
