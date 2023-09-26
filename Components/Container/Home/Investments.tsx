import Image from 'next/image';
import { InvestmentsPropsType } from '@/interfaces';

export default function Investments(props: InvestmentsPropsType) {
  const {
    investmentTitle,
    investmentText,
    investmentLinkText,
    investmentCardTitle,
    investmentCardText,
    investmentCardImage,
    webAppLinks,
  } = props;

  return (
    <section className='investment'>
      <div className='investment__content'>
        <h2 className='investment__heading'>{investmentTitle}</h2>
        <p className='investment__text'>{investmentText}</p>
        <a href={webAppLinks.home} target='_blank' rel='noreferrer' className='external-link'>
          {investmentLinkText}
        </a>
      </div>
      <div className='investment__visual'>
        <div className='investment__card red'>
          <div className='investment__card-content'>
            <h5 className='investment__card-title'>{investmentCardTitle}</h5>
            <p className='investment__card-text'>{investmentCardText}</p>
          </div>
          <Image
            width={80}
            height={80}
            src={investmentCardImage.localFile}
            alt={investmentCardImage.altText}
          />
        </div>
      </div>
    </section>
  );
}
