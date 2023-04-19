// components
import {
  Button,
  VisuallyHidden,
} from '@chakra-ui/react';

// types
import { SocialButtonD } from './SocialButton.d';

const SocialButton = ({ href, label, children }: SocialButtonD) => (
  <Button
    as="a"
    height={12}
    width={12}
    href={href}
    rounded="full"
    bg="lightBlack"
    cursor="pointer"
    target="_blank"
    alignItems="center"
    display="inline-flex"
    justifyContent="center"
    transition="background 0.3s ease"
    _hover={{ color: 'white' }}
  >
    <VisuallyHidden>{label}</VisuallyHidden>
    {children}
  </Button>
);

export default SocialButton;
