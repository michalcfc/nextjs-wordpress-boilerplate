// components
import { Box, Heading, Text } from '@chakra-ui/react';

// types
import { ContactDetailsEntryD } from './ContactDetailsEntry.d';

const ContactDetailsEntry = ({ text, title }: ContactDetailsEntryD) => (
  <Box>
    <Heading
      as="h2"
      mb={5}
    >
      {title}
    </Heading>
    <Text>{text}</Text>
  </Box>
);

export default ContactDetailsEntry;
