import React, {
  RefObject,
  useRef,
} from 'react';

// components
import {
  Container,
  GridItem,
  HStack,
  Link,
  useBreakpointValue,
  useDisclosure,
  useOutsideClick,
} from '@chakra-ui/react';
import {
  DesktopNav,
  MenuToggle,
  MobileNav,
} from '../Navbar';
import { SendFilesBtn } from '@/components/common/SendFilesBtn';

// utils
import { isHomePage } from '@/utils/isHomePage';

// hooks
import useSite from '@/hooks/useSiteContext';
import { useScrollHandler } from '@/hooks/useScrollHandler';

// types
import { findMenuByLocation } from '@/lib/menus';
import {
  MenuItem,
  MenuLocationEnum,
} from '@/generated/graphql';

const Header = () => {
  const { menus } = useSite();
  const menuRef: RefObject<HTMLDivElement> = useRef(null);
  const isHomePagePath = isHomePage();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const isScrolled = useScrollHandler(10);
  useOutsideClick({
    ref: menuRef,
    handler: onClose,
  });
  const navigationLocation = MenuLocationEnum.Primary;
  const navigation = findMenuByLocation(menus, navigationLocation) as MenuItem[];

  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <GridItem
      top={0}
      zIndex={99}
      width="100%"
      area="header"
      bg={isScrolled ? 'white' : ''}
      boxShadow={isScrolled ? 'lg' : ''}
      color={isScrolled ? 'black' : 'white'}
      position={isHomePagePath || !isHomePagePath ? 'fixed' : 'relative'}
    >
      <Container
        maxW="8xl"
        height="100%"
      >
        <HStack
          py={5}
          spacing="10"
          justify="space-between"
        >
          <Link href="/">
            <img
              alt="Logo"
              src={`${
                isScrolled
                  ? '/img/logo_dark.png'
                  : '/img/logo.png'
              }`}
            />
          </Link>
          <HStack spacing={8}>
            {isDesktop ? (
              <DesktopNav
                items={navigation}
                isScrolled={isScrolled}
              />
            ) : (
              <MenuToggle
                isOpen={isOpen}
                toggle={onToggle}
                isScrolled={isScrolled}
                isHomePagePath={isHomePagePath}
              />
            )}
            {isDesktop && (
            <SendFilesBtn isSolid={isScrolled} />
            )}
          </HStack>
        </HStack>
      </Container>
      {isOpen && (
        <MobileNav
          ref={menuRef}
          isOpen={isOpen}
          items={navigation}
        />
      )}
    </GridItem>
  );
};

export default Header;
