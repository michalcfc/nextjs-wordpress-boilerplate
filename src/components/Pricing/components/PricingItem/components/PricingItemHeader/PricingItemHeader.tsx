// components
import { GridItem, Heading, Text } from '@chakra-ui/react';

// types
import { PricingItemHeaderD } from './PricingItemHeader.d';
import { PricingItemPrice } from '@/components/Pricing/components/PricingItem/components/PricingItemPrice';

const PricingItemHeader = ({ name, desc, price }: PricingItemHeaderD) => (
  <GridItem>
    <Heading as="h2" fontSize={34} mb={3}>
      {name}
    </Heading>
    <Text color="muted" mb={5}>
      {desc}
    </Text>
    <PricingItemPrice price={price} />
  </GridItem>
);

export default PricingItemHeader;
