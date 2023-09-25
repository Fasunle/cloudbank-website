'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaqContainerPropsType, FaqFieldType } from '@/interfaces';

export default function FaqContainer(props: FaqContainerPropsType) {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParam] = useState(['question', 'answer']);
  const content = useRef(null);

  const { faqFields } = props;

  const updateSearchQuery = (event: any) => {
    setSearchQuery(event.target.value);
  };

  function resolveAccordion(index: number | null) {
    if (index === activeAccordion) {
      setActiveAccordion(null);
      return;
    }

    setActiveAccordion(index);
  }

  function handleKeyDown(event: any, index: number | null) {
    if (event.keyCode === 13) {
      if (index === activeAccordion) {
        setActiveAccordion(null);
        return;
      }
      setActiveAccordion(index);
    }
  }

  const searchItems = (items: FaqFieldType[]) => {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem as keyof typeof item]
            .toString()
            .toLowerCase()
            .indexOf(searchQuery.toLowerCase()) > -1
        );
      });
    });
  };

  return (
    <>
      <section className='faq__container'>
        <div className='faq__input-wrapper'>
          <Image
            width={30}
            height={30}
            alt=''
            className='faq__input-vector'
            src={'/images/search.svg'}
          />
          <input
            className='faq__input'
            placeholder='Search for anything'
            value={searchQuery}
            onChange={updateSearchQuery}
          />
        </div>
      </section>

      <div className='faq__fields'>
        {searchItems(faqFields).map(({ question, answer }, index: number) => (
          <div
            className='faq__field'
            key={index}
            onClick={() => resolveAccordion(index)}
            role='button'
            tabIndex={0}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            <section className={`faq__question ${activeAccordion === index ? 'opened' : ''}`}>
              <h2 className='faq__question--title'>{question}</h2>
            </section>
            <article
              className={`faq__answer ${activeAccordion === index ? 'opened' : ''}`}
              ref={content}
            >
              <section className='faq__answer--main'>{answer}</section>
            </article>
          </div>
        ))}
      </div>

      <div className='faq__footer'>
        <p className='faq__unanswered-question'>Have a question left unanswered?</p>
        <p>
          Feel free to{' '}
          <Link href='/contact' className='faq__contact'>
            Contact Us
          </Link>
        </p>
      </div>
    </>
  );
}
