import Image from 'next/image';

import Payments from '@/Components/Payments';
import Superfasts from '@/Components/Superfasts';

export default function CloudpayPage() {
  return (
    <>
      <Superfasts />

      <div>
        <Image
          width={600}
          height={400}
          alt='Order Summary'
          className='w-[600px] m-auto mt-[-7rem] relative z-[50] xs-max:mb-[12rem] '
          src={'/images/order-summary.png'}
        />
      </div>
      <Payments />
      {/* <FinancialFreedom /> */}
    </>
  );
}
