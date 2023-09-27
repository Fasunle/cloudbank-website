import { Metadata } from 'next';

import BoardContent from '@/Components/Container/BoardOfTrustees';
import FinancialFreedom from '@/Components/Container/Home/FinancialFreedom';
import { boardOfTrustees, financialFreedom } from '@/config/constants';

export const metadata: Metadata = {
  title: 'Board of Trustees',
  description: 'Board of Trustees at Cloudbank',
};

export default function BoardOfTrustees() {
  return (
    <>
      <BoardContent {...boardOfTrustees} />
      <FinancialFreedom {...financialFreedom} type='trustees' />
    </>
  );
}
