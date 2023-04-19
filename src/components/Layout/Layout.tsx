import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';

// components
import { Grid } from '@chakra-ui/react';
import Head from 'next/head';
import { Meta } from './components/Meta';
import { Main } from './components/Main';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GoogleAnalytics } from '@/components/common/GoogleAnalytics';

// types
import { LayoutD } from './Layout.d';
import { PageSeoD } from '@/lib/types';

// hooks
import useSite from '@/hooks/useSiteContext';

const Layout = ({ children }: LayoutD) => {
  const router = useRouter();
  const { asPath } = router;

  const { homepage, metadata = {} } = useSite();

  if (!metadata) {
    (metadata as PageSeoD).og = {
      author: '',
      description: '',
      image: '',
      modifiedTime: '',
      publishedTime: '',
      publisher: '',
      title: '',
      type: '',
      url: '',
    };
  }

  (metadata as PageSeoD).og.url = `${homepage}${asPath}`;

  return (
    <>
      <Head>
        <Meta />
        <GoogleAnalytics />
        <DefaultSeo
          title={`${(metadata as PageSeoD)?.metaTitle}`}
          description="Jachimov"
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://www.jachimov.pl/',
            site_name: 'Jachimov',
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        />
      </Head>
      <Grid
        minHeight="100vh"
        templateAreas={`
                  "header header"
                  "main main"
                  "footer footer"`}
        gridTemplateRows="auto 1fr auto"
      >
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Grid>
    </>
  );
};

export default Layout;
