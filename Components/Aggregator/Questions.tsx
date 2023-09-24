import Image from 'next/image';

const Questions = () => {
  return (
    <div>
      <div className='mt-[12rem]' style={{ borderTop: '5px solid #008080', width: '12%' }}></div>
      <div className='flex items-center gap-[5rem] xs-max:block'>
        <h1 className='text-[50px] leading-normal font-semibold mb-[2rem] xs-max:text-[30px]'>
          Don’t be confused,
          <br /> ask us questions
        </h1>
        <div className='block gap-[1rem]'>
          <div className='flex mb-[1rem] gap-[1rem]'>
            <Image
              width={35}
              height={35}
              alt='Envelope'
              className='w-[35px] h-[35px] '
              src={'/images/icons/email.svg'}
            />
            <p> contact hello@cloudbank.ng, cards@cloudbank.ng</p>
          </div>
          <div className='flex gap-[1rem]'>
            <Image
              width={35}
              height={35}
              alt='Phone'
              className='w-[35px] h-[35px] '
              src={'/images/icons/entypo_old-phone.svg'}
            />
            <p> 07089541277</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
