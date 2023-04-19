// components
import { Flex } from '@chakra-ui/react';

// types
import { PricingItemCardD } from './PricingItemCard.d';

const PricingItemCard = ({ isRecommended, children }: PricingItemCardD) => (
  <Flex
    p={8}
    borderRadius="xl"
    flexDirection="column"
    border="1px solid lightGray"
    bg={isRecommended ? 'black' : ''}
    color={isRecommended ? 'white' : ''}
  >
    {children}
  </Flex>
);

export default PricingItemCard;
