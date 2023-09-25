import Image from 'next/image';
import Link from 'next/link';

export default function ProductInformation() {
  return (
    <section className='productInformation'>
      <div className='productInformation__wrapper'>
        <div className='title'>Product Information</div>
        <div className='wrapper1'>
          <div className='left'>
            <p>Information and Documentation needed</p>
          </div>
          <div className='right'>
            <div className='list'>
              <div className='ball'></div>
              <p>Full name</p>
            </div>
            <div className='list'>
              <div className='ball'></div>
              <p>Business name</p>
            </div>
            <div className='list'>
              <div className='ball'></div>
              <p>Number of Pos needed</p>
            </div>
            <div className='list'>
              <div className='ball'></div>
              <p>A location</p>
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
