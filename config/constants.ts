import {
  BoardOfTrusteesContentPropsTypes,
  CareerIntroductionType,
  CompareItemsPropsType,
  ComparePropsType,
  CoreValuesType,
  CurrentOpeningsPropsType,
  FaqContainerPropsType,
  FinancialFreedomType,
  HeroPropsType,
  HeroSectionPropsType,
  InvestmentsPropsType,
  MobileBankingPropsType,
  MoneyPriorityPropsType,
  OnePlatformPropsType,
  PartnersPropsType,
  PaymentsPropsType,
  ProductsIntroductionPropsType,
  ProductsMainPropsType,
  SaveAndEarnPropsType,
  TestimoniesPropsType,
} from '@/interfaces';

export const constants = {
  webAppLinks: {
    home: '',
  },
  onePlatformImage: {
    altText: '',
    localFile: '',
  },
  googlePlaystoreLink: '',
  appleStoreLink: '',
};

export const financialFreedom: FinancialFreedomType = {
  financialFreedomHeading: '',
  financialFreedomText: '',
  financialFreedomLinkText: '',
  financialFreedomImage: {
    altText: '',
    localFile: '',
  },
  googlePlaystoreLink: constants.googlePlaystoreLink,
  appleStoreLink: constants.appleStoreLink,
  webAppLinks: {
    home: constants.webAppLinks.home,
  },
  onePlatformImage: {
    altText: constants.onePlatformImage.altText,
    localFile: constants.onePlatformImage.localFile,
  },
};

export const boardOfTrustees: BoardOfTrusteesContentPropsTypes = {
  boardMemberProfile: [],
  boardOfTrusteesTitle: '',
};

export const careerIntroductionProps: CareerIntroductionType = {
  careerIntroText: '',
  careerIntroTitle: '',
  viewOpeningsLinkAddress: {
    url: '',
  },
  viewOpeningsLinkText: '',
};

export const coreValues: CoreValuesType = {
  careerCoreValuesList: [],
  careerCoreValuesTitle: '',
};

export const currentOpeningProps: CurrentOpeningsPropsType = {
  jobsList: [],
};

export const faqs: FaqContainerPropsType = {
  faqFields: [],
};

export const compareData = [
  {
    title: 'Transfer Fee',
    others: 'Up to ₦50 plus transfer fee',
    us: 'Free Transfers',
  },
  {
    title: 'Card Maintenance Fee',
    others: 'Up to ₦50 plus Card maintenance fee',
    us: 'Zero Card maintenance fee',
  },
  {
    title: 'Alerts',
    others: 'Charge for SMS alerts',
    us: 'Free alerts and notifications',
  },
  {
    title: 'Average Account Interest',
    others: 'Up to 4% average account interest',
    us: 'Up to 15% average account interest',
  },
  {
    title: 'Bill Payment',
    others: 'Up to ₦100 per bill',
    us: 'Free bills payment',
  },
  {
    title: 'Stamped E-Account Statement',
    others: 'Charge for stamped E-account statement',
    us: 'Free stamped E-account statement',
  },
  {
    title: 'Account Maintenance Fee',
    others: 'Charge for account maintenance',
    us: 'Free account maintenance',
  },
  {
    title: 'Card Delivery',
    others: 'Charge for card delivery',
    us: 'Card delivery - Home delivery/Pickup zone',
  },
];

export const heroSectionProps: HeroSectionPropsType = {
  appleStoreLink: constants.appleStoreLink,
  googlePlaystoreLink: constants.googlePlaystoreLink,
  heroImage: {
    altText: '',
    localFile: '/images/dashboard-on-desktop-and-account-on-mobile-screens.png',
    mobileFile: '/images/dashboard-on-mobile.webp',
  },
  heroPlaystoreCtaText: 'Get Started',
  heroSubtitle:
    'From Payments to POS services, Loans, Savings, Bills Payment and Business accounts, Cloudbank provides everyone with the right tools to build their financial performance.',
  heroTitle: 'Created with your financial flexibility in mind',
  webAppLinks: constants.webAppLinks,
};

export const investmentsProps: InvestmentsPropsType = {
  investmentCardImage: {
    altText: '',
    localFile: '',
  },
  investmentCardText: '',
  investmentCardTitle: '',
  investmentLinkText: '',
  investmentText: '',
  investmentTitle: '',
  webAppLinks: constants.webAppLinks,
};

export const mobileBankingProps: MobileBankingPropsType = {
  mobileBankingCtaText: '',
  mobileBankingHeading: '',
  mobileBankingImage: {
    altText: '',
    localFile: '',
  },
  mobileBankingText: '',
  webAppLinks: constants.webAppLinks,
};

export const moneyPriorityProps: MoneyPriorityPropsType = {
  priorityCtaText: '',
  priorityMobileImage: {
    altText: '',
    localFile: '',
  },
  priorityText: '',
  priorityTitle: '',
  webAppLinks: constants.webAppLinks,
};

export const onePlatformProps: OnePlatformPropsType = {
  investFunds: {
    text: 'Invest funds in diverse safe investments',
    title: 'Invest Funds',
  },
  longTermLoans: {
    text: 'Get loans with very low interest rates',
    title: 'Long-term Loans',
  },
  onePlatformImage: {
    altText: 'Dashboard Layout on Mobile Screen',
    localFile: '/images/dashboard-on-mobile.webp',
  },
  onePlatformTitle: 'One platform with all you need',
  transferFunds: {
    text: 'Transfer funds to anyone with a bank account',
    title: 'Transfer funds',
  },
  withdrawFunds: {
    text: 'Withdraw funds to bank accounts or other wallets',
    title: 'Withdraw Funds',
  },
};

export const partnersProps: PartnersPropsType = {
  partnersHeading: '',
  partnersLogos: {
    partnerFour: { altText: '', localFile: '' },
    partnerOne: { altText: '', localFile: '' },
    partnerThree: { altText: '', localFile: '' },
    partnerTwo: { altText: '', localFile: '' },
  },
};

export const paymentsProps: PaymentsPropsType = {
  paymentImage: {
    altText: '',
    localFile: '',
  },
  paymentLinkText: '',
  paymentText: '',
  paymentTitle: '',
  webAppLinks: constants.webAppLinks,
};

export const testimoniesProps: TestimoniesPropsType = {
  allTestimonials: [],
  testimonialTitle: '',
};

export const heroProps: HeroPropsType = {
  companyDetails: '',
  mastercardImage: {
    altText: '',
    localFile: '',
  },
  servicesHeroHeading: '',
  servicesHeroText: '',
  webAppLinks: constants.webAppLinks,
};

export const saveAndEarnProps: SaveAndEarnPropsType = {
  googlePlaystoreLink: constants.googlePlaystoreLink,
  saveAndEarnHeading: '',
  saveAndEarnListItems: '',
  saveAndEarnMobileImage: {
    altText: '',
    localFile: '',
  },
  saveAndEarnText: '',
  webAppLinks: constants.webAppLinks,
};

export const productsIntroductionProps: ProductsIntroductionPropsType = {
  productsIntroductionText: '',
  productsIntroductionTitle: '',
};

export const productsMainProps: ProductsMainPropsType = {
  iosPlatformAddressLink: {
    target: '',
    title: '',
    url: '',
  },
  iosPlatformImage: {
    altText: '',
    localFile: '',
  },
  iosPlatformIsNotReadyText: '',
  iosPlatformText: '',
  iosPlatformTitle: '',
  isIosPlatformAddressLinkReady: false,
  isOverdraftAddressLinkReady: false,
  isPartnersAppAddressLinkReady: false,
  isPosWebAddressReady: false,
  mastercardDate: '',
  mastercardImage: {
    altText: '',
    localFile: '',
  },
  mastercardLink: {
    target: '',
    title: '',
    url: '',
  },
  mastercardText: '',
  mastercardTitle: '',
  overdraftAddressLink: {
    target: '',
    title: '',
    url: '',
  },
  overdraftImage: {
    altText: '',
    localFile: '',
  },
  overdraftText: '',
  overdraftTitle: '',
  partnersAppAddressLink: {
    target: '',
    title: '',
    url: '',
  },
  partnersAppImage: {
    altText: '',
    localFile: '',
  },
  partnersAppIsNotReadyText: '',
  partnersAppText: '',
  partnersAppTitle: '',
  posImage: {
    altText: '',
    localFile: '',
  },
  posIsNotReadyText: '',
  posText: '',
  posTitle: '',
  posWebAddressLink: {
    target: '',
    title: '',
    url: '',
  },
};

export const compareItemsProps: CompareItemsPropsType = {
  symbol: '',
  text: '',
};

export const compareProps: ComparePropsType = {
  compareData: compareData,
};
