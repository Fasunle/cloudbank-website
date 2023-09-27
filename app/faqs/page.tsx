import { Metadata } from 'next';
import FaqContainer from '@/Components/Container/Faq/FaqContainer';
import { faqs } from '@/config/constants';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Questions about CloudBank that you might want to ask. We have the answers for you here',
};

export default function Faqs() {
  return (
    <>
      <section className='faq'>
        <h1 className='faq__heading'>Frequently Asked Questions</h1>
        <FaqContainer {...faqs} />
      </section>
    </>
  );
}
