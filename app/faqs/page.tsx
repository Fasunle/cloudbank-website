import FaqContainer from '@/Components/Container/Faq/FaqContainer';
import { faqs } from '@/config/constants';

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
