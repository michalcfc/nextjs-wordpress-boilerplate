import useSWR from 'swr';

// components
import { Container } from '@chakra-ui/react';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import {
  Navigation,
  Pagination,
} from 'swiper';
import { fetcher } from '@/lib/jsonFetcher';
import { ReviewsItem } from './TestimonialsItem';
import { SectionWrapper } from '@/components/Sections/components';

// types
import { DataD } from '@/types/data';

const TestimonialsSection = () => {
  const { data, error } = useSWR<DataD>('/api/staticdata', fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (

    <SectionWrapper
      isBackground
      strap="Opinie"
      title="Co mówią nasi klienci?"
      subtitle="Przeczytaj opinie naszych klientów i przekonaj się, dlaczego warto nam zaufać. Dowiedz się, jak pomogliśmy naszym klientom osiągnąć sukces i zrealizować ich wizję, dzięki profesjonalnemu montażowi filmu."
    >
      <Container
        p={0}
        overflow="hidden"
        maxWidth={{ base: 'md', lg: '5xl', xl: '7xl' }}
      >
        <Swiper
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation
          className="dark-swiper"
          modules={[Navigation, Pagination]}
          breakpoints={{
            320: { slidesPerView: 1.1 },
            1120: { slidesPerView: 2.1 },
          }}
        >
          {data.reviews.map(({
            id, img, name, text, title, company,
          }) => (
            <SwiperSlide
              key={id}
            >
              <ReviewsItem
                key={id}
                img={img}
                name={name}
                text={text}
                title={title}
                company={company}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
