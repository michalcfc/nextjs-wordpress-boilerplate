import client from '@/lib/api';
import { PageSeoD } from './types';
import {
  QUERY_ALL_PAGES,
  QUERY_PAGE_BY_URI,
  QUERY_PAGE_SEO_BY_URI,
} from '../data/pages';
import { Page } from '@/generated/graphql';

/**
 * mapPageData
 */

export function mapPageData(page = {}) {
  const data = { ...page } as Page;

  if (data.featuredImage) {
    // @ts-ignore
    data.featuredImage = data.featuredImage.node;
  }

  if (data.parent) {
    // @ts-ignore
    data.parent = data.parent.node;
  }

  if (data.children?.nodes) {
    // @ts-ignore
    data.children = data.children.edges.map(({ node }) => node);
  }

  return data;
}

/**
 * getAllPages
 */

const allPagesIncludesTypes = {
  all: QUERY_ALL_PAGES,
  index: QUERY_ALL_PAGES,
  archive: QUERY_ALL_PAGES,
};

export interface QueryIncludeProps {
  queryIncludes:
  | 'all'
  | 'index'
  | 'archive'
}

export async function getAllPages(options = {}) {
  const { queryIncludes = 'all' } = options as QueryIncludeProps;

  const data = await client.query({
    query: allPagesIncludesTypes[queryIncludes],
  });

  const pages = data?.data.pages.edges.map(({ node = {} }) => node).map(mapPageData);

  return {
    pages,
  };
}

export async function getPageByUri(uri: string) {
  const apiHost = new URL(process.env.WORDPRESS_GRAPHQL_ENDPOINT!).host;

  let pageData;
  let seoData;

  try {
    pageData = await client.query({
      query: QUERY_PAGE_BY_URI,
      variables: {
        uri,
      },
    });
  } catch (e) {
    console.log(`[pages][getPageByUri] Failed to query page data: ${(e as Error).message}`);
    throw e;
  }

  if (!pageData?.data.page) return { page: undefined };

  const page = [pageData?.data.page]
    .map(mapPageData)[0] as Page & PageSeoD;

  // If the SEO plugin is enabled, look up the data
  // and apply it to the default settings

  if (process.env.WORDPRESS_PLUGIN_SEO) {
    try {
      seoData = await client.query({
        query: QUERY_PAGE_SEO_BY_URI,
        variables: {
          uri,
        },
      });
    } catch (e) {
      console.log(`[pages][getPageByUri] Failed to query SEO plugin: ${(e as Error).message}`);
      console.log('Is the SEO Plugin installed? If not, disable WORDPRESS_PLUGIN_SEO in next.config.js.');
      throw e;
    }

    const { seo = {} } = seoData?.data?.page || {};

    page.metaTitle = seo.title;
    page.metaDescription = seo.metaDesc;
    page.readingTime = seo.readingTime;

    // The SEO plugin by default includes a canonical link, but we don't want to use that
    // because it includes the WordPress host, not the site host. We manage the canonical
    // link along with the other metadata, but explicitly check if there's a custom one
    // in here by looking for the API's host in the provided canonical link

    if (seo.canonical && !seo.canonical.includes(apiHost)) {
      page.canonical = seo.canonical;
    }

    page.og = {
      author: seo.opengraphAuthor,
      description: seo.opengraphDescription,
      image: seo.opengraphImage,
      modifiedTime: seo.opengraphModifiedTime,
      publishedTime: seo.opengraphPublishedTime,
      publisher: seo.opengraphPublisher,
      title: seo.opengraphTitle,
      type: seo.opengraphType,
      url: seo.url ?? '',
    };

    page.robots = {
      nofollow: seo.metaRobotsNofollow,
      noindex: seo.metaRobotsNoindex,
    };

    page.twitter = {
      description: seo.twitterDescription,
      image: seo.twitterImage,
      title: seo.twitterTitle,
    };
  }

  return {
    page,
  };
}

/**
 * getBreadcrumbsByUri
 */

export function getBreadcrumbsByUri(uri: string, pages: Page[]) {
  const breadcrumbs = [];
  const uriSegments = uri.split('/').filter((segment) => segment !== '');

  // We don't want to show the current page in the breadcrumbs, so pop off
  // the last chunk before we start

  uriSegments.pop();

  // Work through each of the segments, popping off the last chunk and finding the related
  // page to gather the metadata for the breadcrumbs

  do {
    const breadcrumb = pages.find((page) => page.uri === `/${uriSegments.join('/')}/`);

    // If the breadcrumb is the active page, we want to pass udefined for the uri to
    // avoid the breadcrumbs being rendered as a link, given it's the current page

    if (breadcrumb) {
      breadcrumbs.push({
        id: breadcrumb.id,
        title: breadcrumb.title,
        uri: breadcrumb.uri,
      });
    }

    uriSegments.pop();
  } while (uriSegments.length > 0);

  // When working through the segments, we're doing so from the lowest child to the parent
  // which means the parent will be at the end of the array. We need to reverse to show
  // the correct order for breadcrumbs

  breadcrumbs.reverse();

  return breadcrumbs;
}
