import Image from 'next/image';
import Link from 'next/link';

import { HeroPropsType } from '@/interfaces';

export default function Hero(props: HeroPropsType) {
  const {
    /*servicesHeroHeading, servicesHeroText, webAppLinks,*/ companyImage,
    companyDetails,
    mastercardImage,
  } = props;
  return (
    <>
      {/* <section className='services__hero'>
        <h1 className='services__heading'>{servicesHeroHeading}</h1>
        <p className='services__hero-text'>{servicesHeroText}</p>
        <a href={webAppLinks.home} rel='noreferrer' target='_blank' className='services__hero-cta'>
          Get Started
        </a>
      </section> */}
      <section>
        <div className='how-we-protect-you_header'>
          <h2>This is us. We are Cloud bank</h2>
        </div>
        <div className='how-we-protect-you_office relative'>
          <Image layout='fill' src={companyImage.localFile} alt={companyImage.altText} />
        </div>
        <div className='how-we-protect-you_company-details'>
          <p>{companyDetails}</p>
        </div>
        <div className='how-we-protect-you_bottom-hero'>
          <div>
            <h3>
              This is us
              <br /> We are <span>Cloudbank</span>
            </h3>
            <p>
              From Payments to POS services, Loans, Savings, Bills Payment and Business accounts,
              Cloudbank provides everyone with the right tools to build their financial performance.
            </p>
            <Link
              className='us-btn how-we-protect-you_bottom-hero_btn'
              href='https://app.cloudbank.ng'
              target='_blank'
              rel='noreferrer'
            >
              Open an account now
            </Link>
          </div>
          <div className='how-we-protect-you_bottom-hero_image-container'>
            <Image height={419} width={444} src={mastercardImage.localFile} alt='atm_image' />
          </div>
        </div>
      </section>
    </>
  );
}
