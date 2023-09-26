import Link from 'next/link';

//
export default function Patreon() {
  return (
    <section className='paymentrecon'>
      <div className='paymentrecon__wrapper'>
        <div className='b1'>Payments and reconciliations with ease</div>
        <div className='wrapper1'>
          <div className='left'>
            <p className='meet'>Become a Merchant</p>
            <p className='word'>
              Own multiple POS devices to support the payment means of your business
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
          <div className='right'></div>
        </div>
      </div>
    </section>
  );
}
