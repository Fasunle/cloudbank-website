import { CoreValuesType } from '@/interfaces';
import clsx from 'clsx';

export default function CoreValues(props: CoreValuesType) {
  const { careerCoreValuesTitle, careerCoreValuesList } = props;

  return (
    <section className='border-b border-[#c1c1c1] border-solid pb-20 lg:pb-[100px]'>
      <h2 className='font-bold text-xl md:text-2xl lg:text-3xl leading-normal md:leading-normal lg:leading-normal mb-[50px] md:mb-6 lg:mb-14 text-center'>
        {careerCoreValuesTitle}
      </h2>

      <div className='max-w-[860px] w-full mx-auto grid md:grid-cols-2 gap-x-4 gap-y-5 md:gap-x-5 md:gap-y-[30px] lg:gap-y-5 auto-rows-max'>
        {careerCoreValuesList.map(({ careerCoreValueTitle, careerCoreValueText }, index) => (
          <article
            key={index}
            className={clsx('rounded-[5px] border border-solid px-4 py-8 lg:px-8', {
              'border-[#ccccff]': index === 1,
              'border-[#baed91]': index === 2,
              'border-[#fea3aa]': index === 3,
              'border-[#b2cefe]': !![1, 2, 3].find((id) => id === index),
            })}
          >
            <h3 className='text-lg leading-normal font-semibold text-cb-black mb-[7px]'>
              {careerCoreValueTitle}
            </h3>
            <p className='text-cb-black text-sm leading-normal'>{careerCoreValueText}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
