import Compare from '@/Components/Container/Home/Compare';
import FinancialFreedom from '@/Components/Container/Home/FinancialFreedom';
import HeroSection from '@/Components/Container/Home/Hero';
import Investments from '@/Components/Container/Home/Investments';
import MobileBanking from '@/Components/Container/Home/MobileBanking';
import MoneyPriority from '@/Components/Container/Home/MoneyPriority';
import OnePlatform from '@/Components/Container/Home/OnePlatform';
import Partners from '@/Components/Container/Home/Partners';
import Payments from '@/Components/Container/Home/Payments';
import Testimonies from '@/Components/Container/Home/Testimonies';
import {
  compareData,
  compareProps,
  financialFreedom,
  heroSectionProps,
  investmentsProps,
  mobileBankingProps,
  moneyPriorityProps,
  onePlatformProps,
  partnersProps,
  paymentsProps,
  testimoniesProps,
} from '@/config/constants';

export default function Home() {
  return (
    <main>
      <HeroSection {...heroSectionProps} />
      <OnePlatform {...onePlatformProps} />
      <MobileBanking {...mobileBankingProps} />
      <MoneyPriority {...moneyPriorityProps} />
      <Investments {...investmentsProps} />
      <Payments {...paymentsProps} />
      <Compare {...compareProps} />
      <Testimonies {...testimoniesProps} />
      <Partners {...partnersProps} />
      <FinancialFreedom {...financialFreedom} />
    </main>
  );
}
