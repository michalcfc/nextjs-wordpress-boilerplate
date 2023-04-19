import React from 'react';

import {
  Box,
  Container,
  Grid,
  useDisclosure,
} from '@chakra-ui/react';
import { HeroD } from './Hero.d';

import {
  HeroLeftAside,
  HeroModal,
  HeroRightAside,
} from './components';

const Hero: React.FC<HeroD> = ({
  img,
  strap,
  title,
  subtitle,
  primary_cta,
  secondary_cta,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        bg="black"
        as="section"
        boxShadow="lg"
        position="relative"
        p={{ base: '120px 0 0 0', lg: '160px 0 0 0' }}
        borderRadius="0px 0px 3rem 3rem"
      >
        <Container
          maxW="8xl"
          zIndex={1}
          position="relative"
          width={{ base: '100%', lg: '90%' }}
        >
          <Grid
            gridRowGap={10}
            gridTemplateColumns={{ base: 'unset', lg: 'repeat(12,minmax(0,1fr))' }}
          >
            <HeroLeftAside
              strap={strap}
              title={title}
              subtitle={subtitle}
              primary_cta={primary_cta}
              secondary_cta={secondary_cta ?? undefined}
            />
            <HeroRightAside
              img={img}
              onOpen={onOpen}
            />
          </Grid>
        </Container>
      </Box>
      {/* <HeroStrap /> */}
      <HeroModal
        name="Promo video"
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default Hero;
