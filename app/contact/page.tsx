import ContactAddress from '@/Components/Container/Contact/Address';
import ContactForm from '@/Components/Container/Contact/Form';

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
