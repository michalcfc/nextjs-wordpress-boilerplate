import useSWR from 'swr';
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
import { fetcher } from '@/utils/jsonFetcher';
import {
  DesktopNav,
  MenuToggle,
  MobileNav,
} from '../Navbar';
import { SendFilesBtn } from '@/components/common/SendFilesBtn';

// utils
import { isHomePage } from '@/utils/isHomePage';

// hooks
import { useScrollHandler } from '@/hooks/useScrollHandler';

// types
import { DataD } from '@/types/data';

const Header = () => {
  const { data, error } = useSWR<DataD>('/api/staticdata', fetcher);
  const menuRef: RefObject<HTMLDivElement> = useRef(null);
  const isHomePagePath = isHomePage();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const isScrolled = useScrollHandler(10);
  useOutsideClick({
    ref: menuRef,
    handler: onClose,
  });

  const isDesktop = useBreakpointValue({ base: false, lg: true });

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

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
                items={data.navItems}
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
          items={data.navItems}
        />
      )}
    </GridItem>
  );
};

export default Header;
