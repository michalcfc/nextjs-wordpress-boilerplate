// icons
import { MdFacebook } from 'react-icons/md';
import {
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';

// components
import {
  HStack,
  IconButton,
} from '@chakra-ui/react';

// types
import { ContactDetailsSocialMediaD } from './ContactDetailsSocialMedia.d';

const ContactDetailsSocialMedia = ({
  facebookUri,
  twitterUri,
  linkedinUri,
}: ContactDetailsSocialMediaD) => (
  <HStack spacing={5}>
    {facebookUri && (
    <IconButton
      as="a"
      size="lg"
      isRound
      bg="gray"
      target="_blank"
      variant="ghost"
      href={facebookUri}
      aria-label="facebook"
      icon={<MdFacebook size="22px" />}
      _hover={{ cursor: 'pointer', bg: 'brand' }}
    />
    )}
    {twitterUri && (
    <IconButton
      as="a"
      size="lg"
      isRound
      bg="gray"
      target="_blank"
      href={twitterUri}
      variant="ghost"
      aria-label="twitter"
      icon={<BsTwitter size="22px" />}
      _hover={{ cursor: 'pointer', bg: 'brand' }}
    />
    )}
    {linkedinUri && (
    <IconButton
      as="a"
      isRound
      size="lg"
      bg="gray"
      target="_blank"
      variant="ghost"
      href={linkedinUri}
      aria-label="linkedIn"
      icon={<BsLinkedin size="22px" />}
      _hover={{ cursor: 'pointer', bg: 'brand' }}
    />
    )}
  </HStack>
);

export default ContactDetailsSocialMedia;
