'use client';

import Image from 'next/image';
import { useState } from 'react';

import { TestimoniesPropsType } from '@/interfaces';

export default function Testimonies(props: TestimoniesPropsType) {
  const { testimonialTitle, allTestimonials } = props;
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const switchActiveTestimonial = (num: number) => {
    setActiveTestimonial(num);
  };

  return (
    <section className='testimonies'>
      <h2 className='testimonies__heading'>{testimonialTitle}</h2>

      <div className='testimonies__wrapper'>
        <div className='testimonies__contents'>
          {allTestimonials.map(({ content, userName, userImage }, index) => (
            <div
              key={index}
              className={`testimonies__content ${activeTestimonial === index ? 'current' : ''}`}
            >
              <article className='testimonies__main'>{content}</article>
              <article className='testimonies__profile'>
                <div className='testimonies__profile-image'>
                  <Image
                    width={100}
                    height={100}
                    src={userImage.localFile}
                    alt={userImage.altText}
                    className='testimonies__profile-image-main'
                  />
                </div>
                <p className='testimonies__profile-name'>{userName}</p>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className='testimonies__steps'>
        <div className='testimonies__step-wrapper'>
          {allTestimonials.map((allTestimonial, index) => (
            <button
              key={index}
              className={`testimonies__step ${activeTestimonial === index ? 'current' : ''}`}
              onClick={() => switchActiveTestimonial(index)}
            >
              &nbsp;
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
