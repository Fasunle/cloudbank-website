import Link from 'next/link';

export default function ContactForm() {
  return (
    <section className='contact__top'>
      <div className='contact__content'>
        <h1 className='contact__heading'>Looking to learn more? Chat with our team</h1>
        <p className='contact__text'>
          CloudBank is a wallet service system designed for lending, POS terminal services, trading
          and card.
        </p>
        <p className='contact__subtext'>
          You can also check{' '}
          <Link href='/faqs' className='contact__subtext-link'>
            Frequently Asked Questions
          </Link>{' '}
          page
        </p>
      </div>

      <form className='contact__form'>
        <div className='contact__form-field'>
          <label htmlFor='fullName' className='contact__form-label'>
            Full name
          </label>
          <input id='fullName' className='contact__form-input' placeholder='John Doe' required />
        </div>
        <div className='contact__form-field'>
          <label htmlFor='email' className='contact__form-label'>
            Email address
          </label>
          <input id='email' className='contact__form-input' placeholder='johndoe@email.com' />
        </div>
        <div className='contact__form-field'>
          <label htmlFor='message' className='contact__form-label'>
            Message
          </label>
          <textarea
            id='message'
            className='contact__form-textarea'
            placeholder='Description'
          ></textarea>
        </div>
        <button type='submit' className='contact__form-btn'>
          Get in touch
        </button>
      </form>
    </section>
  );
}
