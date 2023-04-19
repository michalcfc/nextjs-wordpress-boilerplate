import { MenuItem } from '@/generated/graphql';

export interface MobileNavD {
  isOpen: boolean;
  items: MenuItem[];
  ref: HTMLDivElement
}
