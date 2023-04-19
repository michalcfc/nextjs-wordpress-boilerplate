import client from '@/lib/api';
import { QUERY_ALL_CATEGORIES } from '@/data/categories';

/**
 * mapCategoryData
 */

export function mapCategoryData(category = {}) {
  const data = { ...category };
  return data;
}

/**
 * categoryPathBySlug
 */

export function categoryPathBySlug(slug: string) {
  return `/categories/${slug}`;
}

/**
 * getAllCategories
 */

export async function getAllCategories() {
  const data = await client.query({
    query: QUERY_ALL_CATEGORIES,
  });

  const categories = data?.data.categories.edges.map(({ node = {} }) => node);

  return {
    categories: Array.isArray(categories) && categories.map(mapCategoryData),
  };
}
