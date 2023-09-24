import Image from 'next/image';
import Link from 'next/link';

const Ready = () => {
  return (
    <div className='mt-[8rem] ' style={{ backgroundColor: '#E5F2F2' }}>
      <div className='text-center pt-[2rem]'>
        <div className=''>
          <h1 className='text-center text-[30px] leading-normal font-semibold xs-max:text-[20px]'>
            Ready to get your card?
          </h1>
        </div>
        <div className='flex justify-around mt-[4rem] tablet-8:flex xs-max:block'>
          <Image
            width={200}
            height={200}
            src={'/images/openaccount.png'}
            alt='Open account'
            className=''
          />
          <Image
            width={200}
            height={200}
            src={'/images/ordercard.png'}
            alt='Order card'
            className=''
          />
          <Image
            width={200}
            height={200}
            src={'/images/usingcard.png'}
            alt='Using card'
            className=''
          />
        </div>
        <Link href='https://app.cloudbank.ng'>
          <button className='text-[16px] bg-black pl-[2rem] pr-[2rem] pt-[0.5rem] pb-[0.5rem] mb-[3rem] text-white mt-[3rem]'>
            Order card now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Ready;
