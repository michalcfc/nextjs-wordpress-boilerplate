/**
 * postPathBySlug
 */
import {
  QUERY_ALL_POSTS,
  QUERY_ALL_POSTS_ARCHIVE,
  QUERY_ALL_POSTS_INDEX,
  QUERY_POST_BY_SLUG,
  QUERY_POST_SEO_BY_SLUG,
  QUERY_POSTS_BY_AUTHOR_SLUG,
  QUERY_POSTS_BY_AUTHOR_SLUG_ARCHIVE,
  QUERY_POSTS_BY_AUTHOR_SLUG_INDEX,
  QUERY_POSTS_BY_CATEGORY_ID,
  QUERY_POSTS_BY_CATEGORY_ID_ARCHIVE,
  QUERY_POSTS_BY_CATEGORY_ID_INDEX
} from "@/lib/queries/posts";
import client from "@/lib/api";
import { updateUserAvatar } from "@/lib/users";
import { sortObjectsByDate } from "@/lib/datetime";
import {
  Category,
  Post,
  PostToCategoryConnectionEdge,
  User
} from "@/generated/graphql";
import {
  PostByAuthorD,
  PostByCategoryD,
  PostByRecentD,
  PostSeoD,
  QueryIncludeD
} from "@/lib/types";
import { Author } from "next-seo/lib/types";

export function postPathBySlug(slug: string) {
  return `/posts/${slug}`;
}

/**
 * getPostBySlug
 */

export async function getPostBySlug(slug: string) {
  const apiHost = new URL(process.env.WORDPRESS_GRAPHQL_ENDPOINT!).host;

  let postData;
  let seoData;

  try {
    postData = await client.query({
      query: QUERY_POST_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.log(`[posts][getPostBySlug] Failed to query post data: ${(e as Error).message}`);
    throw e;
  }

  if (!postData?.data.post) return { post: undefined };

  const post = [postData?.data.post].map(mapPostData)[0] as Post & PostSeoD;

  // If the SEO plugin is enabled, look up the data
  // and apply it to the default settings

  if (process.env.WORDPRESS_PLUGIN_SEO) {
    try {
      seoData = await client.query({
        query: QUERY_POST_SEO_BY_SLUG,
        variables: {
          slug,
        },
      });
    } catch (e) {
      console.log(`[posts][getPostBySlug] Failed to query SEO plugin: ${(e as Error).message}`);
      console.log('Is the SEO Plugin installed? If not, disable WORDPRESS_PLUGIN_SEO in next.config.js.');
      throw e;
    }

    const { seo = {} } = seoData?.data?.post || {};

    post.metaTitle = seo.title;
    post.metaDescription = seo.metaDesc;
    post.readingTime = seo.readingTime;

    // The SEO plugin by default includes a canonical link, but we don't want to use that
    // because it includes the WordPress host, not the site host. We manage the canonical
    // link along with the other metadata, but explicitly check if there's a custom one
    // in here by looking for the API's host in the provided canonical link

    if (seo.canonical && !seo.canonical.includes(apiHost)) {
      post.canonical = seo.canonical;
    }

    post.og = {
      author: seo.opengraphAuthor,
      description: seo.opengraphDescription,
      image: seo.opengraphImage,
      modifiedTime: seo.opengraphModifiedTime,
      publishedTime: seo.opengraphPublishedTime,
      publisher: seo.opengraphPublisher,
      title: seo.opengraphTitle,
      type: seo.opengraphType,
    };

    post.article = {
      author: post.og.author,
      modifiedTime: post.og.modifiedTime,
      publishedTime: post.og.publishedTime,
      publisher: post.og.publisher,
    };

    post.robots = {
      nofollow: seo.metaRobotsNofollow,
      noindex: seo.metaRobotsNoindex,
    };

    post.twitter = {
      description: seo.twitterDescription,
      image: seo.twitterImage,
      title: seo.twitterTitle,
    };
  }

  return {
    post,
  };
}

/**
 * getAllPosts
 */

const allPostsIncludesTypes = {
  all: QUERY_ALL_POSTS,
  archive: QUERY_ALL_POSTS_ARCHIVE,
  index: QUERY_ALL_POSTS_INDEX,
};

export async function getAllPosts(options = {}) {
  const { queryIncludes = 'index' } = options  as QueryIncludeD;

  const data = await client.query({
    query: allPostsIncludesTypes[queryIncludes],
  });

  const posts = data?.data.posts.edges.map(({ node = {} }) => node);

  return {
    posts: Array.isArray(posts) && posts.map(mapPostData),
  };
}

/**
 * getPostsByAuthorSlug
 */

const postsByAuthorSlugIncludesTypes = {
  all: QUERY_POSTS_BY_AUTHOR_SLUG,
  archive: QUERY_POSTS_BY_AUTHOR_SLUG_ARCHIVE,
  index: QUERY_POSTS_BY_AUTHOR_SLUG_INDEX,
};


export async function getPostsByAuthorSlug({ slug, ...options }: PostByAuthorD) {
  const { queryIncludes = 'index' } = options;

  let postData;

  try {
    postData = await client.query({
      query: postsByAuthorSlugIncludesTypes[queryIncludes],
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.log(`[posts][getPostsByAuthorSlug] Failed to query post data: ${(e as Error).message}`);
    throw e;
  }

  const posts = postData?.data.posts.edges.map(({ node = {} }) => node);

  return {
    posts: Array.isArray(posts) && posts.map(mapPostData),
  };
}

/**
 * getPostsByCategoryId
 */

const postsByCategoryIdIncludesTypes = {
  all: QUERY_POSTS_BY_CATEGORY_ID,
  archive: QUERY_POSTS_BY_CATEGORY_ID_ARCHIVE,
  index: QUERY_POSTS_BY_CATEGORY_ID_INDEX,
};

export async function getPostsByCategoryId({ categoryId, ...options }: PostByCategoryD) {
  const { queryIncludes = 'index' } = options;

  let postData;

  try {
    postData = await client.query({
      query: postsByCategoryIdIncludesTypes[queryIncludes],
      variables: {
        categoryId,
      },
    });
  } catch (e) {
    console.log(`[posts][getPostsByCategoryId] Failed to query post data: ${(e as Error).message}`);
    throw e;
  }

  const posts = postData?.data.posts.edges.map(({ node = {} }) => node);

  return {
    posts: Array.isArray(posts) && posts.map(mapPostData),
  };
}

/**
 * getRecentPosts
 */

export async function getRecentPosts({ count, ...options }: PostByRecentD) {
  const { posts } = await getAllPosts(options);
  const sorted = sortObjectsByDate(posts);
  return {
    posts: sorted.slice(0, count),
  };
}

/**
 * sanitizeExcerpt
 */

export function sanitizeExcerpt(excerpt: any) {
  if (typeof excerpt !== 'string') {
    throw new Error(`Failed to sanitize excerpt: invalid type ${typeof excerpt}`);
  }

  let sanitized = excerpt;

  // If the theme includes [...] as the more indication, clean it up to just ...

  sanitized = sanitized.replace(/\s?\[&hellip;\]/, '&hellip;');

  // If after the above replacement, the ellipsis includes 4 dots, it's
  // the end of a setence

  sanitized = sanitized.replace('....', '.');
  sanitized = sanitized.replace('.&hellip;', '.');

  // If the theme is including a "Continue..." link, remove it

  sanitized = sanitized.replace(/\w*<a class="more-link".*<\/a>/, '');

  return sanitized;
}

/**
 * mapPostData
 */

export function mapPostData(post = {}) {
  const data = { ...post }  as Post extends User;

  // Clean up the author object to avoid someone having to look an extra
  // level deeper into the node

  if (data.author) {
    data.author = {
      ...data.author.node,
    }
  }

  // The URL by default that comes from Gravatar / WordPress is not a secure
  // URL. This ends up redirecting to https, but it gives mixed content warnings
  // as the HTML shows it as http. Replace the url to avoid those warnings
  // and provide a secure URL by default

  if (data.author?.avatar) {
    data.author.avatar = updateUserAvatar(data.author.avatar);
  }

  // Clean up the categories to make them easier to access

  if (data.categories) {
    data.categories = (data.categories.edges.map(({ node }: PostToCategoryConnectionEdge) => {
      return {
        ...node,
      };
    }));
  }

  // Clean up the featured image to make them easier to access

  if (data.featuredImage) {
    data.featuredImage = data.featuredImage.node;
  }

  return data;
}

/**
 * getRelatedPosts
 */

type TestD = {
  postId: number
  category: Category

}
export async function getRelatedPosts(categories: Category[], postId: number, count = 5) {
  if (!Array.isArray(categories) || categories.length === 0) return;

  let related = {
    category: categories && categories.shift(),
  } as Post extends Category;

  if (related.category) {
    const { posts } = await getPostsByCategoryId({
      categoryId: related.category.databaseId,
      queryIncludes: 'archive',
    });

    const filtered = (posts as Post[]).filter(({ postId: id }: { postId: number}) => id !== postId);
    const sorted = sortObjectsByDate(filtered);

    related.posts = sorted.map((post: Post) => ({ title: post.title, slug: post.slug }));
  }

  if (!Array.isArray(related.posts) || related.posts.length === 0) {
    const relatedPosts = await getRelatedPosts(categories, postId, count)
    related = relatedPosts || related;
  }

  if (Array.isArray(related.posts) && related.posts.length > count) {
    return related.posts.slice(0, count);
  }

  return related;
}
