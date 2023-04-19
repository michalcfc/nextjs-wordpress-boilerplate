import useSWR from 'swr';
import React from 'react';
import {
  Flex,
  Text,
} from '@chakra-ui/react';
import { fetcher } from '@/lib/jsonFetcher';

// components

// types
import { DataD } from '@/types/data';

const HeroStrap = () => {
  const { data, error } = useSWR<DataD>('/api/staticdata', fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (

    <Flex
      py={4}
      bg="brand"
      gap={14}
      justifyContent="center"
      marginTop="-7rem"
      borderRadius="0 0 .4rem 0"
      position="relative"
      transform="rotate(1deg)"
    >
      {data.slides.map(({ id, name }) => (
        <Text
          key={id}
          fontSize="xl"
          textAlign="center"
          fontWeight="bold"
          textTransform="uppercase"
        >
          {name}
        </Text>
      ))}
    </Flex>
  );
};

export default HeroStrap;
