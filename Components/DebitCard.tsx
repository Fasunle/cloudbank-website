import Image from 'next/image';
import Link from 'next/link';

const DebitCard = () => {
  return (
    <div className='font-poppins'>
      <div
        className='rounded-md m-auto relative text-center pb-[8rem]'
        style={{ backgroundColor: '#489494' }}
      >
        <h2 className='text-[40px] leading-normal font-bold text-white pt-[4rem] pb-[1rem] flex justify-center xs-max:text-[20px]'>
          Get a Debit Card, with no card charges
        </h2>
        <h4 className='text-center text-[18px] text-white pt-[0rem] pb-[0rem] pl-[18rem] w-[100%] pr-[18rem] leading-10 tablet-8:pr-[10rem] tablet-8:pl-[10rem] xs-max:text-[14px] xs-max:pr-[1rem] xs-max:pl-[1rem]'>
          You shouldn’t have to pay card charges and maintenance fees when you own a debit card with
          Cloudbank. We would deliver right to your doorstep <br />
          or any location of your choosing.
        </h4>
        <Link href='https://app.cloudbank.ng'>
          <button
            className='z-10 text-[18px] bg-white pt-[1rem] pb-[1rem] pl-[2rem] pr-[2rem] mt-[2rem] rounded-md tablet-8:text-[14px] xs-max:text-[11px]'
            style={{ color: '#489494' }}
          >
            Order card now
          </button>
        </Link>
      </div>
      <div className='z-10 flex justify-center'>
        <Image
          width={30}
          height={30}
          alt='cards'
          className='z-10 relative top-[-8rem]'
          src={'/images/card.png'}
        />
      </div>
      <div className='z-10 flex justify-center'>
        <Image
          width={30}
          height={30}
          alt='arrow'
          className='z-10 relative top-[-28rem] left-[10rem] xs-max:hidden'
          src={'/images/arrow.png'}
        />
      </div>
      <div className='justify-center'>
        <Image
          width={30}
          height={30}
          alt='rectangle'
          className='relative bottom-[42rem] left-[48rem] tablet-8:left-[37rem] xs-max:left-[27rem] xs-max:hidden tablet-8:hidden'
          src={'/images/Rectangle-188.png'}
        />
      </div>
    </div>
  );
};

export default DebitCard;
