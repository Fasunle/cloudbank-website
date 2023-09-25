import { CompareItemsPropsType } from '@/interfaces';

//
const CompareItems = (props: CompareItemsPropsType) => {
  const { symbol, text } = props;
  return (
    <p className='compare-items'>
      <span className='compare-symbols'>{symbol}</span>
      <span>{text}</span>
    </p>
  );
};

export default CompareItems;
