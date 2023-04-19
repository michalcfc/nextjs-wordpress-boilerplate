import { GetStaticPaths } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { Post } from '@/generated/graphql';

// components
import {
  PageWrapper,
} from '@/components/common/Page';

// lib
import {
  getAllPosts,
  getPostBySlug,
} from '@/lib/posts';

interface PostD {
  post: Post
}

const PostPage = ({ post }: PostD) => {
  const { title } = post;

  return (
    <PageWrapper
      pageTitle={title ?? ''}
      seoTitle="About"
      seoDesc="About"
      canonical="https://www.icoding.pl/"
      op={
          {
            url: '/og-image.png',
            title: 'My portfolio',
            desc: 'My portfolio',
            img:
          [
            {
              url: '/og-image.png',
              width: 800,
              height: 420,
              alt: 'my portfolio',
            },
          ],
          }
        }
    >
      sample post
    </PageWrapper>
  );
};

export default PostPage;
PostPage.Layout = 'Main';

export const getStaticProps = async ({ params }: Params) => {
  const { post } = await getPostBySlug(params?.slug);

  console.log(post);

  if (!post) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await getAllPosts();

  // Loop over all posts and create a path for each.
  const paths = posts.map(({ slug }: { slug: string }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};
