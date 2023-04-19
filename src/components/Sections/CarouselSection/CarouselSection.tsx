// components
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import {
  Navigation,
  Pagination,
} from 'swiper';
import { Container } from '@chakra-ui/react';
import useSWR from 'swr';
import { CarouselSectionItem } from './CarouselSectionItem';
import { SectionWrapper } from '@/components/Sections/components';

// data
import { DataD } from '@/types/data';
import { fetcher } from '@/lib/jsonFetcher';

const CarouselSection = () => {
  const { data, error } = useSWR<DataD>('/api/staticdata', fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <SectionWrapper
      title="Zrealizuj swoją wizję"
      subtitle="Oferujemy profesjonalne usługi montażu filmów różnych rodzajów. Nasz zespół to pasjonaci filmu, którzy zawsze szukają innowacyjnych rozwiązań, by Twoja wizja została zrealizowana w sposób wyjątkowy i ciekawy dla odbiorców."
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
          className="mySwiper"
          modules={[Navigation, Pagination]}
          breakpoints={{
            320: { slidesPerView: 1.1 },
            1120: { slidesPerView: 3.1 },
          }}
        >
          {data.examples.map(({
            id, title, desc, img,
          }) => (
            <SwiperSlide key={id}>
              <CarouselSectionItem
                key={id}
                img={img}
                title={title}
                desc={desc}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </SectionWrapper>
  );
};

export default CarouselSection;
