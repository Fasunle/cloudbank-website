import Image from 'next/image';

const MakePayment = () => {
  return (
    <div>
      <div className='flex justify-center w-[100%] mt-[6rem] items-center xs-max:block xs-max:mt-[10rem]'>
        <div className='w-[50%] xs-max:w-[100%]'>
          <div className='flex mt-[-6rem] align-center items-center'>
            <Image
              width={30}
              height={30}
              alt=''
              className='w-[20px] h-[20px]'
              src={'/images/Vector.png'}
            />
            <h1
              className='pl-[1rem] font-semibold text-[24px] xs-max:text-[18px]'
              style={{ color: '#489494' }}
            >
              Make a payment of any kind
            </h1>
          </div>
          <p className='pl-[2rem] text-[18px] xs-max:text-[14px] leading-9'>
            If you have the local currency in an account, the card will use it. If not, it will
            auto-convert your money in a rate, for any tiny fee, either way, it is much cheaper than
            old-school bank cards, both online and in person
          </p>
        </div>
        <div className='ml-[7rem] xs-max:mt-[2rem] xs-max:w-[100%] xs-max:ml-[0rem]'>
          <Image
            layout={'fill'}
            alt=''
            className='w-[522px] h-[466px]'
            src={'/images/Rectangle-193.png'}
          />
          <div className='z-20 flex relative pl-[0.45rem] left-[8%] text-center bg-white border-2 border-gray-200 w-[400px] h-[80px] m-auto mt-[-3rem] items-center shadow-md tablet-8:w-[300px] xs-max:w-[200px] xs-max:w-[250px]'>
            <div
              className=' p-[1rem] flex justify-center items-center text-center h-[50px] '
              style={{ borderRadius: '50%', backgroundColor: '#489494' }}
            >
              <Image
                width={30}
                height={30}
                alt=''
                className='mb-[-1rem] pb-[1rem] flex justify-center align-center text-center'
                src={'/images/portfolio.png'}
              />
            </div>
            <p className='text-center text-[13px] font-medium w-[500px] xs-max:text-[10px]'>
              Pay for products and services at an unlimited cost
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakePayment;
