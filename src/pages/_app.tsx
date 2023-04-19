import NextApp, { AppContext } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/index.scss';

// seo
import theme from '../theme';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// components
import { Layouts } from '@/components/common/Layouts';

// types
import { MyAppProps } from '@/components/common/Layouts/Layout.d';

// hooks
import {
  SiteContext,
  useSiteContext,
} from '@/hooks/useSiteContext';

// lib
import { getAllMenus } from '@/lib/menus';
import { getSiteMetadata } from '@/lib/site';

const MyApp = ({
  Component, pageProps, metadata, menus,
}: MyAppProps) => {
  const Layout = Layouts[Component.Layout] ?? ((page) => page);

  const site = useSiteContext({
    menus,
    metadata,
  });

  return (
    <SiteContext.Provider value={site}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SiteContext.Provider>
  );
};

MyApp.getInitialProps = async function (appContext: AppContext) {
  const appProps = await NextApp.getInitialProps(appContext);

  const { menus } = await getAllMenus();

  return {
    ...appProps,
    menus,
    metadata: await getSiteMetadata(),
  };
};

export default MyApp;
