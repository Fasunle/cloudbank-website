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
    altText: 'Dashboard Layout on Mobile Screen',
    localFile: '/images/dashboard-on-mobile.webp',
  },
  googlePlaystoreLink: '',
  appleStoreLink: '',
};

export const financialFreedom: FinancialFreedomType = {
  financialFreedomHeading: 'Ready for financial freedom?',
  financialFreedomText: 'Get started with Cloud Bank today',
  financialFreedomLinkText: 'Get Started',
  financialFreedomImage: {
    altText: 'Financial Freedom',
    localFile: '/images/cloudbank-home-on-desktop-screen.webp',
  },
  googlePlaystoreLink: constants.googlePlaystoreLink,
  appleStoreLink: constants.appleStoreLink,
  webAppLinks: {
    home: constants.webAppLinks.home,
  },
  onePlatformImage: constants.onePlatformImage,
};

export const boardOfTrustees: BoardOfTrusteesContentPropsTypes = {
  boardMemberProfile: [],
  boardOfTrusteesTitle: 'Board of Trustees',
};

export const careerIntroductionProps: CareerIntroductionType = {
  careerIntroText: '',
  careerIntroTitle: 'Careers',
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
  faqFields: [
    {
      answer: 'Navigate to home page and click the get started button.',
      question: 'How do I create an account?',
    },
  ],
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
    altText: 'Grow your money',
    localFile: '/images/flower-dollar.webp',
  },
  investmentCardText: 'Invest smartly. Earn up to 18% Return on investment per annum',
  investmentCardTitle: 'Invest with Cloud Bank',
  investmentLinkText: 'Get started for free',
  investmentText:
    "We've created rewarding and safe investment plans to ensure your money works just as hard as you do.  ",
  investmentTitle: 'Investments tailored to you',
  webAppLinks: constants.webAppLinks,
};

export const mobileBankingProps: MobileBankingPropsType = {
  mobileBankingCtaText: 'Open an account for free',
  mobileBankingHeading: 'Free Mobile Banking',
  mobileBankingImage: {
    altText: 'Free Mobile Banking',
    localFile: '/images/free-mobile-banking.webp',
  },
  mobileBankingText: 'Zero charges on transfers, card maintenance fees, online or POS transactions',
  webAppLinks: constants.webAppLinks,
};

export const moneyPriorityProps: MoneyPriorityPropsType = {
  priorityCtaText: 'Open an account now',
  priorityMobileImage: {
    altText: 'cloudbank account screen mobile',
    localFile: '/images/cloudbank-account-screen-mobile.webp',
  },
  priorityText:
    'With the toggle button, you can keep your account balance from prying eyes etc. Beyond banking with us, Getting you the necessary security is our priority and this is what we aim at',
  priorityTitle: 'Keeping your money safe is our priority',
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
  onePlatformImage: constants.onePlatformImage,
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
  partnersHeading: 'Our partners',
  partnersLogos: {
    partnerFour: { altText: 'GLobal Accelerex', localFile: '/images/errandpay-logo.webp' },
    partnerOne: { altText: 'Interswitch', localFile: '/images/interswitch-logo.webp' },
    partnerTwo: { altText: 'Sun Trust', localFile: '/images/check.webp' },
    partnerThree: { altText: 'GLobal Accelerex', localFile: '/images/global-accelerex-logo.webp' },
  },
};

export const paymentsProps: PaymentsPropsType = {
  paymentImage: {
    altText: 'Cloudbank Cards',
    localFile: '/images/cards.webp',
  },
  paymentLinkText: 'Open an account now',
  paymentText:
    'Request a Cloud bank debit card to be delivered at your convenience. Enjoy up to $3000 monthly limit on international transactions',
  paymentTitle: 'Seamless payments everywhere you go',
  webAppLinks: constants.webAppLinks,
};

export const testimoniesProps: TestimoniesPropsType = {
  allTestimonials: [
    {
      content:
        'I use my business account to pay all my employees. I also earn monthly on my savings. It is very seamless. And I have never experienced issues.',
      userName: 'Tolulope Oladoyin',
      userImage: {
        altText: "Tolulope Oladoyin's review",
        localFile: '/images/tolulope-profile.webp',
      },
    },
  ],
  testimonialTitle: 'Our customers speak for themselves',
};

export const heroProps: HeroPropsType = {
  companyDetails: '',
  companyImage: {
    altText: 'cloudbank office',
    localFile: '/images/cloudbank_office.png',
  },
  mastercardImage: {
    altText: 'Master Cards',
    localFile: '/images/Group 20.svg',
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
  productsIntroductionText:
    'From bill payments to POS services, Investment plans, Overdrafts, Savings and Business accounts, Cloud bank provides everyone with the right tools to build and manage their finances. From bill payments to POS services, Investment plans, Overdrafts, Savings and Business accounts, Cloud bank provides everyone with the right tools to build and manage their finances.',
  productsIntroductionTitle: 'Banking the easiest way possible',
};

export const productsMainProps: ProductsMainPropsType = {
  iosPlatformAddressLink: {
    target: '',
    title: '',
    url: '',
  },
  iosPlatformImage: {
    altText: 'dashboard on mobile',
    localFile: '/images/dashboard-on-mobile.webp',
  },
  iosPlatformIsNotReadyText: '',
  iosPlatformText: 'Cloud bank is a cross-platform application and will be available on iOS soon.',
  iosPlatformTitle: 'iOS platform',
  isIosPlatformAddressLinkReady: false,
  isOverdraftAddressLinkReady: false,
  isPartnersAppAddressLinkReady: false,
  isPosWebAddressReady: false,
  mastercardDate: '',
  mastercardImage: {
    altText: 'master cards',
    localFile: '/images/master-cards.svg',
  },
  mastercardLink: {
    target: '',
    title: '',
    url: '',
  },
  mastercardText:
    'Make seamless payments everywhere you go with Cloud bank Mastercard. Request a card  directly from the mobile or web app',
  mastercardTitle: 'CloudBank Mastercard',
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
    altText: 'pos mock up',
    localFile: '/images/pos-mock-up.svg',
  },
  posIsNotReadyText: 'Coming soon',
  posText:
    'Cloud bank offers better payment solutions for your business. Earn more when you become a Cloud bank agent',
  posTitle: 'POS and Agency App',
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
