import { Text } from '@chakra-ui/react';

// types
import { ListHeaderD } from './ListHeader.d';

const ListHeader = ({ children }: ListHeaderD) => (
  <Text
    fontWeight="600"
    fontSize="md"
    color="white"
    mb={2}
  >
    {children}
  </Text>
);

export default ListHeader;
