import Image from 'next/image';

const FinFreedom = () => {
  return (
    <div className=' ' style={{ backgroundColor: '#E5F2F2' }}>
      <div>
        <div>
          <h1 className=''>Ready for financial freedom?</h1>
          <p>Get started with Cloud Bank today</p>
        </div>
        <div className=''>
          <button></button>
          <button></button>
        </div>
      </div>
      <div>
        <Image
          width={30}
          height={30}
          alt='Home Cloudbank'
          className='w-[30px] h-[30px]'
          src={'/images/icons/Home-Cloudbank.png'}
        />
      </div>
    </div>
  );
};

export default FinFreedom;
