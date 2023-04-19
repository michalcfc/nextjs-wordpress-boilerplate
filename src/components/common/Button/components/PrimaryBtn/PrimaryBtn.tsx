// components
import { Button } from '@chakra-ui/react';

// types
import { PrimaryBtnD } from './PrimaryBtn.d';

const PrimaryBtn = ({
  as, href, name, icon, ...rest
}: PrimaryBtnD) => (
  <Button
    as={as}
    href={href}
    p="1.4rem"
    size="lg"
    fontSize="md"
    borderRadius="full"
    variant="brandPrimary"
    colorScheme="brand"
    _hover={{
      bg: 'white',
      color: 'black',
      textDecoration: 'none',
    }}
    {...rest}
  >
    {name}
  </Button>
);

export default PrimaryBtn;
