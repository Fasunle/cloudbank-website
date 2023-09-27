import { Metadata } from 'next';

import FinancialFreedom from '@/Components/Container/Home/FinancialFreedom';
import ProductsIntroduction from '@/Components/Container/Products/ProductsIntroduction';
import ProductsMain from '@/Components/Container/Products/ProductsMain';
import { financialFreedom, productsIntroductionProps, productsMainProps } from '@/config/constants';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Our products at CloudBank',
};

export default function Product() {
  return (
    <>
      <ProductsIntroduction {...productsIntroductionProps} />
      <ProductsMain {...productsMainProps} />
      <FinancialFreedom {...financialFreedom} />
    </>
  );
}
