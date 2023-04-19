// components
import {
  GridItem,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  PageWrapper,
  PageContent,
} from '@/components/common/Page';
import { ContactForm } from '@/components/ContactForm';
import { ContactDetails } from '@/components/ContactDetails';
import { getPageByUri } from "@/lib/pages";

const Contact = () => (
  <PageWrapper
    pageTitle="Kontakt"
    seoTitle="Kontakt"
    seoDesc="Kontakt"
    canonical="https://www.jachimov.pl/"
    op={{
      url: '/og-image.png',
      title: 'Kontakt',
      desc: 'Kontakt',
      img: [
        {
          url: '/og-image.png',
          width: 800,
          height: 420,
          alt: 'Kontakt',
        },
      ],
    }}
  >
    <PageContent>
      <SimpleGrid
        spacing={14}
        columns={{ base: 1, lg: 2 }}
      >
        <GridItem order={{ base: 2, lg: 1 }}>
          <ContactDetails />
        </GridItem>
        <GridItem order={{ base: 1, lg: 2 }}>
          <ContactForm />
        </GridItem>
      </SimpleGrid>
    </PageContent>
  </PageWrapper>
);

export default Contact;
Contact.Layout = 'Main';

export const getStaticProps = async () => {
  const about = await getPageByUri('/about');

  return {
    props: {
      about,
    },
  };
};
