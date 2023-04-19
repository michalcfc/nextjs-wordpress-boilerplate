import React from 'react';
import {
  GetStaticPaths,
  GetStaticProps,
} from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { PageWrapper } from '@/components/common/Page';
import {
  Page,
  SeoBreadcrumbs,
} from '@/generated/graphql';

import {
  getAllPages,
  getBreadcrumbsByUri,
  getPageByUri,
} from '@/lib/pages';
import { PageSeoD } from '@/lib/types';
import { isCustomPageUri } from '@/utils/isCustomPageUri';

type AboutPageD = {
  page: Page & PageSeoD
  breadcrumbs: SeoBreadcrumbs
};

const SlugPage = ({ page, breadcrumbs }: AboutPageD) => {
  const {
    og,
    title,
    metaTitle,
    metaDescription,
    content,
  } = page;

  console.log(breadcrumbs);

  return (
    <PageWrapper
      pageTitle={`${title}`}
      seoTitle={`${metaTitle}`}
      seoDesc={`${metaDescription}`}
      canonical="https://www.jachimov.pl/"
      op={{
        url: '/og-image.png',
        title: `${og.title}`,
        desc: `${og.description}`,
        img: [
          {
            url: '/og-image.png',
            width: 800,
            height: 420,
            alt: 'O nas',
          },
        ],
      }}
    >
      <div
        className="about"
        dangerouslySetInnerHTML={{ __html: content ?? '' }}
      />
    </PageWrapper>
  );
};

export default SlugPage;
SlugPage.Layout = 'Main';

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const { slug } = params as Params;

  // We can use the URI to look up our page and subsequently its ID, so
  // we can first contruct our URI from the page params

  const pageUri = `/${slug}/`;

  // We only want to apply deeper paths to the URI if we actually have
  // existing children

  const { page } = await getPageByUri(pageUri);

  if (!page) {
    return {
      props: {
        preview,
      },
      notFound: true,
    };
  }

  // In order to show the proper breadcrumbs, we need to find the entire
  // tree of pages. Rather than querying every segment, the query should
  // be cached for all pages, so we can grab that and use it to create
  // our trail

  const { pages } = await getAllPages({
    queryIncludes: 'index',
  });

  const breadcrumbs = getBreadcrumbsByUri(pageUri, pages);

  return {
    props: {
      page,
      breadcrumbs,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { pages } = await getAllPages({
    queryIncludes: 'index',
  });

  const paths = [] as any;

  pages?.filter(({ uri }: { uri: string }) => typeof uri === 'string' && uri !== '/')
    // eslint-disable-next-line array-callback-return
    .map(({ slug }: { slug: string }) => {
      if (!slug && !isCustomPageUri(slug)) {
        paths.push({ params: { slug } });
      }
    });

  return {
    paths,
    fallback: 'blocking',
  };
};
