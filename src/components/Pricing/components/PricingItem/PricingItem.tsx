// components
import { Flex } from '@chakra-ui/react';
import {
  PricingItemBody, PricingItemCard, PricingItemFooter, PricingItemHeader,
} from './components';

// types
import { PricingItemD } from './PricingItem.d';

const PricingItem = ({
  name,
  desc,
  price,
  benefits,
  isRecommended,
}: PricingItemD) => (
  <PricingItemCard isRecommended={isRecommended}>
    <PricingItemHeader name={name} desc={desc} price={price} />
    <Flex height="100%" flexDirection="column" justifyContent="space-between">
      <PricingItemBody benefits={benefits} isRecommended={isRecommended} />
      <PricingItemFooter />
    </Flex>
  </PricingItemCard>
);

export default PricingItem;
