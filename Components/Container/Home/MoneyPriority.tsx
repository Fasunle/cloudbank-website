import Image from 'next/image';
import Link from 'next/link';

import { MoneyPriorityPropsType } from '@/interfaces';

export default function MoneyPriority(props: MoneyPriorityPropsType) {
  const { priorityTitle, priorityText, priorityCtaText, priorityMobileImage, webAppLinks } = props;

  return (
    <section className='priority'>
      <div className='priority__visual'>
        <div className='priority__card first'>
          <Image
            width={30}
            height={30}
            alt='Padlock'
            src='/images/locked.png'
            className='priority__card-img'
          />
          <span>Passwords and pins keeping you safe</span>
        </div>
        <div className='priority__image'>
          <Image
            width={214}
            height={450}
            src={priorityMobileImage.localFile}
            alt={priorityMobileImage.altText}
          />
        </div>
        <div className='priority__card second'>
          <Image
            width={30}
            height={30}
            src='/images/eye-crossed.png'
            alt='Crossed Eye'
            className='priority__card-img'
          />
          <span>Toggle view account balance</span>
        </div>
      </div>
      <section className='priority__content'>
        <h2 className='priority__heading'>{priorityTitle}</h2>
        <p className='priority__text'>{priorityText}</p>
        <Link href={webAppLinks.home} target='_blank' rel='noreferrer' className='external-link'>
          {priorityCtaText}
        </Link>
      </section>
    </section>
  );
}
