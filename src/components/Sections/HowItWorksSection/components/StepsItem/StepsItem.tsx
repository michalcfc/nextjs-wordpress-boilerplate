import {
  Box,
  Heading,
  Img,
  Text,
} from '@chakra-ui/react';
import { StepCard } from '../StepCard';

// types
import { StepsItemD } from './StepsItem.d';

const StepsItem = ({
  id, img, name, desc,
}: StepsItemD) => (
  <StepCard id={id}>
    <Box margin="auto">
      <Img
        src={img}
        maxWidth="160px"
      />
    </Box>
    <Box py={3}>
      <Heading
        as="h2"
        mb={3}
        size="md"
        flexWrap="wrap"
        fontSize={22}
        fontWeight={600}
      >
        {name}
      </Heading>
      <Text>{desc}</Text>
    </Box>
  </StepCard>
);

export default StepsItem;
