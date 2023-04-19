import {
  PageWrapper,
} from '@/components/common/Page';
import { OurValuesSection } from '@/components/Sections/OurValuesSection';
import {
  AboutSection,
  FaqSection,
  NumbersSections,
  ProcessSection,
} from '@/components/Sections';

const About = () => (
  <PageWrapper
    pageTitle="About"
    seoTitle="About"
    seoDesc="About"
    canonical="https://www.icoding.pl/"
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
    <AboutSection />
    <NumbersSections />
    <ProcessSection />
    <OurValuesSection />
    <FaqSection title="Why us?" />
  </PageWrapper>
);

export default About;
About.Layout = 'Main';
