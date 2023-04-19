// components
import { Page } from '@/components/common/Page';
// types
import {
  Post,
} from "@/generated/graphql";

// lib
import {
  getAllPosts,
  getPostBySlug
} from "@/lib/posts";

interface PostPageD {
  post: {
    post: Post
  }
}

const ProjectPage = ({ post }: PostPageD) => {


  return (
    <Page
      seoTitle="Project One"
      seoDesc="Project One"
      canonical="https://www.jachimov.pl/"
      op={{
        url: '/og-image.png',
        title: 'My portfolio',
        desc: 'My portfolio',
        img: [
          {
            url: '/og-image.png',
            width: 800,
            height: 420,
            alt: 'my portfolio',
          },
        ],
      }}
    >

    </Page>
  );
};

export default ProjectPage;
ProjectPage.Layout = 'Project';

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlug(params?.slug);

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}

type Posts = {
  post: Post[]
};

export async function getStaticPaths() {
  const { posts } = await getAllPosts();

  const paths = Object.values(posts).map(({ slug }) => ({
    params: {
      slug,
    },
  }));

  return { paths, fallback: 'blocking' };
}
