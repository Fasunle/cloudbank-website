import Link from 'next/link';
import Image from 'next/image';
import { HeroSectionPropsType } from '@/interfaces';

export default function HeroSection(props: HeroSectionPropsType) {
  const {
    heroTitle,
    heroSubtitle,
    heroPlaystoreCtaText,
    heroImage,
    googlePlaystoreLink,
    appleStoreLink,
    webAppLinks,
  } = props;

  return (
    <section className='hero'>
      <section className='hero__content'>
        <h1 className='hero__title'>{heroTitle}</h1>
        <p className='hero__subtitle'>{heroSubtitle}</p>
        <div className='cta-block flex flex-col md:flex-row items-center md:items-start  gap-2 md:gap-0'>
          <Link
            href={googlePlaystoreLink}
            target='_blank'
            rel='noreferrer'
            className='cta-playstore-lg mr-0 md:mr-2'
          >
            <Image
              width={30}
              height={30}
              className='vector'
              alt={'Playstore'}
              src={'/images/icons/play-store.svg'}
            />
            <span className='text'>
              Get on <br /> <span className='store'>Google Play</span>
            </span>
          </Link>
          <Link
            href={appleStoreLink}
            target='_blank'
            rel='noreferrer'
            className='cta-playstore-lg mr-0 md:mr-2'
          >
            <Image
              width={30}
              height={30}
              className='vector'
              alt={'Applestore'}
              src={'/images/icons/apple-logo.svg'}
            />
            <span className='text'>
              Get on <br /> <span className='store'>Apple Store</span>
            </span>
          </Link>
          <Link
            href={webAppLinks.home}
            target='_blank'
            rel='noreferrer'
            className='cta-webapp-primary'
          >
            {heroPlaystoreCtaText}
          </Link>
        </div>
      </section>
      <div className='hero__image'>
        <Image
          className='hidden md:block'
          src={heroImage.localFile}
          alt={heroImage.altText}
          width={500}
          height={500}
        />
        <Image
          className='md:hidden'
          src={heroImage.mobileFile}
          alt={heroImage.altText}
          width={350}
          height={450}
        />
      </div>
    </section>
  );
}
