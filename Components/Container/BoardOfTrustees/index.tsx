import Image from 'next/image';

import { BoardOfTrusteesContentPropsTypes } from '@/interfaces';

export default function BoardContent(props: BoardOfTrusteesContentPropsTypes) {
  const { boardOfTrusteesTitle, boardMemberProfile } = props;

  return (
    <section className=''>
      <h1 className='text-center text-cb-black mb-[50px] text-2xl md:text-3xl lg:text-[40px] leading-normal font-bold'>
        {boardOfTrusteesTitle}
      </h1>

      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xs-max:gap-5 gap-10 lg:gap-x-20 lg:gap-y-[100px]'>
        {boardMemberProfile.map(({ boardMemberName, boardMemberRole, boardMemberImage }, index) => (
          <div key={index} className='text-center'>
            <Image
              src={boardMemberImage.localFile}
              alt={boardMemberImage.altText}
              className='mb-[30px]'
              width={100}
              height={100}
            />
            <p className='font-bold text-base leading-normal mb-[5px]'>{boardMemberName}</p>
            <p className='font-bold text-cb-grey text-sm leading-normal'>{boardMemberRole}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
