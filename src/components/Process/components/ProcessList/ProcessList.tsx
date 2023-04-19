// components
import { SimpleGrid } from '@chakra-ui/react';
import { ProcessItem } from '../ProcessItem';

// types
import { ProcessListD } from './ProcessList.d';

const ProcessList = ({ process }: ProcessListD) => (
  <SimpleGrid
    spacing={8}
    columns={{ base: 1, md: 2, lg: 3 }}
  >
    {process.map(({ id, name, desc }) => (
      <ProcessItem
        key={id}
        id={id}
        name={name}
        desc={desc}
      />
    ))}
  </SimpleGrid>
);

export default ProcessList;
