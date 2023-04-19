import React from 'react';

// components
import {
  Grid,
  Icon,
} from '@chakra-ui/react';

// types
import { SectionCardIconD } from './SectionCardIcon.d';

const SectionCardIcon = ({ icon, color, bg }: SectionCardIconD) => (
  <Grid
    width="3rem"
    height="3rem"
    fontSize="4xl"
    placeItems="center"
    position="relative"
    borderRadius="full"
    bg={bg}
    color={color}
  >
    <Icon
      p={2}
      as={icon}
      fontSize={42}
    />
  </Grid>
);
export default SectionCardIcon;
