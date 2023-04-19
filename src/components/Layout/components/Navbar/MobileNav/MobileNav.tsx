// components
import {
  Collapse,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { MobileNavItem } from './MobileNavItem';

// utils
// types
import { MobileNavD } from './MobileNav.d';
import { SendFilesBtn } from '@/components/common/SendFilesBtn';

const MobileNav = React.forwardRef<HTMLDivElement, MobileNavD>((props, ref) => (
  <Collapse
    ref={ref}
    in={props.isOpen}
    animateOpacity
  >
    <Stack
      py={5}
      zIndex={99}
      borderRadius="lg"
      bg={useColorModeValue('white', 'gray.800')}
    >
      {props.items.map(({
        id, label, path, childItems,
      }) => (
        <MobileNavItem
          key={id}
          path={path ?? ''}
          label={label ?? ''}
          childItems={Array.isArray(childItems) ? childItems : []}
        />
      ))}
      <SendFilesBtn isSolid />
    </Stack>
  </Collapse>
));

export default MobileNav;
