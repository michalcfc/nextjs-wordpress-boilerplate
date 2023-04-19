import React from 'react';

// components
import { SimpleGrid } from '@chakra-ui/react';
import { OurValuesItem } from '../OurValuesItem';

// types
import { OurValuesD } from './OurValuesList.d';

const OurValues = ({ ourValues }: OurValuesD) => (
  <SimpleGrid
    gap={8}
    columns={{ base: 1, md: 2, lg: 3 }}
  >
    {ourValues.map(({ id, name, desc }) => (
      <OurValuesItem
        key={id}
        id={id}
        name={name}
        desc={desc}
      />
    ))}
  </SimpleGrid>
);

export default OurValues;
