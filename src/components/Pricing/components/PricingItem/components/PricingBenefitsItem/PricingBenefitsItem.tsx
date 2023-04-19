// components
import { ListIcon, ListItem } from '@chakra-ui/react';
import { HiCheckCircle } from 'react-icons/hi';
import { PricingBenefitsItemD } from './PricingBenefitsItem.d';

const PricingBenefitsItem = ({ name, isRecommended }: PricingBenefitsItemD) => (
  <ListItem color={isRecommended ? 'white' : 'muted'}>
    <ListIcon
      fontSize="xl"
      marginEnd={2}
      as={HiCheckCircle}
      fill={isRecommended ? 'brand' : 'black'}
      color={isRecommended ? 'white' : 'black'}
    />
    {name}
  </ListItem>
);

export default PricingBenefitsItem;
