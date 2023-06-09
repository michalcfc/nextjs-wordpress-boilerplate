// icons
// components
import { Button } from '@chakra-ui/react';

// types
import { SendFilesBtnD } from './SendFilesBtn.d';

const SendFilesBtn = ({ isSolid, ...rest }: SendFilesBtnD) => (
  <Button
    as="a"
    size="lg"
    fontSize="md"
    href="/wyslij-pliki"
    borderRadius="full"
    border={`${isSolid ? '0' : '2px solid white'}`}
    variant={`${isSolid ? 'brandPrimary' : 'outline'}`}
    colorScheme={`${isSolid ? 'brand' : 'gray'}`}
    _hover={{
      bg: `${isSolid ? 'black' : 'brand'}`,
      color: `${isSolid ? 'white' : 'black'}`,
      textDecoration: 'none',
    }}
    {...rest}
  >
    Learn more
  </Button>
);

export default SendFilesBtn;
