import {
  Box,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';

// types
import { DesktopSubNavItemD } from './DesktopSubNavItem.d';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';

const DesktopSubNavItem = ({ label, path, desc }: DesktopSubNavItemD) => (
  <Link
    p={2}
    href={path ?? ''}
    rounded="md"
    role="group"
    display="block"
    _hover={{
      bg: useColorModeValue('gray.100', 'gray.900'),
      textDecoration: 'none',
    }}
  >
    <Stack
      direction="row"
      align="center"
    >
      <Box>
        <Text
          transition="all .3s ease"
          fontWeight={600}
          color="black"
        >
          {capitalizeFirstLetter(label ?? '')}
        </Text>
        <Text
          fontSize="sm"
          color="muted"
        >
          {desc}
        </Text>
      </Box>
      <Flex
        flex={1}
        opacity={0}
        align="center"
        justify="flex-end"
        transition="all .2s ease"
        transform="translateX(-10px)"
        _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
      >
        <FaChevronRight color="black" />
      </Flex>
    </Stack>
  </Link>
);

export default DesktopSubNavItem;
