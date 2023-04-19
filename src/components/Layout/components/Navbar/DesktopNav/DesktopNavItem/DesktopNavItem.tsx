import Link from 'next/link';
import {
  Box,
  Flex,
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';
import { DesktopSubNavItem } from '../DesktopSubNavItem';

// types
import { DesktopNavItemD } from './DesktopNavItem.d';

// helpers
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';

const DesktopNavItem = ({
  label, path, isScrolled, childItems,
}: DesktopNavItemD) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Popover
        trigger="hover"
        placement="bottom-start"
      >
        <PopoverTrigger>
          <Flex
            py={2}
            as={Link}
            px={3}
            align="center"
            fontWeight="500"
            href={path ?? '#'}
            borderRadius="xl"
            onMouseEnter={onToggle}
            onMouseLeave={onToggle}
            justify="space-between"
            _groupHover={{
              opacity: 0.8,
            }}
            _hover={{
              px: 3,
              borderRadius: 'xl',
              textDecoration: 'none',
              background: isScrolled ? 'blackAlpha.50' : 'whiteAlpha.50',
              color: isScrolled ? 'black' : 'brand',
            }}
          >
            {capitalizeFirstLetter(label ?? '')}
            {childItems?.length !== 0 && (
            <Icon
              h={3}
              w={3}
              ml={1}
              as={FaChevronDown}
              transition="all .25s ease-in-out"
              transform={isOpen ? 'rotate(180deg)' : ''}
            />
            )}
          </Flex>
        </PopoverTrigger>

        {childItems?.length !== 0 && (
        <PopoverContent
          p={4}
          minW="sm"
          border={0}
          bg="white"
          rounded="xl"
          boxShadow="xl"
        >
          <Stack>
            {childItems?.map((childItem, id) => (
              // eslint-disable-next-line react/no-array-index-key
              <DesktopSubNavItem key={id} {...childItem} />
            ))}
          </Stack>
        </PopoverContent>
        )}
      </Popover>
    </Box>
  );
};

export default DesktopNavItem;
