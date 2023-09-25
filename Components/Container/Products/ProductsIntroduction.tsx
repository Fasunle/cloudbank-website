//

import { ProductsIntroductionPropsType } from '@/interfaces';

export default function ProductsIntroduction(props: ProductsIntroductionPropsType) {
  const { productsIntroductionTitle, productsIntroductionText } = props;

  return (
    <section className='max-w-[1085px] mx-auto mb-24 lg:mb-32 xl:mb-48'>
      <h1 className='text-cb-black mb-[30px] leading-normal md:leading-normal text-2xl md:text-3xl lg:leading-normal lg:text-[40px] font-bold text-center'>
        {productsIntroductionTitle}
      </h1>

      <p className='text-lg font-poppins text-cb-black leading-[1.2] text-center'>
        {productsIntroductionText}
      </p>
    </section>
  );
}
