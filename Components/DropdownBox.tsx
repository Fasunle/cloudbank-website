'user client';

import Image from 'next/image';
import Link from 'next/link';

const DropdownBox = ({ closeMenu }: { closeMenu(): void }) => {
  return (
    <div
      style={{ marginLeft: '-10%' }}
      className='absolute flex justify-around align-center items-center'
    >
      <ul className='flex items-center text-[18px] justify-around no-underline mt-[2rem] bg-gray-100 w-[500px] z-40 shadow pt-3 pb-4 no-underline rounded-lg tablet-8:block xs-max:block tablet-8:w-80 xs-max:w-40 xs-max:ml-[8rem] xs-max:mt-[-6rem] tablet-8:ml-60 xs-max:ml-40'>
        <Link
          href='/cards'
          className='flex no-underline  text-black items-center align-center text-center'
          onClick={() => {
            if (closeMenu) {
              closeMenu();
            }
          }}
        >
          <li className='flex items-center text-sm text-black font-semibold text-[16px] xs-max:mb-[10px]'>
            <Image
              width={30}
              height={30}
              alt=''
              className='w-[30px] h-[30px]'
              src={'/images/cards.svg'}
            />
            Cards
          </li>
        </Link>
        <Link
          href='/pos'
          className='flex no-underline text-black'
          onClick={() => {
            if (closeMenu) {
              closeMenu();
            }
          }}
        >
          <li className='flex items-center text-sm font-semibold text-[16px] xs-max:mb-[10px]'>
            <Image
              width={30}
              height={30}
              alt=''
              className='w-[30px] h-[30px]'
              src={'/images/pos.svg'}
            />{' '}
            POS
          </li>
        </Link>

        <Link
          href='/cloudpay'
          className='flex no-underline text-black'
          onClick={() => {
            if (closeMenu) {
              closeMenu();
            }
          }}
        >
          <li className='flex text-sm items-center font-semibold text-[16px] xs-max:mb-[10px]'>
            <Image
              width={30}
              height={30}
              alt=''
              className='w-[30px] h-[30px]'
              src={'/images/cloudpay.svg'}
            />{' '}
            Cloudpay
          </li>
        </Link>
        <Link
          href='/aggregator'
          className='no-underline text-black'
          onClick={() => {
            if (closeMenu) {
              closeMenu();
            }
          }}
        >
          <li className='flex text-sm items-center font-semibold text-[16px] xs-max:mb-[10px]'>
            <Image
              width={30}
              height={30}
              alt=''
              className='w-[30px] h-[30px]'
              src={'/images/aggregator.svg'}
            />{' '}
            Aggregator
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default DropdownBox;
