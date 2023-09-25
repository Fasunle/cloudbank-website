import Image from 'next/image';
import { MobileBankingPropsType } from '@/interfaces';

export default function MobileBanking(props: MobileBankingPropsType) {
  const {
    mobileBankingHeading,
    mobileBankingText,
    mobileBankingCtaText,
    mobileBankingImage,
    webAppLinks,
  } = props;

  return (
    <section className='mobile-banking'>
      <div className='mobile-banking__content'>
        <h2 className='mobile-banking__heading'>{mobileBankingHeading}</h2>
        <p className='mobile-banking__text'>{mobileBankingText}</p>
        <a href={webAppLinks.home} target='_blank' rel='noreferrer' className='external-link'>
          {mobileBankingCtaText}
        </a>
      </div>

      <div className='mobile-banking__visual'>
        <Image
          width={300}
          height={300}
          src={mobileBankingImage.localFile}
          alt={mobileBankingImage.altText}
        />
      </div>
    </section>
  );
}
