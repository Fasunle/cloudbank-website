import Image from 'next/image';
import Link from 'next/link';

import { ProductsMainPropsType } from '@/interfaces';
//

export default function ProductsMain(props: ProductsMainPropsType) {
  const {
    posTitle,
    posText,
    isPosWebAddressReady,
    posIsNotReadyText,
    posWebAddressLink,
    posImage,
    mastercardTitle,
    mastercardText,
    mastercardDate,
    mastercardLink,
    mastercardImage,
    iosPlatformTitle,
    iosPlatformText,
    iosPlatformIsNotReadyText,
    isIosPlatformAddressLinkReady,
    iosPlatformAddressLink,
    iosPlatformImage,
    partnersAppTitle,
    partnersAppText,
    isPartnersAppAddressLinkReady,
    partnersAppIsNotReadyText,
    partnersAppAddressLink,
    partnersAppImage,
    overdraftTitle,
    overdraftText,
    isOverdraftAddressLinkReady,
    overdraftImage,
    overdraftAddressLink,
  } = props;

  return (
    <div className='max-w-[1085px] w-full mx-auto'>
      <section className='flex items-center justify-between flex-col-reverse sm:flex-row mb-20 md:mb-36'>
        <article className='sm:max-w-[367px] w-full mt-[30px] sm:mt-0 mr-0 sm:mr-5'>
          <h2 className='font-bold text-xl md:text-2xl lg:text-3xl leading-normal md:leading-normal lg:leading-normal mb-[30px]'>
            {posTitle}
          </h2>
          <p className='text-base leading-[1.2] text-cb-black mb-[26px]'>{posText}</p>
          {isPosWebAddressReady ? (
            <Link
              href={posWebAddressLink.url}
              target={posWebAddressLink.target}
              rel='noreferrer'
              className='underline font-semibold text-cb-green text-lg leading-[1.2]'
            >
              {posWebAddressLink.title}
            </Link>
          ) : (
            <p className='text-cb-black text-base leading-[1.2] font-bold'>{posIsNotReadyText}</p>
          )}
        </article>

        <Image src={posImage.localFile} alt={posImage.altText} width={100} height={100} />
      </section>

      <section className='flex items-center justify-between flex-col sm:flex-row mb-20 md:mb-36'>
        <Image
          src={mastercardImage.localFile}
          alt={mastercardImage.altText}
          width={100}
          height={100}
        />

        <article className='sm:max-w-[411px] w-full mt-[30px] sm:mt-0 ml-0 sm:ml-5'>
          <h2 className='font-bold text-xl md:text-2xl lg:text-3xl leading-normal md:leading-normal lg:leading-normal mb-[30px]'>
            {mastercardTitle}
          </h2>
          <p className='text-base leading-[1.2] text-cb-black mb-[26px]'>{mastercardText}</p>
          <p className='text-cb-black text-base leading-[1.2] font-bold mb-[26px]'>
            {mastercardDate}
          </p>
          <Link
            href={mastercardLink.url}
            target={mastercardLink.target}
            rel='noreferrer'
            className='underline font-semibold text-cb-green text-lg leading-[1.2]'
          >
            {mastercardLink.title}
          </Link>
        </article>
      </section>

      <section className='flex items-center justify-between flex-col-reverse sm:flex-row mb-20 md:mb-36'>
        <article className='sm:max-w-[367px] w-full mt-[30px] sm:mt-0 mr-0 sm:mr-5'>
          <h2 className='font-bold text-xl md:text-2xl lg:text-3xl leading-normal md:leading-normal lg:leading-normal mb-[30px]'>
            {iosPlatformTitle}
          </h2>
          <p className='text-base leading-[1.2] text-cb-black mb-[26px]'>{iosPlatformText}</p>
          {isIosPlatformAddressLinkReady ? (
            <Link
              href={iosPlatformAddressLink.url}
              target={iosPlatformAddressLink.target}
              rel='noreferrer'
              className='underline font-semibold text-cb-green text-lg leading-[1.2]'
            >
              {iosPlatformAddressLink.title}
            </Link>
          ) : (
            <p className='text-cb-black text-base leading-[1.2] font-bold'>
              {iosPlatformIsNotReadyText}
            </p>
          )}
        </article>
        <Image
          width={100}
          height={100}
          src={iosPlatformImage.localFile}
          alt={iosPlatformImage.altText}
        />
      </section>

      <section className='flex items-center justify-between flex-col sm:flex-row mb-20 md:mb-36'>
        <Image
          width={100}
          height={100}
          src={partnersAppImage.localFile}
          alt={partnersAppImage.altText}
        />

        <article className='sm:max-w-[411px] w-full mt-[30px] sm:mt-0 ml-0 sm:ml-5'>
          <h2 className='font-bold text-xl md:text-2xl lg:text-3xl leading-normal md:leading-normal lg:leading-normal mb-[30px]'>
            {partnersAppTitle}
          </h2>
          <p className='text-base leading-[1.2] text-cb-black mb-[26px]'>{partnersAppText}</p>
          {isPartnersAppAddressLinkReady ? (
            <Link
              href={partnersAppAddressLink.url}
              target={partnersAppAddressLink.target}
              rel='noreferrer'
              className='underline font-semibold text-cb-green text-lg leading-[1.2]'
            >
              {partnersAppAddressLink.title}
            </Link>
          ) : (
            <p className='text-cb-black text-base leading-[1.2] font-bold'>
              {partnersAppIsNotReadyText}
            </p>
          )}
        </article>
      </section>

      <section className='flex items-center justify-between flex-col-reverse sm:flex-row'>
        <article className='sm:max-w-[367px] w-full mt-[30px] sm:mt-0 mr-0 sm:mr-5'>
          <h2 className='font-bold text-xl md:text-2xl lg:text-3xl leading-normal md:leading-normal lg:leading-normal mb-[30px]'>
            {overdraftTitle}
          </h2>
          <p className='text-base leading-[1.2] text-cb-black mb-[26px]'>{overdraftText}</p>
          {isOverdraftAddressLinkReady ? (
            <Link
              href={overdraftAddressLink.url}
              target={overdraftAddressLink.target}
              rel='noreferrer'
              className='underline font-semibold text-cb-green text-lg leading-[1.2]'
            >
              {overdraftAddressLink.title}
            </Link>
          ) : (
            <p className='text-cb-black text-base leading-[1.2] font-bold'>Coming soon</p>
          )}
        </article>
        <Image
          width={100}
          height={100}
          src={overdraftImage.localFile}
          alt={overdraftImage.altText}
        />
      </section>
    </div>
  );
}
