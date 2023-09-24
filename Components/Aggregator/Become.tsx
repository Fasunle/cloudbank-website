import Image from 'next/image';

const Become = () => {
  return (
    <div>
      <div className='mt-[12rem]' style={{ borderTop: '5px solid #008080', width: '12%' }}></div>
      <h1 className='text-[50px] leading-normal font-semibold mb-[2rem] xs-max:text-[30px]'>
        Become an Aggregator
      </h1>
      <div className='bg-[#F3F3F3] font-medium p-[2rem]'>
        <div className=' flex justify-between font-medium tablet-8:block tablet-8:pt-[1rem] xs-max:block'>
          <div className='text-[18px] flex gap-4 bg-[#008080] justify-center align-center items-center p-[2rem] rounded-[20px]'>
            <Image
              width={35}
              height={35}
              alt=''
              className='w-[35px] h-[35px] '
              src={'/images/icons/navbar-collapse.svg'}
            />
            <p className='text-white xs-max:text-[14px]'>
              Cloudwallet POS is convenient,
              <br /> Durable and more functional
              <br /> than any other POS
            </p>
          </div>
          <div className='text-[18px] flex gap-4 justify-center bg-[#ffffff] align-center items-center p-[2rem] rounded-[20px] tablet-8:mt-[1rem] xs-max:mt-[1rem]'>
            <Image
              width={35}
              height={35}
              alt=''
              className='w-[35px] h-[35px] '
              src={'/images/icons/Group.png.svg'}
            />
            <p className='xs-max:text-[14px]'>
              Cloudwallet POS has the
              <br /> highest Rebate in the
              <br /> country
            </p>
          </div>
          <div className='text-[18px] flex gap-4 justify-center align-center items-center bg-[#ffffff] p-[2rem] rounded-[20px] tablet-8:mt-[1rem] xs-max:mt-[1rem]'>
            <Image
              width={35}
              height={35}
              alt=''
              className='w-[35px] h-[35px] '
              src={'/images/icons/navbar-collapse.svg'}
            />
            <p className='xs-max:text-[14px]'>
              Cloudwallet POS will provide
              <br /> you with your own customer
              <br /> service
            </p>
          </div>
        </div>
        <div className='flex mt-[2rem] j tablet-8:block xs-max:block'>
          <div className='mr-[10rem]'>
            <h2 className='bg-[#0080804D] text-center p-[0.5rem] mb-[1rem] xs:w-[200px]'>
              Aggregator
            </h2>
            <div className='flex gap-2'>
              <Image
                width={15}
                height={15}
                alt='Mark'
                className='w-[15px] h-[15px]'
                src={'/images/icons/mark.png'}
              />
              <p className='xs-max:text-[14px]'>15 Active agents and above</p>
            </div>
            <div className='flex gap-2'>
              <Image
                width={15}
                height={15}
                alt='Mark'
                className='w-[15px] h-[15px]'
                src={'/images/icons/mark.png'}
              />
              <p className='xs-max:text-[14px]'>5% general commission</p>
            </div>
            <div className='flex gap-2'>
              <Image
                width={15}
                height={15}
                alt='Mark'
                className='w-[15px] h-[15px]'
                src={'/images/icons/mark.png'}
              />
              <p className='xs-max:text-[14px]'>7% commission on transactions</p>
            </div>
          </div>
          <div className='tablet-8:mt-[1rem] xs-max:mt-[1rem]'>
            <h2 className='bg-[#D32F2F] text-center p-[0.5rem] mb-[1rem]'>Super aggregator</h2>
            <div className='flex gap-2'>
              <Image
                width={15}
                height={15}
                alt='Mark'
                className='w-[15px] h-[15px]'
                src={'/images/icons/mark.png'}
              />
              <p className='xs-max:text-[14px]'>100 Active agents and above</p>
            </div>
            <div className='flex gap-2'>
              <Image
                width={15}
                height={15}
                alt='Mark'
                className='w-[15px] h-[15px]'
                src={'/images/icons/mark.png'}
              />
              <p className='xs-max:text-[14px]'>10% general commission</p>
            </div>
            <div className='flex gap-2'>
              <Image
                width={15}
                height={15}
                alt='Mark'
                className='w-[15px] h-[15px]'
                src={'/images/icons/mark.png'}
              />
              <p className='xs-max:text-[14px]'>10% commission on transactions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Become;
