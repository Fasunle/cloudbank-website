import Link from 'next/link';
import Image from 'next/image';

import { SaveAndEarnPropsType } from '@/interfaces';

export default function SaveAndEarn(props: SaveAndEarnPropsType) {
  const {
    saveAndEarnHeading,
    saveAndEarnText,
    saveAndEarnListItems,
    saveAndEarnMobileImage,
    googlePlaystoreLink,
    webAppLinks,
  } = props;
  return (
    <section className='services__main'>
      <h2 className='services__main-heading'>{saveAndEarnHeading}</h2>

      <div className='services__feature'>
        <Image
          src={saveAndEarnMobileImage.localFile}
          alt={saveAndEarnMobileImage.altText}
          width={100}
          height={100}
        />

        <div className='services__feature-section'>
          <h6 className='services__feature-intro'>{saveAndEarnText}</h6>

          <div dangerouslySetInnerHTML={{ __html: saveAndEarnListItems }} />

          <div className='cta-block'>
            <Link
              href={googlePlaystoreLink}
              target='_blank'
              rel='noreferrer'
              className='cta-playstore-md mr-2'
            >
              <Image
                src={'/images/icons/play-store.svg'}
                alt='Playstore'
                className='vector'
                width={30}
                height={30}
              />
              <span className='hidden md:inline-block'>
                Get on <br /> <span className='store'>Playstore</span>
              </span>
            </Link>
            <Link
              href={webAppLinks.home}
              target='_blank'
              rel='noreferrer'
              className='btn-primary-md'
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
