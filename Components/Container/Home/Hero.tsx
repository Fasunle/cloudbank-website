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
        <div className='cta-block'>
          <Link
            href={googlePlaystoreLink}
            target='_blank'
            rel='noreferrer'
            className='cta-playstore-lg'
          >
            <Image
              width={30}
              height={30}
              className='vector'
              alt={'Playstore'}
              src={'/images/play-store.svg'}
            />
            <span className='text'>
              Get on <br /> <span className='store'>Google Play</span>
            </span>
          </Link>
          <a href={appleStoreLink} target='_blank' rel='noreferrer' className='cta-playstore-lg'>
            <Image
              width={30}
              height={30}
              className='vector'
              alt={'Playstore'}
              src={'/images/apple-logo.svg'}
            />
            <span className='text'>
              Get on <br /> <span className='store'>Apple Store</span>
            </span>
          </a>
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
        <Image src={heroImage.localFile} alt={heroImage.altText} width={400} height={400} />
      </div>
    </section>
  );
}
