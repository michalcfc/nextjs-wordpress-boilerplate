// components
import { Box } from '@chakra-ui/react';
import { PricingItemBenefits } from '../PricingBenefits';

// types
import { PricingItemBodyD } from './PricingItemBody.d';

const PricingItemBody = ({ benefits, isRecommended }: PricingItemBodyD) => (
  <Box>
    <PricingItemBenefits isRecommended={isRecommended} benefits={benefits} />
  </Box>
);

export default PricingItemBody;
