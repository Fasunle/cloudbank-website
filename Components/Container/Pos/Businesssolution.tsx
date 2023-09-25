import Link from 'next/link';
import Image from 'next/image';

export default function Businesssolution() {
  return (
    <section className='businesssolution'>
      <div className='businesssolution__para'>
        <div className='wrapper'>
          <div className='left'>
            <div className='bar'></div>
            <div className='title'>The best business solution for you</div>
            <div className='bodyy'>
              Checkout features our smart payment ordering systems, incredible speed, and beautiful
              simplicity.. It&apos;s designed to provide the best payment experience to your
              customers and instantly make settlement
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
                  alt=''
                  className='arrow'
                  src={'/images/rightarrow.png'}
                />
              </Link>
            </div>
          </div>
          <div className='right'>
            <div className='wrapper12'>
              <div className='box'>
                <div className='bar'>
                  <Image
                    src={'/images/recycle.png'}
                    width={30}
                    height={30}
                    alt=' '
                    className='imag'
                  />
                </div>
                <p className='title'>Fast transactions</p>
                <div className='brall'></div>
                <p>Transact with speed with our fast and powerful POS</p>
              </div>
              <div className='box'>
                <div className='bar1'>
                  <Image
                    width={30}
                    height={30}
                    src={'/images/card3.png'}
                    alt=' '
                    className='imag1'
                  />
                </div>
                <p className='title'>All cards accepted</p>
                <div className='brall1'></div>
                <p>All debit cards accepted on our POS</p>
              </div>
            </div>
            <div className='wrapper12'>
              <div className='box'>
                <div className='bar2'>
                  <Image
                    width={30}
                    height={30}
                    src={'/images/paste.png'}
                    alt=' '
                    className='imag2'
                  />
                </div>
                <p className='title'>Weekly reports</p>
                <div className='brall2'></div>
                <p>Reports on your transactions can be generated</p>
              </div>
              <div className='box'>
                <div className='bar3'>
                  <Image
                    width={30}
                    height={30}
                    src={'/images/headphone.png'}
                    alt=' '
                    className='imag3'
                  />
                </div>
                <p className='title'>Instant support</p>
                <div className='brall3'></div>
                <p>Get hands-on 24-hours instant support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
