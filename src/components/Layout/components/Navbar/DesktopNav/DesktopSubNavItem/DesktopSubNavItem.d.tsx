import { MenuItem } from '@/generated/graphql';

export interface DesktopSubNavItemD {
  id?: string
  label?: string | null
  path?: string | null
  desc?: string | undefined
  children?: MenuItem[] | undefined
}
