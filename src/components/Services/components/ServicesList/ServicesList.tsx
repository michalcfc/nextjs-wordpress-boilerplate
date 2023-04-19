// components
import { SimpleGrid } from '@chakra-ui/react';
import { ServicesItem } from '../ServicesItem';

// types
import { ServicesListD } from './ServicesList.d';

const ServicesList = ({ services }: ServicesListD) => (
  <SimpleGrid
    gap={8}
    columns={{
      base: 1, md: 2, lg: 3, xl: 3,
    }}
  >
    {services.map(({
      id, img, name, desc,
    }) => (
      <ServicesItem
        key={id}
        id={id}
        img={img}
        name={name}
        desc={desc}
      />
    ))}
  </SimpleGrid>
);

export default ServicesList;
