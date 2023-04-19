import {
  Box,
  Flex,
  Icon,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { SectionCard } from '@/components/Sections/components';

// types
import { FeatureD } from './Feature.d';
import { getFeatureIcon } from '@/components/Sections/ExampleSection/components/helpers';

const Feature = ({ id, name, desc }: FeatureD) => (
  <div>
    <SectionCard
      mx={2}
      isShadow
      borderWidth={1}
      borderColor="gray"
    >
      <Flex flexDirection="column">
        <Box
          p={4}
          mb={4}
          w={20}
          h={20}
          bg="brand"
          width="fit-content"
          borderRadius="50% 20% / 10% 40%"
        >
          <Icon
            mb={3}
            fontSize={42}
            as={getFeatureIcon(id)}
          />
        </Box>
        <Text
          mb={4}
          fontSize="xl"
          fontWeight="bold"
        >
          {name}
        </Text>
        <Text color="muted">{desc}</Text>
      </Flex>
    </SectionCard>
  </div>
);

export default Feature;
