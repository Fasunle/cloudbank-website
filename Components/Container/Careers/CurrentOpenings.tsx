'use client';

import { useState } from 'react';
import Image from 'next/image';
import useComponentVisible from '@/Components/hooks/useComponentVisible';
import { CurrentOpeningsPropsType, JobType } from '@/interfaces';

const workFilterFields = [
  {
    id: 1,
    key: 'all',
    text: 'All',
  },
  {
    id: 2,
    key: 'Fulltime',
    text: 'Fulltime',
  },
  {
    id: 3,
    key: 'Contract-based',
    text: 'Contract-based',
  },
];

const locationFilterFields = [
  {
    id: 1,
    key: 'all',
    text: 'All',
  },
  {
    id: 2,
    key: 'Lagos',
    text: 'Lagos',
  },
  {
    id: 3,
    key: 'Remote',
    text: 'Remote',
  },
];

export default function CurrentOpenings(props: CurrentOpeningsPropsType) {
  const { jobsList } = props;
  const [searchQuery, setSearchQuery] = useState('');
  const [workFilterKey, setWorkFilterKey] = useState('all');
  const [workFilterText, setWorkFilterText] = useState('All');
  const [locationFilterKey, setLocationFilterKey] = useState('all');
  const [locationFilterText, setLocationFilterText] = useState('All');

  const [searchParam] = useState(['jobTitle', 'jobType', 'jobLocation']);

  const {
    ref: locationDropdownRef,
    isComponentVisible: isLocationDropdownVisible,
    setIsComponentVisible: setIsLocationDropdownVisible,
  } = useComponentVisible(false);

  const {
    ref: workDropdownRef,
    isComponentVisible: isWorkDropdownVisible,
    setIsComponentVisible: setIsWorkDropdownVisible,
  } = useComponentVisible(false);

  const toggleLocationDropdown = () => {
    setIsLocationDropdownVisible(!isLocationDropdownVisible);
  };

  const toggleWorkDropdown = () => {
    setIsWorkDropdownVisible(!isWorkDropdownVisible);
  };

  const updateSearchQuery = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const workFilterList = (key: string, text: string) => {
    setIsLocationDropdownVisible(false);
    setWorkFilterKey(key);
    setWorkFilterText(text);
  };

  const locationFilterList = (key: string, text: string) => {
    setIsWorkDropdownVisible(false);
    setLocationFilterKey(key);
    setLocationFilterText(text);
  };

  const searchItems = (items: any[]) => {
    return items.filter((item: JobType) => {
      if (item.jobLocation === locationFilterKey) {
        return searchParam.some((newItem: string) => {
          return (
            item[newItem as keyof typeof item]
              .toString()
              .toLowerCase()
              .indexOf(searchQuery.toLowerCase()) > -1
          );
        });
      } else if (item.jobType === workFilterKey) {
        return searchParam.some((newItem) => {
          return (
            item[newItem as keyof typeof item]
              .toString()
              .toLowerCase()
              .indexOf(searchQuery.toLowerCase()) > -1
          );
        });
      } else if (workFilterKey === 'all' || locationFilterKey === 'all') {
        return searchParam.some((newItem) => {
          return (
            item[newItem as keyof typeof item]
              .toString()
              .toLowerCase()
              .indexOf(searchQuery.toLowerCase()) > -1
          );
        });
      }
    });
  };

  return (
    <section className='mt-20'>
      <h2 className='font-bold text-xl md:text-2xl lg:text-3xl leading-normal md:leading-normal lg:leading-normal mb-[50px] md:mb-6 lg:mb-14 text-center'>
        Current openings
      </h2>

      <div className='max-w-[830px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-10 md:grid-cols-3 gap-x-5 lg:gap-x-10 mb-16 md:mb-20 lg:mb-32'>
        <div>
          <p className='mb-2.5 text-cb-black font-semibold'>Search</p>
          <input
            type='text'
            placeholder='Search'
            value={searchQuery}
            onChange={updateSearchQuery}
            className='h-[60px] w-full border border-[#c1c1c1] border-solid rounded-[5px] flex items-center placeholder-cb-black text-xs leading-normal text-cb-black tracking-[0.5px] py-4 px-3'
          />
        </div>
        <div>
          <p className='mb-2.5 text-cb-black font-semibold'>Filter by location</p>
          <div
            className='h-[60px] w-full border border-[#c1c1c1] border-solid rounded-[5px] flex items-center justify-between text-xs leading-normal text-cb-black tracking-[0.5px] py-4 px-3 relative cursor-pointer'
            onClick={toggleLocationDropdown}
            ref={locationDropdownRef}
          >
            <span>{locationFilterText}</span>
            <Image
              width={30}
              height={30}
              alt=''
              className='ml-2'
              src={'/images/icons/filter-dropdown.svg'}
            />

            {isLocationDropdownVisible && (
              <div className='w-[198px] z-50 bg-white absolute top-[70px] left-0 rounded-[5px] border border-[#c1c1c1] border-solid shadow-lg overflow-hidden filter-dropdown flex flex-col'>
                {locationFilterFields.map(({ id, key, text }) => (
                  <span
                    key={id}
                    onClick={() => locationFilterList(key, text)}
                    className='inline-block p-5 border-b border-[#c1c1c1] border-solid cursor-pointer'
                  >
                    {text}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <div>
          <p className='mb-2.5 text-cb-black font-semibold'>Filter by work type</p>
          <div
            className='h-[60px] w-full border border-[#c1c1c1] border-solid rounded-[5px] flex items-center justify-between text-xs leading-normal text-cb-black tracking-[0.5px] py-4 px-3 relative cursor-pointer'
            ref={workDropdownRef}
            onClick={toggleWorkDropdown}
          >
            <span>{workFilterText}</span>
            <Image
              width={30}
              height={30}
              alt=''
              className='ml-2'
              src={'/images/icons/filter-dropdown.svg'}
            />

            {isWorkDropdownVisible && (
              <div className='w-[198px] z-50 bg-white absolute top-[70px] left-0 rounded-[5px] border border-[#c1c1c1] border-solid shadow-lg overflow-hidden filter-dropdown flex flex-col'>
                {workFilterFields.map(({ id, key, text }) => (
                  <span
                    key={id}
                    onClick={() => workFilterList(key, text)}
                    className='inline-block p-5 border-b border-[#c1c1c1] border-solid cursor-pointer'
                  >
                    {text}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {searchItems(jobsList).map(
        (
          { jobTitle, jobType, jobLocation, jobApplicationLinkText, jobApplicationLinkAddress },
          index,
        ) => (
          <div
            key={index}
            className='px-4 md:px-7 lg:px-8 py-8 rounded-[5px] border-[#c1c1c1] border-solid border mb-10 lg:mb-[50px] xs:flex items-center justify-between'
          >
            <div className='mb-5 xs:mb-0'>
              <p className='font-bold text-cb-black text-lg leading-normal mb-[15px]'>{jobTitle}</p>
              <div className='flex w-[195px] items-center justify-between'>
                <div className='flex items-center'>
                  <Image
                    width={30}
                    height={30}
                    alt='Location'
                    className='ml-2'
                    src={'/images/location.svg'}
                  />
                  <span className='ml-[7px] text-base leading-normal text-[#686868]'>
                    {jobLocation}
                  </span>
                </div>
                <div className='flex items-center'>
                  <Image
                    width={30}
                    height={30}
                    alt='Clock'
                    className='mr-2'
                    src={'/images/clock.svg'}
                  />
                  <span className='ml-[7px] text-base leading-normal text-[#686868]'>
                    {jobType}
                  </span>
                </div>
                <div></div>
              </div>
            </div>
            <a
              href={jobApplicationLinkAddress}
              target='_blank'
              rel='noreferrer'
              className='text-cb-green font-bold text-base leading-normal'
            >
              {jobApplicationLinkText}
            </a>
          </div>
        ),
      )}
    </section>
  );
}
