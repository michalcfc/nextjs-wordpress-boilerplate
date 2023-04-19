import { string } from "prop-types";

type Robots = {
  nofollow: string,
  noindex: string
}

type TwitterD = {
  description: string,
  image: string,
  title: string
}

type OpenGraphArticleD = {
  author: string
  modifiedTime: string
  publishedTime: string
  publisher: string
}

type OpenGraphD = {
  author: string
  description: string
  image: string
  modifiedTime: string
  publishedTime: string
  publisher: string
  title: string
  type: string
  url: string
}

export interface PostSeoD {
  metaTitle: string
  metaDescription: string
  readingTime: string
  canonical: string
  article: OpenGraphArticleD
  og: OpenGraphD
  robots: Robots
  twitter: TwitterD
}

export interface PageSeoD {
  metaTitle: string
  metaDescription: string
  readingTime: string
  canonical: string
  og: OpenGraphD
  robots: Robots
  twitter: TwitterD
}

export type QueryIncludeTypes =
  | 'all'
  | 'index'
  | 'archive'

export type QueryIncludeD = {
  queryIncludes: QueryIncludeTypes
}

export type PostByAuthorD = {
  slug: string,
  queryIncludes: QueryIncludeTypes
}

export type PostByCategoryD = {
  categoryId: number,
  queryIncludes: QueryIncludeTypes
}

export type PostByRecentD = {
  count: number,
  queryIncludes: QueryIncludeTypes
}
