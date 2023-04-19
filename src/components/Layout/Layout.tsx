import Script from 'next/script';

// components
import { Grid } from '@chakra-ui/react';
import { Main } from './components/Main';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// types
import { LayoutD } from './Layout.d';

const Layout = ({ children }: LayoutD) => (
  <>
    <header>
      {process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID && (
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.GOOGLE_TAG_MANAGER_ID}');
          `}
        </Script>
      )}
      {process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
          strategy="afterInteractive"
        />
      )}
    </header>
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

export default Layout;
