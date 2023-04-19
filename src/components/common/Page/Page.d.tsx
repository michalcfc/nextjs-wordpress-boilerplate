import React from 'react';

type Img = {
  url: string
  width: number
  height: number
  alt: string
};

type OpenGraph = {
  url: string
  title: string
  desc: string
  img: Img[]
};

export interface PageD {
  seoTitle: string
  seoDesc: string
  canonical: string
  pageTitle?: string
  pageSubtitle?: string
  op: OpenGraph

  children: React.ReactNode
  customElement?: React.ReactNode
}
