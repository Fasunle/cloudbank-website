import { Metadata } from 'next';

import ContactAddress from '@/Components/Container/Contact/Address';
import ContactForm from '@/Components/Container/Contact/Form';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Want to ask a question about our services or want to tell us something, Send us a message',
};

export default function Contact() {
  return (
    <>
      <div className='contact'>
        <ContactForm />
        <ContactAddress />
      </div>
    </>
  );
}
