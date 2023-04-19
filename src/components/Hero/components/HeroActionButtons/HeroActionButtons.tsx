import React from 'react';
import {
  Box,
  Button,
} from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import { HeroActionButtonsD } from './HeroActionButtons.d';

const HeroActionButtons: React.FC<HeroActionButtonsD> = ({
  primary_cta,
  secondary_cta,
}) => (
  <Box
    display={{ base: 'block', lg: 'flex' }}
    textAlign={{ base: 'center', lg: 'left' }}
    flexDirection={{ base: 'column', md: 'row' }}
  >
    <div>
      <Button
        as="a"
        size="lg"
        href="/upload"
        bg="brand"
        colorScheme="brand"
        borderRadius="full"
        variant="solid"
        rightIcon={<FiArrowRight />}
        color="black"
        _hover={{
          bg: 'white',
          color: 'black',
          textDecoration: 'none',
        }}
      >
        {primary_cta?.name}
      </Button>
    </div>
    {secondary_cta && (
    <Button
      as="a"
      size="lg"
      href="/contact"
      color="white"
      rounded="full"
      variant="outline"
      _hover={{ bg: 'white', color: 'black', textDecoration: 'none' }}
    >
      {secondary_cta?.name}
    </Button>
    )}
  </Box>
);

export default HeroActionButtons;
