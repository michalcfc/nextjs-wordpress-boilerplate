import React from 'react';

// components
import {
  Flex,
  Heading,
  Icon,
  Text,
} from '@chakra-ui/react';
import { SectionCard } from '@/components/common/SectionCard';

// utils
import { FONT_SIZES } from '@/utils/styles/fontSizes';
import { FONT_WEIGHTS } from '@/utils/styles/fontWeights';

// types
import { ServicesItemD } from './ServicesItem.d';

// helpers
import { getServiceIcon } from '@/components/Services/helpers';

const ServicesItem = ({
  id, name, desc,
}: ServicesItemD) => (
  <SectionCard
    key={id}
    variant="light"
  >
    <Flex
      gap={3}
      height="100%"
      flexDirection="column"
    >
      <div>
        <Icon
          mb={3}
          fontSize={42}
          as={getServiceIcon(id)}
        />
        <Heading
          as="h5"
          fontSize={FONT_SIZES.lg}
          fontWeight={FONT_WEIGHTS.bold}
        >
          {name}
        </Heading>
      </div>
      <Text
        alignSelf="flex-start"
        color="muted"
      >
        {desc}
      </Text>
      {/* <Flex */}
      {/*  alignItems="center" */}
      {/*  mt="auto" */}
      {/* > */}
      {/*  <Link */}
      {/*    mr={SPACING.xs} */}
      {/*    href="/" */}
      {/*  > */}
      {/*    Learn more */}
      {/*    {' '} */}
      {/*  </Link> */}
      {/*  <FiArrowRight /> */}
      {/* </Flex> */}
    </Flex>
  </SectionCard>
);

export default ServicesItem;
