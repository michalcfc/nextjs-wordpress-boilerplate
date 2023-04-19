import {
  createContext,
  useContext,
} from 'react';

import config from '../../package.json';

import { removeLastTrailingSlash } from '@/lib/utils';
import { Menu } from '@/generated/graphql';
import { PageSeoD } from '@/lib/types';

export type SiteContextInterface = {
  menus: Menu[]
  homepage?: string
  metadata: PageSeoD
};

export const SiteContext = createContext<SiteContextInterface>(null!);

/**
 * useSiteContext
 */

export function useSiteContext(data: SiteContextInterface) {
  let { homepage = '' } = config as any;

  // Trim the trailing slash from the end of homepage to avoid
  // double // issues throughout the metadata

  homepage = removeLastTrailingSlash(homepage);

  return {
    ...data,
    homepage,
  };
}

/**
 * useSite
 */

export default function useSite() {
  const site = useContext(SiteContext);
  return site;
}
