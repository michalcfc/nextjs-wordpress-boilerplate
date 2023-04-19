import useSWR from 'swr';
import {
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import { fetcher } from '@/lib/jsonFetcher';

// components
import {
  NumbersItem,
  NumbersText,
} from './components';
import { SectionWrapper } from '../components';

// types
import { DataD } from '@/types/data';

const NumbersSections = () => {
  const { data, error } = useSWR<DataD>('/api/staticdata', fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <SectionWrapper
      bg="brand"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgImage="/img/map.png"
    >
      <Flex
        py={12}
        gap={6}
        alignItems={{ base: 'left', lg: 'center' }}
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <NumbersText
          title="Uzyskaj najlepszy rezultat"
          subtitle="Zapewniamy najlepszą w swojej klasie jakość wideo"
        />
        <SimpleGrid
          flexBasis="70%"
          gap={{ base: 6, lg: 0 }}
          columns={{ base: 1, sm: 2, lg: 4 }}
        >
          {data.numbers.map(({ id, nb, name }) => (
            <NumbersItem
              key={id}
              id={id}
              nb={nb}
              name={name}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </SectionWrapper>
  );
};

export default NumbersSections;
