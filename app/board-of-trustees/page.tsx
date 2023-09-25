import BoardContent from '@/Components/Container/BoardOfTrustees';
import FinancialFreedom from '@/Components/Container/Home/FinancialFreedom';
import { boardOfTrustees, financialFreedom } from '@/config/constants';

export default function BoardOfTrustees() {
  return (
    <>
      <BoardContent {...boardOfTrustees} />
      <FinancialFreedom {...financialFreedom} type='trustees' />
    </>
  );
}
