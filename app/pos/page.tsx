import FinancialFreedom from '@/Components/Container/Home/FinancialFreedom';
import Becomeanagent from '@/Components/Container/Pos/Becomeanagent';
import Businesssolution from '@/Components/Container/Pos/Businesssolution';
import Paymentrecon from '@/Components/Container/Pos/Paymentrecon';
import PointofSale from '@/Components/Container/Pos/PointOfSale';
import ProductInformation from '@/Components/Container/Pos/ProductInformation';
import Whybecomean from '@/Components/Container/Pos/Whybecomean';
import { financialFreedom } from '@/config/constants';

export default function Pos() {
  return (
    <>
      <PointofSale />
      <Paymentrecon />
      <Becomeanagent />
      <Businesssolution />
      <ProductInformation />
      <Whybecomean />
      <FinancialFreedom {...financialFreedom} />
    </>
  );
}
