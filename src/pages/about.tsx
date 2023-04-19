import { PageWrapper } from '@/components/common/Page';

import { getPageByUri } from '@/lib/pages';

interface AboutPageD {
  data: {
    page: any
  }
}
const About = ({ data }: AboutPageD) => {

  return (
    <PageWrapper
      pageTitle="O nas"
      seoTitle="O nas"
      seoDesc="O nas"
      canonical="https://www.jachimov.pl/"
      op={{
        url: '/og-image.png',
        title: 'O nas',
        desc: 'O nas',
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
        dangerouslySetInnerHTML={{ __html: data?.page?.content }}
      />
    </PageWrapper>
  );
};

export default About;
About.Layout = 'Main';

export const getStaticProps = async () => {
  const data = await getPageByUri('/about');

  return {
    props: {
      data,
    },
  };
};
