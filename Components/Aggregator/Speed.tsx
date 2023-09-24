import Image from 'next/image';

const Speed = () => {
  return (
    <div>
      <div className='mt-[12rem]' style={{ borderTop: '5px solid #008080', width: '12%' }}></div>
      <h1 className='text-[50px] leading-normal font-semibold mb-[4rem] xs-max:text-[30px]'>
        Let’s get you to speed
      </h1>
      <div className='flex gap-[6rem] items-center xs-max:block'>
        <div>
          <Image
            width={500}
            height={600}
            alt='Woman'
            className='w-[500px] h-[600px]  xs-max:w-[400] xs-max:h-[400]'
            src={'/images/woman.png'}
          />
        </div>
        <div className='leading-[24px] h-[80%] '>
          <div className='flex text-[16px] mt-[2rem] items-center gap-3 xs-max:text-[14px]'>
            <Image
              width={35}
              height={35}
              alt='Circle'
              className='w-[35px] h-[35px] '
              src={'/images/circlegreen.png'}
            />
            <p>On boarding of Agents within their region</p>
          </div>
          <div className='flex text-[16px] mt-[2rem] items-center gap-3 xs-max:text-[14px]'>
            <Image
              width={35}
              height={35}
              alt='Circle'
              className='w-[35px] h-[35px] '
              src={'/images/circlegreen.png'}
            />
            <p>
              Verification and monitoring of Agents
              <br /> registered with them
            </p>
          </div>
          <div className='flex text-[16px] mt-[2rem] items-center gap-3 xs-max:text-[14px]'>
            <Image
              width={35}
              height={35}
              alt='Circle'
              className='w-[35px] h-[35px] '
              src={'/images/circlegreen.png'}
            />
            <p>
              Retrieving POS from a Dormant Agent within
              <br /> a period of two weeks from deployment
            </p>
          </div>
          <div className='flex text-[16px] mt-[2rem] items-center gap-3 xs-max:text-[14px]'>
            <Image
              width={35}
              height={35}
              alt='Circle'
              className='w-[35px] h-[35px] '
              src={'/images/circlegreen.png'}
            />
            <p>Ability to make a bulk request of 5 terminals</p>
          </div>
          <div className='flex text-[16px] mt-[2rem] items-center gap-3 xs-max:text-[14px]'>
            <Image
              width={35}
              height={35}
              alt='Circle'
              className='w-[35px] h-[35px] '
              src={'/images/circlegreen.png'}
            />
            <p>
              Terminal requests will be based on your
              <br /> revenue performance
            </p>
          </div>
          <div className='flex text-[16px] mt-[2rem] items-center gap-3 xs-max:text-[14px]'>
            <Image
              width={35}
              height={35}
              alt='Circle'
              className='w-[35px] h-[35px] '
              src={'/images/circlegreen.png'}
            />
            <p>Access up to 20 terminals per time</p>
          </div>
          <div className='flex text-[16px] mt-[2rem] items-center gap-3 xs-max:text-[14px]'>
            <Image
              width={35}
              height={35}
              alt='Circle'
              className='w-[35px] h-[35px] '
              src={'/images/circlegreen.png'}
            />
            <p>
              You will get a weekly report on the activities
              <br /> and performance of your downlines
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speed;
