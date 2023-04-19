import { Stack } from '@chakra-ui/react';
import { DesktopNavItem } from './DesktopNavItem';

// types
import { DesktopNavD } from './DesktopNav.d';

const DesktopNav = ({ items, isScrolled }: DesktopNavD) => (
  <Stack
    role="group"
    direction="row"
  >
    {items?.map(({
      id, path, label, childItems,
    }) => (
      <DesktopNavItem
        key={id}
        path={path ?? ''}
        label={label ?? ''}
        childItems={Array.isArray(childItems) ? childItems : []}
        isScrolled={isScrolled}
      />
    ))}
  </Stack>
);

export default DesktopNav;
