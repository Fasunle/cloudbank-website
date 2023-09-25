import Link from 'next/link';

//
export default function PointofSale() {
  return (
    <section className='pointofsale'>
      <div className='pointofsale__a1'></div>
      <div className='pointofsale__title'>
        <p className='tiytle'>POINT OF SALE</p>
        <p className='arrow'>
          <p className='arrowhead'></p>
        </p>
        <p className='meet'>Meet Cloud-Bank POS</p>
        <p className='word'>Your income oppurtunities are endless with Cloudbank POS Terminal.</p>
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
      <div className='pointofsale__a2'></div>
    </section>
  );
}
