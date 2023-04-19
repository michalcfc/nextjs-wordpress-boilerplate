// icons
// components
import {
  Box,
  Flex,
  Icon,
  Text,
} from '@chakra-ui/react';

// types
import { NumbersItemD } from './NumbersItem.d';
import { getNumberIcon } from '@/components/Sections/NumbersSections/helpers';

const NumbersItem = ({ id, nb, name }: NumbersItemD) => (
  <Box
    pb={{ base: 3, lg: 0 }}
    justifyContent="center"
    borderBottom={{ base: '1px solid #A1C60A4D', lg: 0 }}
    _last={{
      borderBottom: '0',
    }}
    _notLast={{
      lg: { borderRight: '1px solid #A1C60A4D' },
    }}
  >
    <Flex
      textAlign="center"
      flexDirection="column"
    >
      <Box fontSize="5xl">
        <Icon as={getNumberIcon(id)} />
      </Box>
      <Text
        fontSize={32}
        fontWeight={600}
      >
        {nb}
        +
      </Text>
      <Text fontSize="lg">{name}</Text>
    </Flex>
  </Box>
);

export default NumbersItem;
