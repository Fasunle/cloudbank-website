'use client';

import Image from 'next/image';

function Superfasts() {
  return (
    <div style={{ backgroundColor: '#008080' }} className='text-white p-10 pb-40 w-full relative'>
      <div className='relative w-500'>
        <p className='text-5xl text-center font-bold ml-58 xs-max:text-3xl xs-max:ml-6 tablet-8:ml-6'>
          A superfast payment gateway
        </p>
        <span className=' absolute fixed top-[0px] left-[42%]'>
          <Image
            width={30}
            height={30}
            alt='Vector'
            className='z-10 tablet-8:left-[54%] xs-max:left-[40px] tablet-8:left-[40px] tablet-8:hidden xs-max:hidden'
            src={'/images/vector.png'}
          />
        </span>
      </div>
      <p className='text-center mt-5 xs-max:ml-1 tablet-8:ml-1'>
        A payment gateway that helps settles your business transactions and notify{' '}
      </p>

      <p className='text-center xs-max:ml-1 tablet-8:ml-6 '>
        {' '}
        your platform of your customer&apos;s transactions in mere seconds
      </p>
      <div className='flex justify-center mt-5 gap-3 xs-max:block xs-max:ml-[3rem] '>
        <button className='bg-white text-[#008080] p-3 text-sm rounded-md'>
          Request for setup link
        </button>
        <button
          className='bg-black text-white text-sm p-3 rounded-md xs-max:mt-[1rem] xs-max:ml-2'
          onClick={() => window.open('http://cloud-onboard.marasoftpay.live/signup', '_blank')}
        >
          Create an account
        </button>
      </div>
    </div>
  );
}

export default Superfasts;
