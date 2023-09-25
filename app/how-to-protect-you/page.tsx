import FinancialFreedom from '@/Components/Container/Home/FinancialFreedom';
import Hero from '@/Components/Container/HowWeProtectYou/Hero';
import { financialFreedom, heroProps } from '@/config/constants';

export default function HowWeProtectYou() {
  return (
    <>
      <Hero {...heroProps} />

      <FinancialFreedom type='how-we-protect-you' {...financialFreedom} />
    </>
  );
}
