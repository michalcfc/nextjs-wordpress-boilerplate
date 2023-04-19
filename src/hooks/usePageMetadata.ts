// @ts-nocheck
import { useContext } from 'react';
import { useRouter } from 'next/router';

import { constructPageMetadata } from '@/lib/site';
import { SiteContext } from '@/hooks/useSiteContext';

export default function usePageMetadata({ metadata: pageMetadata }) {
  const { homepage, metadata: defaultMetadata } = useContext(SiteContext);

  const router = useRouter();

  const metadata = constructPageMetadata(defaultMetadata, pageMetadata, {
    homepage,
    router,
  });

  return {
    metadata,
  };
}
