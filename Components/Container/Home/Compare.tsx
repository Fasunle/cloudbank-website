import Link from 'next/link';
import CompareItems from '@/Components/CompareItems';
import { ComparePropsType } from '@/interfaces';

const Compare = (props: ComparePropsType) => {
  const { compareData } = props;
  return (
    <section>
      <div className='compare-container'>
        <div className='us-container'>
          <h3>CloudBank</h3>
          <div className='compare-items'>
            {compareData.map((data, index) => (
              <CompareItems
                key={index}
                symbol={<span className='compare-check'>&#10003;</span>}
                text={data.us}
              />
            ))}
          </div>
          <Link className='us-btn' href='https://app.cloudbank.ng' target='_blank' rel='noreferrer'>
            Open an account now
          </Link>
        </div>
        <div className='others-container'>
          <h3>Other Banks</h3>
          <div className='compare-items'>
            {compareData.map((data, index) => (
              <CompareItems key={index} symbol='-' text={data.others} />
            ))}
          </div>
          <Link
            className='others-btn'
            href='https://app.cloudbank.ng'
            target='_blank'
            rel='noreferrer'
          >
            Join CloudBank now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Compare;
