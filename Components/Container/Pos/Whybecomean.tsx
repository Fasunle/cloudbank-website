import Image from 'next/image';
import Link from 'next/link';

export default function Whybecomean() {
  return (
    <section className='whybecomean'>
      <div className='whybecomean__wrapper'>
        <div className='title1'>Why become an agent or merchant?</div>
        <div className='wrapper3'>
          <div className='toprow'>
            <div className='reasons'>
              <div className='reasonum'>01</div>
              <div className='para'>
                <p className='title'>Quick registration</p>
                <p className='boddy'>Fill up the form or request via your user dashboard</p>
              </div>
            </div>
            <div className='reasons'>
              <div className='reasonum'>02</div>
              <div className='para'>
                <p className='title'>Instant Pos</p>
                <p className='boddy'>Get an instant POS with stands and banner if required</p>
              </div>
            </div>
            <div className='reasons'>
              <div className='reasonum'>03</div>
              <div className='para'>
                <p className='title'>Instant credit</p>
                <p className='boddy'>Get an instant settlement for all transactions</p>
              </div>
            </div>
          </div>
          <div className='bottomrow'>
            <div className='reasons'>
              <div className='reasonum'>04</div>
              <div className='para'>
                <p className='title'>Access to Agent credit</p>
                <p className='boddy'>Withdraw from your account at anytime</p>
              </div>
            </div>
            <div className='reasons'>
              <div className='reasonum'>05</div>
              <div className='para'>
                <p className='title'>Excellent support structure</p>
                <p className='boddy'>Get support 24/7 as regards transactions-related issues</p>
              </div>
            </div>
            <div className='req'>
              <Link
                href='https://docs.google.com/forms/d/e/1FAIpQLSduPka90-hicZU0y-AM2Mv1lTDbxKY_c12wytMzO9lZcNFHZQ/viewform'
                target='_blank'
                rel='noreferrer'
                className='req1'
              >
                <p>Go to fill POS request form</p>
                <Image
                  width={30}
                  height={30}
                  src={'/images/rightarrow.png'}
                  alt=''
                  className='arrow'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
