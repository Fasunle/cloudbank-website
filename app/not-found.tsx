'use client';

import Image from 'next/image';
import Link from 'next/link';

import SEO from '@/Components/Seo';

// https://stackoverflow.com/questions/74421327/nextrouter-was-not-mounted-next-js
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <>
      <SEO
        title='Page Not Found'
        description="The page you are looking for can't be found here. Please check your address or Go Back Home"
      />
      <main className='w-full h-full flex items-center justify-center py-5'>
        <section className='max-w-[448px] w-full mx-auto text-center'>
          <Image
            alt='Binoculars'
            width={250}
            height={250}
            className='z-10 relative top-[2rem] mx-auto'
            src={'/images/binoculars.png'}
          />
          <h1 className='text-cb-black text-3xl leading-normal mb-5 font-bold'>Page not found</h1>
          <p className='text-cb-black text-base leading-normal font-medium mb-10'>
            Sorry, the page you are looking for does not exist or has been moved.
            <br />
            Here are some helpful buttons:
          </p>

          <div className='flex justify-center items-center'>
            <div className='flex gap-3 justify-between mx-auto'>
              <button
                className='h-14 border border-solid border-cb-green rounded-[5px] bg-white flex items-center text-center justify-center text-main font-bold text-base leading-[1.1] p-2 flex-grow-0 flex-shrink-0 mb-5 xs:mb-0 xs-max:mx-auto'
                onClick={() => router.back()}
              >
                <Image
                  alt='back link'
                  width={30}
                  height={30}
                  // className='z-10 relative top-[-8rem]'
                  src={'/images/icons/back-link.svg'}
                />
                <span className='inline-block ml-[15px] text-cb-green'>Go Back</span>
              </button>

              <Link
                href='/'
                className='h-14 rounded-[5px] bg-cb-green flex items-center text-center justify-center text-white font-bold text-base leading-[1.1] p-2 flex-grow-0 flex-shrink-0 xs-max:mx-auto'
              >
                Take me Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NotFoundPage;
