import Image from 'next/image';
import Link from 'next/link';

export default function Brochures() {
  return (
    <section className='brochures'>
      <section className='brochure to-left'>
        <div className='brochure__image'>
          <Image
            width={346}
            height={483}
            alt='Business Brochure'
            src='/images/cloudbank-brocure.png'
          />
        </div>
        <div className='brochure__content'>
          <h2 className='brochure__heading'>CloudBank Brochure</h2>
          <p className='brochure__text'>Find out more about our Cloud Bank products.</p>
          <Link
            href={'/documents/Cloudbank Brochure for Custormers and businesses.pdf'}
            target='_blank'
            rel='noreferrer'
            className='btn-primary-lg'
            download
          >
            Download
          </Link>
        </div>
      </section>
      <section className='brochure to-right'>
        <div className='brochure__content'>
          <h2 className='brochure__heading'>CloudPay Brochure</h2>
          <p className='brochure__text'>Discover our new Cloud Pay payment Platform.</p>
          <Link
            href={'/documents/CloudPay Brochure.pdf'}
            target='_blank'
            rel='noreferrer'
            className='btn-primary-lg'
            download
          >
            Download
          </Link>
        </div>
        <div className='brochure__image'>
          <Image src='/images/cloudpay-brochure.png' width={346} height={483} alt='Loan Brochure' />
        </div>
      </section>
      <section
        className='brochure to-left to-left-investment'
        style={{ backgroundColor: 'rgba(221, 234, 165, 0.3)' }}
      >
        <div className='brochure__image'>
          <Image
            width={346}
            height={483}
            alt='Business Brochure'
            src='/images/investment-brochure.png'
          />
        </div>
        <div className='brochure__content'>
          <h2 className='brochure__heading'>Investment Brochure</h2>
          <p className='brochure__text'>Find out more about our investment plans.</p>
          <Link
            href={'/documents/Cloudbank Brochure for Investors.pdf'}
            target='_blank'
            rel='noreferrer'
            className='btn-primary-lg'
            download
          >
            Download
          </Link>
        </div>
      </section>
    </section>
  );
}
