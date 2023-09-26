import CoreValues from '@/Components/Container/Careers/CoreValues';
import CurrentOpenings from '@/Components/Container/Careers/CurrentOpenings';
import Introduction from '@/Components/Container/Careers/Introduction';
import FinancialFreedom from '@/Components/Container/Home/FinancialFreedom';
import {
  coreValues,
  currentOpeningProps,
  financialFreedom,
  careerIntroductionProps
} from '@/config/constants';

export default function Careers() {
  return (
    <>
      <Introduction {...careerIntroductionProps} />
      <CoreValues {...coreValues} />
      <CurrentOpenings {...currentOpeningProps} />
      <FinancialFreedom type='careers' {...financialFreedom} />
    </>
  );
}
