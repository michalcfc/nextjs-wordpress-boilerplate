import React from 'react';
import Image from 'next/image';
import {
  Box,
  GridItem,
} from '@chakra-ui/react';

// types
import { HeroRightAsideD } from './HeroRightAside.d';
import { PulseBtn } from '@/components/common/PulseBtn';

const HeroRightAside = ({ img, onOpen }: HeroRightAsideD) => (
  <GridItem
    position="relative"
    gridColumn={{ base: 'span 12', lg: '7/13' }}
  >
    <Box
      width="100%"
      overflow="hidden"
      borderRadius="xl"
      position="relative"
      marginBottom="-50px"
      boxShadow="lg"
      height={{ base: '320px', md: '480px', lg: '520px' }}
    >
      <Box
        top="50%"
        left="50%"
        onClick={onOpen}
        position="absolute"
      >
        <PulseBtn onClick={onOpen} />
      </Box>
      <Image
        fill
        src={img}
        style={{ height: '100%', width: '100%' }}
        objectFit="cover"
        alt="Picture of the author"
      />
    </Box>
  </GridItem>
);

export default HeroRightAside;
