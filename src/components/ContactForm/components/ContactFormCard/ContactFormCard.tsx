import React from 'react';

// components
import {
  Box,
  Heading,
} from '@chakra-ui/react';

// types
import { ContactFormCardD } from './ContactFormCard.d';

const ContactFormCard: React.FC<ContactFormCardD> = ({ title, children }) => (
  <Box
    p={6}
    bg="gray"
    borderRadius="lg"
  >
    <Box
      p={4}
      bg="white"
      borderRadius="lg"
    >
      <Heading
        as="h4"
        size="lg"
        mb={5}
      >
        {title}
      </Heading>
      {children}
    </Box>
  </Box>
);

export default ContactFormCard;
