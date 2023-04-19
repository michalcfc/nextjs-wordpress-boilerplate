// components

import { Grid } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Header } from '@/components/Layout/components/Header';
import { Main } from '@/components/Layout/components/Main';
import { Footer } from '@/components/Layout/components/Footer';

// types
import { MainLayoutD } from './MainLayout.d';
import { Meta } from '@/components/Layout/components/Meta';
import { GoogleAnalytics } from '@/components/common/GoogleAnalytics';
import { PageSeoD } from '@/lib/types';
import useSite from '@/hooks/useSiteContext';

const MainLayout = ({ children }: MainLayoutD) => {
  const router = useRouter();
  const { asPath } = router;

  const {
    homepage, metadata,
  } = useSite();

  if (!metadata.og) {
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
          title={`${(metadata as PageSeoD).metaTitle}`}
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

export default MainLayout;
