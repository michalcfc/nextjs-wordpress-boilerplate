// components
import { Flex } from '@chakra-ui/react';
import { StepsItem } from '../StepsItem';

// types
import { StepsListD } from './StepsList.d';

const StepsList = ({
  steps,
}: StepsListD) => (
  <Flex
    gap={6}
    flexWrap={{ base: 'wrap', lg: 'nowrap' }}
  >
    {steps.map(({
      id, img, name, desc,
    }) => (
      <StepsItem
        key={id}
        id={id}
        img={img}
        name={name}
        desc={desc}
      />
    ))}
  </Flex>
);

export default StepsList;
