import { Metadata } from 'next';
import FinancialFreedom from '@/Components/Container/Home/FinancialFreedom';
import Hero from '@/Components/Container/HowWeProtectYou/Hero';
import { financialFreedom, heroProps } from '@/config/constants';

export const metadata: Metadata = {
  title: 'How We Protect You',
  description: 'How we protect your money and data at CloudBank',
};

export default function HowWeProtectYou() {
  return (
    <>
      <Hero {...heroProps} />

      <FinancialFreedom type='how-we-protect-you' {...financialFreedom} />
    </>
  );
}
