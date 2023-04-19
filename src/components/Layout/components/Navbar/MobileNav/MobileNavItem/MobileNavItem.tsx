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
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';

const MobileNavItem = ({ label, path, childItems }: MobileNavItemD) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      onClick={childItems && onToggle}
    >
      <Flex
        as={Link}
        href={path ?? '#'}
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
          {capitalizeFirstLetter(label)}
        </Text>
        {childItems?.length !== 0 && (
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
          {childItems?.map(({ path, label }) => (
            <Link
              py={3}
              key={label}
              color="black"
              href={path ?? ''}
            >
              {capitalizeFirstLetter(label ?? '')}
            </Link>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default MobileNavItem;
