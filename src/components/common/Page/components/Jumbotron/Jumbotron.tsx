import React from 'react';

// components
import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';

// types
import { JumbotronD } from './Jumbotron.d';

const Jumbotron: React.FC<JumbotronD> = ({ title, subtitle }) => (
  <Box
    py={32}
    textAlign="center"
    background="black"
    borderRadius="0px 0px 3rem 3rem"
  >
    <Heading
      as="h2"
      fontSize={48}
      color="white"
    >
      {title}
    </Heading>
    {subtitle && <Text color="muted">{subtitle}</Text>}
  </Box>
);

export default Jumbotron;
