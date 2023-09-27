import Image from 'next/image';
import Link from 'next/link';

import { FinancialFreedomType } from '@/interfaces';

export default function FinancialFreedom(props: FinancialFreedomType) {
  const {
    financialFreedomHeading,
    financialFreedomText,
    financialFreedomLinkText,
    financialFreedomImage,
    googlePlaystoreLink,
    appleStoreLink,
    webAppLinks,
    onePlatformImage,
    type,
  } = props;

  return (
    <section
      className={`financial-freedom ${
        type === 'trustees' || type === 'careers' || type === 'how-we-protect-you'
          ? 'dashboard-mobile'
          : 'dashboard-desktop'
      }`}
    >
      <div className='financial-freedom__content'>
        <h2 className='financial-freedom__heading'>{financialFreedomHeading}</h2>
        <p className='financial-freedom__text'>{financialFreedomText}</p>
        <div className='cta-block'>
          <Link
            href={googlePlaystoreLink}
            target='_blank'
            rel='noreferrer'
            className='cta-playstore-lg financial-freedom__btn mr-2'
          >
            <Image
              width={30}
              height={30}
              className='vector'
              alt={'Playstore'}
              src={'/images/icons/play-store.svg'}
            />
            <span className='hidden md:inline-block'>
              Get on <br /> <span className='store'>Google Play</span>
            </span>
          </Link>
          <Link
            href={appleStoreLink}
            target='_blank'
            rel='noreferrer'
            className='cta-playstore-lg financial-freedom__btn mr-2'
          >
            <Image
              width={30}
              height={30}
              className='vector'
              alt={'Applestore'}
              src={'/images/icons/apple-logo.svg'}
            />
            <span className='hidden md:inline-block'>
              Get on <br /> <span className='store'>Apple Store</span>
            </span>
          </Link>
          <Link
            href={webAppLinks.home}
            target='_blank'
            rel='noreferrer'
            className='cta-webapp-white financial-freedom__btn'
          >
            {financialFreedomLinkText}
          </Link>
        </div>
      </div>

      {type === 'trustees' || type === 'careers' || type === 'how-we-protect-you' ? (
        <Image
          width={100}
          height={100}
          alt={onePlatformImage.altText}
          src={onePlatformImage.localFile}
        />
      ) : (
        <Image
          width={500}
          height={411}
          alt={financialFreedomImage.altText}
          src={financialFreedomImage.localFile}
        />
      )}
    </section>
  );
}
