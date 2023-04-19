import React from 'react';

// components
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

// types
import { SectionWrapperD } from './SectionWrapper.d';

// utils
import { SIZES } from '@/utils/styles/sizes';
import { SPACING } from '@/utils/styles/spacing';
import { FONT_SIZES } from '@/utils/styles/fontSizes';

const SectionWrapper: React.FC<SectionWrapperD> = ({
  strap,
  title,
  markText,
  subtitle,
  customWidth,
  isBackground,
  children,
  ...rest
}) => (
  <Box
    as="section"
    mt="9.375rem"
    mb="6.25rem"
    position="relative"
    py={`${isBackground ? '6rem' : '0'}`}
    bg={`${isBackground ? 'black' : ''}`}
    {...rest}
  >
    <Container maxW={`${customWidth || '7xl'}`}>
      {strap && (
      <Box
        mb={3}
        textAlign="center"
      >
        <Text
          rounded="md"
          as="span"
          fontSize="sm"
          fontWeight={600}
          color={isBackground ? 'brand' : 'black'}
          textTransform="uppercase"
          position="relative"
          _after={{
            content: "''",
            right: '0',
            left: '-7px',
            opacity: isBackground ? '.2' : '1',
            bottom: '2px',
            width: '22px',
            height: '22px',
            marginLeft: '0',
            borderRadius: '50%',
            position: 'absolute',
            background: '#d4f843',
            transition: 'all .3s ease',
          }}
        >
          {strap}
        </Text>
      </Box>
      )}
      {title && (
      <VStack mb={SPACING['2xl']}>
        <Container maxW="3xl">
          <Heading
            mb={4}
            size="2xl"
            textAlign="center"
            color={isBackground ? 'white' : ''}
          >
            {title}
          </Heading>
        </Container>
        {markText && (
        <Text
          color={isBackground ? 'gray' : ''}
          fontSize="4xl"
          position="relative"
          _after={{
            content: "''",
            width: 'full',
            height: '30%',
            position: 'absolute',
            bottom: 1,
            left: 0,
            bg: 'yellow',
            zIndex: -1,
          }}
        >
          {markText}
        </Text>
        )}
        <Box maxWidth={SIZES['2xl']}>
          <Text
            color={isBackground ? 'lightWhite' : 'muted'}
            fontSize={FONT_SIZES.lg}
            textAlign="center"
          >
            {subtitle}
          </Text>
        </Box>
      </VStack>
      )}
      {children}
    </Container>
  </Box>
);

export default SectionWrapper;
