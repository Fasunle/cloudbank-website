import Image from 'next/image';

function Payments() {
  return (
    <div className='mt-[-10rem]'>
      <p
        style={{ marginTop: '40%' }}
        className='text-4xl font-semibold text-center xs-max:text-2xl tablet-8:text-4xl'
      >
        A payment gateway with all <span style={{ color: '#008080' }}>the tools</span> needed <br />
        to suit all kinds of transactions on your platform
      </p>
      <div className='flex gap-10 mt-10'>
        <div className='leading-loose'>
          Check out the features our smart payment ordering system, incredible <br /> speed and
          beautiful simplicity.. It&apos;s designed to provide the best <br /> payment experience to
          your customers and instantly make <br /> settlement
          <Image
            width={30}
            height={30}
            src={'/images/icons/arrow.png'}
            alt='arrow'
            className='absolute ml-28 w-4 mt-11 pt-5'
          />
          <p style={{ color: '#008080' }} className='text-teal-600 text-sm mt-10 pt-5'>
            Request setup
          </p>
          <button
            className='bg-black p-3 text-white text-sm rounded-md mt-10'
            onClick={() => window.open('http://cloud-onboard.marasoftpay.live/signup', '_blank')}
          >
            Create an account
          </button>
        </div>
        <div>
          <Image
            width={200}
            height={200}
            src={'/images/icons/verve.svg'}
            alt='Verve'
            className=''
          />
          <div />
          <Image
            width={200}
            height={200}
            src={'/images/icons/mobile.svg'}
            alt='Mobile'
            className='mt-2'
          />
        </div>
      </div>

      <p className='mt-20 mb-10 text-5xl font-semibold xs-max:text-3xl'>
        Together, let&apos;s help you <span style={{ color: '#008080' }}>grow</span>
      </p>
      <div className='flex'>
        <div className='w-3/5 mt-10'>
          <Image
            width={30}
            height={30}
            alt='Holding hands'
            className='w-[30px] h-[30px]'
            src={'/images/icons/hold-hand.png'}
          />
        </div>
        <div className='w-1/2 ml-20 mt-10 leading-loose'>
          <p style={{ color: '#008080' }} className=' text-4xl font-semibold mb-5 xs-max:text-2xl'>
            Accept all payments via all means
          </p>
          <p className='text-lg'>
            Easily recieve money from anyone anywhere <br /> at any time
          </p>
          <Image
            width={30}
            height={30}
            alt='arrow'
            className='absolute ml-40 w-4 mt-2'
            src={'/images/icons/arrow.svg'}
          />

          <p
            style={{ color: '#008080' }}
            onClick={() => window.open('http://cloud-onboard.marasoftpay.live/signup', '_blank')}
            className='cursor-pointer'
          >
            Get started for free
          </p>

          <p style={{ color: '#008080' }} className='text-4xl font-semibold mt-60 xs-max:text-2xl'>
            Transfers
          </p>
          <p>
            Make transfers to bank accounts from your <br /> cloudpay wallet via your dashboard
          </p>
          <Image
            width={30}
            height={30}
            alt='arrow'
            className='absolute ml-40 w-4 mt-2'
            src={'/images/icons/arrow.svg'}
          />
          <p
            style={{ color: '#008080' }}
            onClick={() => window.open('http://cloud-onboard.marasoftpay.live/signup', '_blank')}
            className='cursor-pointer'
          >
            Get started for free
          </p>
        </div>
      </div>
      <div className='flex mt-32'>
        <div className='leading-loose w-1/2'>
          <p style={{ color: '#008080' }} className='text-4xl font-semibold mb-5 xs-max:text-2xl'>
            Invoices
          </p>
          <p>
            Generate invioces by all transactions that were carried <br />
            out via your platforms
          </p>
          <Image
            width={30}
            height={30}
            alt='arrow'
            className='absolute ml-40 w-4 mt-2'
            src={'/images/icons/arrow.svg'}
          />
          <p
            style={{ color: '#008080' }}
            onClick={() => window.open('http://cloud-onboard.marasoftpay.live/signup', '_blank')}
            className='cursor-pointer'
          >
            Get started for free
          </p>

          <p
            style={{ color: '#008080' }}
            className='text-4xl font-semibold mt-20 mb-5 xs-max:text-2xl'
          >
            USSD Payments
          </p>
          <p>
            Make and recieve payments via USSD on your mobile <br />
            devices
          </p>
          <p style={{ color: '#008080' }}>coming soon</p>
        </div>
        <div className='w-1/2'>
          <Image
            width={30}
            height={30}
            alt='Order Summary'
            className='w-full'
            src={'/images/icons/arrow.svg'}
          />
        </div>
      </div>

      <div className='mt-28'>
        <button
          style={{ marginLeft: '46%' }}
          className='bg-black p-3 text-white text-sm rounded-md xs-max:text-1xl'
          onClick={() => window.open('http://cloud-onboard.marasoftpay.live/signup', '_blank')}
        >
          Create an account
        </button>
      </div>
    </div>
  );
}

export default Payments;
