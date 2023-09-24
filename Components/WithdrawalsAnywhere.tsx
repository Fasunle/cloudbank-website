import Image from 'next/image';

const WithdrawAnywhere = () => {
  return (
    <div className='flex justify-center w-[100%] mt-[6rem] items-center xs-max:block xs-max:mt-[10rem]'>
      <div className=''>
        <Image
          width={522}
          height={466}
          alt='Wells Fago pics'
          className='w-[522px] h-[466px]'
          src={'/images/Rectangle-192.png'}
        />
      </div>
      <div className='ml-[3rem] w-[50%] xs-max:w-[100%] xs-max:ml-[0rem]'>
        <div className='items-center ml-[4rem] '>
          <div
            className=' flex text-[24px] items-center font-semibold xs-max:mt-[2rem]'
            style={{ color: '#489494' }}
          >
            <span className='mr-[-1.1rem] '>
              <Image
                width={40}
                height={40}
                alt=''
                className='h-[23px] w-[23px] tablet-8:w-[34px] xs-max:w-[38px]'
                src={'/images/delete.png'}
              />
            </span>
            <Image
              width={40}
              height={40}
              alt=''
              className='h-[20px] mr-[-1rem]'
              src={'/images/dollar.png'}
            />
            <h1 className=' ml-[2rem] xs-max:text-[18px]'>Withdrawals anywhere and everywhere</h1>
          </div>
        </div>
        <p className='text-[18px] pl-[2.4rem] leading-9 ml-[4rem] xs-max:text-[14px]'>
          You can make withdrawals on all platforms. POS, ATM Machines, and Bill Payments are all
          possible with many more payment methods available to you using your card.
        </p>
      </div>
    </div>
  );
};

export default WithdrawAnywhere;
