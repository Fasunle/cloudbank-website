import AggregatorTable from '@/Components/Aggregator/AggregatorTable';
import Become from '@/Components/Aggregator/Become';
import Cloudwallet from '@/Components/Aggregator/Cloudwallet';
import Questions from '@/Components/Aggregator/Questions';
import Speed from '@/Components/Aggregator/Speed';

const aggregator = () => {
  return (
    <div>
      <Cloudwallet />
      <Become />
      <Speed />
      <AggregatorTable />
      <Questions />
      {/* <FinancialFreedom /> */}
    </div>
  );
};

export default aggregator;
