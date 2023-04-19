import {
  Collapse,
  Flex,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';

// types
import { MobileNavItemD } from './MobileNavItem.d';

const MobileNavItem = ({ name, href, children }: MobileNavItemD) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      onClick={children && onToggle}
    >
      <Flex
        as={Link}
        href={href ?? '#'}
        align="center"
        px={3}
        justify="space-between"
        _hover={{
          bg: 'gray.100',
          overflow: 'hidden',
          textDecoration: 'none',
        }}
      >
        <Text
          py={2}
          fontWeight={600}
          color="black"
        >
          {name}
        </Text>
        {children && (
        <Icon
          as={FaChevronDown}
          color="black"
          transition="all .25s ease-in-out"
          transform={isOpen ? 'rotate(180deg)' : ''}
        />
        )}
      </Flex>

      <Collapse
        in={isOpen}
        animateOpacity
        style={{ marginTop: '0!important' }}
      >
        <Stack
          pl={4}
          borderLeft={1}
          borderStyle="solid"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align="start"
        >
          {children?.map(({ name, href }) => (
            <Link
              key={name}
              py={3}
              href={href}
              color="black"
            >
              {name}
            </Link>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default MobileNavItem;
