import { Category } from '@/generated/graphql';

export type NavItem = {
  id: number
  name: string
  href: string
  desc?: string
  children: NavItem[]
};

export type Slide = {
  id: number
  name: string
};

export type PriceBenefit = {
  id: number
  name: string
};

export type Number = {
  id: number
  nb: string
  name: string
  desc: string
};

export type Value = {
  id: number
  name: string
  desc: string
};

export type PriceItem = {
  id: number
  name: string
  desc: string
  price: string
  benefits: PriceBenefit[]

};

export type About = {
  id: number
  name: string
  desc: string
  number: number
};

export type ProcessItem = {
  id: number
  name: string
  desc: string
};

export type Step = {
  id: number
  name: string
  img: string
  desc: string
};

export type ProjectCategory = {
  id: number;
  name: string;
  count: number
};

export type ProjectStack = {
  id: number;
  name: string;
};

export type ProjectFeatureImg = {
  sourceUrl: string
};

export type Project = {
  id: number;
  img: ProjectFeatureImg;
  title: string;
  slug: string;
  tags: string[];
  stack: ProjectStack[];
  categories: Category[];
  release: string;
  client: string;
  description: string;
};

export type Service = {
  id: number
  name: string
  desc: string
  img: string
};

export type Feature = {
  id: number
  name: string
  desc: string
};

export type Example = {
  id: number
  img: string
  title: string
  desc: string
};

export type Review = {
  id: number
  title: string
  name: string
  company: string
  img: string
  text: string
};

export type Partner = {
  id: number
  img: string
  name: string
};

export type Question = {
  id: number
  name: string
  desc: string
};

export interface DataD {
  navItems: NavItem[]
  slides: Slide[]
  pricing: PriceItem[]
  numbers: Number[]
  values: Value[]
  about: About[]
  process: ProcessItem[]
  steps: Step[]
  projects: Project[]
  services: Service[]
  features: Feature[]
  examples: Example[]
  reviews: Review[]
  partners: Partner[]
  questions: Question[]

  questionsAbout: Question[]
}
