// components
import { List } from '@chakra-ui/react';
import { PricingBenefitsItem } from '../PricingBenefitsItem';

// types
import { PricingBenefitsD } from './PricingBenefits.d';

const PricingBenefits = ({ benefits, isRecommended }: PricingBenefitsD) => (
  <List spacing={3}>
    {benefits.map(({ name }) => (
      <PricingBenefitsItem name={name} isRecommended={isRecommended} />
    ))}
  </List>
);

export default PricingBenefits;
