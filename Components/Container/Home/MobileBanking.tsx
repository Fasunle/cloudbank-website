import Image from 'next/image';
import Link from 'next/link';

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
        <Link href={webAppLinks.home} target='_blank' rel='noreferrer' className='external-link'>
          {mobileBankingCtaText}
        </Link>
      </div>

      <div className='mobile-banking__visual'>
        <Image
          width={350}
          height={365}
          src={mobileBankingImage.localFile}
          alt={mobileBankingImage.altText}
        />
      </div>
    </section>
  );
}
