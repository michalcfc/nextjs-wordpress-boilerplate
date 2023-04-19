// components
import { Flex } from '@chakra-ui/react';
import {
  ContactDetailsAddress,
  ContactDetailsEntry,
  ContactDetailsSocialMedia,
} from '@/components/ContactDetails/components';

const ContactDetails = () => (
  <Flex
    gridGap={10}
    flexDirection="column"
  >
    <ContactDetailsEntry
      title="Masz pytania?"
      text={
                'Gorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
                + ' labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra'
                + ' maecenas accumsan lacus vel facilisis.'
            }
    />
    <ContactDetailsAddress
      address="Poznań"
      phoneNumber="796-573-839"
    />
    <ContactDetailsSocialMedia
      facebookUri="https://www.facebook.com/jachimovpl"
      twitterUri="https://www.facebook.com/jachimovpl"
      linkedinUri="https://www.facebook.com/jachimovpl"
    />
  </Flex>
);

export default ContactDetails;
