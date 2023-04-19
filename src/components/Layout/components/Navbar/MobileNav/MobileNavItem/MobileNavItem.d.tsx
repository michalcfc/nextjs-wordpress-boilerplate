import { MenuItem } from '@/generated/graphql';

export interface MobileNavItemD {
  label: string;
  path: string;
  desc?: string;
  childItems: MenuItem[];
}
