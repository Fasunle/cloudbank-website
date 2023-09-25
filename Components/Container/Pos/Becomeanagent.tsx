import Link from 'next/link';

export default function Becomeanagent() {
  return (
    <section className='Becomeanagent'>
      <div className='Becomeanagent__wrapper'>
        <div className='wrapper1'>
          <div className='left'></div>
          <div className='right'>
            <div className='title'>
              <p className='meet'>Become an Agent</p>
              <p className='word'>
                Become your own boss, own a POS device today and make seamless transactions, and get
                settled instantly
              </p>
              <div className='order'>
                <Link
                  href='https://docs.google.com/forms/d/e/1FAIpQLSduPka90-hicZU0y-AM2Mv1lTDbxKY_c12wytMzO9lZcNFHZQ/viewform'
                  target='_blank'
                  rel='noreferrer'
                >
                  Order POS now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
