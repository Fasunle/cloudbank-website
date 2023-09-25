import Image from 'next/image';

import { PartnersPropsType } from '@/interfaces';

export default function Partners(props: PartnersPropsType) {
  const { partnersHeading, partnersLogos } = props;
  return (
    <section className='partners'>
      <h2 className='partners__heading'>{partnersHeading}</h2>

      <div className='partners__wrapper'>
        <div className='partners__image'>
          <Image
            width={100}
            height={100}
            src={partnersLogos.partnerOne.localFile}
            alt={partnersLogos.partnerOne.altText}
          />
        </div>

        <div className='partners__image'>
          <Image
            width={100}
            height={100}
            alt={partnersLogos.partnerTwo.altText}
            src={partnersLogos.partnerTwo.localFile}
          />
        </div>

        <div className='partners__image'>
          <Image
            width={100}
            height={100}
            alt={partnersLogos.partnerThree.altText}
            src={partnersLogos.partnerThree.localFile}
          />
        </div>

        <div className='partners__image'>
          <Image
            width={100}
            height={100}
            alt={partnersLogos.partnerFour.altText}
            src={partnersLogos.partnerFour.localFile}
          />
        </div>
      </div>
    </section>
  );
}
