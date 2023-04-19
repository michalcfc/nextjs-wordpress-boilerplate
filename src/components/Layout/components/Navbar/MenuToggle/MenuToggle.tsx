// components
import { IconButton } from '@chakra-ui/react';

// icons
import { MdClose } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

// types
import { MenuToggleD } from './MenuToggle.d';

const MenuToggle = ({
  toggle, isOpen, isScrolled, isHomePagePath,
}: MenuToggleD) => (
  <IconButton
    p={0}
    variant="ghost"
    aria-label="Open Menu"
    onClick={toggle}
    bg={isScrolled || !isHomePagePath ? 'blackAlpha' : 'lightDark'}
    _hover={{
      color: isScrolled ? 'black' : 'lightDark',
      bg: isScrolled ? 'blackAlpha.100' : 'black',
    }}
    icon={
            isOpen ? (
              <MdClose
                fontSize="24px"
                color={isScrolled ? 'black' : 'white'}
              />
            )
              : (
                <GiHamburgerMenu
                  fontSize="24px"
                  color={isScrolled ? 'black' : 'white'}
                />
              )
        }
  />

);

export default MenuToggle;
