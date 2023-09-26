'use client';

import { useRef } from 'react';
import Image from 'next/image';

import { OnePlatformPropsType } from '@/interfaces';
import { useContainerDimensions } from '@/utils/useContainerDimensions';

export default function OnePlatform(props: OnePlatformPropsType) {
  const containerRef = useRef<HTMLDivElement>();
  const { width } = useContainerDimensions(containerRef);

  const {
    onePlatformTitle,
    transferFunds,
    longTermLoans,
    withdrawFunds,
    investFunds,
    onePlatformImage,
  } = props;

  return (
    <section className='one-platform' ref={containerRef as any} style={{ height: `${width}px` }}>
      <div className='one-platform__overall'>
        <h2 className='one-platform__heading'>{onePlatformTitle}</h2>

        <div className='one-platform__body'>
          <div className='one-platform__main'>
            <div className='one-platform__left'>
              <div className='one-platform__feature left'>
                <div className='one-platform__feature-icon-wrapper'>
                  <div className='one-platform__feature-icon left'>
                    <Image
                      width={30}
                      height={30}
                      src={'/images/withdraw-icon.png'}
                      alt='Withdraw Icon'
                      className='one-platform__feature-icon-img'
                    />
                  </div>
                </div>
                <h5 className='one-platform__feature-heading left'>{transferFunds.title}</h5>
                <p className='one-platform__feature-text left'>{transferFunds.text}</p>
              </div>
              <div className='one-platform__feature left bottom'>
                <div className='one-platform__feature-icon-wrapper'>
                  <div className='one-platform__feature-icon left'>
                    <Image
                      width={30}
                      height={30}
                      alt='Transfer Icon'
                      src={'/images/transfer-icon.png'}
                      className='one-platform__feature-icon-img'
                    />
                  </div>
                </div>
                <h5 className='one-platform__feature-heading left'>{longTermLoans.title}</h5>
                <p className='one-platform__feature-text left'>{longTermLoans.text}</p>
              </div>
            </div>
            <div className='one-platform__visual'>
              <Image
                width={100}
                height={100}
                alt={onePlatformImage.altText}
                src={onePlatformImage.localFile}
                className='one-platform__feature-icon-img'
              />
            </div>
            <div className='one-platform__right'>
              <div className='one-platform__feature right'>
                <div className='one-platform__feature-icon-wrapper'>
                  <div className='one-platform__feature-icon right'>
                    <Image
                      width={30}
                      height={30}
                      src={'/images/withdraw-icon.png'}
                      alt='Withdraw Icon'
                      className='one-platform__feature-icon-img'
                    />
                  </div>
                </div>
                <h5 className='one-platform__feature-heading'>{withdrawFunds.title}</h5>
                <p className='one-platform__feature-text'>{withdrawFunds.text}</p>
              </div>
              <div className='one-platform__feature right bottom'>
                <div className='one-platform__feature-icon-wrapper'>
                  <div className='one-platform__feature-icon right'>
                    <Image
                      width={30}
                      height={30}
                      alt='Transfer Icon'
                      src={'/images/transfer-icon.png'}
                      className='one-platform__feature-icon-img'
                    />
                  </div>
                </div>
                <h5 className='one-platform__feature-heading'>{investFunds.title}</h5>
                <p className='one-platform__feature-text'>{investFunds.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
