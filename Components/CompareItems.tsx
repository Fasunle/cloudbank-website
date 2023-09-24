//
const CompareItems = ({ symbol, text }: any) => {
  return (
    <p className='compare-items'>
      <span className='compare-symbols'>{symbol}</span>
      <span>{text}</span>
    </p>
  );
};

export default CompareItems;
