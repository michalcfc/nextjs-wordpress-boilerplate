// components
import {
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

// types
import { NumbersTextD } from './NumbersText.d';

const NumbersText = ({ title, subtitle }: NumbersTextD) => (
  <Box
    position="relative"
    flexBasis="40%"
    _before={{
      content: "''",
      top: -2,
      right: 0,
      left: 0,
      opacity: 1,
      height: '2px',
      width: '50px',
      marginLeft: '0',
      position: 'absolute',
      background: 'black',
    }}
  >
    <Flex
      flexWrap="wrap"
      flexDirection="column"
    >
      <Heading
        as="h2"
        fontSize={34}
        fontWeight={600}
      >
        {title}
      </Heading>
      <Text
        fontSize={24}
        lineHeight="1.6em"
      >
        {subtitle}
      </Text>
    </Flex>
  </Box>
);

export default NumbersText;
