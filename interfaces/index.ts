import { ElementType, ReactNode } from 'react';

export type ImageType = {
  localFile: string;
  altText: string;
};

export type WebAppLinksType = {
  home: string;
};

export type FinancialFreedomType = {
  financialFreedomHeading: string;
  financialFreedomText: string;
  financialFreedomLinkText: string;
  financialFreedomImage: ImageType;
  googlePlaystoreLink: string;
  appleStoreLink: string;
  webAppLinks: {
    home: string;
  };
  onePlatformImage: ImageType;
  type?: string;
};

export type BoardOfTrusteesContentPropsTypes = {
  boardOfTrusteesTitle: string;
  boardMemberProfile: boardMemberProfileType[];
};

type boardMemberProfileType = {
  boardMemberName: string;
  boardMemberRole: string;
  boardMemberImage: {
    altText: string;
    localFile: string;
  };
};

export type CareerIntroductionType = {
  careerIntroTitle: string;
  careerIntroText: string;
  viewOpeningsLinkText: string;
  viewOpeningsLinkAddress: { url: string };
};

export type CoreValuesType = {
  careerCoreValuesTitle: string;
  careerCoreValuesList: CoreValueType[];
};
type CoreValueType = { careerCoreValueTitle: string; careerCoreValueText: string };

export type JobType = {
  jobTitle: string;
  jobType: string;
  jobLocation: string;
  jobApplicationLinkText: string;
  jobApplicationLinkAddress: string;
};

export type CurrentOpeningsPropsType = { jobsList: JobType[] };

export type FaqFieldType = { question: string; answer: string };

export type FaqContainerPropsType = { faqFields: FaqFieldType[] };

export type ComparePropsType = {
  compareData: { us: string; others: string }[];
};

export type HeroSectionPropsType = {
  heroTitle: string;
  heroSubtitle: string;
  heroPlaystoreCtaText: string;
  heroImage: ImageType & { mobileFile: string };
  googlePlaystoreLink: string;
  appleStoreLink: string;
  webAppLinks: {
    home: string;
  };
};

export type InvestmentsPropsType = {
  investmentTitle: string;
  investmentText: string;
  investmentLinkText: string;
  investmentCardTitle: string;
  investmentCardText: string;
  investmentCardImage: ImageType;
  webAppLinks: WebAppLinksType;
};

export type MobileBankingPropsType = {
  mobileBankingHeading: String;
  mobileBankingText: String;
  mobileBankingCtaText: String;
  mobileBankingImage: ImageType;
  webAppLinks: WebAppLinksType;
};

export type MoneyPriorityPropsType = {
  priorityTitle: string;
  priorityText: string;
  priorityCtaText: string;
  priorityMobileImage: ImageType;
  webAppLinks: WebAppLinksType;
};

export type OnePlatformPropsType = {
  onePlatformTitle: string;
  transferFunds: LabelType;
  longTermLoans: LabelType;
  withdrawFunds: LabelType;
  investFunds: LabelType;
  onePlatformImage: ImageType;
};

type LabelType = {
  title: string;
  text: string;
};

export type PartnersPropsType = {
  partnersHeading: string;
  partnersLogos: Record<'partnerOne' | 'partnerTwo' | 'partnerThree' | 'partnerFour', ImageType>;
};

export type PaymentsPropsType = {
  paymentTitle: string;
  paymentText: string;
  paymentLinkText: string;
  paymentImage: ImageType;
  webAppLinks: WebAppLinksType;
};
type Testimony = {
  content: string;
  userName: string;
  userImage: ImageType;
};

export type TestimoniesPropsType = {
  testimonialTitle: string;
  allTestimonials: Testimony[];
};

export type HeroPropsType = {
  servicesHeroHeading: string;
  servicesHeroText: string;
  webAppLinks: WebAppLinksType;
  companyDetails: string;
  mastercardImage: ImageType;
  companyImage: ImageType;
};

export type SaveAndEarnPropsType = {
  saveAndEarnHeading: string;
  saveAndEarnText: string;
  saveAndEarnListItems: string;
  saveAndEarnMobileImage: ImageType;
  googlePlaystoreLink: string;
  webAppLinks: WebAppLinksType;
};

export type ProductsIntroductionPropsType = {
  productsIntroductionTitle: string;
  productsIntroductionText: string;
};

export type ProductsMainPropsType = {
  posTitle: string;
  posText: string;
  isPosWebAddressReady: boolean;
  posIsNotReadyText: string;
  posWebAddressLink: LinkType;
  posImage: ImageType;
  mastercardTitle: string;
  mastercardText: string;
  mastercardDate: string;
  mastercardLink: LinkType;
  mastercardImage: ImageType;
  iosPlatformTitle: string;
  iosPlatformText: string;
  iosPlatformIsNotReadyText: string;
  isIosPlatformAddressLinkReady: boolean;
  iosPlatformAddressLink: LinkType;
  iosPlatformImage: ImageType;
  partnersAppTitle: string;
  partnersAppText: string;
  isPartnersAppAddressLinkReady: boolean;
  partnersAppIsNotReadyText: string;
  partnersAppAddressLink: LinkType;
  partnersAppImage: ImageType;
  overdraftTitle: string;
  overdraftText: string;
  isOverdraftAddressLinkReady: boolean;
  overdraftImage: ImageType;
  overdraftAddressLink: LinkType;
};

type LinkType = {
  url: string;
  target: string;
  title: string;
};

export type CompareItemsPropsType = { symbol: ReactNode; text: string };
