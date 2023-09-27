import { Metadata } from 'next';

import FinancialFreedom from '@/Components/Container/Home/FinancialFreedom';
import Becomeanagent from '@/Components/Container/Pos/Becomeanagent';
import Businesssolution from '@/Components/Container/Pos/Businesssolution';
import Patreon from '@/Components/Container/Pos/Patreon';
import PointofSale from '@/Components/Container/Pos/PointOfSale';
import ProductInformation from '@/Components/Container/Pos/ProductInformation';
import Whybecomean from '@/Components/Container/Pos/Whybecomean';
import { financialFreedom } from '@/config/constants';

export const metadata: Metadata = {
  title: 'Pos',
  description: 'Point of Sale',
};

export default function Pos() {
  return (
    <>
      <PointofSale />
      <Patreon />
      <Becomeanagent />
      <Businesssolution />
      <ProductInformation />
      <Whybecomean />
      <FinancialFreedom {...financialFreedom} />
    </>
  );
}
