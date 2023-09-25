import AggregatorTable from '@/Components/Aggregator/AggregatorTable';
import Become from '@/Components/Aggregator/Become';
import Cloudwallet from '@/Components/Aggregator/Cloudwallet';
import Questions from '@/Components/Aggregator/Questions';
import Speed from '@/Components/Aggregator/Speed';
import FinancialFreedom from '@/Components/Container/Home/FinancialFreedom';
import { financialFreedom } from '@/config/constants';

const aggregator = () => {
  return (
    <div>
      <Cloudwallet />
      <Become />
      <Speed />
      <AggregatorTable />
      <Questions />
      <FinancialFreedom {...financialFreedom} />
    </div>
  );
};

export default aggregator;
