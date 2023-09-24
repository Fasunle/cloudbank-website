import Image from 'next/image';

const Withdrawals = () => {
  return (
    <div className='font-poppins mt-[-19rem] text-[24px] mt-[-24rem] tablet-8:text-[20px] xs-max:text-[18px] xs-max:mt-[-6rem]'>
      <div className='w-[600px] flex justify-center text-center m-auto tablet-8:w-[500px] xs-max:w-[200px]'>
        <h1 className='z-10 flex justify-center text-center leading-9' style={{ color: '#489494' }}>
          Withdrawals, online and offline payments Everywhere you go
        </h1>
      </div>
      <div className='z-10 flex justify-center mt-[-1rem] tablet-8:mt-[0.1rem]'>
        <Image
          width={200}
          height={200}
          alt='line'
          className='z-10 ml-[1rem] w-[270px] tablet-8:w-[220px] xs-max:w-[200px]'
          src={'/images/icons/line.png'}
        />
      </div>
      <div className='z-10 flex justify-center mt-[-3rem] '>
        <Image
          width={200}
          height={200}
          alt='arrow head'
          className='z-10 ml-[20rem] tablet-8:ml-[18rem] xs-max:ml-[16rem]'
          src={'/images/icons/arrowheadgreen.png'}
        />
      </div>
    </div>
  );
};

export default Withdrawals;
