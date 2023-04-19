import { GetStaticProps } from 'next';

// lib
import { getPageByUri } from '@/lib/pages';

const Page404 = () => (
  <div>error</div>
);

export default Page404;
Page404.Layout = 'Main';

export const getStaticProps: GetStaticProps = async () => {
  const { page } = await getPageByUri('404-not-found');

  return {
    props: {
      page,
    },
    revalidate: 3600,
  };
};
