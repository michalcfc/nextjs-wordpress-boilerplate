import { MenuItem } from '@/generated/graphql';

export interface DesktopNavItemD {
  isScrolled: boolean
  label: string;
  path: string;
  desc?: string;
  childItems: MenuItem[];
}
