import { Stack } from '@chakra-ui/react';
import { DesktopNavItem } from './DesktopNavItem';

// types
import { DesktopNavD } from './DesktopNav.d';

const DesktopNav = ({ items, isScrolled }: DesktopNavD) => (
  <Stack
    role="group"
    direction="row"
  >
    {items.map(({ href, name, children }) => (
      <DesktopNavItem
        key={name}
        href={href}
        name={name}
        isScrolled={isScrolled}
      >
        {children}
      </DesktopNavItem>
    ))}
  </Stack>
);

export default DesktopNav;
