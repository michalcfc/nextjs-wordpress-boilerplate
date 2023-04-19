// components
import {
  Flex, Icon, Text, VStack,
} from '@chakra-ui/react';

// icons
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

// types
import { ContactDetailsAddressD } from './ContactDetailsAddress.d';

const ContactDetailsAddress = ({
  address,
  phoneNumber,
}: ContactDetailsAddressD) => (
  <VStack
    spacing={3}
    alignItems="flex-start"
    fontSize="1.4rem"
  >
    <Flex alignItems="center">
      <Icon
        as={FaPhoneAlt}
        mr={3}
      />
      <Text>{phoneNumber}</Text>
    </Flex>
    <Flex alignItems="center">
      <Icon
        as={FaMapMarkerAlt}
        mr={3}
      />
      <Text>{address}</Text>
    </Flex>
  </VStack>
);

export default ContactDetailsAddress;
