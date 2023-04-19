import NextApp, { AppContext } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/index.scss';

// seo
import { DefaultSeo } from 'next-seo';
import Script from 'next/script';
import theme from '../theme';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// components
import { Layouts } from '@/components/common/Layouts';

// types
import { MyAppProps } from '@/components/common/Layouts/Layout.d';

// lib
import { getAllMenus } from '@/lib/menus';

// hooks
import { SiteContext, useSiteContext } from '@/hooks/useSiteContext';
import { Meta } from '@/components/Layout/components/Meta';

const MyApp = ({ Component, pageProps, menus }: MyAppProps) => {
  const Layout = Layouts[Component.Layout] ?? ((page) => page);

  const site = useSiteContext({
    menus,
  });

  console.log(site);

  return (
    <>
      <Meta />
      <DefaultSeo
        title="Portfolio"
        description="My portfolio"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.url.ie/',
          site_name: 'Portfolio',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <SiteContext.Provider value={site}>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </SiteContext.Provider>
    </>
  );
};

MyApp.getInitialProps = async function (appContext: AppContext) {
  const appProps = await NextApp.getInitialProps(appContext);

  const { menus = [] } = await getAllMenus();

  return {
    ...appProps,
    menus,
  };
};

export default MyApp;
