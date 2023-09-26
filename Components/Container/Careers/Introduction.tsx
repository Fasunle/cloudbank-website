import Image from 'next/image';
import Link from 'next/link';

import { CareerIntroductionType } from '@/interfaces';

export default function Introduction(props: CareerIntroductionType) {
  const { careerIntroTitle, careerIntroText, viewOpeningsLinkText, viewOpeningsLinkAddress } =
    props;

  return (
    <section className='flex flex-col items-center mb-24 lg:mb-[150px] max-w-[1170px] mx-auto'>
      <h1 className='w-full max-w-[505px] text-cb-black mb-9 leading-normal md:leading-normal text-2xl md:text-3xl lg:leading-normal lg:text-[40px] font-bold text-center'>
        {careerIntroTitle}
      </h1>

      <p className='text-lg font-poppins text-cb-black leading-[1.2] mb-10 lg:mb-[84px] text-center'>
        {careerIntroText}
      </p>
      <Link
        className='w-[200px] h-14 text-white font-bold bg-cb-green rounded-[5px] font-maven p-4 flex items-center justify-center'
        href={viewOpeningsLinkAddress.url}
        rel='noreferrer'
        target='_blank'
      >
        <span className='mr-[5px]'>{viewOpeningsLinkText}</span>
        <Image
          width={30}
          height={30}
          alt=''
          className='ml-2'
          src={'/images/icons/front-link.svg'}
        />
      </Link>
    </section>
  );
}
