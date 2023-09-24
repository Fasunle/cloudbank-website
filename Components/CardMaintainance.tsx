import Image from 'next/image';

const CardMaintainance = () => {
  return (
    <div>
      <div className='flex justify-center w-[100%] mt-[10rem] items-center xs-max:block'>
        <div className='w-[50%] xs-max:w-[100%]'>
          <div className='flex item-center text-center align-center'>
            <Image
              width={30}
              height={30}
              alt=''
              className='w-[30px] h-[30px]'
              src={'/images/icons/freecard.png'}
            />
            <h1
              className='pl-[1rem] text-emerald-700 font-semibold text-[24px] xs-max:text-[18px] leading-9'
              style={{ color: '#489494' }}
            >
              Free card maintenance
            </h1>
          </div>
          <p className='pl-[3rem] text-[18px] xs-max:text-[14px] leading-9'>
            Enjoy free usage of your card with no monthly
            <br /> or quarterly maintenance cost.
          </p>
        </div>
        <div className='xs-max:mt-[2rem]'>
          <Image
            width={30}
            height={30}
            alt=''
            className='w-[522px] h-[466px]'
            src={'/images/icons/freecard.png'}
          />
        </div>
      </div>
    </div>
  );
};

export default CardMaintainance;
