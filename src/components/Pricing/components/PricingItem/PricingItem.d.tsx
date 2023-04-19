import { Benefit } from '@/components/Pricing/Pricing.d';

export enum PricingPlan {
  Free = 'Free',
  Lite = 'Lite',
  Professional = 'Professional',

}

export interface PricingItemD {
  name: string;
  desc: string;
  price: string;
  isRecommended: boolean;
  benefits: Benefit[];
}
