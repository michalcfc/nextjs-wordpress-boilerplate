// components
import { GridItem, Text } from '@chakra-ui/react';

// types
import { PricingPlan } from '../../PricingItem.d';
import { PricingItemPriceD } from './PricingItemPrice.d';

const PricingItemPrice = ({ price }: PricingItemPriceD) => (
  <GridItem mb={5}>
    <Text as="span" fontSize={42} fontWeight={600}>
      {price}
    </Text>
    {price !== PricingPlan.Free && (
      <Text as="span" fontSize={24} fontWeight={600}>
        / month
      </Text>
    )}
  </GridItem>
);

export default PricingItemPrice;
