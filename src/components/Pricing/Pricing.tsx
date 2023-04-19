import useSWR from 'swr';
import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { fetcher } from '@/lib/jsonFetcher';

// components
import { PricingItem } from './components';

// types
import { DataD } from '@/types/data';

const Pricing = () => {
  const { data, error } = useSWR<DataD>('/api/staticdata', fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spacing={8}
    >
      {data.pricing.map(({
        id, name, desc, price, benefits,
      }) => (
        <PricingItem
          key={id}
          name={name}
          desc={desc}
          price={price}
          benefits={benefits}
          isRecommended={id === 2}
        />
      ))}
    </SimpleGrid>
  );
};

export default Pricing;
