import React from 'react';
import { NextSeo } from 'next-seo';

// components
import { Jumbotron } from './components';

// types
import { PageD } from './Page.d';

const Page: React.FC<PageD> = ({
  op,
  seoTitle,
  seoDesc,
  canonical,
  pageTitle,
  pageSubtitle,
  customElement,
  children,
}) => (
  <>
    <NextSeo
      title={seoTitle}
      description={seoDesc}
      canonical={canonical}
      openGraph={{
        url: op.url,
        title: op.title,
        description: op.desc,
        images: op.img,
      }}
      twitter={{
        handle: '@portfolio',
        site: '@portfolio',
        cardType: 'summary_large_image',
      }}
    />
    {pageTitle
      ? (
        <Jumbotron
          title={pageTitle}
          subtitle={pageSubtitle}
        />
      ) : customElement}
    {children}
  </>
);

export default Page;
