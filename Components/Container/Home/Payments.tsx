import Image from 'next/image';
import Link from 'next/link';

import { PaymentsPropsType } from '@/interfaces';

export default function Payments(props: PaymentsPropsType) {
  const { paymentTitle, paymentText, paymentLinkText, paymentImage, webAppLinks } = props;

  return (
    <section className='sm:flex items-center justify-between mt-10 sm:mt-20 md:mt-32 lg:mt-48'>
      <div className='sm:max-w-[577px] w-full sm:mr-5 mb-8 sm:mb-0'>
        <Image width={318} height={238} src={paymentImage.localFile} alt={paymentImage.altText} />
      </div>
      <div className='sm:max-w-[413px] w-full'>
        <h2 className='text-3xl leading-brand mb-[30px] sm:max-w-[316px] w-full text-cb-black font-bold'>
          {paymentTitle}
        </h2>
        <p className='text-base leading-brand mb-[30px] text-black'>{paymentText}</p>
        <Link
          href={webAppLinks.home}
          target='_blank'
          rel='noreferrer'
          className='font-semibold text-lg underline text-cb-green'
        >
          {paymentLinkText}
        </Link>
      </div>
    </section>
  );
}
